import { Router } from "express";
import validate from "./middleware/validateRequest";
import { getElementsHandler } from "./controller/elements.controller";

const router = Router();

router.get("/", getElementsHandler)
router.get("/symbol/:symbol", validate, getElementsHandler);
router.get("/group/:group", validate, getElementsHandler)
router.get("/period/:period", validate, getElementsHandler)
router.get("/block/:block", validate, getElementsHandler)
router.get("/number/:atomicNumber", validate, getElementsHandler)
router.get("/state/:state", validate, getElementsHandler)


export default router;