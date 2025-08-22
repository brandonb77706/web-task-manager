# To-Do Application Backend

This is the backend part of the To-Do application. It is built using Node.js and Express, and it connects to a MongoDB database to manage todo items.

## Features

- Create, read, update, and delete todo items.
- User authentication middleware to protect certain routes.
- RESTful API for frontend integration.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd todo-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Configuration

- Update the `db.config.js` file in the `config` folder with your MongoDB connection string.

### Running the Application

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- `GET /api/todos` - Retrieve all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo by ID
- `DELETE /api/todos/:id` - Delete a todo by ID

## License

This project is licensed under the MIT License.