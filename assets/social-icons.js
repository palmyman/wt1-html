$(document).ready(function(){
  var hiding = $("p#hiding").text();
  var lenght = hiding.indexOf(' ', 85);
  hiding = hiding.substr(0, lenght) + '<a> ..read more.</a>';
  $("p#hiding").after('<p id="open" style="display: none; opacity: 0.3;">' + hiding + '</p>');

  $("p#hiding").delay(2500).slideUp('slow', function(){    
    $("p#open").slideDown('slow');
  });
  $("p#open").on("mouseover", function(){
    $("p#open").slideUp('slow', function(){
      $("p#hiding").slideDown('slow');  
    });
  });
});