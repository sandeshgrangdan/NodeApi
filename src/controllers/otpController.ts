import { RequestHandler } from "express";

import { Otp } from "../models/otpModel";

const TODOS: Otp[] = [];

export const verifyOtp: RequestHandler = (req, res, next) => {
  const otp = (req.body as { otp: string }).otp ?? "";
  if (otp.length === 6)
    res.status(200).json({ status: "success", message: "Your Otp code has been verified" });
  else
    res.status(500).json({ status: "error", message: "Otp Verification Failed !!" });
};
