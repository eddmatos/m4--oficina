import pool from '../database/pool.js';
import type { Veiculo } from '../models/veiculos.js';

export default class VeiculosService {

    // Listar todos os veículos
    async listar(): Promise<Veiculo[]> {
        const [rows] = await pool.query(
            'SELECT * FROM veiculo'
        );

        return rows as Veiculo[];
    }

    // Criar veículo
    async criar(veiculo: Veiculo): Promise<Veiculo> {
        const [resultado] = await pool.execute(
            `
            INSERT INTO veiculo
                (placa, marca, modelo, ano)
            VALUES
                (?, ?, ?, ?)
            `,
            [
                veiculo.placa,
                veiculo.marca,
                veiculo.modelo,
                veiculo.ano
            ]
        );

        const id = (resultado as { insertId: number }).insertId;

        return {
            ...veiculo,
            id
        };
    }

    // Editar veículo
    async editar(veiculo: Veiculo, placa: any): Promise<Veiculo|null> {
        const [resultado] = await pool.execute(
            `
            UPDATE veiculo
            SET
                placa = ?,
                marca = ?,
                modelo = ?,
                ano = ?
            WHERE placa = ?
            `,
            [
                veiculo.placa,
                veiculo.marca,
                veiculo.modelo,
                veiculo.ano,
                placa
            ]
        );

        const affectedRows = (resultado as {
            affectedRows: number
        }).affectedRows;

        if (affectedRows === 0) {
            return null;
        }

        return {
            ...veiculo,
            placa
        };
    }

    // Apagar veículo
    async apagar(placa: any): Promise<boolean> {
        const [resultado] = await pool.execute(
            'DELETE FROM veiculo WHERE placa = ?',
            [placa]
        );

        const affectedRows = (resultado as {
            affectedRows: number
        }).affectedRows;

        return affectedRows > 0;
    }
}