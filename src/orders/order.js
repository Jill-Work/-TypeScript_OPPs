import { express } from "express";
import orderController from './orderController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();


router.get("/getOrder", authMiddleware.authOfUsers, orderController.getOrder);

router.post("/createOrder", authMiddleware.authOfUsers, orderController.createOrder);


module.exports = router;