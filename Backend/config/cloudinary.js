import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
    cloud_name: "doeph5lgo",
    api_key: "633778636357671",
    api_secret: "g8JiV-opXEApXfe7nEKCPbIW8aU"
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'png', 'pdf']
    }
});

export { cloudinary, storage };