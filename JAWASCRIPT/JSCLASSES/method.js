// class method 

class Product{
    constructor(itemName){
        console.log("passed by furniture" + itemName);
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName  + " is a product ";
    }
}
// extends class--
class Furniture extends Product{
    constructor(itemName){
        super(itemName);// super function have properties of parent class constructor
    }
    getItemName(){
        return this.itemName + " ia a Furniture "
    }
}

let pencil = new Product("pencil",50,8,"h88");
let chair = new Furniture("chair",500,80,"h880");
