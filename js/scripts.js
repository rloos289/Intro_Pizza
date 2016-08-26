//<!-- Back End -->

// <!--************pizza contstructor************-->
function Pizza (size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = topping;
}

Pizza.prototype.createPizza = function (size, topping) {

}

//<!-- Front End  -->
$(document).ready(function(){
  $('#submitButton').click(function(event){
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    console.log(size);
    var toppings = [];
    var topping = $('input[name=topping]:checked').val();
    console.log(topping);
    pizza = new Pizza (size, topping);
  });
});
