import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Lead Ingest Service Dashboard</h1>
      <p>
        This dashboard provides instructions for submitting and tracking
        incoming leads. The example API routes store data only in memory and
        will reset on each server restart.
      </p>
      <ol>
        <li>Submit leads via <code>POST /api/leads</code> with JSON data.</li>
        <li>Check individual lead status at <code>GET /api/leads/:id</code>.</li>
        <li>List processed leads using <code>GET /api/leads</code>.</li>
      </ol>
      <p style={{ marginTop: '1rem' }}>
        This is a minimal example. Replace these instructions with your real workflow
        once the API endpoints are implemented.
      </p>
    </main>
  );
}
