import { Request, Response } from "express";
import { DataStore } from "../models/DataStore";
import { signData, verifyData } from "../utils/cryptoUtils";

const dataStore = new DataStore();

export const getData = async (req: Request, res: Response): Promise<void> => {
  res.json(dataStore.getCurrentData());
};

export const updateData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { data } = req.body;
  const newSignature = await signData(data);
  dataStore.updateData(data, newSignature);
  res.sendStatus(200);
};

export const verifyDataEndpoint = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { data, signature } = dataStore.getCurrentData();
  const isValid = await verifyData(data, signature);
  const response = {
    isValid,
    originalData: isValid ? null : dataStore.getLastValidData()?.data,
  };
  res.json(response);
};
