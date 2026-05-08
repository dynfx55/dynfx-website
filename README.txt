==========================================
DYNFX WEBSITE — FINAL BUILD
==========================================

Premium automotive detailing studio website for DYNFX, Livonia MI.
Multi-page site with home + three dedicated service pages.


==========================================
WHAT'S IN THIS FOLDER
==========================================

  index.html                       Homepage
  paint-protection-film.html       Dedicated PPF service page
  window-tint.html                 Dedicated Window Tint service page
  ceramic-coatings.html            Dedicated Ceramic Coatings service page
  shared.css                       Shared styles for service pages
  shared.js                        Shared JavaScript for service pages
  sitemap.xml                      Tells search engines about all pages
  robots.txt                       Tells crawlers they're welcome
  README.txt                       This file
  images/                          All photos and logos


==========================================
QUICK DEPLOY — 5 MINUTES TO LIVE
==========================================

1. Sign up at https://app.netlify.com/signup (free, no credit card)

2. Go to https://app.netlify.com/drop

3. Drag this entire folder onto the page (drag the folder, don't zip it)

4. Netlify gives you a live URL in 30 seconds

5. Site dashboard → Site configuration → Change site name → choose
   something like "dynfx" → site becomes dynfx.netlify.app


==========================================
QUOTE FORM — ALREADY CONFIGURED
==========================================

The contact form on the homepage is wired to deliver submissions
to dynfx55@gmail.com via Formspree.

ONE-TIME ACTIVATION (REQUIRED):

After deploying, submit the FIRST quote request on your live site.
Formspree will send a confirmation email to dynfx55@gmail.com asking
you to verify the form. Click the link in that email.

After that one-time confirmation, every form submission arrives in
your inbox automatically.

You can also see all submissions in your Formspree dashboard at:
  https://formspree.io/forms

Free tier handles 50 submissions/month — plenty for a service business.


==========================================
CONNECTING YOUR REAL DOMAIN (e.g., dynfx.co)
==========================================

If you have a domain at GoDaddy:

OPTION A — Easiest (recommended unless you use GoDaddy email):
  1. In Netlify → Domain management → Add a domain → enter dynfx.co
  2. Netlify gives you nameservers (look like dns1.p01.nsone.net etc.)
  3. In GoDaddy → My Products → DNS → Change Nameservers
  4. Choose "Enter my own nameservers" and paste in Netlify's
  5. Save. Done. Wait 1-24 hours.

OPTION B — If you use GoDaddy email and need to keep it:
  1. In Netlify → Domain management → Add a domain → enter dynfx.co
  2. Netlify shows DNS records (an A record + CNAME)
  3. In GoDaddy → DNS, add:
     - Type: A,     Name: @,    Value: 75.2.60.5
     - Type: CNAME, Name: www,  Value: apex-loadbalancer.netlify.com
  4. Delete any existing parked-domain records from GoDaddy
  5. Save. Wait 1-24 hours.

After DNS propagates, Netlify auto-provisions free HTTPS.


==========================================
SEO — POST-LAUNCH SETUP
==========================================

Once your site is live at your real domain:

1. GOOGLE SEARCH CONSOLE
   - search.google.com/search-console
   - Add your domain
   - Verify ownership (Netlify makes this easy via DNS record)
   - Submit sitemap at: https://yourdomain.com/sitemap.xml

2. UPDATE GOOGLE BUSINESS PROFILE
   - Add your new website URL
   - Make sure address, hours, phone match the website exactly

3. BING WEBMASTER TOOLS (optional but easy)
   - bing.com/webmasters

4. FOR ENHANCED SEO LATER:
   - Google Ads conversion tracking can be added to all 4 pages
     when you're ready (just send your conversion ID + label)
   - Google Analytics 4 (GA4) tracking can also be added
     when you have a GA4 measurement ID


==========================================
THE THREE SERVICE PAGES
==========================================

Each service page is built for SEO:

  /paint-protection-film.html
    Targets: "PPF Livonia", "paint protection film Michigan"
    Includes: tier breakdown, FAQ, Schema markup, local focus

  /window-tint.html
    Targets: "window tint Livonia", "ceramic tint Michigan"
    Includes: tier breakdown, FAQ, MI tint law info, Schema markup

  /ceramic-coatings.html
    Targets: "ceramic coating Livonia", "9H coating Michigan"
    Includes: tier breakdown, paint correction info, FAQ, Schema markup

All three pages link from the homepage (services section + footer)
and from each other (top nav).


==========================================
EDITING THE WEBSITE LATER
==========================================

Open any .html file in a text editor (Notepad, TextEdit, VS Code).

To redeploy after editing:
  Drag the entire folder onto Netlify again. Updates in 30 seconds.

Common edits:
  - Phone number: search for "(313) 301-3342"
  - Address: search for "33801 Schoolcraft"
  - Hours: search for "9:00 AM"
  - FAQ answers: search for "faq-a-inner"
  - Service tier descriptions: search for "tier-desc" or "service-tier-name"


==========================================
TROUBLESHOOTING
==========================================

FORM SUBMISSIONS NOT REACHING YOUR INBOX:

1. CONFIRM THE FORMSPREE FIRST-SUBMISSION CONFIRMATION:
   - Check dynfx55@gmail.com (including spam folder)
   - Look for an email from Formspree asking you to confirm the form
   - Click the confirmation link — one-time security step

2. CHECK THE FORMSPREE DASHBOARD:
   - Log in at https://formspree.io
   - See if submissions are arriving there
   - If they're in Formspree but not your email, check spam or
     verify the recipient email in Formspree's form settings

MAP NOT SHOWING ON LIVE SITE:
  - Confirms your site is at https:// (not file:// locally)
  - Some browsers block iframes on localhost — works fine in production

LOGO DOESN'T APPEAR:
  - Confirm logo-dynfx-transparent.png is in the images/ folder

NEED ANY OTHER HELP — JUST ASK!

