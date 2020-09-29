$(document).ready(function(){
    $(".navbar-toggler").on("click",function(){     
        $(".mobileMenu").toggleClass("open");
        $(".teste").toggleClass("dark");
   });
});

$(document).ready(function(){
  $("#dark").click(function() {
      $(".navbar").css("z-index","3");
      $(".teste").removeClass("dark");
      $(".mobileMenu").removeClass("open");
      $("#rem").addClass("d-none");
      $(".navbar-toggler").attr("disabled", false);
   }); 
});

$(document).ready(function(){
    $(".nav-link").click(function() {
      $(".teste").removeClass("dark");
      $(".mobileMenu").removeClass("open");
   }); 
});

$(document).ready(function(){
    $("#vender").click(function() {
        $("#rem").removeClass("d-none");
        $(".teste").addClass("dark");
        $(".navbar").css("z-index","-10");
    }); 
});