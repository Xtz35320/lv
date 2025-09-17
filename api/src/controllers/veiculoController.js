import * as Veiculo from '../models/VeiculoModel.js';
import * as View from '../view/index.js';

export const consultarPorId = async (req, res)=>{
    try {
        const id = req.params.id;
        const result = await Veiculo.consultarPorId(id);
        View.result(res,'GET',result);
    } catch (error) {
        View.erro(res, error);
    }
}

export const consultar = async (req, res)=>{
    try {
        const modelo = req.query.modelo;
        let result;
        if(modelo){
            result = await Veiculo.consultarPorModelo(modelo);
        }
        else{
            result = await Veiculo.consultar();
        }
        View.result(res,'GET',result);
    } catch (error) {
        View.erro(res, error);
    }
}

export const cadastrar = async (req, res)=>{
    try {
        const veiculo = req.body; 
        const result = await Veiculo.cadastrar(veiculo);
        View.result(res, 'POST',result);
    } catch (error) {
        View.erro(res,error);
    }
}

export const alterar = async (req, res)=>{
    try {
        let veiculo = req.body;
        veiculo.id = req.params.id;
        const result = await Veiculo.alterar(veiculo);
        View.result(res, 'PUT',result);
    } catch (error) {
        View.erro(res,error);
    }
}

export const deletar = async (req, res)=>{
    try {
        let id = req.params.id;
        const result = await Veiculo.deletar(id);
        return View.result(res,'DELETE',result);
    } catch (error) {
        return View.erro(res, error);
    }
}