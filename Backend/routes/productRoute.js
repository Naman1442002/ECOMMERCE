const express =require('express');
const productController=require('../controller/product');

const router = express.Router();
router.use(express.json());

router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct)
    .delete(productController.deleteProduct);


router.route('/:id')
    .get(productController.getProduct)
    .put(productController.replaceProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteManyProduct);

    exports.prodRoutes = router;