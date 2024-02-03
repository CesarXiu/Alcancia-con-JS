class moneybox{
    constructor(name) {
        this.name = name
        //Creamos los atributos vacios que utilizaremos 
        this.coin1 = null
        this.coin2 = null
        this.coin5 = null
        this.coin10 = null
        this.bill20 = null 
        this.bill50 = null
        this.bill100 = null
        this.bill200 = null
        this.bill500 = null
        this.bill1000 = null
        this.auxiliarValue = [this.coin1,this.coin2,this.coin5,this.coin10,this.bill20,this.bill50,this.bill100,this.bill200,this.bill500,this.bill1000]
    }
    currencyExists(value){
        switch(value){ //Revisa si es que esta creado y si no crea el objeto
            case 1:
                return (this.coin1!=null)? this.coin1 : this.coin1 = new money(1, 0)
            case 2:
                return (this.coin2!=null)? this.coin2 : this.coin2 = new money(2, 0)
            case 5:
                return (this.coin5!=null)? this.coin5 : this.coin5 = new money(5, 0)
            case 10:
                return (this.coin10!=null)? this.coin10 : this.coin10 = new money(10, 0)
            case 20:
                return (this.bill20!=null)? this.bill20 : this.bill20 = new money(20, 0)
            case 50:
                return (this.bill50!=null)? this.bill50 : this.bill50 = new money(50, 0)
            case 100:
                return (this.bill100!=null)? this.bill100 : this.bill100 = new money(100, 0)
            case 200:
                return (this.bill200!=null)? this.bill200 : this.bill200 = new money(200, 0)
            case 500:
                return (this.bill500!=null)? this.bill500 : this.bill500 = new money(500, 0)
            case 1000:
                return (this.bill1000!=null)? this.bill1000 : this.bill1000 = new money(1000, 0)
            default:
                console.error('Value not valid.')
                return null
        }
    }
    addMoney(value, quantity){
        const myMoney = this.currencyExists(value) 
        (myMoney != null)? myMoney.insertQuantity(quantity) : console.error('Not a valid currency')
    }
    getSavingByValue(value){
        const myMoney = this.currencyExists(value) 
        return (myMoney != null)? myMoney.getTotal() : null
    }
    getTotalOfSaving(){
        const total = 0
        for (const currency of this.auxiliarValue) { //Recorremos el auxiliar para obtener el total
            total += (currency!=null)? currency.getTotal() : 0 //Revisamos si algun objeto es vacio
        }
        return total;
    }
}