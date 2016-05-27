// 1. What is the average price of all items?//
  var listOfPrices = items.map(function(element,idx,arr){
    return element.price
  });
  var sum = 0;
  listOfPrices.forEach(function(element,idx,arr){
    sum = sum + element;
  });
  var avgPrice =  sum / listOfPrices.length

document.getElementById('answer1').innerHTML = avgPrice;

//2. Show me an array of items that cost between $14.00 and $18.00 USD?//

  var itemCost = items.filter(function(element,idx,arr) {
   return element.price >= 14.00 && element.price <= 18.00 && element.currency_code === "USD"
  }).map(function(element,idx,arr) {
    return element.title
});

document.getElementById('answer2').innerHTML = itemCost;

//3. Which item has a "GBP" currency code? Display it's name and price.//

var gbpCurrency = items.filter(function(element,idx,arr) {
  return element.currency_code === "GBP"
}).map(function(element,idx,arr) {
  return element.title + ", Cost: " + element.price
});

document.getElementById('answer3').innerHTML = gbpCurrency;

//4. Display a list of all items who are made of wood.//

var listOfItems = items.filter(function(element,idx,arr){
  return element.materials.indexOf("wood") !==-1
}).map(function(element,idx,arr){
  return element.title
});

document.getElementById('answer4').innerHTML = listOfItems;

//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.//

var itemsEightMaterials = items.filter(function(element,idx,arr){
  return element.materials.length >= 8
}).map(function(element,idx,arr){
  return "Title: " + element.title + ", Quantity: " + element.quantity + ", Materials: " + element.materials
});

document.getElementById('answer5').innerHTML = itemsEightMaterials;

//6. How many items were made by their sellers?//

  var sellerMade = items.filter(function(element,idx,arr){
    return element.who_made === "i_did"
  });

document.getElementById('answer6').innerHTML = sellerMade.length;
