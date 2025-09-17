import pool from '../database/data.js';

export const consultar = async () => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados, meta_dados] = await cx.query('SELECT * FROM veiculo');
        return dados;
    } 
    catch (error) {
        throw error;
    }
    finally {
        if (cx) cx.release(); // Libere a conexão após o uso
    }
};

export const consultarPorModelo = async (modelo) => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados, meta_dados] = await cx.query('SELECT * FROM veiculo WHERE `modelo` = ?;', [modelo]);
        return dados;
    } 
    catch (error) {
        throw error;
    }
    finally {
        if (cx) cx.release(); // Libere a conexão após o uso
    }
};

export const consultarPorId = async (id) => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados, meta_dados] = await cx.query('SELECT * FROM veiculo WHERE id = ?;', [id]);
        return dados;
    } 
    catch (error) {
        throw error;
    }
    finally {
        if (cx) cx.release(); // Libere a conexão após o uso
    }
};

export const cadastrar = async (veiculo) => {
    let cx;
    try {
        const { modelo, ano_fabricacao,	ano_modelo,	cor,num_portas,	fotos, categoria_id, montadora_id, tipo_cambio, tipo_direcao } = veiculo;
        const cmdSql = 'INSERT INTO veiculo (`modelo`, `ano_fabricacao`, `ano_modelo`, `cor`, `num_portas`, `fotos`, `categoria_id`, `montadora_id`, `tipo_cambio`, `tipo_direcao`) VALUES (?,?,?,?,?,?,?,?,?,?);';
        
        cx = await pool.getConnection();
        await cx.query(cmdSql, [modelo, ano_fabricacao,	ano_modelo,	cor,num_portas,	fotos, categoria_id, montadora_id, tipo_cambio, tipo_direcao ]);
        const [dados] = await cx.query('SELECT * FROM veiculo WHERE `modelo` = ?;', [modelo]);
        return dados;
    } 
    catch (error) {
        throw error;
    }
    finally {
        if (cx) cx.release(); // Libere a conexão após o uso
    }
};

export const alterar = async (veiculo) => {
    let cx;
    try {
        const { modelo,  ano_fabricacao, ano_modelo, cor, num_portas, fotos, categoria_id, montadora_id, tipo_cambio, tipo_direcao, id } = veiculo;
        const cmdSql = 'UPDATE veiculo SET `modelo`=?, `ano_fabricacao`=?, `ano_modelo`=?, `cor`=?, `num_portas`=?, `fotos`=?, `categoria_id`=?, `montadora_id`=?, `tipo_cambio`=?, `tipo_direcao`=? WHERE id = ?';

        cx = await pool.getConnection();

        const [execucao] = await cx.query(cmdSql, [modelo,  ano_fabricacao,	ano_modelo,	cor,num_portas,	fotos, categoria_id, montadora_id, tipo_cambio, tipo_direcao ,id]);

        if(execucao.affectedRows > 0){
            const [dados, meta_dados] = await cx.query('SELECT * FROM veiculo WHERE id = ?;', [id]);
            return dados;
        }
        return [];
    } 
    catch (error) {
        throw error;
    }
    finally {
        if (cx) cx.release(); // Libere a conexão após o uso
    }
};

export const deletar = async (id) => {
    let cx;
    try {
        cx = await pool.getConnection();
        const [dados, meta_dados] = await cx.query('DELETE FROM veiculo WHERE id = ?;', [id]);
        return dados;
    }
    catch (error) {
        throw error;
    }
    finally {
        if (cx) cx.release(); // Libere a conexão após o uso
    }
};

