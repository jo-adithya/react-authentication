import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.routes.js';
import { initializeDbConnection } from './db.js';

dotenv.config();

// Initialize the express app
const app = express();

// Parses the body of POST/PUT request in JSON format, accessible as (req.body)
app.use(express.json());

// Add all the routes from the routes folder
app.use('/api', routes);

// Initialize connection to the database
try {
  await initializeDbConnection();
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
} catch (err) {
  console.error(err);
}
