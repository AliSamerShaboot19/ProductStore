# 📦 PRODUCTIFY — Product Sharing Platform

![Productify Screenshot](./frontend/public/forgit.jpg)

[![Repo Size](https://img.shields.io/github/repo-size/AliSamerShaboot19/ProductStore)](https://github.com/AliSamerShaboot19/ProductStore)
[![License](https://img.shields.io/github/license/AliSamerShaboot19/ProductStore)](LICENSE)
[![Issues](https://img.shields.io/github/issues/AliSamerShaboot19/ProductStore)](https://github.com/AliSamerShaboot19/ProductStore/issues)

---

## 🚀 Project Overview

Productify is a full‑stack web application that makes sharing, discovering, and discussing products simple and delightful. It's built with a modern stack (React + Express + PostgreSQL) and integrates Clerk for user authentication and Drizzle ORM for type-safe database access.

Key user flows:
- Browse products shared by the community
- Create, edit and delete your own products
- Comment on products and manage your comments
- User account syncing from Clerk into the application database

This README gives maintainers and contributors a concise but complete guide to run, develop, and extend Productify.

---

## ✨ Highlights

- Clean, responsive UI with Tailwind CSS + DaisyUI
- Secure auth with Clerk (client + server integration)
- Robust backend using Express + PostgreSQL + Drizzle ORM
- Client-side caching & sync with TanStack Query
- Theme support (30+ DaisyUI themes) and responsive design

---

## 🧭 Table of Contents

- Project Overview
- Highlights
- Tech Stack
- Project Structure
- Quick Start (local)
- Environment Variables
- API Reference
- Database / Migrations
- Deployment Tips
- Development Notes
- Contributing
- License
- Contact

---

## 🧰 Tech Stack

Frontend
- React 19 + React Router v7
- Clerk React (Auth)
- TanStack Query (React Query)
- Tailwind CSS + DaisyUI
- Lucide React (icons)

Backend
- Node.js + Express
- PostgreSQL
- Drizzle ORM (type-safe queries and migrations)
- Clerk Express (server-side auth)
- Cors, dotenv for runtime configuration

---

## 🗂️ Project Structure

PRODUCTIFY/
├── frontend/
│   ├── public/ (static assets)
│   ├── src/
│   │   ├── components/ (UI components)
│   │   ├── hooks/ (custom hooks & API hooks)
│   │   ├── lib/ (api wrappers / axios)
│   │   └── pages/ (route pages)
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/ (drizzle schema & queries)
│   │   ├── routes/
│   │   └── index.ts (server)
│   └── package.json
├── .gitignore
└── README.md

---

## ⚡ Quick Start — Local Development

Prerequisites:
- Node.js (v18+ recommended)
- PostgreSQL (local or Docker)
- pnpm / npm / yarn (any will do)

1) Clone the repository

```bash
git clone https://github.com/AliSamerShaboot19/ProductStore.git
cd ProductStore
```

2) Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` (see Environment Variables below) and start the server in development mode:

```bash
npm run dev
# server runs by default on http://localhost:5000
```

3) Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` (see Environment Variables below) and start the dev server:

```bash
npm run dev
# frontend runs by default on http://localhost:5173
```

Open http://localhost:5173 in your browser.

---

## 🔑 Environment Variables

backend/.env (example)

```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/productify
FRONTEND_URL=http://localhost:5173
CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

frontend/.env (example)

```
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=pk_...
```

Tips:
- Keep secret keys out of source control. Use a secrets manager for production.
- If using Docker, wire DATABASE_URL to the database container.

---

## 🔌 API Reference (Summary)

Base: /api

- POST  /api/users/sync        — Sync Clerk user data to local DB
- GET   /api/products         — Get all products (paginated)
- GET   /api/products/my      — Get products owned by current user
- GET   /api/products/:id     — Get product by id (with comments)
- POST  /api/products         — Create a product (auth required)
- PUT   /api/products/:id     — Update a product (owner only)
- DELETE /api/products/:id    — Delete a product (owner only)
- POST  /api/comments/:productId — Create comment on a product
- DELETE /api/comments/:commentId — Delete comment (owner only)

Notes:
- All auth-protected endpoints use Clerk middleware on the server.
- Returns JSON with clear error messages and status codes.

---

## 🗄️ Database & Migrations

This project uses Drizzle ORM for schema + migrations. If you add/modify models:

1. Update `backend/src/db/Schema.ts`
2. Generate migration using drizzle-kit (installed as a dev dependency):

```bash
npx drizzle-kit generate
npx drizzle-kit push:pg
```

If you prefer manual migration tools (Flyway, pg-migrate), keep the Drizzle schema in sync.

---

## 🚢 Deployment Tips

- Set environment variables in your hosting provider (Vercel, Render, Heroku, Fly.io, etc.).
- Use a managed PostgreSQL service in production (Supabase, Neon, AWS RDS).
- Ensure Clerk publishable & secret keys are set for both client and server.
- For production builds:
  - Frontend: `npm run build` (in /frontend), then serve the `dist` directory or deploy to Vercel/Netlify.
  - Backend: run the compiled Node/TS output (or use ts-node in some providers).

---

## 🧪 Testing & Development Notes

- Use TanStack Query devtools to inspect client caching and network requests during development.
- Use the `useAuthReq` hook (frontend) to make authenticated requests—it handles Clerk token injection.
- Keep component responsibilities small and test API contracts with Postman/Insomnia.

---

## ♻️ Future Improvements (Shortlist)

- Add product search & category filters (server + client)
- Support image uploads (S3/Cloudinary) instead of image URLs
- Real‑time updates (WebSockets / Pusher) for comments
- Rating system and product metadata tags
- Pagination, sorting, advanced filtering

---

## 🤝 Contributing

Thank you for thinking about contributing! A suggested workflow:

1. Fork the repository and create a branch: `feature/your-feature` or `fix/issue-number`
2. Run the project locally and add tests where appropriate
3. Submit a PR with a clear description and screenshots if the change affects UI

Please open issues for feature requests or bugs before large changes so we can coordinate.

---

## 📄 License

This repository is provided under the MIT License. See LICENSE for details.

---

## 🙋 Contact

Developer: Ali Shaboot
- GitHub: https://github.com/AliSamerShaboot19

---

Thank you for checking out Productify — I hope this README makes it easier to run, develop, and contribute to the project. Pull requests and feedback are always welcome!
