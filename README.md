
# 📝 Feedback Collector App

A simple and responsive **MERN** stack web application that allows users to submit feedback.  
The app features a **dark/light mode toggle** and an **admin panel to view feedback**.

---

## 📂 Project Structure
```
feedback-collector/
├── backend/         # Node.js & Express backend
│   ├── models/
│   │   └── Feedback.js   # Feedback Mongoose model
│   ├── routes/
│   │   └── feedback.js   # Routes + Controller logic for feedback
│   ├── node_modules/
│   ├── .env             # Environment variables (PORT, MONGO_URI)
│   ├── package.json
│   ├── package-lock.json
│   └── server.js        # Main backend server file
│
├── frontend/        # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AdminView.jsx
│   │   │   └── FeedbackForm.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env              # VITE_API_BASE_URL for backend
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md         # This file
│   └── eslint.config.js
│
├── .gitignore
└── package-lock.json (at root because of monorepo)
```

---

## 🛠️ Tech Stack
| Part         | Technologies Used               |
|--------------|-----------------------------------|
| **Frontend** | React, Tailwind CSS, Vite         |
| **Backend**  | Node.js, Express.js, MongoDB (optional for storage) |

---

## 🚀 Features
✅ Users can submit feedback with name, email, and message  
✅ Admin can view submitted feedbacks  
✅ Responsive UI  
✅ Dark/Light mode toggle  
✅ Animated smooth transitions

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/feedback-collector.git
cd feedback-collector
```

---

### 2. Setup Backend
```bash
cd backend
npm install
npm run start
```
- Create `.env` file inside `backend/` folder:
```bash
PORT=5000
MONGO_URI=your-mongodb-uri
```

---

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
- Create `.env` file inside `frontend/` folder:
```bash
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

---

## 🌐 Deployment Steps

### Deploy Backend (Render / Railway)
- Go to Render/Railway.
- Create a new Web Service and connect your GitHub repository.
- Set Root Directory:
  ```
  backend
  ```
- Set Start Command:
  ```
  npm run start
  ```
- Set Environment Variables: `PORT`, `MONGO_URI`.

---

### Deploy Frontend (Netlify)
- Go to Netlify.
- Create a new site from GitHub.
- Set Build Command:
  ```
  npm run build
  ```
- Set Publish Directory:
  ```
  frontend/dist
  ```
- Add Environment Variable:  
  `VITE_API_BASE_URL=https://your-backend-url.onrender.com`

---
