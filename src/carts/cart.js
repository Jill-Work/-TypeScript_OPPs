import { express } from "express";
import cartController from '../carts/cartController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();


router.get("/getCart", authMiddleware.authOfUsers, cartController.getCartAllProduct);

router.put("/addAndUpdateToCart", authMiddleware.authOfUsers, cartController.addAndUpdateToCart);

router.delete("/deleteFromCart", authMiddleware.authOfUsers, cartController.deleteFromCart);

module.exports = router;