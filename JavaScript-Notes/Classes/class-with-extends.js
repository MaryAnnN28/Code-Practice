class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable; 
  }

  isDiscountable() {
    return this.discountable; 
  }
}

// We can extend our original class by using the extends keyword 
class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {  // requires constructor + orig properties 
    super(name, price, discountable); // requires 'super' to call constructor method we are extending
    this.percentOff = percentOff; 
  }

  getSalePrice() {
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100); 
    } else {
      return `${this.name} is not eligible for a discount`; 
    }
  }
}


const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);

console.log(saleProduct1.getSalePrice());