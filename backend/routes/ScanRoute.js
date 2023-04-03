import express from "express";
import {
  getScan,
  getScanById,
  createScan,
  updateScan,
  deleteScan,
} from "../controllers/ScanController.js";

const router = express.Router();

router.get("/scan", getScan);
router.get("/scan/:id", getScanById);
router.post("/scan", createScan);
router.patch("/scan/:id", updateScan);
router.delete("/scan/:id", deleteScan);

export default router;
