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
  $('#pizzaOptions').submit(function(event){
    event.preventDefault();
// <!--************gather info into object************-->
    var size = $('input[name=size]:checked').val();
    var topping = [];
    var cost = '';
    $('input[type=checkbox]:checked').each(function(i,e){topping.push( $(e).attr('value'))
      })
    pizza = new Pizza (size, topping, cost);
    cost = pizza.pizzaCost();
// <!--************reset form/make li************-->
    $('#pizzaOptions')[0].reset();;
    $('#pizzaList').append('<li>' + pizza.psize + ' ' + pizza.ptopping.length + ' topping pizza: $' + pizza.pcost + '</li>');
    Order.orderInfo(pizza, pizza.pcost);
  });
});
