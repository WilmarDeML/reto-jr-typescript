import axios from "axios";
import { response } from "express";
import { createHeritageClause } from "typescript";
class Challenge {

    // x: number;
    // y: number;

    // constructor(a: number, b: number){
    //     this.x = a
    //     this.y = b
    // }

    public async average(a: number, b: number){
        try {
            const response = {
                ok: (a + b) / 2,
                fail: a + b / 2
            };
            return response
        } catch (error) {
            throw new TypeError('Ha ocurrido un error con este reto')
        }
    }

    public async evaluarSigno(cadena: string){
        try {
            
            return cadena[cadena.length - 1] === '!' ? 
                cadena.substr(0, cadena.length - 1) :
                cadena
            
        } catch (error) {
            throw new TypeError('Ha ocurrido un error con este reto')
        }
    }

    public async sumArray(arr: Array<number>/*number[]*/){
        const response: any = {
            sumaTotal: 0,
            sumaEntPos: 0,
            sumaPares: 0,
            sumaImpares: 0
        }
        
        arr.forEach(element => {
            response.sumaTotal += element
            element > 0 && (response.sumaEntPos += element)
            element % 2 === 0 ? response.sumaPares += element : response.sumaImpares += element
        });

        return response
    }

    public async arrayScore(arr: Array<number>/*number[]*/){
        const response: any = {
            input: arr,
            output: 0
        }
        
        arr.forEach(element => {
            
            element % 2 === 0 ? response.output += 1 
            :
                element !== 5 ? response.output += 3 
            :
            response.output += 5
        });

        return response
    }

