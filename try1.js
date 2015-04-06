var cashRegister = {
    total: 0,
//the add method here adds the sum total bill
    add: function(itemCost) {
        this.total += itemCost;
    },
    //scan here creates a kind of short term memory so that some items can be scanned to add their costs.
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
//Showing the total bill
console.log('Your bill is '+cashRegister.total);
