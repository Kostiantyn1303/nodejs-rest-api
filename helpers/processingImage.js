import Jimp from "jimp";
import { HttpError } from "./index.js";

const processingImage = async (tempPath, newPath) => {
  try {
    const image = await Jimp.read(tempPath);
    image.scaleToFit(250, 250);
    await image.writeAsync(newPath);
  } catch (error) {
    console.error(error);
    throw HttpError(500, "Failed to process the image");
  }
};

export default processingImage;
