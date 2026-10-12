XC OP REPORT GENERATOR — INSTALLABLE OFFLINE PWA

This update improves first-run offline caching. The service worker waits for every required app-shell file to download and cache before installation completes, uses a versioned cache, updates the app shell when online, and serves the cached page when offline.

HOSTING REQUIREMENT
Extract the ZIP and host all files together at the same HTTPS URL (localhost is suitable for development). Opening index.html directly from a ZIP or file:// path does not support service workers or PWA installation.

FIRST INSTALL AND OFFLINE SETUP
1. Publish all files and folders from this ZIP to your HTTPS web host, preserving the assets folder.
2. On the device, open the app URL while online in a supported browser. Keep the page open until it has finished loading.
3. Install it: iPhone/iPad: Safari Share > Add to Home Screen. Android/desktop: choose Install App or the browser menu > Install app.
4. Open the installed app once while still online. Wait for the page to finish loading, then close and reopen it.
5. Test by enabling Airplane Mode and launching the installed app. The app interface, form, icons and local draft/archive functions should work offline.

IMPORTANT UPDATE NOTE
The browser must download the updated sw.js at least once online. If the app was previously installed from an older package, open the hosted URL online, refresh it, and allow a few seconds for the new service worker to install/activate before testing offline. If needed, fully close and reopen the app.

DATA
Drafts and archived reports are stored locally in that browser on that device and are not automatically backed up or synced. Follow company rules for operational and personal data.


MOBILE LAYOUT UPDATE
The interface is optimised for small screens, including single-column form fields, 44px touch targets, responsive action buttons, iOS safe-area spacing, and prevention of input zoom on iPhone. Cache version has been bumped to refresh existing installs. Open the hosted app online once to receive this update, then test in airplane mode.

REPORT GENERATION AND COHERENCE REVIEW
The report generator has been revised to build a continuous factual statement in a consistent witness-statement style, normalise punctuation, retain direct speech in quotation marks, omit empty fields, and preserve the preferred body-worn-video wording when a camera number is supplied. A local coherence check flags missing core details, invalid headcode format, placeholder text, repeated punctuation, unbalanced quotation marks, and potentially conflicting body-worn-video entries. It runs entirely on the device and sends no report details to an external AI service. It is a structure/consistency aid, not a factual verification or replacement for the Train Manager's review.
