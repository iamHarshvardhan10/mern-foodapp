
import { v2 as cloudinary } from 'cloudinary'
import Product from '../models/Product.model.js'

export const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData)
        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url

            })
        )

        await Product.create({ ...productData, image: imagesUrl })


        return res.status(200).json({
            success: true,
            message: 'Product Added'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}


export const productList = async (req, res) => {
    try {
        const products = await Product.find({})

        res.json({ success: true, products })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}


export const productByID = async (req, res) => {
    try {
        const { id } = req.body;

        const product = await Product.findById(id)
        res.json({ success: true, product })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}



export const changeStock = async (req, res) => {
    try {
        const { id, inStock } = req.body;
        await Product.findByIdAndUpdate(id, { inStock })

        res.json({ success: true, message: 'Stock Updated' })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}