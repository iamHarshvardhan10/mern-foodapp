import Address from "../models/Address.model.js";



export const addAddress = async (req, res) => {
    try {
        const { address, userId } = req.body;
        await Address.create({ ...address, userId })

        return res.json({ success: true, message: 'Address Added Successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}



export const getAddress = async (req, res) => {
    try {
        const { userId } = req.body;
        const addresses = await Address.find({ userId })
        res.json({ success: true, message: 'Fetch Successfully', addresses })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}