import jwt from 'jsonwebtoken'


export const verifySeller = async (req, res, next) => {
    const { sellerToken } = req.cookies;

    if (!sellerToken) {
        return res.json({ success: false, message: 'Not Authorzed' })
    }
    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.email === process.env.SELLER_EMAIL) {
            next()
        } else {
            return res.json({ success: false, message: 'Not Authorized' })
        }

        next()

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}