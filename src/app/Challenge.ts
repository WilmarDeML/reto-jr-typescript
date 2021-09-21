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
}

export default Challenge