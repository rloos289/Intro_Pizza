//<!-- Back End -->

// <!--************pizza contstructor************-->
function Pizza (size, topping, cost, ) {
  this.psize = size;
  this.ptopping = topping;
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
  return cost;
}

function newPizza (size, topping) {
  var pizzaNumber = 1;
  pizzaNumber ++;
  next_pizza = new Pizza (size, topping);
  return next_pizza;
}

//<!-- Front End  -->
$(document).ready(function(){
  $('#pizzaOptions').submit(function(event){
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    var topping = [];
    $('input[type=checkbox]:checked').each(function(i,e){topping.push( $(e).attr('value'))
      })
    pizza = new Pizza (size, topping);
    cost = pizza.pizzaCost();
    $('#pizzaOptions')[0].reset();;
    console.log('Your pizza will cost $' + cost);
    $('#pizzaList').append('<li>' + 'Pizza 1 $' + cost + '</li>')
  });
  $('#addPizza').click(function(event) {
    event.preventDefault();
    var pizzaArray = [pizza]

    var size = $('input[name=size]:checked').val();
    var topping = [];
    $('input[type=checkbox]:checked').each(function(i,e){topping.push( $(e).attr('value'))
      })
    console.log(size,topping);
    pizzaArray.push(newPizza(size,topping));
    // newPizza(size, topping)
    console.log('registered click');

    debugger;
    // next_pizza = new Pizza (size, topping);
  });
});
