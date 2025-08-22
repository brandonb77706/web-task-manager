# To-Do Application

This is a full-stack To-Do application built with React for the frontend and Node.js with Express for the backend. The application allows users to create, read, update, and delete their to-do items.

## Project Structure

The project is organized into two main folders: `frontend` and `backend`.

### Frontend

The frontend is built using React and is located in the `frontend` directory. It includes the following key components:

- **public/index.html**: The main HTML file for the React application.
- **src/components**: Contains the React components for the application:
  - `TodoList.js`: Renders a list of todo items.
  - `TodoItem.js`: Represents a single todo item.
  - `TodoForm.js`: Provides a form for adding new todo items.
  - `Header.js`: Displays the application title or header.
- **src/services/api.js**: Contains functions for making API calls to the backend.
- **src/App.js**: The main component that manages the application state and renders other components.
- **src/index.js**: The entry point for the React application.
- **src/App.css**: Contains the CSS styles for the application.

### Backend

The backend is built using Node.js and Express and is located in the `backend` directory. It includes the following key components:

- **src/controllers/todo.controller.js**: Handles requests related to todos.
- **src/models/todo.model.js**: Defines the Mongoose model for todo items.
- **src/routes/todo.routes.js**: Exports the routes for the todo-related API endpoints.
- **src/middleware/auth.middleware.js**: Contains middleware functions for authentication.
- **src/config/db.config.js**: Exports the database configuration settings.
- **src/server.js**: Sets up the Express server and connects to the database.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running (or use a cloud MongoDB service).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node src/server.js
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend (or whichever port you have configured).

## Usage

You can create, view, update, and delete to-do items using the application interface. The changes will be reflected in the backend database.

## License

This project is licensed under the MIT License.