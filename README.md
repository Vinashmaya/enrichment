# Lead Ingest Dashboard

This is a minimal Next.js project for demonstrating a lead ingestion workflow.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
 npm run dev
  ```
3. Open `http://localhost:3000` in your browser to view the dashboard.

To create a production build run:

```bash
npm run build
npm start
```

## Testing

A placeholder test script is provided:

```bash
npm test
```

Currently, this script only outputs a message because no tests are defined.

## Pushing to a remote repository

To push your local work to a remote repository, first add a remote URL and then
push your branch. For example:

```bash
git remote add origin https://github.com/yourname/yourrepo.git
git push -u origin main
```

Adjust the remote URL and branch name as needed.

## Network access

If `npm install` fails because your environment requires a proxy, make sure the
`HTTP_PROXY` and `HTTPS_PROXY` environment variables are set correctly. You may
see a warning about `http-proxy` from npm; this is harmless and can be ignored.
