import {
  KMSClient,
  SignCommand,
  VerifyCommand,
  SignCommandInput,
  VerifyCommandInput,
} from "@aws-sdk/client-kms";
import { config } from "../config/config";

const client = new KMSClient({ region: config.region });

export const signData = async (data: string): Promise<string> => {
  const params: SignCommandInput = {
    KeyId: config.kmsKeyId,
    Message: Buffer.from(data),
    SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256",
    MessageType: "RAW",
  };

  try {
    const { Signature } = await client.send(new SignCommand(params));
    if (Signature) {
      return Signature.toString();
    } else {
      throw new Error("Signature is null");
    }
  } catch (error) {
    console.error("Error signing data:", error);
    throw new Error("Failed to sign data");
  }
};

export const verifyData = async (
  data: string,
  signature: string
): Promise<boolean> => {
  const params: VerifyCommandInput = {
    KeyId: config.kmsKeyId,
    Message: Buffer.from(data),
    Signature: Buffer.from(signature, "base64"),
    SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256",
    MessageType: "RAW",
  };

  try {
    const { SignatureValid } = await client.send(new VerifyCommand(params));
    if (SignatureValid) {
      return SignatureValid;
    } else {
      throw new Error("Failed to verify signature");
    }
  } catch (error) {
    console.error("Error verifying signature:", error);
    throw new Error("Failed to verify signature");
  }
};
