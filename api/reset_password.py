import os
import json
import smtplib
import random
import time
import urllib.parse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from http.server import BaseHTTPRequestHandler
import urllib.request

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

VELOX_LOGO_URL = "https://raw.githubusercontent.com/MoaazGhamry/velox-racing-znu/master/velox.jpeg"
VELOX_WEBSITE_URL = "https://velox-racing-znu.vercel.app"
SUPABASE_URL = os.environ.get('SUPABASE_URL', 'https://mmkeybgkqkoepmyuispa.supabase.co')
SUPABASE_KEY = os.environ.get('SUPABASE_ANON_KEY', 'sb_publishable_bCEY9L5ztgVxQU2BXkXwIA_OqE9o4ga')

def fetch_system_settings():
    try:
        url = f"{SUPABASE_URL}/rest/v1/applications?email=eq.system-settings@velox.internal"
        req = urllib.request.Request(url, headers={
            'apikey': SUPABASE_KEY,
            'Authorization': f'Bearer {SUPABASE_KEY}'
        })
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if data and len(data) > 0 and data[0].get('hr_notes'):
                return json.loads(data[0]['hr_notes'])
    except Exception as e:
        print("fetch_system_settings error:", e)
    return {}

def update_system_settings(settings):
    try:
        url = f"{SUPABASE_URL}/rest/v1/applications?email=eq.system-settings@velox.internal"
        payload = json.dumps({'hr_notes': json.dumps(settings)}).encode('utf-8')
        req = urllib.request.Request(url, data=payload, headers={
            'apikey': SUPABASE_KEY,
            'Authorization': f'Bearer {SUPABASE_KEY}',
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
        }, method='PATCH')
        with urllib.request.urlopen(req, timeout=8) as resp:
            return resp.status in (200, 204)
    except Exception as e:
        print("update_system_settings error:", e)
        return False

def build_reset_email_html(recipient_name, reset_code, reset_link):
    return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset — VELOX Racing</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F172A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F8FAFC;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0B0F17; padding: 40px 14px;">
    <tr>
      <td align="center">
        <table role="presentation" width="540" cellspacing="0" cellpadding="0" style="max-width: 540px; width: 100%; background: #151D2C; border: 1px solid rgba(225, 6, 0, 0.4); border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);">
          <!-- Red Racing Line -->
          <tr>
            <td height="5" style="background: #E10600;"></td>
          </tr>
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 26px 24px 18px 24px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: #151D2C;">
              <a href="{VELOX_WEBSITE_URL}" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="{VELOX_LOGO_URL}" alt="VELOX RACING" width="115" style="display: block; margin: 0 auto 10px auto; max-width: 115px; height: auto; border: 0;" />
              </a>
              <div style="font-size: 11px; font-weight: 800; color: #E10600; letter-spacing: 2px; text-transform: uppercase;">Formula Student &bull; Zagazig National University</div>
            </td>
          </tr>
          <!-- Content Body -->
          <tr>
            <td style="padding: 30px 32px;">
              <div style="text-align: center; margin-bottom: 22px;">
                <span style="display: inline-block; background: rgba(225, 6, 0, 0.15); border: 1px solid rgba(225, 6, 0, 0.4); border-radius: 20px; padding: 5px 16px; font-size: 11px; font-weight: 700; color: #FB7185; letter-spacing: 1px; text-transform: uppercase;">
                  🔐 Password Recovery Request / استعادة كلمة المرور
                </span>
              </div>

              <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 12px 0; color: #FFFFFF; text-align: center;">
                Hello {recipient_name},
              </h2>

              <p style="font-size: 14px; line-height: 1.6; color: #94A3B8; margin: 0 0 20px 0; text-align: center;">
                We received a request to reset the password for your VELOX Racing internal member portal account.<br/>
                تلقينا طلباً لإنشاء كلمة مرور جديدة لحسابك في بوابة الفريق.
              </p>

              <!-- Verification Code Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: rgba(0, 0, 0, 0.45); border: 1px dashed rgba(225, 6, 0, 0.5); border-radius: 10px; margin: 20px 0; padding: 18px 0; text-align: center;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">Your 6-Digit Verification Code / رمز التحقق</div>
                    <div style="font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #FFFFFF; font-family: monospace;">{reset_code}</div>
                    <div style="font-size: 11px; color: #64748B; margin-top: 6px;">Valid for 15 minutes &bull; صالح لمدة 15 دقيقة</div>
                  </td>
                </tr>
              </table>

              <!-- Direct Reset Button -->
              <div style="text-align: center; margin: 26px 0 20px 0;">
                <a href="{reset_link}" target="_blank" style="display: inline-block; background: #E10600; color: #FFFFFF; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 32px; border-radius: 8px; box-shadow: 0 4px 18px rgba(225, 6, 0, 0.45);">
                  Reset Password Now &rarr;
                </a>
              </div>

              <p style="font-size: 12px; line-height: 1.5; color: #64748B; margin: 20px 0 0 0; text-align: center;">
                If you did not request this reset, you can safely ignore this email. Your current password remains active.<br/>
                إذا لم تكن قد طلبت استعادة كلمة المرور، يمكنك تجاهل هذا البريد بأمان.
              </p>

              <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); margin-top: 24px; padding-top: 18px; text-align: center;">
                <p style="font-size: 11px; color: #475569; margin: 0;">
                  VELOX Racing Team &bull; Formula Student &bull; Zagazig National University<br/>
                  <a href="{VELOX_WEBSITE_URL}" style="color: #38BDF8; text-decoration: none;">velox-racing-znu.vercel.app</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""

