$(document).ready(function(){
    // Dark Mode
    
    $("#dark").click(function(){
        $("#body").toggleClass('sombre'); 
    });

    // Dashboard
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
        $("#notif")
        .slideDown(500)
        .delay(2000)
        .slideUp(500);
    })
    
    $("#disable").click(function(){
        $("#nom").prop("disabled", true);
    })
    $("#enable").click(function(){
        $("#nom").prop("disabled", false);
    })
 
    // ACCUEIL
    $(".navLink").click(function(){
 
        /* Active le lien */
        $(".navLink").removeClass("activeNav");
        $(this).addClass("activeNav");
 
        /* Récupère la page */
        let page = $(this).data("page");
 
        /* Cache toutes les pages */
        $(".page").removeClass("activePage").hide();
 
         if(page === "dashboardPage"){
            $("dashboardPage").load("index.html").fadeIn(500).addClass("activePage");
        }
 
        /* Affiche la page cliquée */
        $("#" + page).fadeIn(500).addClass("activePage");
    });

    $("#toggleMenu").click(function(){
        $(".sidebar").animate({
            width:"toggle"
        },500);
    });

    $(".counter").each(function(){
 
        let target = $(this).data("target");
        let counter = $(this);
 
        $({countNum:0}).animate({
            countNum:target
        },
        {
            duration:2000,
            easing:"swing",
            step:function(){
                counter.text(Math.floor(this.countNum));
            },
            complete:function(){
                counter.text(this.countNum);
            }
        });
    });


    setInterval(function(){
 
        $(".c1").stop(true,true)
        .animate({
            top:"40px"
        },1000)
        .animate({
            top:"20px"
        },1000);
 
        $(".c2").stop(true,true)
        .animate({
            right:"220px"
        },1000)
        .animate({
            right:"180px"
        },1000);
 
        $(".c3").stop(true,true)
        .animate({
            left:"80px"
        },1000)
        .animate({
            left:"40px"
        },1000);
 
    },2500);

});