
import User from "../models/User.model";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// REGISTER USER


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        const existingUser = await User.findOne({ email })


        if (existingUser) {
            return res.json({ success: false, message: 'User Already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000

        })
        return res.status(200).json({
            message: 'User Created Successfully',
            success: true,
            token,
            user
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        })
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({
                success: false,
                message: 'Email and Password are required'
            })
        }


        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'Invalid email or password' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: 'Invalid email or password'
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000

        })
        return res.status(200).json({
            message: 'User Created Successfully',
            success: true,
            token,
            user
        })




    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        })
    }
}


// is AUTH 

export const isAuth = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId).select("-password");

        return res.json({ success: true, user })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        })
    }
}



export const logout = async (req, res) => {
    try {
        res.clearCookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        return res.json({
            success: true,
            message: 'Logout'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        })
    }
}