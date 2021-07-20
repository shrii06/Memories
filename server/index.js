import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// importing the routes of posts from posts.js which was exported there
import postRoutes from './routes/posts.js';


// initializing the app
const app = express();



// to send images which can be large in size
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());    

// setting up starting path for all the posts in posts.js
app.use('/posts', postRoutes);


// used to connect to the MongoDB server
const CONNECTION_URL = 'mongodb+srv://shrinath:Shri2001@cluster0.mreqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// the PORT which is going to be used, later HEROKU will populate env variables with its own data
const PORT = process.env.PORT || 5000;

// mongoose to connect to our database
// the below line return a promise
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen((PORT, () => console.log(`Server running on port : ${PORT}`))))
    .catch((error) => console.log(error.message))

// setting up database to avoid some warning in console
mongoose.set('useFindAndModify', false);

// listening on the app
app.listen(PORT);




