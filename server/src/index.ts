import express from 'express';
import cors from 'cors';
import sequelize from './config/database';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Unable to connect to database:', err);
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Opzon ERP API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});