const ProductModel = require('../models/products')

const addProduct = async (req, res) => {
    const data = req.body
    const saveData = new ProductModel(data);
    if (!saveData) throw new Error(400, 'Insert all data')
    await saveData.save();
    res.status(200).send({ message: 'data saved sucessfully' })
}

module.exports = { addProduct }