import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//MIDDLEWARES - ORDER MATTERS
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// app.get('/', (req, res) => {
//   //root route http://localhost:5000/
//   res.send('hello dld');
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port: http://localhost:${PORT}`);
});
