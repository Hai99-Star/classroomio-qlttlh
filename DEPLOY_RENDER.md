# Deploy ClassroomIO on Render Free

This repo includes a `render.yaml` Blueprint for the dynamic ClassroomIO stack:

- `classroomio-dashboard-qlttlh`: SvelteKit dashboard
- `classroomio-api-qlttlh`: Hono API
- `classroomio-supabase-db`: external Supabase Postgres connection
- `classroomio-redis-qlttlh`: Render Redis/Key Value

## Steps

1. Create or choose a Supabase project.
2. Copy the Supabase Postgres connection string. Prefer the Session Pooler URL for Render.
3. Push this repository to your GitHub account.
4. In Render, choose **New > Blueprint**.
5. Select the GitHub repo and let Render read `render.yaml`.
6. When Render asks for the `classroomio-supabase-db` environment group values, set both variables to the same Supabase Postgres URL:

   ```text
   DATABASE_URL=postgresql://...
   PRIVATE_DATABASE_URL=postgresql://...
   ```

7. Create the Blueprint.
8. After the first deploy, open:

   ```text
   https://classroomio-dashboard-qlttlh.onrender.com/login
   ```

## Notes

- Render free web services sleep after inactivity, so the first request can be slow.
- Account, class, course, and score data is stored in Supabase Postgres, not in Render Postgres.
- The Blueprint uses fixed service names. If Render changes a URL because a name is unavailable, update `PUBLIC_SERVER_URL`, `TRUSTED_ORIGINS`, `DASHBOARD_ORIGIN`, `ORIGIN`, `PRIVATE_SERVER_URL`, and the dashboard `PUBLIC_SERVER_URL` Docker build arg to the final Render URLs.
- Optional features such as email, object storage, AI providers, Google OAuth, and custom domains need their own environment variables.
