class money{
    static ALLOWED_VALUES(){//Metodo estatico que contiene los valores disponibles para crear las monedas
        return [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]; //Regresa un arreglo con los mismos
    } 
    //Recibe el valor para determinar si se puede usar y regresa true si existe o false
    static itsAValidaValue(value){ //Revisa si es un valor valido 
        const allowedValues = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]; //Valor del que pueden ser las monedas
        return allowedValues.includes(value) //Revisa si podemos crear una moneda con ese valor
    }
    //Creamos un objeto con el valor que tendra la moneda y la cantidad de monedas
    constructor(value, quantity) {
        if(money.itsAValidaValue(value) && quantity>-1){ //Revisamos si el valor de la moneda es correcto y si la cantidad no es negativa
            this.value = value
            this.quantity = quantity
        }else{
            throw new Error('The value its not valid.') //De lo contrario regresamos un error
        }  
    }
    //Recibe el valor a agregar en cantidad
    insertQuantity(add){//Revisamos si la cantidad a agregar es positiva
        (add>-1)? this.quantity += add : console.error('Not a valid quantity')//Si no solo se imprime un mensaje de error
    }
    getTotal(){//Regresa el total en dinero que se tiene para este objeto de dinero
        return this.value * this.quantity
    }
}