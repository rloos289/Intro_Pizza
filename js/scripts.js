//<!-- Back End -->
// <!--************order contstructor/prototype************-->
function Order (pizzas, cost) {
  this.pizzaArray = []
  this.costArray = []
}

Order.prototype.orderInfo = function (pizza, cost) {
  Order.pizzaArray.push(pizza);
  Order.costArray.push(cost);
}

function getCost(total, num) {
  return total + num;
}

Order.prototype.orderCost = function () {
  var finalCost = Order.costArray.reduce(getCost);
  return finalCost
}

// <!--************pizza contstructor/prototype************-->
function Pizza (size, topping, cost) {
  this.psize = size;
  this.ptopping = topping;
  this.pcost = cost;
}

Pizza.prototype.pizzaCost = function (psize, ptopping) {
  var cost = 0
  if (this.psize === 'small') {
    cost += 8
  } else if (this.psize === 'medium') {
    cost += 12
  } else if (this.psize === 'large') {
    cost += 15
  }
  if (this.ptopping) {
    for (var i = 0; i < this.ptopping.length; i++) {
      cost +=2
    }
  }
  this.pcost = cost;
}

//<!-- Front End  -->
$(document).ready(function(){
  Order = new Order();
  pizzaNumber = 0
  $('#pizzaOptions').submit(function(event){
    event.preventDefault();
//gather info for object
    var toppings = [];
    var cost = '';
    var size = $('input[name=size]:checked').val();
    var toppingOrCheese = '';
    $('input[type=checkbox]:checked').each(function(i,e) {
      toppings.push( $(e).attr('value'))
      })
    if (!size) {
      alert('please choose a pizza size');
    } else {
      pizza = new Pizza (size, toppings, cost);
      cost = pizza.pizzaCost();
//reset entry options
      $('#pizzaOptions')[0].reset();;
//append page with pizzas
      if (pizza.ptopping.length) {
      toppingOrCheese = pizza.ptopping.length + ' topping'
      } else {
        toppingOrCheese = 'cheese'
      }
      pizzaNumber += 1 ;
      $('#pizzaList').append("<li class='plist' id=pizza" + pizzaNumber + '>' + pizza.psize + ' ' + toppingOrCheese + ' pizza: $' + pizza.pcost + '</li>');
//add pizza to Order
      Order.orderInfo(pizza, pizza.pcost);
  }
  // $('.plist').click(function() {
  //   console.log(this.id);
  // });
  });
//get total cost
  $('#submitButton').click(function(event) {
  event.preventDefault()
    if (Order.orderCost())
    $('#reciept').show();
    $('#totalcost').append(Order.orderCost());
    $('#submitButton').hide();
  });
});
