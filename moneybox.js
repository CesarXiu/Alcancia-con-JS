
class moneybox{
    //Solo recibe el nombre del dueño
    constructor(name) {
        this.name = name
        this.allowedValues = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];//Guardamos un arreglo con los valores disponibles
        this.auxiliarValue = new Array(this.allowedValues.length)//Utilizando el tamaño del arreglo anterior creamos otro arreglo de un tamaño especifico
        for (let index = 0; index < this.allowedValues.length; index++) {//Segun el tamaño de los valores disponibles
            this.auxiliarValue[index] = new money(this.allowedValues[index],0)//Al arreglo creado anteriormente vacio le agregamos objetos money
        }
    }
    //Recibe copyauxiliar, que es un arreglo de 'objetos' money, donde solo usamos la cantidad guardada
    refactor(copyAuxiliar){//Para poder normalizar/utilizar el objeto que guardamos en localstorage
        for (let index = 0; index < this.allowedValues.length; index++) {//Segun el tamaño de valores disponibles
            this.auxiliarValue[index] = new money(this.allowedValues[index],copyAuxiliar[index].quantity)//Vamos generando de manera correcta el arreglo auxiliar con las cantidades
        }
    }
    //Recibe el valor a buscar en formato entero y devuelve el objeto money que buscamos
    currencyExists(value){//Para buscar la moneda de denominacion que necesitemos
        return this.auxiliarValue.at(this.allowedValues.indexOf(value))//Utiliza el metodo indexof para encontrar la posicion en el arreglo de valores disponibles
        //Para despues obtener el objeto que tenemos guardado en ese indice, ya que fue creado en conjunto ambos
    }
    //Recibe el valor al que se agregara una nueva cantidad
    addMoney(value, quantity){//Para agregar una cantidad a una moneda/billete
        const myMoney = this.currencyExists(value) //Utiliza el metodo currencyExist para encontrar el objeto que utilizaremos
        if(myMoney != null){ //Revisa si el valor fue econtrado
            myMoney.insertQuantity(quantity)//Si se encontro agregamos la cantidad utilizando un metodo de la clase money
        }else{
            console.error('Not a valid currency')//Si no existe ese valor imprime que no es valido
        }
    }
    //Recibe el valor a obtener el total en formato entero y regresa el total
    getSavingByValue(value){//Obtienes el ahorro de una nomina individual 
        const myMoney = this.currencyExists(value) //Busca el objeto 
        return (myMoney != null)? myMoney.getTotal() : null //Regresa el total mediante una funcion en money o regresa null si no existe
    }
    //Regresa el ahorro total hasta el momento
    getTotalOfSaving(){//Para obtener todos los ahorros que tenemos actualmente
        let total = 0//Utilizamos una variable para guardad el total
        this.auxiliarValue.forEach((element, index, array) => {//Utilizamos una funciona para ir recorriendo al arreglo de monedas
            total += element.getTotal()//Y vamos sumando en total en la variable que creamos, usando objeto por objeto
        })
        return total;//Regresamos la suma total de las divisas
    }
    //Regresa el nombre del propietario
    getOwner(){
        return this.name//Nombre del creador de la cuenta de ahorro
    }
}