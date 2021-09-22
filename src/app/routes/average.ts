import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    const num1: number = Number(req.query.a)
    const num2: number = Number(req.query.b)
    
    const ch: Challenge = new Challenge
    const response = await ch.average(num1, num2);

    res.send({
        response
    });
})

export default router