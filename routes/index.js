const router = require('express').Router();
const productRoutes = require('./products/productRouter')
//const userRoutes = require('./users/userRouer')

router.use('/products', productRoutes)
//router.use('/users',userRoutes)

module.exports = router