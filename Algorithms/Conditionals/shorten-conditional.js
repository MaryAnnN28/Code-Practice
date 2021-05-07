const isAuthenticated = false;

let cartItemCount = 0;

if (isAuthenticated) {
  cartItemCount = 1;
} else {
  console.log("Please log in!");
  cartItemCount = 0; 
}



// SHORTENED TERNARY EXPRESSION FOR THE ABOVE COMMENTED OUT 
// However we cannot console log a return statement in a ternary 
const cartItemCount = isAuthenticated ? 1 : 0;

console.log(cartItemCount);