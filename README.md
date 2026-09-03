# 📦 PRODUCTIFY – Product Sharing Platform

![Productify Screenshot](./frontend/public/forgit.jpg)

---

## 🚀 Overview

**PRODUCTIFY** is a full‑stack web application that enables users to:

- Browse products shared by the community.
- Add new products after signing in.
- Edit or delete their own products.
- Comment on any product.
- Automatically sync user data with the database via Clerk.

The frontend is built with **React**, the backend with **Express + PostgreSQL**, using **Drizzle ORM** for database access and **Clerk** for authentication.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🔐 **Clerk Authentication** | Secure sign‑in/sign‑out via email or social providers. |
| 📦 **Product Management** | Create, view, edit, and delete products (products are tied to their owners). |
| 💬 **Comment System** | Add and delete comments on products (only the comment owner can delete). |
| 👤 **User Profile** | View all your products with edit/delete options. |
| 🎨 **Multiple Themes** | Choose from 30+ DaisyUI themes (preference saved locally). |
| 📱 **Responsive Design** | Smooth experience on all devices using Tailwind CSS. |
| 🔄 **User Sync** | User data is automatically synced from Clerk to the database upon login. |
| ⚡ **State Management** | Powered by TanStack Query for caching and instant updates. |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** + React Router v7  
- **Clerk React** for authentication  
- **TanStack Query** (React Query) for state management  
- **Tailwind CSS** + **DaisyUI** for styling and theming  
- **Lucide React** for icons  

### Backend
- **Node.js** + **Express**  
- **PostgreSQL** relational database  
- **Drizzle ORM** for database interaction  
- **Clerk Express** for server‑side authentication  
- **Cors** & **dotenv** for configuration  

---

## 📁 Project Structure
PRODUCTIFY/
├── frontend/
│ ├── public/
│ │ └── forgit.jpg 
│ ├── src/
│ │ ├── components/ 
│ │ │ ├── CommentSection.jsx
│ │ │ ├── EditProductForm.jsx
│ │ │ ├── LoadingSpinner.jsx
│ │ │ ├── Navbar.jsx
│ │ │ ├── ProductCard.jsx
│ │ │ └── ThemeSelector.jsx
│ │ ├── hooks/ 
│ │ │ ├── useAuthReq.js
│ │ │ ├── useComments.js
│ │ │ ├── useProducts.js
│ │ │ └── useUserSync.js
│ │ ├── lib/ 
│ │ │ ├── api.js
│ │ │ └── axios.js
│ │ ├── pages/
│ │ │ ├── CreatePage.jsx
│ │ │ ├── EditPage.jsx
│ │ │ ├── Home.jsx
│ │ │ ├── Productpage.jsx
│ │ │ └── Profile.jsx
│ │ ├── App.jsx
│ │ ├── index.css 
│ │ └── main.jsx 
│ ├── .env 
│ ├── index.html
│ └── package.json
│
├── backend/ 
│ ├── src/
│ │ ├── config/
│ │ │ └── env.ts
│ │ ├── controllers/
│ │ │ ├── commentController.ts
│ │ │ ├── productController.ts
│ │ │ └── userController.ts
│ │ ├── db/ 
│ │ │ ├── index.ts 
│ │ │ ├── queries.ts 
│ │ │ └── Schema.ts
│ │ ├── routes/
│ │ │ ├── commentRoutes.ts
│ │ │ ├── productRoutes.ts
│ │ │ └── userRoutes.ts
│ │ └── index.ts 
│ ├── .env
│ ├── .env.example 
│ └── package.json
│
├── .gitignore
└── README.md

---


---

## 🚀 Setup & Running

### 1. Clone the repository
```bash
git clone https://github.com/your-username/productify.git
cd productify

2. Backend setup

cd backend
npm install

Create a .env file inside backend with the following variables (refer to .env.example):

env
ث
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/productify
FRONTEND_URL=http://localhost:5173
CLERK_PUBLISHABLE_KEY=pk_......
CLERK_SECRET_KEY=sk_......

Start the backend server:
npm run dev
The server will run on http://localhost:5000.

3. Frontend setup

Open a new terminal and go to the frontend folder:

cd frontend
npm install

Create a .env file inside frontend:

env

VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=pk_......

Run the frontend:

npm run dev

The app will be available at http://localhost:5173.

4. Database

Ensure PostgreSQL is running.

Run migrations (if using Drizzle):

cd backend

npx drizzle-kit push:pg
(Alternatively, use drizzle-kit generate then migrate as per your setup.)

📡 API Endpoints (Summary)
Method  	Endpoint	
POST  	  /api/users/sync 
GET	      /api/products
GET	      /api/products/my 
GET	      /api/products/:id 
POST	    /api/products 
PUT	      /api/products/:id	
DELETE  	/api/products/:id	
POST	    /api/comments/:productId	
DELETE	  /api/comments/:commentId	

📝 Future Improvements
Add search and filtering by categories.
Support image uploads instead of URLs.
Real‑time notifications for new comments.
Rating system (stars) for products.

👥 Team
Developer: [Ali Shaboot]
Technologies: React, Express, PostgreSQL, Drizzle, Clerk, Tailwind
