import os
import json
import smtplib
import urllib.parse
import time
import random
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
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

def generate_invite_code():
    timestamp_hex = f"{int(time.time()):X}"[-4:]
    rand_hex = f"{random.randint(0x1000, 0xFFFF):X}"
    return f"VLX-INV-{timestamp_hex}{rand_hex}"

VELOX_LOGO_URL = "https://raw.githubusercontent.com/MoaazGhamry/velox-racing-znu/master/VeloxLogoWeb.png"
VELOX_INSTAGRAM_URL = "https://www.instagram.com/velox_racing_znu?srtk=MWl2azlianJlZ3J3bg=="
VELOX_FACEBOOK_URL = "https://www.facebook.com/share/19Xcwun8Di/?mibextid=wwXIfr"
VELOX_LINKEDIN_URL = "https://www.linkedin.com/company/velox-racing-team/"
VELOX_WEBSITE_URL = "https://velox-racing-znu.vercel.app"

def build_plain_accepted(name, subteam, role, invite_url):
    return (
        f"Dear {name},\n\n"
        f"Congratulations! We are thrilled to welcome you to VELOX Racing as a {role} on the {subteam} team for our Silverstone 2026 Formula Student campaign.\n\n"
        f"To activate your account and set your portal password, click here:\n"
        f"{invite_url}\n\n"
        f"Follow our journey & stay connected:\n"
        f"• Instagram (Click Here): {VELOX_INSTAGRAM_URL}\n"
        f"• LinkedIn (Click Here):  {VELOX_LINKEDIN_URL}\n"
        f"• Facebook (Click Here):  {VELOX_FACEBOOK_URL}\n\n"
        f"Welcome to the team!\n\n"
        f"Best regards,\n"
        f"VELOX Racing Team\n"
        f"Zagazig National University — Formula Student\n"
        f"velox.racing.znu@gmail.com"
    )

def build_plain_rejected(name, subteam):
    return (
        f"Dear {name},\n\n"
        f"Thank you for your interest in VELOX Racing and for taking the time to apply for the {subteam} team.\n\n"
        f"We received a very high volume of applications this season and, unfortunately, we are unable to offer you a position on the active engineering crew at this time due to strict team quotas.\n\n"
        f"We truly appreciate your passion and encourage you to attend our public university workshops and reapply in future recruitment cycles.\n\n"
        f"Follow our car build and future opportunities:\n"
        f"• Instagram (Click Here): {VELOX_INSTAGRAM_URL}\n"
        f"• LinkedIn (Click Here):  {VELOX_LINKEDIN_URL}\n"
        f"• Facebook (Click Here):  {VELOX_FACEBOOK_URL}\n\n"
        f"We wish you all the best in your studies and future endeavors.\n\n"
        f"Best regards,\n"
        f"VELOX Racing Team\n"
        f"Zagazig National University — Formula Student\n"
        f"velox.racing.znu@gmail.com"
    )

def build_plain_waitlist(name, subteam):
    return (
        f"Dear {name},\n\n"
        f"Thank you for applying to VELOX Racing for the {subteam} team.\n\n"
        f"Due to limited team capacity, your application has been placed on our Active Reserve list for the 2026 season. We were very impressed by your qualifications and will reach out directly if additional spots open up.\n\n"
        f"In the meantime, stay connected with our car build and upcoming workshops:\n"
        f"• Instagram (Click Here): {VELOX_INSTAGRAM_URL}\n"
        f"• LinkedIn (Click Here):  {VELOX_LINKEDIN_URL}\n"
        f"• Facebook (Click Here):  {VELOX_FACEBOOK_URL}\n\n"
        f"Thank you for your enthusiasm and passion for motorsport.\n\n"
        f"Best regards,\n"
        f"VELOX Racing Team\n"
        f"Zagazig National University — Formula Student\n"
        f"velox.racing.znu@gmail.com"
    )

