const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolioRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

// Secure CORS
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = process.env.FRONTEND_URL 
            ? [process.env.FRONTEND_URL, 'http://localhost:5173'] 
            : ['http://localhost:5173'];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Strict CORS Policy Error: Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', portfolioRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections for a hardened production server
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
