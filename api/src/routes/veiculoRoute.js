import express from 'express';
import * as veiculo from '../controllers/veiculoController.js';
import autenticar from "../middlewares/autenticacao.js";

const router = express.Router();

router.get('/veiculo/:id', autenticar, veiculo.consultarPorId);
router.get('/veiculos', autenticar, veiculo.consultar);
router.post('/veiculo', autenticar, veiculo.cadastrar);
router.put('/veiculo/:id', autenticar, veiculo.alterar);
router.delete('/veiculo/:id', autenticar, veiculo.deletar);

export default router;