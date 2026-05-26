# Deploy ClassroomIO on Render Free

This repo includes a `render.yaml` Blueprint for the dynamic ClassroomIO stack:

- `classroomio-dashboard-qlttlh`: SvelteKit dashboard
- `classroomio-api-qlttlh`: Hono API
- `classroomio-db-qlttlh`: Render Postgres
- `classroomio-redis-qlttlh`: Render Redis/Key Value

## Steps

1. Push this repository to your GitHub account.
2. In Render, choose **New > Blueprint**.
3. Select the GitHub repo and let Render read `render.yaml`.
4. Create the Blueprint.
5. After the first deploy, open:

   ```text
   https://classroomio-dashboard-qlttlh.onrender.com/login
   ```

## Notes

- Render free web services sleep after inactivity, so the first request can be slow.
- Render free Postgres is intended for testing. Back up or move to a persistent paid database before using it for real students/classes.
- The Blueprint uses fixed service names. If Render changes a URL because a name is unavailable, update `PUBLIC_SERVER_URL`, `TRUSTED_ORIGINS`, `DASHBOARD_ORIGIN`, `ORIGIN`, `PRIVATE_SERVER_URL`, and the dashboard `PUBLIC_SERVER_URL` Docker build arg to the final Render URLs.
- Optional features such as email, object storage, AI providers, Google OAuth, and custom domains need their own environment variables.
