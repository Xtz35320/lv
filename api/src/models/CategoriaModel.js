import pool from '../database/data.js';

export const consultar = async () => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados] = await cx.query('SELECT * FROM categoria');
        return dados;
    } catch (error) {
        throw error;
    } finally {
        if (cx) cx.release();
    }
};

export const consultarPorTipo = async (tipo) => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados] = await cx.query('SELECT * FROM categoria WHERE `tipo` = ?;', [tipo]);
        return dados;
    } catch (error) {
        throw error;
    } finally {
        if (cx) cx.release();
    }
};

export const consultarPorId = async (id) => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados] = await cx.query('SELECT * FROM categoria WHERE id = ?;', [id]);
        return dados;
    } catch (error) {
        throw error;
    } finally {
        if (cx) cx.release();
    }
};

export const cadastrar = async (categoria) => {
    let cx;
    try {
        const { tipo, icone } = categoria;
        const cmdSql = 'INSERT INTO categoria (`tipo`, `icone`, `data_cadastro`) VALUES (?, ?, NOW());';
        cx = await pool.getConnection();
        await cx.query(cmdSql, [tipo, icone]);
        const [dados] = await cx.query('SELECT * FROM categoria WHERE `tipo` = ?;', [tipo]);
        return dados;
    } catch (error) {
        throw error;
    } finally {
        if (cx) cx.release();
    }
};

export const alterar = async (categoria) => {
    let cx;
    try {
        const { tipo, icone, id } = categoria;
        const cmdSql = 'UPDATE categoria SET `tipo`=?, `icone`=?, `data_alteracao`=NOW() WHERE id=?;';
        cx = await pool.getConnection();
        const [execucao] = await cx.query(cmdSql, [tipo, icone, id]);

        if (execucao.affectedRows > 0) {
            const [dados,] = await cx.query('SELECT * FROM categoria WHERE id = ?;', [id]);
            return dados;
        }
        return [];
    } catch (error) {
        throw error;
    } finally {
        if (cx) cx.release();
    }
};

export const deletar = async (id) => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados] = await cx.query('DELETE FROM categoria WHERE id = ?;', [id]);
        return dados;
    } catch (error) {
        throw error;
    } finally {
        if (cx) cx.release();
    }
};
