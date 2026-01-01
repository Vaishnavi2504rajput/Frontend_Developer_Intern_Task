
Frontend Developer Intern Task:
This project is developed as part of the Frontend Developer Intern assignment.
It is a full-stack web application with authentication and a protected dashboard.

Tech Stack
Frontend:
React.js
CSS / Bootstrap
Axios
Backend:
Node.js
Express.js
MongoDB
JWT Authentication
Features Implemented:
User Registration & Login
JWT-based Authentication
Protected Dashboard (Login Required)
CRUD Operations on Tasks
Add / View / Update / Delete Tasks
Logout Functionality
Password Hashing using bcrypt
Error Handling & Validation
Modular & Scalable Code Structure
Project Structure:
Frontend_developer_intern_task/ ├── frontend/ │ ├── src/ │ ├── public/ │ └── package.json │ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── middleware/ │ ├── server.js │ └── package.json │ ├── README.md ├── postman_collection.json

Setup Instructions:
Backend Setup
cd backend npm install

Create a .env file: ini MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key

Run backend: node server.js

###Frontend Setup: cd frontend npm install npm start

#API Endpoints: POST /api/auth/register – Register user

POST /api/auth/login – Login user

GET /api/tasks – Fetch tasks

POST /api/tasks – Create task

PUT /api/tasks/:id – Update task

DELETE /api/tasks/:id – Delete task

#Scalability Notes: -Frontend and backend are decoupled using REST APIs. -JWT authentication allows horizontal backend scaling. -Modular architecture supports easy feature expansion. -Ready for deployment using Docker and cloud platforms.

#Author: Vaishnavi Rajput


