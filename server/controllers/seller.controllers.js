
import jwt from 'jsonwebtoken'




export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.SELLER_EMAIL || password === process.env.SELLER_PASS) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, {
                expiresIn: '7d'
            })

            res.cookie('sellerToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000

            })
        } else {
            return res.status(404).json({
                message: 'Invalid Credentails',
                success: false,
            })
        }


        return res.status(200).json({
            message: 'Logged In',
            success: true,
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        })
    }
}


export const isSeller = async (req, res) => {
    try {
        return res.json({ success: true })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false
        })
    }
}




export const sellerLogout = async (req, res) => {
    try {
        res.clearCookie('sellerToken', {
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