import os
import json
import time
import re
from http.server import BaseHTTPRequestHandler

# In-memory storage for applications & rate limiting
_APPLICATIONS_CACHE = []
_RATE_LIMIT_CACHE = {}
RATE_LIMIT_WINDOW = 600
RATE_LIMIT_MAX_REQUESTS = 10
RATE_LIMIT_COOLDOWN = 15

# Applications storage (No mock seeds: only genuine candidate applications)
DEFAULT_SEED = []

def check_rate_limit(client_ip):
    now = time.time()
    if client_ip in _RATE_LIMIT_CACHE:
        _RATE_LIMIT_CACHE[client_ip] = [t for t in _RATE_LIMIT_CACHE[client_ip] if now - t < RATE_LIMIT_WINDOW]
    else:
        _RATE_LIMIT_CACHE[client_ip] = []

    history = _RATE_LIMIT_CACHE[client_ip]
    if history:
        if now - history[-1] < RATE_LIMIT_COOLDOWN:
            return False, "Please wait a moment before submitting another application."
        if len(history) >= RATE_LIMIT_MAX_REQUESTS:
            return False, "Rate limit reached. Please try again later."

    _RATE_LIMIT_CACHE[client_ip].append(now)
    return True, ""

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Allow HR dashboard to fetch current list of applications
        auth_header = self.headers.get('Authorization', '')
        hr_secret = os.environ.get('HR_PASSWORD', 'velox2026')

        if auth_header != f"Bearer {hr_secret}":
            self._send_json(401, {"error": "unauthorized", "message": "Invalid HR authorization."})
            return

        applications = DEFAULT_SEED + _APPLICATIONS_CACHE
        self._send_json(200, {"status": "success", "applications": applications})

    def do_POST(self):
        client_ip = self.headers.get('x-forwarded-for', self.client_address[0]).split(',')[0].strip()

        # 1. Rate Limiting
        allowed, msg = check_rate_limit(client_ip)
        if not allowed:
            self._send_json(429, {"error": "rate_limited", "message": msg})
            return

        # 2. Parse JSON
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
        except Exception:
            self._send_json(400, {"error": "invalid_payload", "message": "Invalid JSON format."})
            return

        # 3. Honeypot check (Spam Protection)
        if data.get('hp_field', '').strip():
            self._send_json(400, {"error": "spam_detected", "message": "Spam detected."})
            return

        # 4. Required Field Validation
        full_name = data.get('full_name', '').strip()
        email = data.get('email', '').strip().lower()
        phone = data.get('phone', '').strip()
        university_id = data.get('university_id', '').strip()
        faculty = data.get('faculty', '').strip()
        academic_year = data.get('academic_year', '').strip()
        subteam_first = data.get('subteam_first', '').strip()
        subteam_second = data.get('subteam_second', '').strip()
        statement = data.get('statement', '').strip()

        if not all([full_name, email, phone, university_id, faculty, academic_year, subteam_first, subteam_second, statement]):
            self._send_json(400, {"error": "missing_fields", "message": "Please fill in all required fields."})
            return

        if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
            self._send_json(400, {"error": "invalid_email", "message": "Please enter a valid email address."})
            return

        # 5. Check Duplicate Email
        existing_emails = [a['email'].lower() for a in (DEFAULT_SEED + _APPLICATIONS_CACHE)]
        if email in existing_emails:
            self._send_json(409, {
                "error": "duplicate_email",
                "message": "An application with this email address has already been submitted."
            })
            return

        # 6. Generate Application Record
        app_id = f"VLX-{int(time.time() * 1000) % 1000000:06d}"
        app_record = {
            "id": app_id,
            "created_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "full_name": full_name,
            "email": email,
            "phone": phone,
            "university_id": university_id,
            "faculty": faculty,
            "academic_year": academic_year,
            "subteam_first": subteam_first,
            "subteam_second": subteam_second,
            "skills": data.get('skills', '').strip(),
            "statement": statement,
            "time_commitment": data.get('time_commitment', '5 to 10 hours'),
            "portfolio_url": data.get('portfolio_url', '').strip(),
            "status": "New",
            "hr_notes": ""
        }

        _APPLICATIONS_CACHE.append(app_record)

        self._send_json(200, {
            "status": "success",
            "id": app_id,
            "application": app_record,
            "message": "Application received and registered successfully."
        })

    def _send_json(self, status, payload):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.end_headers()
