import axios from 'axios'

class Challenge {
  #BODY_TEST = [
    [3, 4, 2, 3, 4],
    [2, 3, 4, 5, 5],
    [3, 2, 2, 1, 2],
    [1, 1, 1, 1, 1],
    [2, 3, 5, 2, 2],
    [4, 3, 4, 5, 1],
    [2, 2, 2, 2, 2]
  ]

  #NUM_DIAS_SEMANA = 7

  average (a, b) {
    if (a && b) {
      return {
        numerosEvaluados: `${a} y ${b}`,
        errorExpresion: `${a} + ${b} / 2`,
        correctExpresion: `(${a} + ${b}) / 2`,
        ok: (a + b) / 2,
        fail: a + b / 2,
        description: 'Por jerarquía se ejecuta primero la división cuando no hay parentesis y luego la suma'
      }
    } else {
      return {
        info: 'Debe ingresar dos parametros en la dirección http://localhost:3000/challenge/average',
        solucion: 'http://localhost:3000/challenge/average?a=3&b=8',
        sugerencia: 'Cambiar los valores de a={otroNumero} y b={otroNumero}'
      }
    }
  }

  evaluarSigno (cadena) {
    return cadena.at(-1) === '!' ? cadena.slice(0, -1) : cadena
  }

  sumArray (arr) {
    const response = {
      sumaTotal: 0,
      sumaEntPos: 0,
      sumaPares: 0,
      sumaImpares: 0
    }

    arr.forEach(element => {
      response.sumaTotal += element
      element > 0 && Number.isInteger(element) && (response.sumaEntPos += element)
      element % 2 === 0 ? response.sumaPares += element : response.sumaImpares += element
    })

    return response
  }

  arrayScore (arr) {
    const response = {
      input: arr,
      output: 0
    }

    arr.forEach(element => {
      element % 2 === 0
        ? response.output += 1
        : element !== 5
          ? response.output += 3
          : response.output += 5
    })

    return response
  }

  transformArray (matriz, order) {
    const response = matriz.flatMap(row =>
      row.filter(element =>
        typeof element === 'number' && Number.isInteger(element)
      )
    )

    if (order) {
      return order.toUpperCase() === 'ASC'
        ? response.sort((a, b) => a - b)
        : response.sort((a, b) => b - a)
    }

    return response
  }

  obtenerProduccionVacasPorDiaRandom (nVacas) {
    return Array.from({ length: this.#NUM_DIAS_SEMANA }, () =>
      Array.from({ length: nVacas }, () => {
        return parseFloat((Math.random() * 11.99).toFixed(2))
      })
    )
  }

  myCows (nVacas, body) {
    // const produccionVacasPorDia = this.#BODY_TEST
    const produccionVacasPorDia = body ?? this.obtenerProduccionVacasPorDiaRandom(nVacas)

    const produccionTotalPorDia = Array.from({ length: this.#NUM_DIAS_SEMANA }, () => ({ dia: 0, produccion: 0 }))
    const mejorVacaPorDia = Array.from({ length: this.#NUM_DIAS_SEMANA }, () => ({ dia: 0, litraje: 0, vaca: [] }))

    let mayorProduccionDia = -Infinity
    let menorProduccionDia = Infinity
    let mejorDia, peorDia

    console.log(`\nMatriz de ${this.#NUM_DIAS_SEMANA} días y ${nVacas} vacas`)

    for (let i = 0; i < this.#NUM_DIAS_SEMANA; i++) {
      const dia = i + 1
      const produccionDia = produccionVacasPorDia[i].reduce((total, litraje) => total + litraje, 0)
      const mayorLitraje = Math.max(...produccionVacasPorDia[i])

      // Actualizar mejor vaca por día
      mejorVacaPorDia[i] = { dia, litraje: +mayorLitraje.toFixed(2), vaca: [] }

      // Encontrar las vacas con el mayor litraje
      produccionVacasPorDia[i].forEach((litraje, index) => {
        if (litraje === mayorLitraje) {
          mejorVacaPorDia[i].vaca.push(index + 1)
        }
        process.stdout.write(`Vaca ${index + 1}: ${litraje}L `)
      })

      produccionTotalPorDia[i] = { dia, produccion: +produccionDia.toFixed(2) }

      // Determinar mejor y peor día
      if (produccionDia > mayorProduccionDia) {
        mayorProduccionDia = produccionDia
        mejorDia = produccionTotalPorDia[i]
      }

      if (produccionDia < menorProduccionDia) {
        menorProduccionDia = produccionDia
        peorDia = produccionTotalPorDia[i]
      }

      console.log('')
    }

    console.log('\nProducción Total del hato')
    produccionTotalPorDia.forEach(({ dia, produccion }) => console.log(`Día ${dia}: ${produccion}L`))

    // Día de la semana con mayor y menor producción
    console.log('\nDía de la semana con mayor y menor producción')
    console.log('Mayor producción:', mejorDia)
    console.log('Menor producción:', peorDia)

    console.log('\nEl número de la vaca que dio más leche cada día')
    mejorVacaPorDia.forEach(({ dia, vaca }) => {
      console.log(`Día ${dia}: ${vaca}`)
    })

    return {
      produccionTotalPorDia,
      mejorDia,
      peorDia,
      mejorVacaPorDia
    }
  }

  async tracking (codigo) {
    // Validar si el código tiene 11 dígitos (guía)
    if (codigo.length === 11) {
      return await this.buscarGuia(codigo)
    } else if (codigo.length === 15 && codigo[0] === '7') {
      return await this.buscarEtiqueta(codigo)
    } else {
      return this.respuestaError('El código no corresponde a una guía ni a una etiqueta válida!!')
    }
  }

  async buscarGuia (codigo) {
    const { status, data, isError } = await this.obtenerDatosApi('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/')
    const guiaEncontrada = data.guias.find(guia => guia.codigo_remision === codigo)

    if (guiaEncontrada) {
      const { unidades } = guiaEncontrada
      const dataEtiquetas = await this.obtenerDatosApi('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint/')
      const unidadesActuales = this.obtenerUnidadesActuales(unidades, dataEtiquetas.data)

      return {
        isError,
        status,
        data: {
          ...guiaEncontrada,
          unidades: unidadesActuales
        }
      }
    } else {
      return this.respuestaError('La guía no fue encontrada!', isError, status)
    }
  }

  async buscarEtiqueta (codigo) {
    const { status, data, isError } = await this.obtenerDatosApi('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/')
    const etiquetaEncontrada = data.guias.find(guia => guia.unidades.some(unidad => unidad.etiqueta1d === codigo))

    if (etiquetaEncontrada) {
      const dataEtiquetas = await this.obtenerDatosApi('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint/')
      const etiquetasEncontradas = dataEtiquetas.data.filter(e => e.etiqueta1d === codigo)

      const { codigo_remision: codigoRemision, nombre_destinatario: nombreDestinatario, dir_destinatario: dirDestinatario } = etiquetaEncontrada

      return {
        isError,
        status,
        data: {
          etiqueta: codigo,
          informacion_guia: {
            codigoRemision,
            nombreDestinatario,
            dirDestinatario
          },
          cantidad_checkpoints: etiquetasEncontradas.length,
          tracking: etiquetasEncontradas.map(({ checkpoint, tipo }) => ({ checkpoint, tipo }))
        }
      }
    } else {
      return this.respuestaError('La etiqueta no fue encontrada!', isError, status)
    }
  }

  obtenerUnidadesActuales (unidades, data) {
    return unidades.map(unidad => {
      const etiquetasEncontradas = data.filter(e => e.etiqueta1d === unidad.etiqueta1d)
      return {
        etiqueta1d: unidad.etiqueta1d,
        cantidad_checkpoints: etiquetasEncontradas.length,
        tracking: etiquetasEncontradas.map(({ checkpoint, tipo }) => ({ checkpoint, tipo }))
      }
    })
  }

  // Función auxiliar para obtener datos de la API
  obtenerDatosApi = async (url) => {
    try {
      const respuesta = await axios.get(url)
      return respuesta.data
    } catch (error) {
      console.error('Error al obtener datos de la API:', error)
      throw new Error('Error en la solicitud a la API')
    }
  }

  respuestaError (mensaje, isError = true, status = 'failure') {
    return {
      isError,
      status,
      data: { mensaje }
    }
  }
}

export default Challenge
