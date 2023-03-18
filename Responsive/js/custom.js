function reload() {
  if (event.keyCode == 116) {
    scrollTo(0, 0);
    location.reload;
  }
}

document.onkeydown = reload;

$(function () {
  //새로고침

  // 스크롤이벤트
  $(window).scroll(function () {
    var scrolltop = $(document).scrollTop();
    console.log(scrolltop);

    var trans = window.innerWidth;
    console.log(trans);
    // 헤더
    if (scrolltop <= 0) {
      $(".header").css("background-color", "transparent");
      $(".header_navi > li").removeClass("on");
      $(".header_logo > h1 > a").removeClass("on");
    } else if (scrolltop > 0 && trans > 767) {
      $(".header").css("background-color", "brown");
      $(".header_navi > li").addClass("on");
      $(".header_logo > h1 > a").addClass("on");
    }
    // about

    if (scrolltop >= 842 && scrolltop < 1396) {
      $(".about").removeClass("on");
      $(".about").addClass("orange");
    } else {
      $(".about").removeClass("orange");
    }
    // services
    if (scrolltop >= 1396 && scrolltop < 1933) {
      $(".services").removeClass("on");
      $(".services").addClass("orange");
    } else {
      $(".services").removeClass("orange");
    }
    // portfolio
    if (scrolltop >= 1933 && scrolltop < 2513) {
      $(".portfolio").removeClass("on");
      $(".portfolio").addClass("orange");
    } else {
      $(".portfolio").removeClass("orange");
    }
    // contact
    if (scrolltop >= 2513) {
      $(".contact").removeClass("on");
      $(".contact").addClass("orange");
    } else {
      $(".contact").removeClass("orange");
    }
  });

  $(document).ready(function () {
    $(".about").click(function () {
      $("html").animate({ scrollTop: 900 }, 0.1);
    });
    $(".services").click(function () {
      $("html").animate({ scrollTop: 1396 }, 0.1);
    });
    $(".portfolio").click(function () {
      $("html").animate({ scrollTop: 1933 }, 0.1);
    });
    $(".contact").click(function () {
      $("html").animate({ scrollTop: 2513 }, 0.1);
    });

    /*if (headtop >= 0) {
      $(".header").css("background-color", "brown");
    } else if (headtop <= 0 && brown) {
      $(".header").css("background-color", "transparent");
    }*/
  });

  $(window).resize(function () {
    var width = window.innerWidth;
    if (width <= 767.98) {
      $(".header_navi > li").removeClass("on");
      $(".header_navi").css("display", "none");
    }
    if (width > 767.98) {
      $(".header_navi").css("display", "flex");
    }
  });
  //   버튼 클릭 시 네비창
  $(".button").click(function () {
    if ($(".header_navi").css("display") == "none") {
      $(".header_navi").css("display", "flex");
    } else if ($(".header_navi").css("display") == "flex") {
      $(".header_navi").css("display", "none");
    }
  });

  // 컨텐츠4 이벤트

  $(".con4_box").click(function () {
    $(".con4_picture_slide_wrapper").css("display", "block");
  });

  $(".prev").click(function () {
    var last = $(".picture_box_list > div:last");
    $(".picture_box_list > div").hide();
    $(".picture_box_list").css("left", "-50px");
    $(".picture_box_list").animate({ left: "0px" }, 400);
    $(".picture_box_list > div:last").fadeIn(350);
    $(".picture_box_list").prepend(last);
  });

  $(".next,.picture_box_list > div").click(function () {
    var first = $(".picture_box_list > div:first");
    $(".picture_box_list > div").hide();
    $(".picture_box_list").css("left", "50px");
    $(".picture_box_list").animate({ left: "0px" }, 400);
    $(".picture_box_list").append(first);
    $(".picture_box_list > div:first").fadeIn(350);
  });

  $(".close > i").click(function () {
    $(".con4_picture_slide_wrapper").css("display", "none");
  });

  var pic = $(".con4_picture_slide_box").get(0);
  $(".con4_picture_slide_wrapper").click(function (e) {
    console.log(e.target);
    if (e.target === pic) {
      $(".con4_picture_slide_wrapper").css("display", "none");
    }
  });
});
