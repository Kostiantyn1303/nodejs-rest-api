import express from "express";

import contactsController from "../../controllers/contacts-controllers.js";

import contactsSchema from "../../schames/validate-schames.js";

import { validateBody } from "../../decorators/index.js";

import { isEmptyBody } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:contactId", contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchema.contactsAddSchema),
  contactsController.add
);

contactsRouter.delete("/:contactId", contactsController.deleteById);

contactsRouter.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsSchema.contactsAddSchema),
  contactsController.updateById
);

export default contactsRouter;
