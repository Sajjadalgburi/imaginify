import { Schema, model, models } from "mongoose";
import { IImage } from "@/interfaces/index";

/**
 * Represents the schema for an image in the database.
 *
 * @remarks
 * This schema defines the structure and properties of an image document in the database.
 * It includes fields such as title, transformation, publicId, secureUrl, width, height, config, transformationUrl, aspectRatio, color, prompt, author, createdAt, and updatedAt.
 *
 * @param title - The title of the image.
 * @param transformationType - The transformation applied to the image.
 * @param publicId - The public ID of the image.
 * @param secureUrl - The secure URL of the image.
 * @param width - The width of the image.
 * @param height - The height of the image.
 * @param config - Additional configuration for the image.
 * @param transformationUrl - The URL of the transformed image.
 * @param aspectRatio - The aspect ratio of the image.
 * @param color - The color of the image.
 * @param prompt - The prompt associated with the image.
 * @param author - The ID of the user who uploaded the image.
 * @param createdAt - The date and time when the image was created.
 * @param updatedAt - The date and time when the image was last updated.
 */
const ImageSchema = new Schema<IImage>({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: URL,
    required: true,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: URL,
  },
  aspectRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Image model
const Image = models?.Image || model<IImage>("Image", ImageSchema);

export default Image;
