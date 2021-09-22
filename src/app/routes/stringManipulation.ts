import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    let str: string
    req.query.str ? str = String(req.query.str) : str = ''

    const ch: Challenge = new Challenge
    const response: string = await ch.evaluarSigno(str);
    
    res.send({
        Response: response,
        Request: str
    });
})

export default router