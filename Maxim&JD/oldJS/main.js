$(document).ready(function(){

    $("#dark").click(function(){
        $("#body").toggleClass('sombre'); 
    });
    $("#btn1").on("click",function(){
        $("#btn1").css("border","2px solid #0b2aa3"); 
    });
    $("#btn2").on("click",function(){
        $("#btn2").css("border","2px solid #0b2aa3"); 
    });
    $("#btn3").on("click",function(){
        $("#btn3").css("border","2px solid #0b2aa3");
        $("#btn3").animate({top:"=-200px"});
    });

    $("#btn2").on("mouseenter",function() {
        $("#btn2").animate({width:"+=2%"},250);
    }).on("mouseleave",function() {
        $("#btn2").animate({width:"-=2%"},250);
    });
    $("#btn3").on("mouseenter",function() {
        $("#btn3").animate({width:"+=2%"},250);
    }).on("mouseleave",function() {
        $("#btn3").animate({width:"-=2%"},250);
    });

    $("#start").click(function(){
        $("#cube")
        .animate({left:"250px"},1000)
        .animate({top:"250px"},1000)
        .animate({left:"0px"},1000)
        .animate({top:"0px"},1000)
    });
    $("#stop").click(function(){
        $("#cube").stop(true);
    });
    $("#cubemauve").click(function(){
        $("#cubemauve")
        .animate({rotate:"360deg"},1000);
    });
    $("#rond").click(function(){
        $("#rond").animate({borderRadius:"50%"},500)
    });
    $("#hide").click(function(){
        $("#cubecontainer").fadeOut();
    });
    $("#show").click(function(){
        $("#cubecontainer").fadeIn();
    });




    





    $("#notif").hide();
    $("#affich").on("click", function(){
        $("#notif").slideDown(500)
        .delay(2000)
        .slideUp(500);
    });
    
    $("#disable").click(function(){
        $("#nom").prop("disabled", true);
    });
    $("#enable").click(function(){
        $("#nom").prop("disabled", false);
    });

    /* =========================
   NAVBAR CLIQUABLE
========================= */

$(".navLink").click(function(){
 
        /* Active le lien */
        $(".navLink").removeClass("activeNav");
        $(this).addClass("activeNav");
 
        /* Récupère la page */
        let page = $(this).data("page");
 
        /* Cache toutes les pages */
        $(".page").removeClass("activePage").hide();
 
        /* Affiche la page cliquée */
        $("#" + page).fadeIn(500).addClass("activePage");
    });

/* =========================
   TOGGLE MENU
========================= */

    $("#toggleMenu").click(function(){
        $(".sidebar").animate({
            width:"toggle"
        },500);
    });

});