import os
import json
import time
import hashlib
import urllib.request
import urllib.parse
from http.server import BaseHTTPRequestHandler

def load_env():
    possible_paths = [
        os.path.join(os.path.dirname(__file__), '..', '.env'),
        os.path.join(os.getcwd(), '.env'),
        os.path.join(os.path.dirname(__file__), '.env')
    ]
    for p in possible_paths:
        if os.path.exists(p):
            try:
                with open(p, 'r', encoding='utf-8') as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith('#') and '=' in line:
                            k, v = line.split('=', 1)
                            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))
            except Exception:
                pass
            break

load_env()

CLOUDINARY_CLOUD_NAME = os.environ.get('CLOUDINARY_CLOUD_NAME', 'dhoqtr0se')
CLOUDINARY_API_KEY = os.environ.get('CLOUDINARY_API_KEY', '136622815234859')
CLOUDINARY_API_SECRET = os.environ.get('CLOUDINARY_API_SECRET', '')

class handler(BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            if content_length <= 0:
                self.send_response(400)
                self._send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Empty request body'}).encode('utf-8'))
                return

            body = self.rfile.read(content_length).decode('utf-8')
            payload = json.loads(body)

            file_data = payload.get('file') or payload.get('image')
            if not file_data:
                self.send_response(400)
                self._send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Missing file or image field in request'}).encode('utf-8'))
                return

            folder = payload.get('folder', 'velox_team_members')
            timestamp = int(time.time())

            # Generate Cloudinary SHA-1 signature
            # Parameters to sign must be alphabetically sorted: folder, timestamp
            to_sign = f"folder={folder}&timestamp={timestamp}{CLOUDINARY_API_SECRET}"
            signature = hashlib.sha1(to_sign.encode('utf-8')).hexdigest()

            upload_payload = urllib.parse.urlencode({
                'file': file_data,
                'timestamp': timestamp,
                'folder': folder,
                'api_key': CLOUDINARY_API_KEY,
                'signature': signature
            }).encode('utf-8')

            cloudinary_url = f"https://api.cloudinary.com/v1_1/{CLOUDINARY_CLOUD_NAME}/image/upload"
            req = urllib.request.Request(cloudinary_url, data=upload_payload)

            with urllib.request.urlopen(req, timeout=30) as resp:
                resp_data = json.loads(resp.read().decode('utf-8'))

            secure_url = resp_data.get('secure_url') or resp_data.get('url')
            public_id = resp_data.get('public_id')

            self.send_response(200)
            self._send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                'status': 'success',
                'url': secure_url,
                'public_id': public_id,
                'cloud_name': CLOUDINARY_CLOUD_NAME
            }).encode('utf-8'))

        except Exception as e:
            self.send_response(500)
            self._send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                'status': 'error',
                'message': str(e)
            }).encode('utf-8'))
