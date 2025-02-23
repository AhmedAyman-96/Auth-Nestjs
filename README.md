# Backend Documentation

This is the documentation for the **NestJS backend** of the full-stack application. Below, you'll find instructions on how to set up and run the backend.

## Technologies Used

- **Framework**: NestJS
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger
- **API Limiter**: Nestjs Throttler

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or remotely)
- Git

## Installation

1.  Clone the repository (if not already cloned):

        git clone https://github.com/AhmedAyman-96/Auth-Nestjs

2.  Navigate to the `Auth-Nestjs` directory:

        cd Auth-Nestjs

3.  Install dependencies:

    yarn

## Environment Variables

Create a `.env` file in the `Auth-Nestjs` directory with the following variables:

\# Server .env
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=3000

Replace `your_jwt_secret_key` with a strong secret key for JWT and `your-database-name` with your MongoDB database name.

## Running the Backend

1.  Start the development server:

        yarn start:dev

2.  The server will be running at:

        http://localhost:3000

## API Documentation

The backend API is documented using Swagger. After starting the server, you can access the Swagger UI at:

    http://localhost:3000/api

Use the Swagger UI to explore and test the API endpoints.

## Endpoints

### Authentication

- **POST /auth/signup**: Sign up a new user.
- **POST /auth/login**: Log in an existing user.

### Protected Routes

- **GET /auth/protected**: Access a protected route (requires valid JWT token).

## Testing

To run the backend tests, use the following command:

    npm test

- **Email**: a.ayman.mohey@example.com
- **GitHub**: [Ahmed-Ayyman](https://github.com/AhmedAyman-96)
