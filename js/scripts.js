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
    for (var i = 0; i < this.ptopping.length; i++) {
      cost +=2
    }
  }
  return cost;
}

//<!-- Front End  -->
$(document).ready(function(){
  $('#submitButton').click(function(event){
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    var topping = [];
    $('input[type=checkbox]:checked').each(function(i,e){topping.push( $(e).attr('value'))
})
    pizza = new Pizza (size, topping);
    cost = pizza.pizzaCost();
    console.log('Your pizza will cost $' + cost);
  });
});
