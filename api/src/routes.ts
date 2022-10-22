import { Router } from "express";
import validate from "./middleware/validateRequest";
import { symbolSchema,groupSchema,periodSchema,blockSchema,atomicNumberSchema,stateSchema } from "./schema/route.schema";
import { getElementsHandler } from "./controller/elements.controller";

const router = Router();

router.get("/", getElementsHandler)
router.get("/symbol/:symbol", validate(symbolSchema), getElementsHandler);
router.get("/group/:group", validate(groupSchema), getElementsHandler)
router.get("/period/:period", validate(periodSchema), getElementsHandler)
router.get("/block/:block", validate(blockSchema), getElementsHandler)
router.get("/number/:atomicNumber", validate(atomicNumberSchema), getElementsHandler)
router.get("/state/:standardState", validate(stateSchema), getElementsHandler)


export default router;