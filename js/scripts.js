//<!-- Back End -->

//<!-- Front End  -->
$(document).ready(function(){
  $('#submitButton').click(function(event){
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    console.log(size);
    var toppings = [];
    var topping = $('input[name=topping]:checked').val();
    console.log(topping);
  });
});
