//define functions here

$(document).ready(function(){

// call functions here

getIt = function(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

frameIt = function(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

pressIt = function(){
  $('input').on('keydown', function(){
    if (key.which == 13){
    alert('enter was pressed');
  }
  })
}

});
