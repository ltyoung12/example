$(function () {
  //document.ready
  /*변수 선언*/

  //네비메뉴 변수

  //슬라이더 변수
  //var timer = setInterval(slide, 2000);
  var count = 0;
  var dot = 0;
  var next = true;
  var prev = true;
  var right = true;
  var left = true;
  var back = $(".banner_nav > li:last");
  //상단 슬라이더
  $(".toggle_box > .bar").click(function () {
    $(".toggle_box > .imgbar").slideToggle(1000);
  });

  //메뉴바

  $(".menu_bar").mouseover(function () {
    $(".main_nav").find(".main_nav_bg").stop().slideDown("1000");
  });
  $(".menu_bar").mouseout(function () {
    $(".main_nav").find(".main_nav_bg").stop().slideUp("1000");
  });

  var nav = true;
  /*네비 메뉴*/
  $(".menu_bar > .gnb > li").mouseover(function () {
    $(this).find(".sub").stop().slideDown("1000");
    if ($(this).find(".sub").stop().slideDown("1000") && nav == true) {
      nav == false;
      $(".menu_bar > .gnb > li .sub > li").css("opacity", "1");
      setTimeout(function () {
        nav = true;
      }, 800);
    }
  });

  $(".menu_bar > .gnb > li").mouseout(function () {
    $(this).find(".sub").stop().slideUp("fast");
    if ($(this).find(".sub").stop().slideUp("fast") && nav == true) {
      nav == false;
      $(".menu_bar > .gnb > li .sub > li").css("opacity", "0");
      setTimeout(function () {
        nav = true;
      }, 800);
    }
  });
  $(".arrow_right").click(function () {
    if (right == true) {
      right = false;
      $(".slide_sub").each(function () {
        var efirst = $(this).find("li:first");
        console.log(efirst);
        $(this)
          .find("ul")
          .animate({ left: "-268px" }, 1000, function () {
            $(this).append(efirst).css("left", "0px");
          });
      });
      setTimeout(function () {
        right = true;
      }, 1000);
    }
  });
  $(".arrow_left").click(function () {
    if (left == true) {
      left = false;
      $(".slide_sub").each(function () {
        var elast = $(this).find("li:last");
        $(this)
          .find("ul")
          .prepend(elast)
          .css({ left: "-266px" })
          .animate({ left: "0px" }, 1000);
      });
      setTimeout(function () {
        left = true;
      }, 1000);
    }
  });
  // 스크롤 값 확인 후 글자

  $(window).scroll(function () {
    $(".con2txt").each(function () {
      var height = $(window).scrollTop();
      console.log(height);

      if (height > 1300) {
        $(".con2txt").css("opacity", "1");
      } else {
        $(".con2txt").css("opacity", "0");
      }
    });
  });
  //푸드 메뉴----------------
  $(".foodImg").mouseover(function () {
    $(this)
      .find("img")
      .stop()
      .animate({ bottom: "40px" }, 500, function () {
        $(this).stop().animate({ bottom: "10px" }, 500).css("z-index", "3");
      });
  });
  $(".foodImg").mouseout(function () {
    $(this)
      .find("img")
      .stop()
      .animate({ bottom: "40px" }, 500, function () {
        $(this).stop().animate({ bottom: "10px" }, 700).css("z-index", "1");
      });
  });

  //------동그라미-------
  $(window).scroll(function () {
    var height2 = $(window).scrollTop();
    if (height2 > 2400) {
      $(".circle").css("transform", "rotateY(0deg)");
      $(".circle").css("opacity", "1");
    } else {
      $(".circle").css("transform", "rotateY(180deg)");
      $(".circle").css("opacity", "0");
    }
  });
  //풋터 패밀리사이트

  $(".family").click(function () {
    if ($(".f_list").css("display") == "none") {
      $(".f_list").css("display", "block");
      $(".f_arrow").css(
        "background",
        "url(img/family_size_on.png) no-repeat center/cover"
      );
    } else {
      $(".f_list").css("display", "none");
      $(".f_arrow").css(
        "background",
        "url(img/family_size_off.png) no-repeat center/cover"
      );
    }
  });

  //////////////컨텐츠5 무한 슬라이더////////////
  $("#content6 > .gnb").infiniteslide({
    speed: 60,
    direction: "left",
    pauseonhover: true,
    responsive: false,
    clone: 1,
  });
});

/////////////배너 제이쿼리///////////////////
window.onload = function () {
  $(".slider2").jdSlider({
    wrap: ".slide-inner",
    isAuto: true,
    isLoop: true,
  });
};
