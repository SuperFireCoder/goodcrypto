import { Router } from "express";
import * as dataController from "../controllers/dataController";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve the current data
 *     responses:
 *       200:
 *         description: Successfully retrieved data
 */
router.get("/", dataController.getData);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Update the current data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 example: "New data"
 *     responses:
 *       200:
 *         description: Successfully updated data
 */
router.post("/", dataController.updateData);

/**
 * @swagger
 * /verify:
 *   get:
 *     summary: Verify the data integrity
 *     responses:
 *       200:
 *         description: Successfully verified data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isValid:
 *                   type: boolean
 *                   example: true
 *                 originalData:
 *                   type: string
 *                   example: "Last valid data"
 */
router.get("/verify", dataController.verifyDataEndpoint);

export default router;
