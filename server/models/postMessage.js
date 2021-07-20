import mongoose from 'mongoose';

// creating posts schema
// structure of a post
const postSchema = mongoose.Schema({
    title: String,
    messsage: String, 
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

// turning schema into a model 
const PostMessage = mongoose.model('PostMessage', postSchema);

// we'll be able to run commands such as find, create, delete and update
export default PostMessage;