import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    let order = String(req.query.order)
    let arrStr: string[][]

    arrStr = String(req.query.array).split(':').map(i => i.split(','))
    
    const ch: Challenge = new Challenge
    const response = await ch.transformArray(arrStr, order);

    res.send({
        Response: response,
        Request: arrStr
    });
})

export default router