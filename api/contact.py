import os
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            name = data.get('name', 'Guest')
            email = data.get('email', '')
            
            if email:
                # Send Auto-Response Email using Gmail SMTP
                sender_email = os.environ.get('SMTP_EMAIL')
                sender_password = os.environ.get('SMTP_PASSWORD')
                
                if sender_email and sender_password:
                    msg = MIMEMultipart()
                    msg['From'] = f"VELOX Racing Team <{sender_email}>"
                    msg['To'] = email
                    msg['Subject'] = "Transmission Received - VELOX Racing Team"
                    
                    body = f"Hello {name},\n\nWe have received your transmission. Our engineering pit wall will review your message and get back to you shortly.\n\nBest regards,\nVELOX Racing Team ZNU"
                    msg.attach(MIMEText(body, 'plain'))
                    
                    server = smtplib.SMTP('smtp.gmail.com', 587)
                    server.starttls()
                    server.login(sender_email, sender_password)
                    server.send_message(msg)
                    server.quit()

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "success"}).encode())
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())
            
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
