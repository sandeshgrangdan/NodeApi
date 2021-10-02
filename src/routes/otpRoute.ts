import { Router } from "express";

import {
  verifyOtp
} from "../controllers/otpController";

const router = Router();

router.post("/", verifyOtp);

export default router;
