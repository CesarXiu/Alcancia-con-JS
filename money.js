class money{
    static itsAValidaValue(value){
        const allowedValues = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]; //Valor del que pueden ser las monedas
        return allowedValues.includes(value) //Revisa si podemos crear una moneda con ese valor
    }
    constructor(value, quantity) {
        if(money.itsAValidaValue(value) && quantity>-1){ //Revisamos si el valor de la moneda es correcto y si la cantidad no es negativa
            this.value = value
            this.quantity = quantity
        }else{
            throw new Error('The value its not valid.') //De lo contrario regresamos un error
        }  
    }
    insertQuantity(add){//Revisamos si la cantidad a agregar es positiva
        (add>-1)? this.quantity += add : console.error('Not a valid quantity')
    }
    getTotal(){
        return this.value * this.quantity
    }
}