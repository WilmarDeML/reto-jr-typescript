import { Router } from "express";

import Challenge from "../Challenge";
const router = Router();

router.get('/', async (req, res) => {
    let arr: number[] = []
    const ch = new Challenge
    const response = await ch.sumArray(arr);
    res.send({
        Response: response
    });
})

export default router