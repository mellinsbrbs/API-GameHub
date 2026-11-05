import { Router } from "express";
import * as jogadoresController from "../controllers/estudioController.js";
import { validarId } from "../middlewares/validarId.js";


const router = Router();

router.get("/", jogadoresController.listar);
router.get("/:id", validarId, jogadoresControllerController.buscarPorId);
router.post("/", jogadoresControllerController.criar);
router.put("/:id", validarId, jogadoresControllerController.atualizar);
router.delete("/:id", validarId, jogadoresControllerController.excluir);

export default router;