# Balm of Galid — RCCG Area Church

The official website project for Balm of Galid Area Church, an Area Church within The Redeemed Christian Church of God (RCCG).

## Confirmed church identity

- **Church:** Balm of Galid
- **Denomination:** The Redeemed Christian Church of God (RCCG)
- **Administrative level:** Area Church
- **Area:** Balm of Galid Area
- **Zone:** Alpha Zone
- **Province:** Lagos Province 62
- **Region:** Region 64
- **Area Pastor:** Pastor Ajetunmobi Adegbola
- **Address:** 19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria
- **Brand statement:** Where Healing, Hope, Faith and Restoration Meet.
- **Supporting message:** A Place of Worship. A Family of Faith. A Community of Transformation.
- **Biblical inspiration:** Jeremiah 8:22

## Confirmed service timetable supplied by the church

| Gathering | Schedule |
| --- | --- |
| Sunday Celebration Service | Every Sunday · 8:00 AM |
| Digging Deep (Bible Study) | Every Tuesday · 6:00 PM–7:00 PM |
| Faith Clinic (Prayer Meeting) | Every Thursday · 6:00 PM–7:00 PM |
| Monthly Night Vigil | Every third Friday · from 10:00 PM (end time not supplied) |
| First-Day Monthly Programme | 6:30 AM–7:30 PM · awaiting final confirmation |

The first-day programme is marked pending confirmation on the website. Do not publish an end time or programme name for the night vigil beyond what the church has supplied.

## Stack

- Vite-powered static frontend (vanilla JavaScript and CSS)
- Vercel Serverless Functions for private form submissions, public content delivery and administration
- Supabase Postgres + Auth for persistent data and approved administrator access

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Supabase setup

Forms, the administrator area, content management and audit logging require a Supabase project controlled by the church.

1. Create a Supabase project.
2. Run the current `supabase/schema.sql` in the Supabase SQL editor.
3. In Vercel Project Settings → Environment Variables, set:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` — server-side only; never expose this key in browser code.
4. Create administrator accounts in Supabase Auth.
5. Add each approved Auth user to `public.admin_users` with a role and `active = true`.
6. Redeploy after configuring environment variables.

Example administrator role record:

```sql
insert into public.admin_users (id, role, active)
select id, 'super_admin', true
from auth.users
where email = 'APPROVED-ADMIN-EMAIL';
```

There is no public administrator registration. Without the required environment variables and approved administrator record, the API returns a not-configured or unauthorised response. It does not pretend to save submissions.

## Administrator roles

- `super_admin`: full content, publication approval and authorised pastoral submission access.
- `area_pastor`: approve draft publications and access authorised pastoral submissions; general content editing is not automatically granted.
- `pastoral` / `pastoral_support`: access to private pastoral submissions.
- `content_admin` / `editor`: general public website content management.
- `media_admin`: sermons and gallery records only.
- `event_admin`: event records only.

The server validates permissions on each request. Private prayer and counselling records are not returned to media, event or general content roles. Only `super_admin` and `area_pastor` can approve publication; other authorised content roles save requested publications as drafts for pastoral review. Content edits and deletes, approvals, and pastoral submission status changes are written to `admin_audit_logs`.

## Content workflow

The `site_content` table supports events, sermons, announcements, ministries, testimonies, house fellowships, leadership, service schedules and gallery records. Only records marked `published = true` are exposed by the public content endpoint.

The website includes a role-aware content workspace and a restricted pastoral submissions workspace. The public testimony experience uses an approval workflow; submissions are not published automatically. Published records can appear on their relevant public pages, and the Area Pastor/super administrator has a separate draft-publication approval queue.

## Confirmed information now integrated

- Official name: Balm of Galid
- RCCG Region 64 → Lagos Province 62 → Alpha Zone → Balm of Galid Area
- Area Pastor: Pastor Ajetunmobi Adegbola
- Church address
- Sunday, Tuesday, Thursday and monthly programme information
- Google Maps directions link from the supplied address

## Items still requiring church approval or configuration

- Approved portrait and personal welcome message from the Area Pastor.
- Official church photographs for the homepage, ministries and gallery. Current stock imagery is illustrative only and should be replaced with approved images.
- Verified biographies and photographs for other leaders.
- Approved church history, mission, vision and complete doctrinal statement.
- Confirmation of active ministries, departmental heads and local meeting details.
- Final confirmation of the First-Day Monthly Programme.
- Official phone, email and social accounts.
- Approved event calendar, sermons, media and livestream destination.
- Verified payment provider and church-authorised giving destination.
- House Fellowship locations and leaders.
- Data controller details, retention policy and final privacy notice.

Do not invent leadership biographies, service end times, events, ministry activity, testimonies, bank details, payment links, social accounts or livestream URLs. Retain clearly labelled placeholders until authorised information is supplied.

## Security notes

- Supabase service-role credentials are read only by serverless functions.
- Prayer and counselling submissions are private by default.
- Server-side role checks protect private submissions and content-type management.
- Audit logging requires the current SQL schema to be applied to Supabase.
- Card data must never be collected or stored by this website. Use an approved payment provider and verify payments server-side before enabling giving.
- The privacy notice and Terms of Use remain drafts for church review.
- No fake livestream or fake successful form submission is displayed.

## Deployment

The repository is connected to the Vercel project `balm-rccg-official`. Pushes to `main` trigger Git-based deployments. The Vercel configuration includes an SPA fallback rewrite so direct visits and refreshes on client-side routes resolve to `index.html`. API handlers use ES module exports to match the root `package.json` (`type: module`). Verify the deployment has reached `READY`, configure the Supabase environment variables, apply the SQL schema, and complete the outstanding church review before publicly announcing the website.

Production URL: https://balm-rccg-official.vercel.app


## RCCG emblem attribution

The RCCG emblem image currently referenced by the website is `Rccg_logo.png` by Abolajiadeola via Wikimedia Commons, licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/). The image is used unmodified. This third-party Commons file is a reference asset; replace it with an official RCCG-supplied brand file if the church has an authorised master asset.
