import os
import json
import smtplib
import urllib.parse
import time
import random
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from http.server import BaseHTTPRequestHandler

def generate_invite_code():
    timestamp_hex = f"{int(time.time()):X}"[-4:]
    rand_hex = f"{random.randint(0x1000, 0xFFFF):X}"
    return f"VLX-INV-{timestamp_hex}{rand_hex}"

def build_accepted_email(name, subteam, role, invite_url):
    html = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to VELOX Racing</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060709; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #060709; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #0E1118; border: 1px solid rgba(225, 6, 0, 0.45); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.85);">
          <!-- Top Accent Banner -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #E10600, #F59E0B, #E10600);"></td>
          </tr>
          <!-- Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center; background: radial-gradient(circle at center top, rgba(225, 6, 0, 0.25), transparent 70%);">
              <h1 style="margin: 0 0 6px 0; font-size: 26px; font-weight: 900; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">VELOX RACING</h1>
              <p style="margin: 0; font-size: 12px; color: #E10600; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">ZAGAZIG NATIONAL UNIVERSITY • FORMULA STUDENT</p>
            </td>
          </tr>
          <!-- Main Content -->
          <tr>
            <td style="padding: 24px 36px 36px 36px;">
              <div style="background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.35); border-radius: 8px; padding: 12px 18px; margin-bottom: 24px; text-align: center;">
                <span style="font-size: 13px; font-weight: 800; color: #4ADE80; letter-spacing: 1px; text-transform: uppercase;">
                  🏁 OFFICIAL APPLICATION STATUS: ACCEPTED
                </span>
              </div>

              <h2 style="font-size: 20px; font-weight: 700; margin: 0 0 16px 0; color: #FFFFFF;">
                Dear {name},
              </h2>

              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 16px 0;">
                Congratulations! On behalf of Zagazig National University and the executive leadership of <strong>VELOX Racing</strong>, we are proud to inform you that your application to join our Formula Student championship engineering challenger has been <strong>OFFICIALLY ACCEPTED</strong>.
              </p>

              <!-- Appointment Dossier Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #151922; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; margin: 20px 0; padding: 16px;">
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #94A3B8; text-transform: uppercase; font-weight: 600;">Designated Department / Subteam:</td>
                  <td style="padding: 6px 12px; font-size: 14px; color: #38BDF8; font-weight: 700; text-align: right;">{subteam}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #94A3B8; text-transform: uppercase; font-weight: 600;">Appointed Position:</td>
                  <td style="padding: 6px 12px; font-size: 14px; color: #F59E0B; font-weight: 700; text-align: right;">{role}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 12px; font-size: 12px; color: #94A3B8; text-transform: uppercase; font-weight: 600;">Championship Debut:</td>
                  <td style="padding: 6px 12px; font-size: 14px; color: #FFFFFF; font-weight: 700; text-align: right;">Silverstone Circuit (UK)</td>
                </tr>
              </table>

              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 24px 0;">
                To complete your enlistment into the team, please click the secure link below to access our onboarding portal. You will be able to <strong>set your account password</strong>, upload your profile portrait, and immediately take your official place on our <strong>Team Structure Org Chart</strong> and <strong>Inside Member Portal</strong>.
              </p>

              <!-- Call to Action Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="{invite_url}" target="_blank" style="display: inline-block; background: #E10600; color: #FFFFFF; font-size: 15px; font-weight: 800; text-decoration: none; padding: 14px 32px; border-radius: 8px; box-shadow: 0 6px 20px rgba(225, 6, 0, 0.45); letter-spacing: 0.5px;">
                  Complete Onboarding &amp; Set Password &rarr;
                </a>
              </div>

              <p style="font-size: 12px; line-height: 1.5; color: #94A3B8; margin: 20px 0 0 0; text-align: center; word-break: break-all;">
                If the button above does not work, copy and paste this link into your browser:<br/>
                <a href="{invite_url}" style="color: #38BDF8; text-decoration: underline;">{invite_url}</a>
              </p>

              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 28px 0;" />

              <!-- Sign-off -->
              <p style="font-size: 13px; line-height: 1.5; color: #94A3B8; margin: 0;">
                With motorsport respect,<br/>
                <strong style="color: #FFFFFF;">VELOX Racing Team Directorate</strong><br/>
                Fatima Salman (Team Leader) &bull; Karim Shaprawy (Vice Team Leader)<br/>
                Mohamed Romy (Technical Leader) &bull; Moaaz Elghamry (Managerial Leader &amp; Powertrain Lead)<br/>
                <em>Zagazig National University &mdash; Formula Student</em>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
"""
    return html

def build_rejected_email(name, subteam):
    html = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Application Status — VELOX Racing</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060709; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #060709; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #0E1118; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.85);">
          <tr>
            <td height="4" style="background: #E10600;"></td>
          </tr>
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 900; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">VELOX RACING</h1>
              <p style="margin: 0; font-size: 12px; color: #E10600; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">ZAGAZIG NATIONAL UNIVERSITY • FORMULA STUDENT</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 36px 36px 36px;">
              <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 16px 0; color: #FFFFFF;">
                Dear {name},
              </h2>
              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 16px 0;">
                Thank you for applying to <strong>VELOX Racing</strong> and taking part in our recruitment process for the <strong>{subteam}</strong> subteam.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 16px 0;">
                We received an exceptional number of highly qualified applications for this competitive Formula Student season. Following a rigorous evaluation of technical allocations and team quotas, we regret to inform you that we are unable to offer you a position on the active engineering crew at this time.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 20px 0;">
                We were genuinely impressed by your initiative, academic passion, and commitment. We strongly encourage you to continue developing your engineering skills and invite you to attend our public university workshops and reapply in our upcoming recruitment cycles.
              </p>
              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />
              <p style="font-size: 13px; line-height: 1.5; color: #94A3B8; margin: 0;">
                We wish you every success in your academic and professional endeavors.<br/><br/>
                Sincerely,<br/>
                <strong style="color: #FFFFFF;">VELOX Racing Team Human Resources Directorate</strong><br/>
                <em>Zagazig National University &mdash; Formula Student</em>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
"""
    return html

