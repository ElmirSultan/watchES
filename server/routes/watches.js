import express from "express";
import { addWatch, deleteWatch, showAllWatches } from "../controllers/watches.js";


const router = express.Router();

router.post("/add-a-watch",addWatch);
router.get("/get-all-watches",showAllWatches);
router.delete("/:id/delete-watch",deleteWatch);

export default router;