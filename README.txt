XC OP REPORT GENERATOR — INSTALLABLE PWA

This package is prepared as a Progressive Web App (PWA):
- Web app manifest with standalone display and scope
- 192x192 and 512x512 PNG Home Screen icons
- iOS apple-touch-icon metadata
- Install App button where supported by the browser
- Service worker precaches the app and icons for offline launch
- Existing incident form, people details, local draft saving and archive

HOSTING REQUIREMENT:
For installation and service-worker offline support, host the extracted files on an HTTPS web server (localhost is also considered secure for development). Opening index.html directly from a ZIP or file:// path does not support PWA installation.

INSTALL:
iPhone/iPad:
1. Open the hosted app URL in Safari.
2. Tap Share.
3. Choose Add to Home Screen, then Add.

Android / supported desktop browsers:
1. Open the hosted app URL.
2. Select Install App if displayed, or use the browser menu > Install app.

After first load while online, open the installed app once to cache its files for offline use. Test offline operation before relying on it.

DATA:
Drafts and archived reports are saved in browser storage on that device. They are not automatically backed up or synced. Follow company rules for operational and personal data.
