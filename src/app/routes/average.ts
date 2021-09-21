import { Router } from "express";

import Challenge from "../Challenge";
const router = Router();

router.get('/', async (req, res) => {
    const num1 = Number(req.query.a)
    const num2 = Number(req.query.b)
    // const numero1 = req.query
    // const numeros = req.body
    const ch = new Challenge
    const promedio = await ch.average(num1, num2);
    res.send({
        errorExpresion: `${num1} + ${num2} / 2`,
        correctExpresion: `(${num1} + ${num2}) / 2`,
        averageOk: promedio.ok,
        averageFail: promedio.fail,
        description: 'Por jerarquía se ejecuta primero la división cuando no hay parentesis y luego la suma'
    });
})

export default router