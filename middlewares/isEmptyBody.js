import { HttpError } from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    next(HttpError(400, "missing fields"));
  }
  next();
};
const isEmptyBodyFavorite = (req, res, next) => {
  if (req.method === "PATCH") {
    if (!req.body.hasOwnProperty("favorite") || req.body.favorite === "") {
      next(HttpError(400, "missing field favorite"));
    }
  }
  next();
};

export { isEmptyBody as default, isEmptyBodyFavorite };
