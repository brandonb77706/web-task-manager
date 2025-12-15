# ✅ Task Manager Web App

A full-stack task management web application designed to help users organize their work efficiently by creating, prioritizing, and tracking tasks with deadlines. The app features a modern React frontend, a scalable Node.js backend, and MongoDB for persistent data storage.

---

## 🚀 Features

* 📝 **Task Creation & Management** – Create, update, and delete tasks with ease
* ⏰ **Deadlines** – Assign due dates to stay on top of important work
* ⭐ **Priority Levels** – Organize tasks by priority for better productivity
* 👤 **User Accounts** – Securely store user-specific tasks
* 🔄 **Persistent Data** – Tasks and user data are saved in MongoDB

---

## 🛠️ Tech Stack

**Frontend**

* React
* JavaScript
* TailwindCSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

---

## 🧱 Architecture Overview

The frontend communicates with a RESTful Node.js API to manage tasks and users. MongoDB is used to persist application data, enabling reliable task storage and scalability. This separation of concerns ensures maintainability and clean data flow across the application.

---

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the backend directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. Start the application:

   ```bash
   # Start backend
   cd backend
   npm run dev

   # Start frontend (new terminal)
   cd frontend
   npm start
   ```

---

## 📈 Future Enhancements

* User authentication and authorization
* Task categories and tags
* Drag-and-drop task reordering
* Reminders and notifications
* Improved UI/UX and accessibility

---

## 📄 License

This project is licensed under the MIT License.

---

