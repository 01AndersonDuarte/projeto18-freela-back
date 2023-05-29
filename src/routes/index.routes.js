import { Router } from "express";

import authRouter from "./auth.routes.js";
import postRouter from "./posts.routes.js";
import followersRouter from "./followers.routes.js";
import userRouter from "./user.routes.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(postRouter);
router.use(followersRouter);

export default router;