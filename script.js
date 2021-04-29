//Create a class for the Shoes object type.
import Shoes from "./Shoes.js";

const aj1 = new Shoes(
    "Air Jordan 1 Shattered Backboard",
    "Black/Orange/White",
    10.5,
    "Nike",
    72,
    72,
    false,
)

console.log("The shoe in question: ", aj1); //Note: using a comma before the aj1 object produces a different result in console than using a +
console.log("The size of the shoes is: " + aj1.size);