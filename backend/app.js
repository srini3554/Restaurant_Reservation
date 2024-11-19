import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });

// CORS middleware to handle CORS headers properly
app.use(cors({
    origin: process.env.FRONTEND_URL,  // Dynamically set from .env file
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
    credentials: true,  // Allow credentials (cookies, HTTP authentication)
}));

// Add Content-Security-Policy headers
app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; font-src 'self'; style-src 'self';"
    );
    next();
});

// Middleware for parsing JSON bodies and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (if needed)
app.use("/static", express.static("public")); // Adjust the folder path as required

// API Routes
app.use("/api/v1/reservation", reservationRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

// Export the app to be used in server.js
export default app;
