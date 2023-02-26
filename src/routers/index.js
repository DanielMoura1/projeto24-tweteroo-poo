import {Router} from "express";
import loginRouter from "./Router-Sing.js";

const router = Router();
router.use(loginRouter);

export default router;