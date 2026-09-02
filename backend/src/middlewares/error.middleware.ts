import type { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (
    err,
    req,
    res,
    next
) => {
    console.error(err);

    if (res.headersSent) {
        next(err);
        return;
    }

    res.status(500).json({
        error: 'Erro interno do servidor'
    });
};

export default errorMiddleware;