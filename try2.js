var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    //scan now has the quantity property for the mumber of items of each type, for example- 4 eggs!
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(quantity*0.98); break;
        case "milk": this.add(quantity*1.23); break;
        case "magazine": this.add(quantity*4.99); break;
        case "chocolate": this.add(quantity*0.45); break;
        }
    }
};


cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);


//Showing the total bill
console.log('Your bill is '+cashRegister.total);
