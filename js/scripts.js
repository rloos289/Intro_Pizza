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
// <!--************gather info into object************-->
    var topping = [];
    var cost = '';
    var size = $('input[name=size]:checked').val();
    var toppings = '';
    $('input[type=checkbox]:checked').each(function(i,e){topping.push( $(e).attr('value'))
      })
    if (!size) {
      alert('please choose a pizza size');
    } else {
    pizza = new Pizza (size, topping, cost);
    cost = pizza.pizzaCost();
// <!--************reset form/make li************-->
    $('#pizzaOptions')[0].reset();;
    if (pizza.ptopping.length) {
      toppings = pizza.ptopping.length + ' topping'
    } else {
      toppings = 'cheese'
    }
    pizzaNumber += 1 ;
    $('#pizzaList').append("<li class='plist' id=pizza" + pizzaNumber + '>' + pizza.psize + ' ' + toppings + ' pizza: $' + pizza.pcost + '</li>');
    Order.orderInfo(pizza, pizza.pcost);
  }
  $('.plist').click(function() {
    console.log(this.id);
  });
  });
});
