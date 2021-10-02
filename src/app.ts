import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import otpRoutes from "./routes/otpRoute";

let allowCrossDomain = function(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}

const app = express();

app.use(allowCrossDomain);
app.use(json());

app.use("/otp", otpRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(5000);
