import { Router } from 'express'
import VeiculosController from '../controllers/veiculos.controller.js'

const router = Router()
const veiculosController =  new VeiculosController()

// Listar todos
router.get('/', veiculosController.listarTodos)

// Criar veículo
router.post('/criar', veiculosController.criar)

// Editar veículo
router.patch('/editar/:placa', veiculosController.editar)

// Apagar veículo
router.delete('/apagar/:placa', veiculosController.apagar)

export default router