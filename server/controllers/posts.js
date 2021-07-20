import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try {
        // finding something in a model is an async action, thats why we use await
        const postMessages = await PostMessage.find();
        
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});        
    }
}

export const createPost = async (req, res) => {
    // to get this post, we've to implement logic in frontend to get post using forms
    const post = req.body;
    
    const newPost = new PostMessage(post);
    try {
        // saving is an async function so it must be awaited
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}