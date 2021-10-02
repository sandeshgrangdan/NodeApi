"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otpController_1 = require("../controllers/otpController");
const router = express_1.Router();
router.post("/", otpController_1.verifyOtp);
exports.default = router;
