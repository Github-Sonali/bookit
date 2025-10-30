# 🌍 BookIt — Experience Booking App

BookIt is a full-stack **MERN + TypeScript** web app where users can browse exciting experiences, view details, apply promo codes, and book their favorite adventures.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://bookit-drab.vercel.app/
- **Backend (Render):** https://bookit-backend1.onrender.com
- **GitHub Repo:** https://github.com/Github-Sonali/bookit

---

## 🧰 Tech Stack

### Frontend

- React + TypeScript (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js + Express.js
- MongoDB Atlas (Mongoose)
- CORS, dotenv, nodemon

---

## 🏗️ Project Structure

bookit/
├─ backend/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ server.js
│ └─ package.json
├─ frontend/
│ ├─ src/
│ ├─ public/
│ └─ package.json
└─ README.md

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Prerequisites

- Install **Node.js (v18+)**
- Create a **MongoDB Atlas** database and get your connection URI

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install

Create a .env file inside the backend folder:
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

Then start the backend:
npm run dev

It should show:
Server running on port 5000
MongoDB connected

Check:
http://localhost:5000/api/experiences

3️⃣ Frontend Setup
cd frontend
npm install

Create a .env file inside the frontend folder:
VITE_API_URL=http://localhost:5000/api

Then start the frontend:
npm run dev

Open in browser:
👉 http://localhost:5173

✅ Features

Browse and view exciting experiences
Detailed experience pages
Apply promo codes for discounts
Book experiences and view booking confirmation
Fully responsive UI (mobile-friendly)
MongoDB Atlas for persistent data

🧪 Testing the API
1. Get all experiences
GET /api/experiences

2. Get experience by ID
GET /api/experiences/:id

3. Create booking
POST /api/bookings

{
  "experienceId": "your_experience_id",
  "userName": "John Doe",
  "userEmail": "john@example.com",
  "slot": "10:00 AM",
  "totalPrice": 4500
}


4. Validate promo code
POST /api/promos/validate

{ "code": "WELCOME10" }


🧑‍💻 Author
Sonali Gupta
Full Stack Developer | MERN | TypeScript | Next.js | AI Integrations
```
