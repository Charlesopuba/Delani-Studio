$(document).ready(function(){
  $(".whatwedo1").click(function(){
      $(".content1").toggle();
      $(".first").toggle();
  });
  $(".whatwedo2").click(function(){
    $(".content2").toggle();
    $(".second").toggle();
});
$(".whatwedo3").click(function(){
  $(".content3").toggle();
  $(".third").toggle();
});
});

// form
$(document).ready(function(){
  $("form" ).submit(function( event ) 
  {  
    event.preventDefault(); 
    var name = $( "input:first" ).val();

    alert(' Hi ' + name + ' We have received your message. Thank you for reaching out to us.');  
  });
});

$(document).ready(function()
{
  $( ".port" ).mouseenter(function() 
  {    var closestImage = $(this).closest(".port");   
       closestImage.next(".works").slideDown(100);  })  
   .mouseleave(function() {    $(".works" ).hide();});});