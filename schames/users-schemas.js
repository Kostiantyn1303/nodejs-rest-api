import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";
const userRegistrationSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "missing required email field",
    "string.empty": "email cannot be empty",
  }),
});

export default {
  userLoginSchema,
  userRegistrationSchema,
  userEmailSchema,
};
