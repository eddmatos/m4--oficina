import type { Request, Response } from 'express';
import VeiculosService from '../services/veiculos.service.js';

export default class VeiculosController {

    private readonly service: VeiculosService;

    constructor() {
        this.service = new VeiculosService();
    }

    // Listar todos os veículos
    listarTodos = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        const listaVeiculos = await this.service.listar();

        res.status(200).json(listaVeiculos);
    };

    // Criar veículo
    criar = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        const veiculo = req.body;
        const resultado = await this.service.criar(veiculo);

        res.status(201).json(resultado);
    };

    // Editar veículo
    editar = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        const veiculo = req.body;
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({
                erro: 'ID inválido'
            });
            return;
        }

        const resultado = await this.service.editar(veiculo, id);

        if (!resultado) {
            res.status(404).json({
                erro: 'Veículo não encontrado'
            });
            return;
        }

        res.status(200).json(resultado);
    };

    // Apagar veículo
    apagar = async (
        req: Request,
        res: Response
    ): Promise<void> => {

        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({
                erro: 'ID inválido'
            });
            return;
        }

        const resultado = await this.service.apagar(id);

        if (!resultado) {
            res.status(404).json({
                erro: 'Veículo não encontrado'
            });
            return;
        }

        res.status(204).end();
    };
}