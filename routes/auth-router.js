import express from "express";
import { validateBody } from "../decorators/index.js";
import usersSchemas from "../schames/users-schemas.js";
import authController from "../controllers/auth-controller.js";
import { authenticate } from "../middlewares/index.js";
import { upload } from "../middlewares/index.js";
const authRouter = express.Router();
authRouter.post(
  "/register",
  validateBody(usersSchemas.userRegistrationSchema),
  authController.registration
);
authRouter.get("/verify/:verificationToken", authController.verifyEmail);
authRouter.post(
  "/verify",
  validateBody(usersSchemas.userEmailSchema),
  authController.resendVerifyEmail
);
authRouter.post(
  "/login",
  validateBody(usersSchemas.userLoginSchema),
  authController.signin
);
authRouter.post("/logout", authenticate, authController.signout);
authRouter.get("/current", authenticate, authController.getCurrent);
authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);
export default authRouter;
