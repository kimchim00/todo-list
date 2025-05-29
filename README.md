
# 📝 Full-Stack To-Do List App

A full-featured and responsive To-Do List application built using **React + Vite** for the frontend and **FastAPI + MongoDB** for the backend. This app provides persistent task management with a clean and modern UI.

## 🚀 Features

- Create, view, and delete tasks
- Mark tasks as complete or incomplete
- Persistent storage using MongoDB
- RESTful API built with FastAPI
- Responsive UI built with Tailwind CSS
- Environment configuration via `.env` file
- Docker-ready backend for deployment
- NGINX reverse proxy configuration included

## 🧰 Tech Stack

### Frontend
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) for HTTP requests

### Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- [MongoDB](https://www.mongodb.com/)
- [Pydantic](https://docs.pydantic.dev/)
- [Uvicorn](https://www.uvicorn.org/) for ASGI server

### DevOps

- [NGINX](https://nginx.org/) for reverse proxy

## 📁 Project Structure

```

todo-list/
├── frontend/         # React + Vite Frontend
├── backend/          # FastAPI Backend
│   ├── src/          # API source code
│   ├── requirements.txt
│   └── pyproject.toml
├── nginx/            # NGINX Configuration
└── .env              # Environment Variables

````

## ⚙️ Getting Started

### Prerequisites
- Node.js & npm
- Python 3.10+
- MongoDB running locally or remotely


### 1. Setup the Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn src.main:app --reload
````

Make sure your `.env` file contains a valid MongoDB URI, e.g.:

```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=todo_app
```

### 2. Setup the Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

The app will run at: [http://localhost:5173](http://localhost:5173)

## 📌 Environment Variables

Make sure to configure your `.env` file for proper backend connectivity.

```
MONGODB_URI=mongodb://localhost:27017
DB_NAME=todo_app
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute or fork this repo for your own needs!


