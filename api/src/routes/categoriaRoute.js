import express from 'express';
import * as categoriaController from '../controllers/categoriaController.js';
import autenticar from "../middlewares/autenticacao.js";

const router = express.Router();

router.get('/categoria/:id', autenticar,  categoriaController.consultarPorId);
router.get('/categorias', autenticar, categoriaController.consultar);
router.post('/categoria', autenticar, categoriaController.cadastrar);
router.put('/categoria/:id', autenticar, categoriaController.alterar);
router.delete('/categoria/:id', autenticar, categoriaController.deletar);

export default router;
