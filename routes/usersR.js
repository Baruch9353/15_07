import express from "express";
import {login} from "../ctrl/usersCtrl.js";

const router = express.Router();

router.post('/', login);

export default router;
