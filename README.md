# Balm of Gilead — RCCG Area Church

A premium, responsive church website foundation for Balm of Gilead, an Area Church within The Redeemed Christian Church of God (RCCG).

## Stack
- Vite-powered static frontend (vanilla JavaScript and CSS)
- Vercel Serverless Functions for private form submissions, public content delivery and administrator operations
- Supabase Postgres + Auth for persistent data and approved administrator access

## Local development
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

## Supabase setup (required for forms and administration)
1. Create a Supabase project controlled by the church.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. In Vercel Project Settings → Environment Variables, add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-side only; never expose this key in browser code).
4. Create approved administrators in Supabase Auth. Then add the user ID to `public.admin_users` with the appropriate role. Public registration is intentionally not provided.
5. Redeploy after adding environment variables.

Without these credentials, forms return a clear not-configured response and the public content lists remain in their honest empty state. They do not pretend to save submissions.

## Content workflow
The `site_content` table supports events, sermons, announcements, ministries, testimonies, house fellowships, leadership, service schedules and gallery entries. Only records with `published = true` appear publicly. The API validates content types and verifies administrator sessions on the server.

Before using the administrator area with multiple roles, review and extend the permissions in `api/admin.js`. In particular, restrict private submission access to the pastoral/super-admin roles required by the church's approved policy.

## Church information still required before public launch
- Exact official spelling of the church name and approved RCCG identity assets
- Church address, verified map location, official phone, email and social accounts
- Sunday and midweek service timetable
- Area Pastor and approved leadership profiles
- Confirmed RCCG Region / Province / Zone / Area hierarchy
- Approved vision, mission, history and doctrinal wording
- Active ministries, local leaders and meeting schedules
- Approved event calendar, sermons, livestream channel and gallery images
- Giving categories, verified payment provider and church-authorised payment destinations
- Data controller/contact, retention policy and final privacy notice

The site deliberately does not invent names, dates, addresses, bank details, testimonies, livestreams or actual church photographs. The worship image used on the homepage is illustrative stock photography and is explicitly labelled for replacement with a church-approved photograph.

## Important security notes
- Service-role credentials are read only by serverless functions.
- Prayer requests and counselling messages are private by default and have no public read endpoint.
- Public testimonial submissions are not published automatically.
- Card details must never be collected or stored by this website. Configure an approved payment provider before enabling giving.
- The admin area has no public sign-up.
- The privacy notice is a draft and requires church review before launch.

## Deployment
The repository is linked to the Vercel project `balm-rccg-official`. Pushes to `main` should trigger a Vercel build through Git integration. Confirm the deployment is READY, then add Supabase environment variables and complete the church's content/identity review before announcing the site publicly.
