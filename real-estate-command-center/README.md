# Real Estate Broker Command Center

A Next.js 14 App Router starter for a single-broker Goa real-estate workflow. Includes inventory, buyer priority CRM, site-visit rejection pivots, clipboard pitches, Supabase data access and demo fallback.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel; framework preset is Next.js.
3. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `APP_PIN` in Project Settings → Environment Variables.
4. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
5. Deploy.

The app intentionally falls back to seeded demo data if Supabase is missing or queries fail, so build previews can render. Mutations are not persisted in demo mode.

## Local development
```bash
npm install
cp .env.example .env.local
npm run dev
```
Set `APP_PIN` to exactly four digits. If it is unset, the app is in open preview mode; do not use that configuration for a live deployment.

## Important security note
`APP_PIN` middleware is a lightweight access gate, not user authentication. The cookie is an HTTP-only, SameSite=Strict HMAC-SHA256 token derived from the PIN. This is a lightweight gate, not a substitute for per-user authentication or authorization. Also, the Supabase anon key is public by design; if permissive RLS policies are enabled, anyone can access the data directly. Do not store sensitive client personal data with public anon write policies. For real client records, keep RLS restrictive and move writes behind authenticated server-side authorization (or add Supabase Auth / a private server-only key with strict controls). Add rate limiting to `/api/login` before public production use.

## Included screens
- Overview dashboard and inventory filters
- Inline status updates (Available / In Token / Sold)
- Hot / Warm / Cold buyer grouping
- Visit rejection capture and objection-based alternatives
- Copy WhatsApp pitch
- API routes with validation and graceful Supabase error responses

## Pivot logic
- Road Width: available alternatives with road width strictly greater than the rejected listing and price within buyer budget.
- Price: alternatives 10–20% cheaper than rejected listing, in a configured adjacent locality, within budget. Edit `ADJACENT_LOCALITIES` in `src/components/dashboard.tsx` to reflect your actual service-area geography.
- Zoning/FAR: Settlement zone and `sanad_status = true`, within budget.
- Other reasons currently use the general available-in-budget candidate set. Extend the filters as your business rules become clearer.

## Notes
The starter uses lightweight Tailwind primitives with shadcn-style visual conventions rather than generated shadcn/ui registry components. This avoids registry installation steps and keeps the Vercel deployment simple; replace the primitives with generated shadcn/ui components if you need the full component system.
