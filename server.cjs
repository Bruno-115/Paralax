const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./user/userRoute.cjs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

app.use(cors());
app.use(express.json()); 
app.use('/api', userRouter);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection successful');

    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      console.log(`App is running on the port ${port}`);
    });
  })
  .catch((err) => console.error('Connection error:', err));
