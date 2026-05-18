$(document).ready(function () {
  $("#dark-btn").click(function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $(".card").removeClass("dark");
      $("#dark-btn").text("Dark Mode");
    } else {
      $("body").addClass("dark");
      $(".card").addClass("dark");
      $("#dark-btn").text("Light Mode");
    }
  });

  $(".card").mouseenter(function () {
    $(this).animate({ width: "300px" }, 500);
  });
  $(".card").mouseleave(function () {
    $(this).animate({ width: "200px" }, 500);
  });

  $(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
    $(this)
      .stop(true)
      .animate({ top: "-20px" }, 120)
      .animate({ top: "0px" }, 220);
  });

  /* =========================
           NAVBAR CLIQUABLE
        ========================= */

  $(".navLink").click(function () {
    /*Active le lien*/

    $("li").removeClass("activeNav");

    $(this).addClass("activeNav");

    /* Récupère la page*/

    let page = $(this).data("page");

    /*Cache toutes les pages*/

    $(".page").removeClass("activeNav").hide();

    /*Affiche la page cliquée*/

    $("#" + page)
      .fadeIn(500)

      .addClass("activePage");
  });

  /* =========================
           TOGGLE MENU
        ========================= */

  $("#toggleMenu").click(function () {
    $(".sidebar").animate(
      {
        width: "toggle",
      },
      500,
    );
  });

  /* =========================
           COUNTERS ANIMÉS
        ========================= */

  $(".counter").each(function () {
    let target = $(this).data("target");

    let counter = $(this);

    $({ countNum: 0 }).animate(
      {
        countNum: target,
      },

      {
        duration: 2000,

        easing: "swing",

        step: function () {
          counter.text(Math.floor(this.countNum));
        },

        complete: function () {
          counter.text(this.countNum);
        },
      },
    );
  });

  /* =========================
           HOME DYNAMIQUE
        ========================= */

  setInterval(function () {
    $(".c1")
      .animate(
        {
          top: "40px",
        },
        1000,
      )

      .animate(
        {
          top: "20px",
        },
        1000,
      );

    $(".c2")
      .animate(
        {
          right: "200px",
        },
        1000,
      )

      .animate(
        {
          right: "180px",
        },
        1000,
      );

    $(".c3")
      .animate(
        {
          left: "60px",
        },
        1000,
      )

      .animate(
        {
          left: "40px",
        },
        1000,
      );
  }, 2000);

  $("#notif-btn").click(function () {
    $('<div class="notif">Notification envoyée</div>')
      .hide()
      .insertAfter("#notif-btn")
      .slideDown(300)
      .delay(2000)
      .slideUp(500, function () {
        $(this).remove();
      });
  });

  $("#disable-btn").click(function () {
    $("#nom-input").attr("disabled", true);
  });

  $("#enable-btn").click(function () {
    $("#nom-input").removeAttr("disabled");
  });
});