def build_social_section_html():
    return f"""
    <div style="margin: 24px 0 16px 0; padding-top: 18px; border-top: 1px solid #232936; text-align: center;">
      <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 700; color: #8F9CAE; text-transform: uppercase; letter-spacing: 1px;">
        Follow VELOX Racing &bull; Stay Connected
      </p>
      <table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin: 0 auto;">
        <tr>
          <td style="padding: 0 4px;">
            <a href="{VELOX_INSTAGRAM_URL}" target="_blank" style="display: inline-block; background: #1B212D; border: 1px solid #2C3545; color: #E2E8F0; font-size: 11px; font-weight: 600; text-decoration: none; padding: 7px 14px; border-radius: 6px;">
              Instagram &rarr;
            </a>
          </td>
          <td style="padding: 0 4px;">
            <a href="{VELOX_LINKEDIN_URL}" target="_blank" style="display: inline-block; background: #1B212D; border: 1px solid #2C3545; color: #E2E8F0; font-size: 11px; font-weight: 600; text-decoration: none; padding: 7px 14px; border-radius: 6px;">
              LinkedIn &rarr;
            </a>
          </td>
          <td style="padding: 0 4px;">
            <a href="{VELOX_FACEBOOK_URL}" target="_blank" style="display: inline-block; background: #1B212D; border: 1px solid #2C3545; color: #E2E8F0; font-size: 11px; font-weight: 600; text-decoration: none; padding: 7px 14px; border-radius: 6px;">
              Facebook &rarr;
            </a>
          </td>
        </tr>
      </table>
    </div>
    """

def build_accepted_email(name, subteam, role, invite_url):
    social_html = build_social_section_html()
    return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to VELOX Racing!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F1218; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0F1218; padding: 36px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="540" cellspacing="0" cellpadding="0" style="max-width: 540px; width: 100%; background: #161B24; border: 1px solid #252D3C; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.45);">
          <!-- Top Accent Bar -->
          <tr>
            <td height="3" style="background: #E10600;"></td>
          </tr>
          <!-- Header with Logo & Brand -->
          <tr>
            <td style="padding: 24px 24px 14px 24px; text-align: center; border-bottom: 1px solid #202735;">
              <a href="{VELOX_WEBSITE_URL}" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="{VELOX_LOGO_URL}" alt="VELOX RACING" width="68" style="display: block; margin: 0 auto 10px auto; max-width: 68px; height: auto; border: 0;" />
              </a>
              <div style="font-size: 17px; font-weight: 800; letter-spacing: 1.5px; color: #FFFFFF; text-transform: uppercase;">VELOX RACING</div>
              <div style="font-size: 11px; font-weight: 600; color: #E10600; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px;">Formula Student &bull; Zagazig National University</div>
            </td>
          </tr>
          <!-- Content Body -->
          <tr>
            <td style="padding: 24px 28px 24px 28px;">
              <div style="text-align: center; margin-bottom: 18px;">
                <span style="display: inline-block; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.35); border-radius: 20px; padding: 4px 14px; font-size: 11px; font-weight: 700; color: #4ADE80; letter-spacing: 0.8px; text-transform: uppercase;">
                  🏁 Application Status: Accepted
                </span>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; margin: 0 0 12px 0; color: #FFFFFF;">
                Dear {name},
              </h2>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 16px 0;">
                Congratulations! We are pleased to welcome you to <strong>VELOX Racing</strong> as a <strong>{role}</strong> on the <strong>{subteam}</strong> team for our Silverstone 2026 Formula Student campaign.
              </p>

              <!-- Role Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #1C2330; border: 1px solid #283344; border-radius: 8px; margin: 16px 0; padding: 12px 16px;">
                <tr>
                  <td style="font-size: 12.5px; color: #94A3B8;">Role: <strong style="color: #FFFFFF;">{role}</strong></td>
                  <td style="font-size: 12.5px; color: #94A3B8; text-align: right;">Subteam: <strong style="color: #38BDF8;">{subteam}</strong></td>
                </tr>
              </table>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 20px 0;">
                Please click the button below to complete your onboarding, set your member credentials, and access the internal portal:
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 20px 0;">
                <a href="{invite_url}" target="_blank" style="display: inline-block; background: #E10600; color: #FFFFFF; font-size: 13.5px; font-weight: 700; text-decoration: none; padding: 11px 26px; border-radius: 6px; box-shadow: 0 4px 12px rgba(225, 6, 0, 0.35);">
                  Activate Portal Account &rarr;
                </a>
              </div>

              <p style="font-size: 11.5px; line-height: 1.5; color: #8F9CAE; text-align: center; margin: 0 0 16px 0;">
                Direct activation link: <a href="{invite_url}" target="_blank" style="color: #38BDF8; font-weight: 600; text-decoration: underline;">Click Here</a>
              </p>

              {social_html}

              <p style="font-size: 11.5px; line-height: 1.5; color: #8F9CAE; margin: 18px 0 0 0; text-align: center;">
                Best regards,<br/>
                <strong style="color: #E2E8F0;">VELOX Racing Team</strong><br/>
                <em>Zagazig National University &bull; Formula Student</em><br/>
                <a href="{VELOX_WEBSITE_URL}" target="_blank" style="color: #38BDF8; font-weight: 600; text-decoration: none;">velox-racing-znu.vercel.app</a><br/>
                <a href="mailto:velox.racing.znu@gmail.com" style="color: #64748B; text-decoration: none;">velox.racing.znu@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""

