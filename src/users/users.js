import { express } from "express";
import usersController from './users/usersController';
import authMiddleware from '../middleware/authMiddleware';
import validator from '../requests/indexOfRequest';

const router = express.Router();


router.get("/user/:id", authMiddleware.authOfUsers, usersController.userDetails);

router.get("/list", authMiddleware.authOfUsers, usersController.userList);

router.post("/signup", validator.userSignUpValidation, usersController.userSignUp);

router.get("/login", validator.checkLoginParameter, usersController.userLogIn);

router.put("/update", [validator.updateUserValidation, authMiddleware.authOfUsers], usersController.userUpdate);

router.put("/changePassword", authMiddleware.authOfUsers, usersController.userPasswordChange);

router.delete("/:id", authMiddleware.authOfUsers, usersController.userDelete);


router.post("/adminSignup", validator.userSignUpValidation, usersController.admin);

router.get("/listOfPermission", authMiddleware.authOfUsers ,usersController.listOfRoute);

router.post("/addPermission", authMiddleware.authOfUsers , usersController.addRoute);

router.delete("/deletePermission", authMiddleware.authOfUsers, usersController.deleteRoute);


module.exports = router;