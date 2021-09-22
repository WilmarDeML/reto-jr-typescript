import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    let arrStr: string[]
    req.query.array ? arrStr = String(req.query.array).split(',') : arrStr = []

    let arrNum: number[] = arrStr.map(i => parseInt(i))

    const ch: Challenge = new Challenge
    const response = await ch.arrayScore(arrNum);

    res.send({
        Response: response
    });
})

export default router