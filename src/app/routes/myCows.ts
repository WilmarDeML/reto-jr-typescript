import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    const n: number = Number(req.query.n);
    const ch: Challenge = new Challenge
    const response: any = await ch.myCows(n);
    
    res.send({
        Response: {
            cantidadVacas: n,
            ...response
        }
    });
})

export default router