import express from "express";
import { validateBody } from "../decorators/index.js";
import usersSchemas from "../schames/users-schemas.js";
import authController from "../controllers/auth-controller.js";
import { authenticate } from "../middlewares/index.js";
const authRouter = express.Router();
authRouter.post(
  "/users/register",
  validateBody(usersSchemas.userRegistrationSchema),
  authController.registration
);
authRouter.post(
  "/users/login",
  validateBody(usersSchemas.userLoginSchema),
  authController.signin
);
authRouter.post("/users/logout", authenticate, authController.signout);
authRouter.get("/users/current", authenticate, authController.getCurrent);
export default authRouter;
