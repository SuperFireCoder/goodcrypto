import { Router } from "express";
import * as dataController from "../controllers/dataController";

const router = Router();

router.get("/", dataController.getData);
router.post("/", dataController.updateData);
router.get("/verify", dataController.verifyDataEndpoint);

export default router;
