//exercise for objects---------
//itemName
//price
//discount
//itemCode

const product ={
    itemName:"Flower",
    price: 50,
    discount: 20,
    itemCode: "f40"
}

//objects using factory  function-----pascal-fun

function createProduct(itemName,price,discount,itemCode){
    return {
        itemName:itemName,
        price: price,
        discount:discount,
        itemCode:itemCode
    }
}
const football =  createProduct("football",500,50,"f30")

// object uding constructer function--------Camel fun

function Product(itemName,price,discount,itemCode){
         this.itemName=itemName;
         this.price=price;
         this.discount=discount;
         this.itemName=itemCode;
//metdod of discount
         this.discountValue = function(){
            return price = discount/100;
         }
}
const mobile =new Product("nokia",35000,2000,"f450")
