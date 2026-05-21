// Dark mode
$("#btn-tggl").click(function(){
    $("body").toggleClass("dark");

    // hello world 
    // if ($(this)){
    //     $(this).toggle($(this).html("&#127774;"));
    // } else {
    //     $(this).toggle($(this).html("&#127770;"));
    // }

    
    
});

// menu toggle
$("#btn-menu").click(function(){
    $(".sidebar").toggle("");
})

// Hover des cards
$(".card").mouseenter(function(){
    $(this).animate({width: "300px"}, 300);
});
$(".card").mouseleave(function(){
    $(this).animate({width: "200px"}, 300);
});

// Active des cards
$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
    $(this)
      .stop(true)
      .animate({ top: "-20px" }, 120)
      .animate({ top: "0px" }, 220);
  });

// Contrôles

// Lancer l'animation
$("#start").click(function(){
    console.log('hello');
    $("#a")
    .animate({left: "120px"})
    .animate({top: "120px"})
    // .css({backroundColor:"#000000"})
    .animate({left: "0px"})
    .animate({top: "0px"})
});

// Stop animation
$("#stop").click(function(){
    console.log('hello');
    $("#a").stop(true);
})

// Masquer galerie
$("#hidden").click(function(){
    $(".blocks").fadeOut();
});

// Afficher galerie
$("#show").click(function(){
    $(".blocks").fadeIn();
});


// Style blocks
 
// Bleu block
$("#b").click(function(){
    $(this).animate({borderRadius: "50%"}, 300);
});


 
// Notifcation
$(".notif").click(function(){
    $(".msg").toggle("");
});
 
// désactiver le champs
$("#btn-dis").click(function(){
    $("#champs").prop("disabled", true);
})
 
// activer le champs
$("#btn-en").click(function(){
    $("#champs").prop("disabled", false);
})