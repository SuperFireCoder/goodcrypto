import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  region: process.env.AWS_REGION || "",
  kmsKeyId: process.env.AWS_KMS_KEY_ID || "",
};
