import express from 'express'

import frontendRoutes from './routes/frontend.routes.js'
import veiculosRoutes from './routes/veiculos.routes.js'
import errorMiddleware from './middlewares/error.middleware.js';

const app = express()
app.use(express.json())

// Frontend
app.use('/', frontendRoutes)

// API
app.use('/api/veiculos', veiculosRoutes)

// Tratar erros
app.use(errorMiddleware);

export default app