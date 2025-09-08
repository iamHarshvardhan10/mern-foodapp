import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { dbConnection } from './config/db.js'
import authRoutes from './routes/user.routes.js'
import sellerRoutes from './routes/seller.routes.js'
import cloudinaryConnect from './config/cloudinary.js'
// ALLOWED MULTIPLR OTIGIN
const allowedOrigins = ['http://localhost:5173']

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))

const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.json({
        message: 'API is working'
    })
})


app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/seller', sellerRoutes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    dbConnection()
    cloudinaryConnect()
})