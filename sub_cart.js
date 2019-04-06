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

      // Adds items to the shopping cart.
      function addItem(e) {
            // The description of the food item.
            var foodItem = e.target.nextElementSibling;
            // b. Create the foodiD variable, which contains the value of the id attribute for foodItem. 
            var foodID =
                  //c. Use the cloneNode() method to create a copy of the foodItem element and all of its descendants. Store this node structure in the foodDescription variable. 

                  // d. The shopping cart is stored in an aside element with the ID “cart”. Store the reference to this element in a variable named cartbox. The shopping cart needs to determine whether a product ordered by the customer has already been ordered. To do this, you will add a span element to the top of each item in the cart containing the number of items of each product ordered and update that value when a product order is repeated. Do the following to create the order counter for each Subsistence product. 
                  var cartBox = document.getElementById("cart");

            //e. Create a variable named duplicateOrder and set its initial value to false.
            var duplicateOrder = false;

            // f.	Loop through the element child nodes of cartBox. For each node, determine whether the ID of the element node equals foodID. If it does, the customer has previously placed that menu item in the cart. Increase the value of the first element child of node by 1 to indicate an additional order and then break out of the for loop.
            for (var i = 0; i < cartBox.length; i++) {
                  if () {

                  }
            }
            // g. After the for loop has completed, test whether duplicateOrder is still false. If it is, then create a variable named ordercount storing a span element node. Set the text content of the orderCount element to 1. Insert orderCount as the first child of the foodDescription node structure and append foodDescription to cartBox as a new product order.


      }
}