def build_reset_email_plain(recipient_name, reset_code, reset_link):
    return (
        f"Hello {recipient_name},\n\n"
        f"We received a request to reset your password for the VELOX Racing internal member portal.\n\n"
        f"Your 6-digit verification code: {reset_code}\n\n"
        f"Or click the following link to set your new password directly:\n"
        f"{reset_link}\n\n"
        f"This code is valid for 15 minutes.\n"
        f"If you did not make this request, you can safely ignore this email.\n\n"
        f"Best regards,\n"
        f"VELOX Racing Team\n"
        f"Zagazig National University — Formula Student"
    )

class handler(BaseHTTPRequestHandler):
    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def do_OPTIONS(self):
        self._send_json(200, {"status": "ok"})

    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
        except Exception as e:
            self._send_json(400, {"error": "invalid_json", "message": str(e)})
            return

        action = data.get('action', 'request_code').strip().lower()
        email = data.get('email', '').strip().lower()
        base_url = data.get('base_url', VELOX_WEBSITE_URL).strip().rstrip('/')

        if not email:
            self._send_json(400, {"error": "missing_email", "message": "Email address is required."})
            return

        settings = fetch_system_settings()
        if not settings:
            settings = {
                "recruitment_open": False,
                "admin_password": "admin2026",
                "passwords": {},
                "reset_tokens": {}
            }

        if 'reset_tokens' not in settings:
            settings['reset_tokens'] = {}
        if 'passwords' not in settings:
            settings['passwords'] = {}

        # ---------------- ACTION 1: Request Code / Link ----------------
        if action == 'request_code':
            # Check if email exists in Supabase applications or known leadership
            recipient_name = data.get('name', '').strip()
            if not recipient_name:
                try:
                    # Query Supabase for candidate full_name
                    safe_email = urllib.parse.quote(email)
                    url = f"{SUPABASE_URL}/rest/v1/applications?email=eq.{safe_email}&select=full_name,status"
                    req = urllib.request.Request(url, headers={
                        'apikey': SUPABASE_KEY,
                        'Authorization': f'Bearer {SUPABASE_KEY}'
                    })
                    with urllib.request.urlopen(req, timeout=6) as resp:
                        apps = json.loads(resp.read().decode('utf-8'))
                        if apps and len(apps) > 0 and apps[0].get('full_name'):
                            recipient_name = apps[0]['full_name']
                except Exception:
                    pass

            if not recipient_name:
                recipient_name = email.split('@')[0].capitalize()

            # Generate 6-digit code and token
            code = f"{random.randint(100000, 999999)}"
            token = f"rst_{int(time.time())}_{random.randint(10000, 99999)}"
            expires_at = int(time.time()) + 900  # 15 minutes

            settings['reset_tokens'][email] = {
                "code": code,
                "token": token,
                "expires_at": expires_at,
                "name": recipient_name
            }
            update_system_settings(settings)

            reset_link = f"{base_url}/portal.html?reset_token={token}&email={urllib.parse.quote(email)}"

            # Dispatch via Gmail SMTP
            sender_email = (os.environ.get('SMTP_EMAIL') or 'velox.racing.znu@gmail.com').strip()
            sender_password = (os.environ.get('SMTP_PASSWORD') or 'uwgzzuwcoybcncsl').strip()

            email_sent = False
            smtp_err_msg = ""
            if sender_email and sender_password:
                try:
                    msg = MIMEMultipart('alternative')
                    msg['From'] = f"VELOX Racing Team <{sender_email}>"
                    msg['To'] = email
                    msg['Reply-To'] = sender_email
                    msg['Subject'] = f"Password Reset Code: {code} — VELOX Racing"
                    msg.attach(MIMEText(build_reset_email_plain(recipient_name, code, reset_link), 'plain'))
                    msg.attach(MIMEText(build_reset_email_html(recipient_name, code, reset_link), 'html'))

                    server = smtplib.SMTP('smtp.gmail.com', 587, timeout=12)
                    server.starttls()
                    server.login(sender_email, sender_password)
                    server.send_message(msg)
                    server.quit()
                    email_sent = True
                except Exception as e:
                    smtp_err_msg = str(e)
                    print("Reset password SMTP error:", e)

            self._send_json(200, {
                "status": "success",
                "email": email,
                "email_sent": email_sent,
                "smtp_error": smtp_err_msg,
                "token": token,
                "code": code,
                "message": f"Verification code sent to {email}" if email_sent else "Code generated (SMTP fallback ready)."
            })
            return

        # ---------------- ACTION 2: Verify Code & Reset Password ----------------
        elif action in ('verify_code', 'confirm_reset'):
            code_provided = data.get('code', '').strip()
            token_provided = data.get('token', '').strip()
            new_password = data.get('new_password', '').strip()

            if not new_password or len(new_password) < 4:
                self._send_json(400, {"error": "weak_password", "message": "Password must be at least 4 characters long."})
                return

            saved_record = settings['reset_tokens'].get(email)
            if not saved_record:
                self._send_json(400, {"error": "no_reset_requested", "message": "No active password reset request found for this email. Please request a new code."})
                return

            if int(time.time()) > saved_record.get('expires_at', 0):
                self._send_json(400, {"error": "expired_code", "message": "Reset code has expired. Please request a new one."})
                return

            valid = False
            if code_provided and code_provided == saved_record.get('code'):
                valid = True
            elif token_provided and token_provided == saved_record.get('token'):
                valid = True

            if not valid:
                self._send_json(400, {"error": "invalid_code", "message": "Invalid verification code or token. Please check the code sent to your email."})
                return

            # Save new password into cloud system settings
            settings['passwords'][email] = new_password
            username_key = email.split('@')[0].replace('.', '').replace('-', '').lower()
            settings['passwords'][username_key] = new_password
            if email == 'admin' or email == 'velox.racing.znu@gmail.com':
                settings['admin_password'] = new_password
                settings['passwords']['admin'] = new_password

            # Clear consumed token
            try:
                del settings['reset_tokens'][email]
            except KeyError:
                pass

            update_system_settings(settings)

            self._send_json(200, {
                "status": "success",
                "message": "Password has been successfully updated in cloud database. You can now log in with your new password.",
                "email": email
            })
            return

        else:
            self._send_json(400, {"error": "unknown_action", "message": f"Unknown action: {action}"})
