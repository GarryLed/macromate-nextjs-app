import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; // Importing the database connection module


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); 

// Example route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'MacroMate API server is running' });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