def build_waitlist_email(name, subteam):
    html = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Application Status: Active Reserve — VELOX Racing</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060709; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #060709; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #0E1118; border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.85);">
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #F59E0B, #E10600);"></td>
          </tr>
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 900; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">VELOX RACING</h1>
              <p style="margin: 0; font-size: 12px; color: #F59E0B; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">ZAGAZIG NATIONAL UNIVERSITY • FORMULA STUDENT</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 36px 36px 36px;">
              <div style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 8px; padding: 12px 18px; margin-bottom: 24px; text-align: center;">
                <span style="font-size: 13px; font-weight: 800; color: #FBBF24; letter-spacing: 1px; text-transform: uppercase;">
                  ⏳ APPLICATION STATUS: ACTIVE RESERVE LIST
                </span>
              </div>
              <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 16px 0; color: #FFFFFF;">
                Dear {name},
              </h2>
              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 16px 0;">
                Thank you for applying to <strong>VELOX Racing</strong> for the <strong>{subteam}</strong> subteam.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 16px 0;">
                Due to current subteam capacity, your application has been placed on our <strong>Active Reserve &amp; Waiting List</strong>. Your application received strong marks from our technical reviewers, and we want to keep your candidacy active as sprint deliverables progress.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #CBD5E1; margin: 0 0 20px 0;">
                Should additional capacity become available following initial onboarding, our Human Resources Directorate and Subteam Leads will reach out directly to offer you a spot on the engineering team.
              </p>
              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />
              <p style="font-size: 13px; line-height: 1.5; color: #94A3B8; margin: 0;">
                Thank you again for your patience and enthusiasm.<br/><br/>
                Best regards,<br/>
                <strong style="color: #FFFFFF;">VELOX Racing Team Human Resources Directorate</strong><br/>
                <em>Zagazig National University &mdash; Formula Student</em>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
"""
    return html

class handler(BaseHTTPRequestHandler):
    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
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

        name = data.get('full_name', '').strip()
        email = data.get('email', '').strip()
        status = data.get('status', '').strip() # 'Accepted', 'Rejected', 'Waitlist'
        subteam = data.get('subteam', 'General Engineering').strip()
        role = data.get('role', 'Team Member').strip()
        base_url = data.get('base_url', 'https://velox-racing.vercel.app').strip().rstrip('/')

        if not email or not status:
            self._send_json(400, {"error": "missing_fields", "message": "Email and status are required."})
            return

        if not name:
            name = "Candidate"

        # Department / Subteam extraction for invite URL
        dept = subteam
        sub = ""
        if "—" in subteam:
            parts = subteam.split("—")
            dept = parts[0].strip()
            sub = parts[1].strip()
        elif "-" in subteam:
            parts = subteam.split("-")
            dept = parts[0].strip()
            sub = parts[1].strip()

        invite_code = generate_invite_code()
        invite_url = (
            f"{base_url}/invite.html?"
            f"code={urllib.parse.quote(invite_code)}&"
            f"name={urllib.parse.quote(name)}&"
            f"email={urllib.parse.quote(email)}&"
            f"dept={urllib.parse.quote(dept)}&"
            f"subteam={urllib.parse.quote(sub)}&"
            f"role={urllib.parse.quote(role)}"
        )

        # Build Email Subject and HTML
        norm_status = status.lower()
        if "accept" in norm_status:
            subject = "🏁 OFFICIAL INVITATION: Welcome to VELOX Racing — Formula Student ZNU"
            html_content = build_accepted_email(name, subteam, role, invite_url)
        elif "reject" in norm_status:
            subject = "VELOX Racing Team — Application Update (Silverstone 2026/2027)"
            html_content = build_rejected_email(name, subteam)
        elif "wait" in norm_status:
            subject = "VELOX Racing Team — Application Status: Active Reserve List"
            html_content = build_waitlist_email(name, subteam)
        else:
            self._send_json(400, {"error": "unsupported_status", "message": f"Unsupported decision status: {status}"})
            return

        # Attempt Email Dispatch via Gmail SMTP
        sender_email = os.environ.get('SMTP_EMAIL', 'velox.racing.znu@gmail.com')
        sender_password = os.environ.get('SMTP_PASSWORD')

        email_dispatched = False
        smtp_note = ""

        if sender_email and sender_password:
            try:
                msg = MIMEMultipart('alternative')
                msg['From'] = f"VELOX Racing Team <{sender_email}>"
                msg['To'] = email
                msg['Subject'] = subject
                msg.attach(MIMEText(html_content, 'html'))

                server = smtplib.SMTP('smtp.gmail.com', 587, timeout=12)
                server.starttls()
                server.login(sender_email, sender_password)
                server.send_message(msg)
                server.quit()
                email_dispatched = True
                smtp_note = "Email successfully sent via Gmail SMTP."
            except Exception as smtp_err:
                smtp_note = f"SMTP error: {str(smtp_err)}"
        else:
            smtp_note = "SMTP_PASSWORD environment variable not set; automated email queued/simulated."

        self._send_json(200, {
            "status": "success",
            "email_dispatched": email_dispatched,
            "smtp_note": smtp_note,
            "invite_code": invite_code,
            "invite_url": invite_url,
            "candidate": {
                "name": name,
                "email": email,
                "status": status,
                "subteam": subteam,
                "role": role
            }
        })
