import express from 'express';
import path from 'path';
import hotelRoutes from './routes/hotelRoutes';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api', hotelRoutes);
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;