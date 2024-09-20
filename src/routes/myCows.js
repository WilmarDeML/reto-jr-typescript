import Challenge from '../Challenge.js'

/**
     * @openapi
     * '/challenge/myCows/':
     *  post:
     *     tags:
     *     - My Cows Post
     *     summary: Calcula la producción de leche de un número de vacas en una semana
     *     description: Obtiene cálculos de producción de leche de un número de vacas en una semana
     *     requestBody:
     *       required: false
     *       content:
     *         application/json:
     *           schema:
     *             type: array
     *             items:
     *               type: array
     *               items:
     *                 type: number
     *     responses:
     *       200:
     *         description: Resultado del proceso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 cantidadVacas:
     *                   type: number
     *                 produccionTotalPorDia:
     *                   type: array
     *                   description: Production total por dia
     *                   items:
     *                     type: object
     *                     description: Production total por dia
     *                     properties:
     *                       dia:
     *                         type: number
     *                         description: Día
     *                       produccion:
     *                         type: number
     *                         description: Production
     *                 mejorDia:
     *                   type: object
     *                   description: Mejor dia
     *                   properties:
     *                     dia:
     *                       type: number
     *                       description: Día
     *                     produccion:
     *                       type: number
     *                       description: Production
     *                 peorDia:
     *                   type: object
     *                   description: Peor dia
     *                   properties:
     *                     dia:
     *                       type: number
     *                       description: Día
     *                     produccion:
     *                       type: number
     *                       description: Production
     *                 mejorVacaPorDia:
     *                   type: array
     *                   description: Mejor vaca por dia
     *                   items:
     *                     type: object
     *                     properties:
     *                       dia:
     *                         type: number
     *                         description: Día
     *                       litraje:
     *                         type: number
     *                         description: Litraje
     *                       vaca:
     *                         type: array
     *                         description: Vaca
     *                         items:
     *                           type: number
     *                           description: Vaca
     *       400:
     *         description: Número de vacas no puede ser menor que 3 o mayor que 50
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Mensaje de error
     * */
export const myCowsPost = (req, res) => {
  const n = Number(req.query.n)
  const arr = req.body.length ? req.body : []

  for (const [index, subArray] of arr.entries()) {
    if (subArray.length < 3 || subArray.length > 50) {
      return res.status(400).send({
        message: `El día ${index + 1} con ${subArray.length} vacas no está dentro del rango entre 3 y 50 vacas, ¡Intente de nuevo!`
      })
    }
  }

  const ch = new Challenge()

  res.send({ cantidadVacas: n, ...ch.myCows(n, arr) })
}

/**
     * @openapi
     * '/challenge/myCows/':
     *  get:
     *     tags:
     *     - My Cows Get
     *     summary: Calcula la producción de leche de un número de vacas (n) en una semana
     *     description: Obtiene cálculos de producción de leche de un número de vacas en una semana, con valores random
     *     parameters:
     *      - name: n
     *        in: query
     *        description: Número de vacas
     *        required: true
     *        schema:
     *          type: number
     *     responses:
     *       200:
     *         description: Resultado del proceso con valores de producción de leche por vaca y día entre 0 y 11.99
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 cantidadVacas:
     *                   type: number
     *                 produccionTotalPorDia:
     *                   type: array
     *                   description: Production total por dia
     *                   items:
     *                     type: object
     *                     description: Production total por dia
     *                     properties:
     *                       dia:
     *                         type: number
     *                         description: Día
     *                       produccion:
     *                         type: number
     *                         description: Production
     *                 mejorDia:
     *                   type: object
     *                   description: Mejor dia
     *                   properties:
     *                     dia:
     *                       type: number
     *                       description: Día
     *                     produccion:
     *                       type: number
     *                       description: Production
     *                 peorDia:
     *                   type: object
     *                   description: Peor dia
     *                   properties:
     *                     dia:
     *                       type: number
     *                       description: Día
     *                     produccion:
     *                       type: number
     *                       description: Production
     *                 mejorVacaPorDia:
     *                   type: array
     *                   description: Mejor vaca por dia
     *                   items:
     *                     type: object
     *                     properties:
     *                       dia:
     *                         type: number
     *                         description: Día
     *                       litraje:
     *                         type: number
     *                         description: Litraje
     *                       vaca:
     *                         type: array
     *                         description: Vaca
     *                         items:
     *                           type: number
     *                           description: Vaca
     *       400:
     *         description: Número de vacas no puede ser menor que 3 o mayor que 50
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Mensaje de error
     * */
export const myCowsGet = (req, res) => {
  const n = Number(req.query.n)

  if (n < 3 || n > 50) {
    return res.status(400).send({ message: `Número de vacas ${n} no está dentro del rango intente con un valor entre 3 y 50 vacas` })
  }

  const ch = new Challenge()

  res.send({ cantidadVacas: n, ...ch.myCows(n, null) })
}
