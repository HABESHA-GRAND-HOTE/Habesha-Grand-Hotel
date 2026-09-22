# Habesha Grand Hotel - Luxury Hotel Management System

Habesha Grand Hotel is a responsive hotel website and management system built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide Icons.

## Project Structure

- `customer-frontend`: Public hotel website and booking experience.
- `Admin-frontend`: Hotel operations dashboard for staff.
- `backend`: Node.js API service shared by both frontends.

## Run Locally

Open three terminals from the repository root:

```bash
cd customer-frontend && npm install && npm run dev
cd Admin-frontend && npm install && npm run dev
cd backend && npm run dev
```

The customer frontend uses Vite's default port, the admin frontend uses port `5174`, and the backend uses port `4000`.

Backend health check: `http://localhost:4000/api/health`

## Customer Features

- Cinematic full-screen hero and responsive navigation.
- Reservation search widget and full booking flow.
- Rooms, dining, facilities, experiences, offers, and gallery pages.
- Authentication and member portal views.

## Production Builds

```bash
cd customer-frontend && npm run build
cd Admin-frontend && npm run build
```

© 2026 Habesha Grand Hotel. All rights reserved.
