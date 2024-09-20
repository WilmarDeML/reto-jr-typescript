import Challenge from '../Challenge.js'

/* En un método, a partir de una matriz de números enteros enviada por parámetros, retorne
una puntuación total basada en los siguientes criterios:
1. Agrega 1 punto por cada número par en el arreglo.
2. Agrega 3 puntos por cada número impar en el arreglo, exceptuando el número 5
3. Agrega 5 puntos a cada número 5 que aparezca en el arreglo.
Nota, el 0 es considerado par. */

/**
     * @openapi
     * '/challenge/arrayScore/':
     *  get:
     *     tags:
     *     - Array Score
     *     summary: Puntuación de un array de números
     *     description: |
     *       A partir de una matriz de números enteros enviada por parámetros, retorne
     *       una puntuación total basada en los siguientes criterios:
*            1. Agrega 1 punto por cada número par en el arreglo
     *       2. Agrega 3 puntos por cada número impar en el arreglo, exceptuando el número 5
     *       3. Agrega 5 puntos a cada número 5 que aparezca en el arreglo
     *       Nota, el 0 es considerado par.
     *     parameters:
     *      - name: array
     *        in: query
     *        description: Matriz de números
     *        required: false
     *        schema:
     *          type: array
     *          items:
     *            type: number
     *     responses:
     *       200:
     *         description: Resultado del proceso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 response:
     *                   type: object
     *                   description: Objeto con las propiedades de la puntuación
     *                   properties:
     *                     input:
     *                       type: array
     *                       description: Matriz de números
     *                       items:
     *                         type: number
     *                     output:
     *                       type: number
     *                       description: Puntuación total
     *       400:
     *         description: Error en el body
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Mensaje de error
     *                 error:
     *                   type: string
     *                   description: Mensaje de error
     * */
const arrayScore = async (req, res) => {
  const arrStr = req.query.array ? String(req.query.array).split(',') : []

  const arrNum = arrStr.map(i => parseInt(i))

  const ch = new Challenge()

  res.send({
    response: ch.arrayScore(arrNum)
  })
}

export default arrayScore
