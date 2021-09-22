import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    const num1: number = Number(req.query.a)
    const num2: number = Number(req.query.b)
    
    const ch: Challenge = new Challenge
    const promedio = await ch.average(num1, num2);

    res.send({
        numerosEvaluados: `${num1} y ${num2}`,
        errorExpresion: `${num1} + ${num2} / 2`,
        correctExpresion: `(${num1} + ${num2}) / 2`,
        averageOk: promedio.ok,
        averageFail: promedio.fail,
        description: 'Por jerarquía se ejecuta primero la división cuando no hay parentesis y luego la suma'
    });
})

export default router