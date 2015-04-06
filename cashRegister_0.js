var cashRegister = {
    total: 0,
    //add method calculates the total cost of the items
    add: function(itemCost) {
        this.total += itemCost;
    },
    //scan an item to add its price. Scan acts as a short term memory for some items it contains.
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        case "chocolate":
            this.add(0.45);
            break;
        
        }
        return true;
    }
};

//Scanning 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
//the total bill
console.log('Your bill is '+cashRegister.total);
