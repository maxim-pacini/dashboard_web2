$(document).ready(function () {

  $("#btnDark").click(function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      $(this).text("☀️ Light Mode");
    } else {
      $(this).text("🌙 Dark Mode");
    }
  });

  $(".carte").click(function () {
    $(".carte").removeClass("active");
    $(this).addClass("active");
    $(this).animate({ top: "-20px" }, 200, function () {
      $(this).animate({ top: "0px" }, 200);
    });
  });

  $(".carte").on("mouseenter", function () {
    $(this).animate({ width: "170px" }, 200);
  }).on("mouseleave", function () {
    $(this).animate({ width: "150px" }, 200);
  });

  var animationEnCours = false;

  function animeForme1() {
    if (!animationEnCours) return;
    $("#forme1")
      .animate({ left: "30px" }, 400)
      .animate({ top: "20px" }, 400)
      .animate({ left: "0px" }, 400)
      .animate({ top: "0px" }, 400, animeForme1);
  }

  $("#btnLancer").click(function () {
    if (animationEnCours) return;
    animationEnCours = true;
    animeForme1();
  });

  var forme2animation = false;

  function animeForme2() {
    if (!forme2animation) return;
    $("#forme2").animate({ borderRadius: "50%" }, 500, function () {
    });
  }

  $("#forme2").click(function () {
    forme2animation = !forme2animation;
    if (forme2animation) {
      animeForme2();
    } else {
      $("#forme2").finish(true, true);
    }
  });

  var forme3animation = false;

  function animeForme3() {
    if (!forme3animation) return;
    $("#forme3")
      .animate({ left: "50px" }, 500)
  }

  $("#forme3").click(function () {
    forme3animation = !forme3animation;
    if (forme3animation) {
      animeForme3();
    } else {
      $("#forme3").finish(true, true);
    }
  });

  $("#forme4").click(function () {
    $(this).toggleClass("rotating");
  });

  $("#btnStop").click(function () {
    animationEnCours = false;
    forme2animation = false;
    forme3animation = false;
    $(".forme").stop(true, true);
    $("#forme4").removeClass("rotating");
  });

  $("#btnMasquer").click(function () {
    $("#galerie").slideUp(300);
  });

  $("#btnAfficher").click(function () {
    $("#galerie").slideDown(300);
  });

  $("#btnNotif").click(function () {
    $("#notification").addClass("visible");
    setTimeout(function () {
      $("#notification").removeClass("visible");
    }, 4000);
  });

  $("#btnDisable").click(function () {
    $("#monInput").attr("disabled", true);
  });

  $("#btnEnable").click(function () {
    $("#monInput").removeAttr("disabled");
  });

});
