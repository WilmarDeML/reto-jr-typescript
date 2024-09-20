/**
 * @openapi
 * '/':
 *  get:
 *     tags:
 *     - Redirect
 *     summary: Redirecciona a la ruta principal
 *     description: Redirecciona a la ruta principal desde cualquier ruta no implementada
 *     responses:
 *       302:
 *         description: Redirección a la ruta principal
 *         content: {}
 * */
const redirect = (_req, res) => {
  res.redirect('/challenge')
}

export default redirect
