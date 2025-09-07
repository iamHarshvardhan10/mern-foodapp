import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'

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

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})