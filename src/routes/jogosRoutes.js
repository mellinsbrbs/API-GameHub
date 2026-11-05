import { Router } from "express";
import * as jogosController from "../controllers/estudioController.js";
import { validarId } from "../middlewares/validarId.js";


const router = Router();

router.get("/", jogosController.listar);
router.get("/:id", validarId, jogosControllerController.buscarPorId);
router.post("/", jogosControllerController.criar);
router.put("/:id", validarId, jogosControllerController.atualizar);
router.delete("/:id", validarId, jogosControllerController.excluir);

export default router;