def build_rejected_email(name, subteam):
    social_html = build_social_section_html()
    return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Status — VELOX Racing</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F1218; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0F1218; padding: 36px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="540" cellspacing="0" cellpadding="0" style="max-width: 540px; width: 100%; background: #161B24; border: 1px solid #252D3C; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.45);">
          <tr>
            <td height="3" style="background: #64748B;"></td>
          </tr>
          <tr>
            <td style="padding: 24px 24px 14px 24px; text-align: center; border-bottom: 1px solid #202735;">
              <a href="{VELOX_WEBSITE_URL}" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="{VELOX_LOGO_URL}" alt="VELOX RACING" width="68" style="display: block; margin: 0 auto 10px auto; max-width: 68px; height: auto; border: 0;" />
              </a>
              <div style="font-size: 17px; font-weight: 800; letter-spacing: 1.5px; color: #FFFFFF; text-transform: uppercase;">VELOX RACING</div>
              <div style="font-size: 11px; font-weight: 600; color: #94A3B8; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px;">Formula Student &bull; Zagazig National University</div>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 28px 24px 28px;">
              <div style="text-align: center; margin-bottom: 18px;">
                <span style="display: inline-block; background: rgba(148, 163, 184, 0.12); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 20px; padding: 4px 14px; font-size: 11px; font-weight: 700; color: #94A3B8; letter-spacing: 0.8px; text-transform: uppercase;">
                  📋 Application Status: Update
                </span>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; margin: 0 0 12px 0; color: #FFFFFF;">
                Dear {name},
              </h2>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 14px 0;">
                Thank you for your interest in <strong>VELOX Racing</strong> and for applying for the <strong>{subteam}</strong> team.
              </p>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 14px 0;">
                We received a very high volume of applications this season and, unfortunately, we are unable to offer you a position on the active engineering crew at this time due to strict team capacity limits.
              </p>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 14px 0;">
                We truly appreciate your passion and encourage you to attend our public university workshops and reapply in future recruitment cycles.
              </p>

              {social_html}

              <p style="font-size: 11.5px; line-height: 1.5; color: #8F9CAE; margin: 18px 0 0 0; text-align: center;">
                We wish you all the best in your studies and future endeavors.<br/><br/>
                Best regards,<br/>
                <strong style="color: #E2E8F0;">VELOX Racing Team</strong><br/>
                <em>Zagazig National University &bull; Formula Student</em><br/>
                <a href="{VELOX_WEBSITE_URL}" target="_blank" style="color: #38BDF8; font-weight: 600; text-decoration: none;">velox-racing-znu.vercel.app</a><br/>
                <a href="mailto:velox.racing.znu@gmail.com" style="color: #64748B; text-decoration: none;">velox.racing.znu@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""

