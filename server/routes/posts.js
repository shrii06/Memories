import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js';

// setting up the router
const router = express.Router(); 

// reached by localhost:5000/posts
// when a user visits the homepage
router.get('/', getPosts);
router.post('/', createPost);

export default router;
