$(document).ready(function(){
    
    $('.main').click(function () {
        $(this).children('.hideMe').slideToggle(1200);
        $(this).children('.show').toggle(1500);
      });

    $('.card').hover(function(event){
      $(".card").hover(function () {
        $(this).children(".card-1").fadeToggle('fast', "linear");
      });
      });
      event.preventDefault();
    

    $('form#myForm').submit(function(){
      var name = $('#name').val();
      var pass = $('#email').val();
      var mess = $('#mess').val();
      alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
    });
    
    $("button").on('click', function(){
      $('form').each(function(){
        this.reset();
      });
    
});
});