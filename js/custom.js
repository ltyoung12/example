$(function () {
  //document.ready

  /*gnb 슬라이드*/
  $(".title").click(function () {
    if ($(this).next().css("display") == "none") {
      $(".sub").slideUp(500);
    }

    $(this).next().slideDown(500);
  });

  /*메뉴바 열기*/
  $(".open").click(function () {
    $("header").animate({ left: "0px" }, 500);
  });

  /*메뉴바 닫기*/
  $(".close > i ").click(function () {
    $("header").animate({ left: "-230px" }, 500);
    $(".title").next().css("display", "none");
  });

  var rotate = 0;
  var scrollEvent = true;
  var clickEvent = true;

  $(".tBtn").click(function () {
    if (clickEvent == true) {
      clickEvent = false;
      rotate -= 72;
      $(".slot").css("transform", "rotate(" + rotate + "deg)");
      $(".box").css("transform", "rotate(" + -rotate + "deg)");
      //배경이미지 변경
      var last = $(".main_contents > div:last");
      $(".main_contents").prepend(last);
      setTimeout(function () {
        clickEvent = true;
      }, 1000);
    }
  });

  $(".bBtn").click(function () {
    if (clickEvent == true) {
      clickEvent = false;
      rotate += 72;
      $(".slot").css("transform", "rotate(" + rotate + "deg)");
      $(".box").css("transform", "rotate(" + -rotate + "deg)");

      //배경이미지 변경
      var first = $(".main_contents > div:first");
      $(".main_contents").append(first);

      setTimeout(function () {
        clickEvent = true;
      }, 1000);
    }
  });

  $(".slot").on("wheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
    console.log(wheel);
    if (0 > wheel && scrollEvent == true) {
      scrollEvent = false;
      rotate -= 72;
      $(".slot").css("transform", "rotate(" + rotate + "deg)");
      $(".box").css("transform", "rotate(" + -rotate + "deg)");

      //배경이미지 변경
      var last = $(".main_contents > div:last");
      $(".main_contents").prepend(last);

      setTimeout(function () {
        scrollEvent = true;
      }, 1000);
    } else if (0 < wheel && scrollEvent == true) {
      scrollEvent = false;
      rotate += 72;
      $(".slot").css("transform", "rotate(" + rotate + "deg)");
      $(".box").css("transform", "rotate(" + -rotate + "deg)");
      //배경이미지 변경
      var first = $(".main_contents > div:first");
      $(".main_contents").append(first);
      setTimeout(function () {
        scrollEvent = true;
      }, 1000);
    }
  });
  /*디즈니*/
  var disNum = 0;
  change = setInterval(disney, 3100);
  function disney() {
    disNum++;
    if (disNum >= 4) {
      disNum = 0;
    }
    $(".main_contents > .disney").css(
      "background",
      "url(./img/disney/disney_bg" + disNum + ".jpg) center/100% 100%"
    );
  }

  /*마블*/
  var marsNum = 0;
  change = setInterval(marvel, 3100);
  function marvel() {
    marsNum++;
    if (marsNum >= 4) {
      marsNum = 0;
    }
    $(".main_contents > .marvel").css(
      "background",
      "url(./img/marvel/marvel_bg" + marsNum + ".jpg) center/100% 100%"
    );
  }

  /*스타워즈*/
  var starNum = 0;
  change = setInterval(starswars, 3100);
  function starswars() {
    starNum++;
    if (starNum >= 4) {
      starNum = 0;
    }
    $(".main_contents > .starwars").css(
      "background",
      "url(./img/starwars/starwars_bg" + starNum + ".jpg) center/100% 100%"
    );
  }
  /*지오그래픽*/
  var geoNum = 0;
  change = setInterval(geographic, 3100);
  function geographic() {
    geoNum++;
    if (geoNum >= 4) {
      geoNum = 0;
    }
    $(".main_contents > .geographic").css(
      "background",
      "url(./img/geographic/geographic_bg" + geoNum + ".jpg) center/100% 100%"
    );
  }
  /*디즈니*/
  var stuNum = 0;
  change = setInterval(studio, 3100);
  function studio() {
    stuNum++;
    if (stuNum >= 4) {
      stuNum = 0;
    }
    $(".main_contents > .studios").css(
      "background",
      "url(./img/20th_CENTURY_STUDIOS/studios_bg" +
        stuNum +
        ".jpg) center/100% 100%"
    );
  }
});
