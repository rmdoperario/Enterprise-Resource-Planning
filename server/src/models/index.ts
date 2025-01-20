import express from 'express';
import cors from 'cors';
import sequelize from './config/database';
import * as models from './models';

const app = express();

app.use(cors());
app.use(express.json());

// Sync all models
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Opzon ERP API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});