import express  from "express";
import { getUser, signup, login } from "../controllers/user-controller.js";

const router = express.Router(); 

router.get("/", getUser);
router.post("/signup",signup);
router.post("/login", login);

export default router;