import mongoose from "mongoose";

export const dbConnection = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Mongo db connected successfully')
    }).catch((error) => {
        console.log('connection failed')
        console.log(error.message)
        process.exit(1)
    })
}