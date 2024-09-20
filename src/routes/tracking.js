import Challenge from '../Challenge.js'

/**
     * @openapi
     * '/challenge/tracking/{codigo}':
     *  get:
     *     tags:
     *     - Tracking
     *     summary: Tracking operativo de Coordinadora
     *     description: Tracking Operativo Coordinadora por etiqueta o guia
     *     parameters:
     *      - name: codigo
     *        in: path
     *        description: Codigo
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
     *                   type: object
     *                   description: Objeto con la respuesta del proceso
     *                   properties:
     *                     isError:
     *                       type: boolean
     *                       description: Indica si la solicitud ha tenido errores
     *                     status:
     *                       type: string
     *                       description: Estado de la solicitud
     *                     data:
     *                       type: object
     *                       description: Objeto con la información del guia
     *                       properties:
     *                         etiqueta:
     *                           type: string
     *                           description: Código de la etiqueta
     *                         informacion_guia:
     *                           type: object
     *                           description: Información de la guia
     *                           properties:
     *                             codigoRemision:
     *                               type: string
     *                               description: Código de la unidad remision
     *                             nombreDestinatario:
     *                               type: string
     *                               description: Nombre del destinatario
     *                             dirDestinatario:
     *                               type: string
     *                               description: Dirección del destinatario
     *                         cantidad_checkpoints:
     *                           type: number
     *                           description: Cantidad de checkpoints
     *                         tracking:
     *                           type: array
     *                           description: Array de checkpoints
     *                           items:
     *                             type: object
     *                             description: Objeto con el checkpoint
     *                             properties:
     *                               checkpoint:
     *                                 type: string
     *                                 description: Checkpoint
     *                               tipo:
     *                                 type: string
     *                                 description: Tipo de checkpoint
     *       400:
     *         description: Código no encontrado o no válido
     *         content: {}
     *       500:
     *         description: Error en la solicitud a la API
     * */
const tracking = async (req, res) => {
  const id = req.params.codigo

  const ch = new Challenge()

  res.send({
    response: await ch.tracking(id)
  })
}

export default tracking
