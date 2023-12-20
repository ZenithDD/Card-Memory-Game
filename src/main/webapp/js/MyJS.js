$(document).ready(function () {
  var bt1,
    bt2,
    rank,
    loginIn = false;
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

  // 教程
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
  // 分数
  $(".box_3").click(function () {
    if (bt1) {
      $(".front_face").removeClass("fade-out");
      $(".back_face").removeClass("fade-in");
    }
    if (!loginIn) {
      $(".login").addClass("fade-in");
      $(".btn").addClass("fade-out");
      $(".container").css("pointer-events", "none");
    } else {
      rank = true;
      $(".container").addClass("fade-out");
      $(".container").css("pointer-events", "none");
      $(".rank").addClass("fade-in");
      const rows = Array.from(document.querySelectorAll("tr"));

      function slideOut(row) {
        row.classList.add("slide-out");
      }

      function slideIn(row, index) {
        setTimeout(function () {
          row.classList.remove("slide-out");
        }, (index + 5) * 200);
      }

      rows.forEach(slideOut);

      rows.forEach(slideIn);
    }
  });

  $(".arrow").click(function () {
    $(".login").removeClass("fade-in");
    $(".btn").removeClass("fade-out");
    $(".container").css("pointer-events", "all");
  });
  $(".rank").click(function () {
    $(".container").removeClass("fade-out");
    $(".container").css("pointer-events", "all");
    $(".rank").removeClass("fade-in");
  });
});
