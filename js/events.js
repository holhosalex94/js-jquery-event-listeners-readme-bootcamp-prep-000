//define functions here

$(document).ready(function(){

// call functions here

getIt = function(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

friameIt = function(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

});
