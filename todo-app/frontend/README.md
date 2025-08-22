# Frontend To-Do Application

This is the frontend part of the To-Do application built with React. It allows users to manage their tasks efficiently.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd todo-app/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```
   This will start the development server and open the application in your default web browser.

## Folder Structure

- **public/**: Contains static files such as `index.html` and `favicon.ico`.
- **src/**: Contains the source code for the React application.
  - **components/**: Contains React components for the application.
    - `TodoList.js`: Renders a list of todo items.
    - `TodoItem.js`: Represents a single todo item.
    - `TodoForm.js`: Provides a form for adding new todo items.
    - `Header.js`: Displays the application title or header.
  - **services/**: Contains API service functions for making requests to the backend.
    - `api.js`: Functions for fetching, adding, updating, and deleting todos.
  - `App.js`: Main component that manages application state and renders components.
  - `index.js`: Entry point for the React application.
  - `App.css`: CSS styles for the application.

## Features

- Add new todo items.
- View a list of existing todo items.
- Update and delete todo items.

## Technologies Used

- React
- JavaScript
- CSS

## License

This project is licensed under the MIT License.