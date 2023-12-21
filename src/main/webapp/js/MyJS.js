$(document).ready(function () {
  var bt1,
    bt2,
    loginIn = false,
    username;
  // 按钮功能
  $(".front_face").click(function () {
    if (!loginIn) {
      window.alert("请先登录");
    }
    else {
      if (bt2) {
        $(".box_2").removeClass("is-flipped");
        bt2 = false;
      }
      $(this).addClass("fade-out");
      $(".back_face").addClass("fade-in");
      bt1 = true;
    }
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
      queryRank();
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



  // 登录
  $("#loginBtn").click(function () {
    let uname = $("#uname").val();
    let upwd = $("#upwd").val();

    // 表单校验
    if (uname.length == 0) {
      alertError("用户名不得为空")
    }
    else if (upwd.length == 0) {
      alertError("密码不得为空")
    }
    else {
      alert.html("登录中...");
      alert.css("color", "grey");

      // 发送请求
      let xhr = new XMLHttpRequest();
      xhr.open("post", "login-servlet", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let code = xhr.responseText;
          if (code == "201") {
            alertSuccess("注册成功")
            loginSuccess(uname);
            setTimeout(function () {
              $("#return").click();
            }, 1000);
          }
          else if (code == "200") {
            alertSuccess("登录成功")
            loginSuccess(uname);
            setTimeout(function () {
              $("#return").click();
            }, 1000);
          }
          else if (code == "400") {
            alert.html("登录失败，请检查密码");
            alert.css("color", "red");

          }
        }
      };
      var data = ("uname=" + uname + "&upwd=" + upwd);
      xhr.send(data);
    }
  });


  function queryRank() {
    let xhr = new XMLHttpRequest();
    xhr.open("post", "rank-servlet", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let data = $.parseJSON(xhr.responseText);
        let board = $("#rankBoard");
        board.empty();
        data.forEach((v, i) => {
          let tr = $("<tr></tr>")
          tr.append($("<td class='top-" + (i + 1) + "'>" + v['username'] + "</td>"));
          tr.append($("<td>" + formatDifficulty(v['difficulty']) + "</td>"));
          tr.append($("<td>" + formatTimeCost(v['timeCost']) + "</td>"));
          tr.append($("<td>" + formatTimestamp(v['timestamp']) + "</td>"));
          board.append(tr);
        });
      }
    };
    xhr.send();

    function formatDifficulty(str) {
      if (str == "1")
        return "简单"
      else if (str == "2")
        return "中等"
      else
        return "困难"
    }
    function formatTimeCost(milliseconds) {
      let seconds = Math.floor(milliseconds / 1000);
      let remainingMilliseconds = milliseconds % 1000;
      let formattedTime = "";
      formattedTime += seconds + "秒" + remainingMilliseconds;
      return formattedTime;
    }
    function formatTimestamp(timestamp) {
      let date = new Date(parseInt(timestamp) * 1000);  // 参数需要毫秒数，所以这里将秒数乘于 1000
      Y = date.getFullYear() + '-';
      M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      D = date.getDate() + ' ';
      h = date.getHours() + ':';
      m = date.getMinutes() + ':';
      s = date.getSeconds();
      return Y+M+D+h+m+s;
    }
  }

  // 获取本地登录信息
  username = localStorage.getItem("username");
  if (username != "" && username != null) {
    loginIn = true;
    $(".bt3").html("分数");
  }


  let alert = $("#alert");
  function alertError(msg) {
    alert.html(msg);
    alert.css("color", "red");
  }
  function alertSuccess(msg) {
    alert.html(msg);
    alert.css("color", "green");
  }
  function loginSuccess(name) {
    username = name;
    localStorage.setItem("username", username);
    loginIn = true;
    $(".bt3").html("分数");
  }
});
