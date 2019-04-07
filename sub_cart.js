"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Todd Adcox Jr
   Date: 4-5-19   

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// Loads the setupCart()function when the page is loaded by the browser
window.addEventListener("load", setupCart);

// Defines the event handlers for the Add to Order buttons.
function setupCart() {
      // addbuttons variable that contains the collection of elements belonging to the addButton class.
      var addButtons = document.getElementsByClassName("addButton");
      // A for loop that loops through the addButtons collection and adds an event handler that will run the addItem() function when clicked. 
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}

 // Adds items to the shopping cart.
 function addItem(e) {
      // The description of the food item.
      var foodItem = e.target.nextElementSibling;
      // Contains the value of the id attribute for foodItem. 
      var foodID = foodItem.getAttribute("id");
     // Creates a copy of the foodItem element and is being stored in the foodDescription variable. 
      var foodDescription = foodItem.cloneNode(true);
//   References the aside element with the ID of “cart”.
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      // Loops through the element child nodes of cartBox and increases the value by 1.
      for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null ) {
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstElementChild.textContent++;
                  break;
            }
      }

      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }

}