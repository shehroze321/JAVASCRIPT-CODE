// syntex-1 declearing a class ------pascal fun
class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
}
let pencil = new Product("pencil",50,05,"t565");

// syntex-2 expression a class-------

const Product1 = class{
constructor(itemName,price,discount,productCode){
    this.itemName=itemName;
    this.price=price;
    this.discount=discount;
    this.productCode=productCode;
}
// getter method--
get getDiscountValue(){
    return this.discount;
}
//setter method--
set setDiscountValue(value){
     this.discount = value;
}
// discount method--
   getDiscountValue(){
    return this.discount*this.price/100
}

};
let chair = new Product1("chair",4000,500,"g560")

