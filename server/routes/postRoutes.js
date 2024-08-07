import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,


})

// GET ALL POST
router.route('/').get(async(req, res) => {
    try {
        const post = await Post.find({})
        res.status(200).json({success: true, data:post})
    } catch (error) {
        res.status(500).json({success: false, message:error})

        
    }


})


// CREATE POST
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;

        if (!photo) {
            return res.status(400).json({ success: false, message: 'Photo is required' });
        }

        const photoUrl = await cloudinary.uploader.upload(photo);
        console.log('Cloudinary response:', photoUrl);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        });

        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error('Error in post creation:', error);
        res.status(500).json({ success: false, message: error.message, stack: error.stack });
    }
});


export default router