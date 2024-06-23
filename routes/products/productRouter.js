const { addProduct } = require('../../controllers/productController');
const asyncHandler = require('../../utils/asyncHandler');

const router = require('express').Router();


router.post('/', asyncHandler(addProduct))
// .get()
// .put()
// .delete()
// .get()

module.exports = router