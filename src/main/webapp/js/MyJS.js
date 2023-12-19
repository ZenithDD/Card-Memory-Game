$(document).ready(function () {
  var bt1,
    bt2,
    bt3 = false;
  // 按钮功能
  $(".front_face").click(function () {
    if (bt2) {
      $(".box_2").removeClass("is-flipped");
      bt2 = false;
    }
    $(this).addClass("fade-out");
    $(".back_face").addClass("fade-in");
    bt1 = true;
  });
  $("#easy").click(function (e) {
    var timer = 50000;
    var startTime = $.now();
    $(".container").addClass("fade-out");
    $(".game").addClass("fade-in");
    $('<i class="timer"></i>')
      .prependTo("#g")
      .css({
        animation: "timer " + timer + "ms linear",
      });
  });

  $(".box_2").click(function () {
    if (bt1) {
      $(".front_face").removeClass("fade-out");
      $(".back_face").removeClass("fade-in");
    }
    if (bt2) {
      $(this).removeClass("is-flipped");
      bt2 = false;
    } else {
      $(this).addClass("is-flipped");
      bt2 = true;
    }
  });
  $(".box_3").click(function () {
    if (bt1) {
      $(".front_face").removeClass("fade-out");
      $(".back_face").removeClass("fade-in");
    }
    if (!bt3) {
      $(".login").addClass("fade-in");
      $(".btn").addClass("fade-out");
      $(".container").css("pointer-events", "none");
    }
  });
  $(".arrow").click(function () {
    $(".login").removeClass("fade-in");
    $(".btn").removeClass("fade-out");
    $(".container").css("pointer-events", "all");
  });
});
