import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Importando as rotas
import veiculoRoute from './routes/veiculoRoute.js';
import categoriaRoute from './routes/categoriaRoute.js'; // Ativada
import usuarioRoute from './routes/usuarioRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

// Rota raiz (pública) mostrando status e endpoints
app.get('/', (req, res) => {
    const rootDomain = req.protocol + '://' + req.get('host');
    res.status(200).json({
        status_server: 'ok',
        dominio_raiz: rootDomain,
        atualização: '27/08/2025 - 10:30',
        rotas: {
            // Veículo
            'GET - Consultar veículo por ID': `${rootDomain}/api/veiculo/:id`,
            'GET - Consultar todos os veículos': `${rootDomain}/api/veiculos`,
            'GET - Consultar veículos por modelo': `${rootDomain}/api/veiculos?modelo=Fusca`,
            'POST - Cadastrar veículo': `${rootDomain}/api/veiculo`,
            'PUT - Alterar veículo': `${rootDomain}/api/veiculo/:id`,
            'DELETE - Deletar veículo': `${rootDomain}/api/veiculo/:id`,
            // Categoria
            'GET - Consultar categoria por ID': `${rootDomain}/api/categoria/:id`,
            'GET - Consultar todas as categorias': `${rootDomain}/api/categorias`,
            'GET - Consultar categorias por tipo': `${rootDomain}/api/categorias?tipo=SUV`,
            'POST - Cadastrar categoria': `${rootDomain}/api/categoria`,
            'PUT - Alterar categoria': `${rootDomain}/api/categoria/:id`,
            'DELETE - Deletar categoria': `${rootDomain}/api/categoria/:id`,
            // Login
            'POST - usuario ': `${rootDomain}/usuario`,
            'POST - usuario login': `${rootDomain}/usuario/login`,
            'GET - usuarios ': `${rootDomain}/usuarios`,
            'GET - usuario id': `${rootDomain}/usuarios/:id`,
            'GET - usuario ': `${rootDomain}/usuario`,
            'GET - usuario email ': `${rootDomain}/usuario/email/:email`,
            'PATCH - usuario id ': `${rootDomain}/usuario/:id`,
            'PUT - usuario id ': `${rootDomain}/usuario/:id`,
            'DELETE - usuario id ': `${rootDomain}/usuario/:id`
        }
    });
});

// Configurando as rotas
app.use('/api', veiculoRoute);
app.use('/api', categoriaRoute); // Ativada

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('🚀 Sistema inicializado: ', `Acesso: http://localhost:${PORT}`);
});
