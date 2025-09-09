import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config'

const cloudinaryConnect = async () => {
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET
        })
    } catch (error) {
        throw error;
    }
}


export default cloudinaryConnect;