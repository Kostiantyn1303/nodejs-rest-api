import express from "express";
import { validateBody } from "../decorators/index.js";
import usersSchemas from "../schames/users-schemas.js";
import authController from "../controllers/auth-controller.js";
import { authenticate } from "../middlewares/index.js";
const authRouter = express.Router();
authRouter.post(
  "/register",
  validateBody(usersSchemas.userRegistrationSchema),
  authController.registration
);
authRouter.post(
  "/login",
  validateBody(usersSchemas.userLoginSchema),
  authController.signin
);
authRouter.post("/logout", authenticate, authController.signout);
authRouter.get("/current", authenticate, authController.getCurrent);
export default authRouter;