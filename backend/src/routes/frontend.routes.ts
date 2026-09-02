import { Router } from 'express';
import express from 'express'
import path from 'path';

const router = Router();

const frontendPath = path.join(
    process.cwd(),
    'frontend'
);

// Arquivos estáticos
router.use(
    '/assets',
    express.static(path.join(frontendPath, 'assets'))
);

// Inicial
router.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'pages/index.html'));
});

// Veículos
router.get('/veiculos', (req, res) => {
    res.sendFile(path.join(frontendPath, 'pages/veiculos.html'));
});

export default router;