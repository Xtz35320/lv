import * as Categoria from '../models/CategoriaModel.js';
import * as View from '../view/index.js';

export const consultarPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Categoria.consultarPorId(id);
        View.result(res, 'GET', result);
    } catch (error) {
        View.erro(res, error);
    }
};

export const consultar = async (req, res) => {
    try {
        const tipo = req.query.tipo;
        let result;
        if (tipo) {
            result = await Categoria.consultarPorTipo(tipo);
        } else {
            result = await Categoria.consultar();
        }
        View.result(res, 'GET', result);
    } catch (error) {
        View.erro(res, error);
    }
};

export const cadastrar = async (req, res) => {
    try {
        const categoria = req.body;
        const result = await Categoria.cadastrar(categoria);
        View.result(res, 'POST', result);
    } catch (error) {
        View.erro(res, error);
    }
};

export const alterar = async (req, res) => {
    try {
        let categoria = req.body;
        categoria.id = req.params.id;
        const result = await Categoria.alterar(categoria);
        View.result(res, 'PUT', result);
    } catch (error) {
        View.erro(res, error);
    }
};

export const deletar = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await Categoria.deletar(id);
        View.result(res, 'DELETE', result);
    } catch (error) {
        View.erro(res, error);
    }
};
