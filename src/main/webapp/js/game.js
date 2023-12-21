const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
// 点击开始游戏
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

  // 翻卡
  function flipCard({ target: clickedCard }) {
    if (cardOne !== clickedCard && !disableDeck) {
      clickedCard.classList.add("flip");
      if (!cardOne) {
        return (cardOne = clickedCard);
      }
      cardTwo = clickedCard;
      disableDeck = true;
      let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
      matchCards(cardOneImg, cardTwoImg);
    }
  }
  // 匹配卡
  function matchCards(img1, img2) {
    if (img1 === img2) {
      matched++;
      if (matched == 6) { // done
        setTimeout(() => {
          $(".front_face").removeClass("fade-out");
          $(".back_face").removeClass("fade-in");
          $(".container").removeClass("fade-out");
          $(".game").removeClass("fade-in");
          $("i").remove();
          return shuffleCard();
        }, 1000);

        // 记录
        let endTime = $.now();
        record(1, endTime - startTime);

      }else if ($.now()-startTime==0) { // timeout
        setTimeout(() => {
          $(".front_face").removeClass("fade-out");
          $(".back_face").removeClass("fade-in");
          $(".container").removeClass("fade-out");
          $(".game").removeClass("fade-in");
          $("i").remove();
          return shuffleCard();
        }, 1000);
      }

      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
      cardOne = cardTwo = "";
      return (disableDeck = false);
    }
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = "";
      disableDeck = false;
    }, 1200);
  }
  // 洗卡
  function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, i) => {
      card.classList.remove("flip");
      let imgTag = card.querySelector(".back-view img");
      imgTag.src = `img/r6operators-icons-2.4.0/${arr[i]}.png`;
      card.addEventListener("click", flipCard);
    });
  }

  shuffleCard();

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });

  function record(difficulty, timeCost) {
    let uname = localStorage.getItem("username");
    var xhr = new XMLHttpRequest();
    xhr.open("post", "record-servlet", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var data = ("uname=" + uname + "&difficulty=" + difficulty + "&timeCost=" + timeCost);
    xhr.send(data);
  }
});