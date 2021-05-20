// the .slice() method 

// -- This method returns a new array with specifid start to end elements. 

// -- Great for using to get a part of an array
// -- Slice is non-mutating
// -- Slices with a starting index (first #), up to the ending index (2nd #)

const menuIdeas = ["Glazed Salmon", "Meatloaf", "Fried Chicken", "Harvest Salad", "Filet Mignon"]

const faveIdeas = menuIdeas.slice(1, 3);

console.log(faveIdeas); // === > results in ["Meatloaf", "Fried Chicken"]