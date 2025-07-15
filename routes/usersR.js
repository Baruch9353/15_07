import express from "express";
import {getAllUsers} from "../ctrl/usersCtrl.js";

const router = express.Router();

router.get('/',getAllUsers);

export default router;
