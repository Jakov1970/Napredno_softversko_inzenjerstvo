import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from './routes/users.js';
//import dotenv from 'dotenv';

const app = express();
//dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRouter); //DODALI SMO PRVO OVO ZA AUTH

const CONNECTION_URL = 'mongodb+srv://jakovbarton98:Jakov1997@cluster0.nurul.mongodb.net/?retryWrites=true&w=majority';
// 'mongodb+srv://jakov_barton:jakov_barton123@cluster0.wofdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);
//  https://www.mongodb.com/cloud/atlas