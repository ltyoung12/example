$(function () {
  //document.ready
  //네비태그 슬라이드
  $(".navi").mouseover(function () {
    $(".naviBar_bg").stop().slideDown(400);
    $(this).find(".sub").stop().slideDown(400);
    $(this).find(".sub").css("opacity", "1");
  });
  $(".navi").mouseout(function () {
    $(".naviBar_bg").stop().slideUp(400);
    $(this).find(".sub").stop().slideUp(400);
    $(this).find(".sub").css("opacity", "0");
  });

  // 메뉴바 디스플레이
  $(".hansMenu > li").click(function () {
    var n = $(this).index();
    console.log(n);
    $(".right_Menu > div").removeClass("on").eq(n).addClass("on");
  });

  // 자동슬라이드
  var count = 0;
  var timer = setInterval(slide, 3000);
  function slide() {
    count++;
    if (count >= $(".banner > li").length) {
      count = 0;
    }

    $(".dot > li").removeClass();
    $(".dot > li").eq(count).addClass("on");

    var pos = count * -2560;

    $(".banner").animate({ left: pos + "px" }, 1000);
  }

  $(".dot").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      timer = setInterval(slide, 3000);
    }
  );

  $(".dot > li").click(function () {
    $(".dot > li").removeClass("on");
    $(this).addClass("on");

    var count = $(this).index();

    var pos = count * -2560;

    $(".banner")
      .stop()
      .animate({ left: pos + "px" }, 1000);
  });

  $(".hansMenu > li").click(function () {
    $(".hansMenu > li").removeClass("on");
    $(this).addClass("on");
  });
});
