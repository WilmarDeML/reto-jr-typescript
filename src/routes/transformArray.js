import Challenge from '../Challenge.js'

/**
     * @openapi
     * '/challenge/transformArray/':
     *  post:
     *     tags:
     *     - Transform Array
     *     summary: Transforma un array bidimensional en un array unidimensional
     *     description: Transforma un array bidimensional en un array unidimensional de los elementos de tipo entero
     *     parameters:
     *      - name: order
     *        in: query
     *        description: Orden del array de respuesta
     *        required: false
     *        schema:
     *          type: string
     *          enum:
     *            - ASC
     *            - DESC
     *     requestBody:
     *       required: false
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               array:
     *                 type: array
     *                 description: Matriz de números
     *                 items:
     *                   type: array
     *                   items:
     *                     type: number
     *     responses:
     *       200:
     *         description: Resultado del proceso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 response:
     *                   type: array
     *                   description: resultado arreglo de números
     *                   items:
     *                     type: number
     *                 request:
     *                   type: array
     *                   description: Matriz de números ingresada en el body
     *                   items:
     *                     type: array
     *                     items:
     *                       type: number
     * */
const transformArray = (req, res) => {
  const order = req.query.order
  const array = req.body?.array ?? [[]]

  const ch = new Challenge()

  res.send({
    response: ch.transformArray(array, order),
    request: array
  })
}

export default transformArray
