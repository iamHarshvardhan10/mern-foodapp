import jwt from 'jsonwebtoken'

export const verifyUser = async (req, res, next) => {
    try {
        const { token } = req.cookies;


        if (!token) {
            return res.json({ success: false, message: 'Invalid token' })

        }

        try {
            const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
            if (tokenDecode.id) {
                req.body.userId = tokenDecode.id;
            } else {
                return res.json({ success: false, message: 'Not Authorized' })
            }

            next()
        } catch (error) {
            res.json({ success: false, message: error.message })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}