import Challenge from '../Challenge.js'

/**
     * @openapi
     * '/challenge/average/':
     *  get:
     *     tags:
     *     - Encuentra el error
     *     summary: Promedio entre dos numeros
     *     description: Obtiene el promedio entre dos numeros
     *     parameters:
     *      - name: a
     *        in: query
     *        description: Primer numero
     *        required: true
     *        schema:
     *          type: number
     *      - name: b
     *        in: query
     *        description: Segundo numero
     *        required: true
     *        schema:
     *          type: number
     *     responses:
     *       200:
     *         description: Resultado del promedio
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 numerosEvaluados:
     *                   type: string
     *                   description: Números evaluados
     *                 errorExpresion:
     *                   type: string
     *                   description: La expresión de error
     *                 correctExpresion:
     *                   type: string
     *                   description: La expresión correcta
     *                 ok:
     *                   type: number
     *                   description: Resultado con la expresión correcta
     *                 fail:
     *                   type: number
     *                   description: Resultado con la expresión de error
     *                 description:
     *                   type: string
     *                   description: Descripción del resultado del promedio
     */
const average = async (req, res) => {
  const num1 = Number(req.query.a)
  const num2 = Number(req.query.b)

  const ch = new Challenge()

  res.send({
    response: ch.average(num1, num2)
  })
}

export default average
