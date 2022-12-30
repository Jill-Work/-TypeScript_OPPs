import { express } from "express";
import authMiddleware from '../middleware/authMiddleware';
import productController from './productController';
import productMiddleware from '../middleware/productMiddleware';

const router = express.Router();


router.get("/product", productController.getProduct);

router.post("/addProduct", authMiddleware.authOfUsers, productMiddleware.insertProduct, productController.addProduct);

router.put("/update/:id", productController.updateProduct);

router.delete("/delete", productController.deleteProduct);

router.get("/search", productController.productHistory);

module.exports = router;