def build_waitlist_email(name, subteam):
    social_html = build_social_section_html()
    return f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Status — VELOX Racing</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F1218; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0F1218; padding: 36px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="540" cellspacing="0" cellpadding="0" style="max-width: 540px; width: 100%; background: #161B24; border: 1px solid #252D3C; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.45);">
          <tr>
            <td height="3" style="background: #F59E0B;"></td>
          </tr>
          <tr>
            <td style="padding: 24px 24px 14px 24px; text-align: center; border-bottom: 1px solid #202735;">
              <a href="{VELOX_WEBSITE_URL}" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="{VELOX_LOGO_URL}" alt="VELOX RACING" width="68" style="display: block; margin: 0 auto 10px auto; max-width: 68px; height: auto; border: 0;" />
              </a>
              <div style="font-size: 17px; font-weight: 800; letter-spacing: 1.5px; color: #FFFFFF; text-transform: uppercase;">VELOX RACING</div>
              <div style="font-size: 11px; font-weight: 600; color: #F59E0B; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px;">Formula Student &bull; Zagazig National University</div>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 28px 24px 28px;">
              <div style="text-align: center; margin-bottom: 18px;">
                <span style="display: inline-block; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 20px; padding: 4px 14px; font-size: 11px; font-weight: 700; color: #FBBF24; letter-spacing: 0.8px; text-transform: uppercase;">
                  ⏳ Application Status: Active Reserve
                </span>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; margin: 0 0 12px 0; color: #FFFFFF;">
                Dear {name},
              </h2>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 14px 0;">
                Thank you for applying to <strong>VELOX Racing</strong> for the <strong>{subteam}</strong> team.
              </p>

              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 14px 0;">
                Due to limited team capacity, your application has been placed on our <strong>Active Reserve</strong> list for the 2026 season. We were very impressed by your qualifications and will reach out directly if additional spots become available.
              </p>

              {social_html}

              <p style="font-size: 11.5px; line-height: 1.5; color: #8F9CAE; margin: 18px 0 0 0; text-align: center;">
                Best regards,<br/>
                <strong style="color: #E2E8F0;">VELOX Racing Team</strong><br/>
                <em>Zagazig National University &bull; Formula Student</em><br/>
                <a href="{VELOX_WEBSITE_URL}" target="_blank" style="color: #38BDF8; font-weight: 600; text-decoration: none;">velox-racing-znu.vercel.app</a><br/>
                <a href="mailto:velox.racing.znu@gmail.com" style="color: #64748B; text-decoration: none;">velox.racing.znu@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""

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

        # Build Email Subject, HTML, and Plain Text
        norm_status = status.lower()
        if "accept" in norm_status:
            subject = "Welcome to VELOX Racing! 🏁"
            html_content = build_accepted_email(name, subteam, role, invite_url)
            plain_content = build_plain_accepted(name, subteam, role, invite_url)
        elif "reject" in norm_status:
            subject = "VELOX Racing — Application Update"
            html_content = build_rejected_email(name, subteam)
            plain_content = build_plain_rejected(name, subteam)
        elif "wait" in norm_status:
            subject = "VELOX Racing — Application Status Update"
            html_content = build_waitlist_email(name, subteam)
            plain_content = build_plain_waitlist(name, subteam)
        else:
            self._send_json(400, {"error": "unsupported_status", "message": f"Unsupported decision status: {status}"})
            return

        gmail_compose_url = (
            f"https://mail.google.com/mail/?view=cm&fs=1&to={urllib.parse.quote(email)}"
            f"&su={urllib.parse.quote(subject)}"
            f"&body={urllib.parse.quote(plain_content)}"
        )

        # Attempt Email Dispatch via Gmail SMTP
        sender_email = (data.get('smtp_email') or os.environ.get('SMTP_EMAIL') or 'velox.racing.znu@gmail.com').strip()
        sender_password = (data.get('smtp_password') or os.environ.get('SMTP_PASSWORD') or '').strip()

        email_dispatched = False
        smtp_note = ""

        if sender_email and sender_password:
            try:
                msg = MIMEMultipart('alternative')
                msg['From'] = f"VELOX Racing Team <{sender_email}>"
                msg['To'] = email
                msg['Reply-To'] = sender_email
                msg['Subject'] = subject
                msg.attach(MIMEText(plain_content, 'plain'))
                msg.attach(MIMEText(html_content, 'html'))

                server = smtplib.SMTP('smtp.gmail.com', 587, timeout=12)
                server.starttls()
                server.login(sender_email, sender_password)
                server.send_message(msg)
                server.quit()
                email_dispatched = True
                smtp_note = "Email successfully dispatched with official VELOX logo via Gmail SMTP."
            except Exception as smtp_err:
                smtp_note = f"SMTP error: {str(smtp_err)}"
        else:
            smtp_note = "SMTP_PASSWORD not configured; formatted decision letter ready for Gmail dispatch."

        self._send_json(200, {
            "status": "success",
            "email_dispatched": email_dispatched,
            "smtp_note": smtp_note,
            "invite_code": invite_code,
            "invite_url": invite_url,
            "gmail_compose_url": gmail_compose_url,
            "subject": subject,
            "plain_body": plain_content,
            "html_body": html_content,
            "candidate": {
                "name": name,
                "email": email,
                "status": status,
                "subteam": subteam,
                "role": role
            }
        })
