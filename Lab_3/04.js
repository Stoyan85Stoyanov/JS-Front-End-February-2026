function ordersPrice(product, quantity) {
  
      let priceProduct;
      let totalPrice;

     switch (product) {

        case 'coffee':
            priceProduct = 1.50;
            totalPrice = priceProduct * quantity;
            break;

         case 'water':
            priceProduct = 1.00;
            totalPrice = priceProduct * quantity;
            break;
            
         case 'coke':
            priceProduct = 1.40;
            totalPrice = priceProduct * quantity;
            break;
            
         case 'snacks':
            priceProduct = 2.00;
            totalPrice = priceProduct * quantity;
            break;    
     }

     console.log(totalPrice.toFixed(2)); 
}

ordersPrice("water", 5);
ordersPrice("coffee", 2);