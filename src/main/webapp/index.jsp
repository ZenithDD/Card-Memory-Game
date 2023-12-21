<%@ page import="com.card.entity.Rank" %>
<%@ page import="java.util.List" %>
<!-- <%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %> -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>神经衰弱</title>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/login-form.css" />
  </head>

  <body>
    <!-- 主页 -->
    <div class="container">
      <div class="block_1">
        <div class="box_1">
          <div class="btn bt front_face">开始游戏</div>
          <div class="back_face">
            <div id="easy" class="start">简单</div>
            <div id="medium" class="start">中等</div>
            <div id="hard" class="start">困难</div>
          </div>
        </div>
      </div>
      <div class="block_2">
        <div class="box_2">
          <div class="btn bt2">教程</div>
          <div class="info">
            <h1>记忆纸牌游戏</h1>
            <br />
            <p>
              单击方块以查看它们发现的符号，并尝试在其他卡片下方找到匹配的符号。一次发现两个匹配的符号，将它们从游戏中消除，在限时时间内消除所有方块，就可以赢得游戏。
            </p>
          </div>
        </div>
        <div class="box_3">
          <div class="btn bt3">登录</div>
        </div>
      </div>
    </div>
    <!-- 登录框 -->
    <div class="login">
      <div class="login-box">
        <svg
          class="arrow bi bi-arrow-left-square"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            id="return"
            fill-rule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
        <h2>登录</h2>
        <form>
          <div class="user-box">
            <input type="text" id="uname" />
            <label>用户名</label>
          </div>
          <div class="user-box">
            <input type="password" id="upwd" />
            <label>密码</label>
          </div>
          <a
            href="#"
            id="loginBtn"
            class="submit"
            style="display: block; margin: 0 50px; text-align: center"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            登录 / 注册
          </a>
          <div
            id="alert"
            style="display: block; text-align: center; margin-top: 10px"
          ></div>
        </form>
      </div>
    </div>
    <!-- 时间轴 -->
    <div id="g" class="bar"></div>
    <!-- 游戏 -->
    <div class="game">
      <div class="easy">
        <ul class="cards">
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>

          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>

          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>

          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src="img/icons8-rainbow-six-siege-64.png" alt="" />
            </div>
            <div class="view back-view">
              <img src="img/r6operators-icons-2.4.0/1.png" alt="card-img" />
            </div>
          </li>
        </ul>
      </div>
      <div class="medium"></div>
      <div class="hard"></div>
    </div>
    <!-- 排行榜 -->
    <div class="rank">
      <table class="zigzag">
        <thead>
          <tr>
            <th>玩家</th>
            <th>难度</th>
            <th>最快完成时间</th>
            <th>挑战时间</th>
          </tr>
        </thead>
        <tbody id="rankBoard">

        </tbody>
      </table>
    </div>
  </body>
  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/MyJS.js"></script>
  <script src="js/game.js"></script>
</html>
