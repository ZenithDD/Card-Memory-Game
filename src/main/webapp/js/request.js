function login() {
    let uname = $("#uname").val();
    let upwd = $("#upwd").val();
    let alert = $("#alert");

    // 表单校验
    if (uname.length == 0) {
        alert.html("用户名不得为空");
        alert.css("color", "red");
    }
    else if (upwd.length == 0) {
        alert.html("密码不得为空");
        alert.css("color", "red");
    }
    else {
        alert.html("登录中...");
        alert.css("color", "grey");

        // 发送请求
        var xhr = new XMLHttpRequest();
        xhr.open("post", "login-servlet", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var code = xhr.responseText;
                if (code == "201") {
                    alert.html("注册成功");
                    alert.css("color", "green");
                    localStorage.setItem("username", uname)
                    setTimeout(function () {
                        $("#return").click();
                    }, 1000);
                }
                else if (code == "200") {
                    alert.html("登录成功");
                    alert.css("color", "green");
                    localStorage.setItem("username", uname)
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

}
function record(uname, difficulty, timeCost) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "record-servlet", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var data = ("uname=" + uname + "&difficulty=" + difficulty + "&timeCost=" + timeCost);
    xhr.send(data);
}
function rank() {

}