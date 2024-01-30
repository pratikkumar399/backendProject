import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) throw new Error("File path is required");
        //upload file to cloudinary
        const uploadedImage = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file is uploaded to cloudinary
        console.log("File uploaded to cloudinary", uploadedImage.url);
        return uploadedImage;
    }
    catch (error) {
        // delete file from local storage, if upload to cloudinary fails
        fs.unlinkSync(localFilePath);
        console.log(error);
    }
}

export { uploadToCloudinary };