    public async transformArray(matriz: any[][], order: string){
        let response: number[] = []

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                const parse = Number(matriz[i][j])
                !isNaN(parse) && parse % 1 === 0 && response.push(parse)            
            }
            
        }
        
        if (order) {
            order.toUpperCase() === 'ASC' ? response.sort((a, b) => a - b) :
            order.toUpperCase() === 'DESC' ? response.sort((a, b) => b - a) :
            response
        }

        return response
    }

    public async myCows(nVacas: number){
        let response = {}
        if (nVacas < 3 || nVacas > 50){
            response = {
                message: `${nVacas} no está dentro del rango intente con un valor entre 3 y 50 vacas`
            }
            return response
        }
        let matrizVacas: number[][] = []
        let producTotalPorDia: any[] = [];

        let sumaMayor: number = 0
        let mejorDia: any[] = []

        let sumaMenor: number = 999999
        let peorDia: any[] = []
        let mayorLitraje: number[] = []

        //LLeno la matriz con números aleatorios entre 0 y 11.9
        console.log(`\nMatriz de 7 días y ${nVacas} vacas`)
        for (let i = 0; i < 7; i++) {

            mayorLitraje[i] = 0

            matrizVacas[i] = []

            producTotalPorDia[i] = [`dia${i+1}`, 0]

            process.stdout.write(`Día ${i+1} `)

            for (let j = 0; j < nVacas; j++) {

                let numero = Math.random()*11.9

                matrizVacas[i][j] = Number.parseFloat(numero.toFixed(2))

                producTotalPorDia[i][1] += matrizVacas[i][j]

                if(matrizVacas[i][j] > mayorLitraje[i]){
                    mayorLitraje[i] = matrizVacas[i][j]
                }

                process.stdout.write(`Vaca ${j+1}: ${matrizVacas[i][j]}L `)
            }

            if(producTotalPorDia[i][1] > sumaMayor){ 
                sumaMayor = producTotalPorDia[i][1]
            }
            
            if(producTotalPorDia[i][1] < sumaMenor){ 
                sumaMenor = producTotalPorDia[i][1]
            }
            console.log('')
        }

        console.log('\nProducción Total del hato')
        producTotalPorDia.forEach((litros, i) => console.log(`Día ${i+1}: ${litros[1]}L`))
        
        //Recorre el arreglo de producción por día para actualizar el mejor y el peor dia
        console.log('\nDía de la semana con mayor y menor producción')
        for (let i = 0; i < producTotalPorDia.length; i++) {
            const element = producTotalPorDia[i][1]
            if( element === sumaMayor ) mejorDia.push([`dia${i+1}`, i+1])
            if( element === sumaMenor ) peorDia.push([`dia${i+1}`, i+1])
        }
        console.log(`Mayor producción: Dia ${mejorDia.map(dia => dia[1])}`)
        console.log(`Menor producción: Dia ${peorDia.map(dia => dia[1])}`)


        console.log('\nEl número de la vaca que dió mas leche cada día')
        let mejorVacaPorDia: any[][] = []

        for (let i = 0; i < 7; i++) {
           
            mejorVacaPorDia[i] = []
            
            for (let j = 0; j < nVacas; j++) {
                if(matrizVacas[i][j] === mayorLitraje[i]){
                    mejorVacaPorDia[i].push(`dia: ${i+1}`, `Vaca: ${j+1}`)
                }
            }

            console.log(`Día ${i+1}: ${mejorVacaPorDia[i][1]}`)
        }
        
                 
        console.log(mejorVacaPorDia[0])
        const objTotalPorDia: Object = Object.fromEntries(producTotalPorDia)
        const objMejorDia: Object = Object.fromEntries(mejorDia)
        const objPeorDia: Object = Object.fromEntries(peorDia)
        
        response = {
            producTotalPorDia: objTotalPorDia,
            mejorDia: objMejorDia,
            peorDia: objPeorDia,
            mejorVacaPorDia
        }

        return response
    }

    public async tracking(codigo: string){
        
        //Valida si el código tiene 11 dígitos que corresponden a una guía
        if(codigo.length === 11 ){

            const respuesta: any = (await axios.get('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/')).data
           
            const { status, data, isError } = respuesta

            const { guias } = data
        
            const guiaEncontrada: any = guias.find((guia: any) => guia.codigo_remision === codigo)
            
            if(guiaEncontrada){

                const { unidades } = guiaEncontrada

                const dataEtiquetas: any = (await axios.get('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint/')).data

                const { data } = dataEtiquetas

                const unidadesActuales: any[] = unidades.map((unidad: any, i: number) => {

                    const etiquetasEncontradas: any[] = data.filter((e: any) => e.etiqueta1d === unidad.etiqueta1d)

                    const tracking: Object = etiquetasEncontradas.map((e: any, i: number) => {
                        return {
                            checkpoint: e.checkpoint,
                            tipo: e.tipo
                        }
                    })
                    
                    return {
                        etiqueta1d: unidad.etiqueta1d,
                        cantidad_checkpoints: etiquetasEncontradas.length,
                        tracking
                    }
                })

                const response: Object = {
                    isError,
                    status,
                    data: {
                        ...guiaEncontrada,
                        unidades: unidadesActuales
                    },    
                }

                return response
            //Si no existe la guía
            } else {
                const response: Object = {
                    isError: true,
                    status,
                    data: {
                        mensage: 'La guía no fue encontrada!'
                    }
                }
                return response;
            }   
        // Valida que el código corresponda a una etiqueta1d         
        } else if (codigo.length === 15 && codigo[0] === '7') {

            const respuesta: any = (await axios.get('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/')).data

            const { status, data, isError } = respuesta

            const { guias } = data

            const etiquetaEncontrada: any = guias.find((guia: any) => guia.unidades.find((unidad: any) => unidad.etiqueta1d === codigo))

            if(etiquetaEncontrada){

                const dataEtiquetas: any = (await axios.get('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint/')).data

                const { data } = dataEtiquetas

                const etiquetasEncontradas: any[] = data.filter((e: any) => e.etiqueta1d === codigo)

                const { codigo_remision, nombre_destinatario, dir_destinatario } = etiquetaEncontrada
                
                const tracking: Object = etiquetasEncontradas.map((e: any) => {
                    return {
                        checkpoint: e.checkpoint,
                        tipo: e.tipo
                    }
                })

                const response: Object = {
                    isError,
                    status,
                    data: {
                        etiqueta: codigo,
                        informacion_guia: {
                            codigo_remision,
                            nombre_destinatario,
                            dir_destinatario
                        },
                        cantidad_checkpoints: etiquetasEncontradas.length,
                        tracking
                    }    
                }

                return response
            //Si no existe la etiqueta
            } else {
                const response: Object = {
                    isError: true,
                    status,
                    data: {
                        mensage: 'La etiqueta no fue encontrada!'
                    }
                }
            }
            const response: Object = {
                etiquetaEncontrada
            }

            return response
        //Si se ingresa un código que no corresponda a una guía ni a una etiqueta
        } else {
            const response: Object = {
                isError: true,
                status: "failure",
                data: {
                    mensage: 'El código no corresponde a una guía ni a una etiqueta válida!!'
                }
            }
        }
    }
}

export default Challenge