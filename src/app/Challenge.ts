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
}

export default Challenge