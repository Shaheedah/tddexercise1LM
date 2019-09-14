class Calculator{
    constructor(){
        this.last = 0;
        this.slot = [];
    }
    //add numbers
    add(){
        var sum = 0;
        for(let i = 0; i<arguments.length; i++){
            sum += arguments[i];
        }
        this.last = sum;
        return sum;
    }


    //muiltiply numbers
    multiply(){
        var product = 1;
        for(let i = 0; i<arguments.length; i++){
            product *= arguments[i];
        }
        this.last = product;
        return product;
    }

    //return last
    last(){
        return this.last;
    }
    
    set_slot(number){
        this.slot[number] = this.last;
    }
    
    get_slot(number){
        return this.slot[number];
    }
};

