import { Router } from "express";
import { Request, Response } from "express";
import Challenge from "../Challenge";

const router = Router();

router.get('/:codigo', async (req: Request, res: Response) => {
    const id: string = req.params.codigo
    
    const ch: Challenge = new Challenge
    const response = await ch.tracking(id);

    res.send({
        response
    });
})

export default router