# Northline Facilities — Portfolio Website Demo

This is a complete, responsive static website for a **fictional** commercial cleaning and facility-management business. It is a portfolio concept, not a real company's website.

## Files
- `index.html` — page content, sections, FAQ, demo quote form
- `styles.css` — responsive design, colors, layout and illustration
- `script.js` — accessible mobile menu, inline demo-form validation, service preselect, copyright year
- `assets/favicon.svg` — original vector favicon

## Open on your computer
1. Extract the ZIP file.
2. In VS Code, go to **File → Open Folder** and select `northline-facility-demo`.
3. Double-click `index.html` to open it in your browser, or use VS Code's **Live Server** extension if you already have it.
4. Test desktop width and a narrow mobile width.

## Important form behavior
The quotation form **does not send or save submissions**. It validates input with inline error messages, then displays an explicit demo notice and clears fields. Never tell a potential client that this is a live lead-capture system. Before a real client launch, integrate a reliable form backend/service and configure consent, privacy, antispam measures and delivery checks.

## Deploy with GitHub and Cloudflare Pages
1. Create a new GitHub repository, for example `northline-facility-demo`.
2. Push the contents of this folder to the repository **root** (`index.html` should be at the top level).
3. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**. Choose the repository.
4. Choose production branch `main`, build command `exit 0` (or leave build empty when allowed), and build output directory `.` (repository root).
5. Deploy and visit the `*.pages.dev` URL provided by Cloudflare.
6. Test all navigation and form behavior on the live URL.

Official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Before turning this into a paid client site
- Replace the fictional brand, concept banners and illustrative content with client-approved information.
- Add the client's real location and service coverage, contact details, legal/policy pages, and approved imagery.
- Do not invent testimonials, certifications, years of operation, guarantees, or review statistics.
- Connect a real contact form system and test actual delivery, spam handling and privacy requirements.
- Confirm domain and hosting account ownership, support terms, and handover responsibilities.
- Test in major browsers and screen sizes. Review performance and accessibility.

## Customization
- Brand name: search `NORTHLINE` and `Northline` in `index.html`.
- Color palette: adjust variables in the `:root` block at the top of `styles.css`.
- Service cards use `data-service` to preselect the form dropdown; keep values identical to the `<option value>` text.
- Service text: edit the `#services` section in `index.html`.
- Site meta description and page title: top of `index.html`.

No frameworks, paid dependencies, external fonts or remote photo links are required.
