import Challenge from '../Challenge.js'

/**
     * @openapi
     * '/challenge/strManipulation/':
     *  get:
     *     tags:
     *     - String Manipulation
     *     summary: Valida si una cadena de texto tiene un signo de admiración (!) al final
     *     description: Validar si al final de una dadena de caracteres enviada tiene un signo de admiración (!)
     *     parameters:
     *      - name: str
     *        in: query
     *        description: Cadena de texto
     *        required: true
     *        schema:
     *          type: string
     *     responses:
     *       200:
     *         description: Resultado del proceso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 response:
     *                   type: string
     *                   description: Cadena de texto resultante
     *                 request:
     *                   type: string
     *                   description: Cadena de texto evaluada
     * */
const stringManipulation = async (req, res) => {
  const str = req.query?.str ?? ''

  const ch = new Challenge()

  res.send({
    response: ch.evaluarSigno(str),
    request: str
  })
}

export default stringManipulation
