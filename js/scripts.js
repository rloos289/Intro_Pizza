//<!-- Back End -->

// <!--************pizza contstructor************-->
function Pizza (size, topping) {
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
    cost +=2
  }
  return cost;
}

//<!-- Front End  -->
$(document).ready(function(){
  $('#submitButton').click(function(event){
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    var toppings = [];
    var topping = $('input[name=topping]:checked').val();
    pizza = new Pizza (size, topping);
    cost = pizza.pizzaCost();
    alert('Your pizza will cost $' + cost);
  });
});
