"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = void 0;
const TODOS = [];
const verifyOtp = (req, res, next) => {
    var _a;
    const otp = (_a = req.body.otp) !== null && _a !== void 0 ? _a : "";
    const arrayOtp = Array.from(otp);
    if (otp.length === 6 && arrayOtp[arrayOtp.length - 1] !== '7')
        res.status(200).json({ status: "success", message: "Your Otp code has been verified" });
    else
        res.status(500).json({ status: "error", message: "Otp Verification Failed !!" });
};
exports.verifyOtp = verifyOtp;
