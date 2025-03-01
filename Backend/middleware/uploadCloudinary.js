import multer from 'multer';
import { storage } from '../config/cloudinary.js';

const uploadCloudinary = multer({ storage });

export default uploadCloudinary;