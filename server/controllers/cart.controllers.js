import User from "../models/User.model.js";


export const updateCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body;
        await User.findByIdAndUpdate(userId, { cartItems })

        res.json({ success: true, message: 'Cart Updated' })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}