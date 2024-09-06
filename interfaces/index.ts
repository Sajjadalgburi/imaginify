import { Document } from "mongoose";

// Define the interface for the Image document
export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the interface for the User document
export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string | null;
  lastName?: string | null;
  planId?: string;
  creditBalance?: number;
}
