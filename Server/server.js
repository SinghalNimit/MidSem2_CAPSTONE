const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.json());
const dbConfig = require('./config/dbConfig');
const usersRoute = reuire('./routes/userRoute');

app.use('/api/users', usersRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
