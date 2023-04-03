$(function () {
  // 슬라이더 변수 //
  var num = 0;
  var ture1 = true;
  var ture2 = true;
  var ture3 = true;
  var r_auto = setInterval(r_auto_slide, 2000);
  var l_auto = setInterval(l_auto_slide, 2000);
  // var zero = $(".zero");
  // var one = $(".one");
  // var two = $(".two");
  // var three = $(".three");
  // var four = $(".four");

  // 슬라이더 변수 //

  // 클릭 슬라이더 이벤트//

  // function right_btn() {
  //   var first = $(".click_slider_list > li").first();
  //   if (ture1 == true) {
  //     ture1 = false;
  //     $(".click_slider_list").animate({ left: "-400px" }, 1000, function () {
  //       $(".click_slider_list").append(first).css("left", "0");
  //     });
  //     setTimeout(function () {
  //       ture1 = true;
  //     }, 1000);
  //   }
  // }

  // function left_btn() {
  //   var last = $(".click_slider_list > li:last");
  //   if (ture2 == true) {
  //     ture2 = false;
  //     $(".click_slider_list").prepend(last).css("left", "-400px");
  //     $(".click_slider_list").animate({ left: "0px" }, 1000);
  //     setTimeout(function () {
  //       ture2 = true;
  //     }, 1000);
  //   }
  // }

  $(".r_click_btn").click(function () {
    var first = $(".click_slider_list > li").first();
    if (ture1 == true) {
      ture1 = false;
      $(".click_slider_list").animate({ left: "-400px" }, 1000, function () {
        $(".click_slider_list").append(first).css("left", "0");
      });
      setTimeout(function () {
        ture1 = true;
      }, 1000);
    }
  });
  $(".l_click_btn").click(function () {
    var last = $(".click_slider_list > li:last");
    if (ture2 == true) {
      ture2 = false;
      $(".click_slider_list").prepend(last).css("left", "-400px");
      $(".click_slider_list").animate({ left: "0px" }, 1000);
      setTimeout(function () {
        ture2 = true;
      }, 1000);
    }
  });

  //------------ 클릭 슬라이더 이벤트--------------//

  //------------ 오토 슬라이더 이벤트--------------//

  clearInterval(l_auto);
  function r_auto_slide() {
    var afirst = $(".auto_slide_list > li:first");
    $(".auto_slide_list").animate({ left: "-400px" }, function () {
      $(".auto_slide_list").append(afirst).css("left", "0");
    });
  }
  function l_auto_slide() {
    var alast = $(".auto_slide_list > li:last");
    $(".auto_slide_list").prepend(alast).css("left", "-400px");
    $(".auto_slide_list").animate({ left: "0px" });
  }
  //-------- 우측 클릭 --------//
  $(".auto_r_btn").click(function () {
    clearInterval(l_auto);
    r_auto = setInterval(r_auto_slide, 2000);
  });
  //------- 왼쪽 클릭 -------//
  $(".auto_l_btn").click(function () {
    clearInterval(r_auto);

    l_auto = setInterval(l_auto_slide, 2000);
  });

  $(".auto_slide_list").hover(
    function () {
      clearInterval(r_auto);
      clearInterval(l_auto);
    },
    function () {
      r_auto = setInterval(r_auto_slide, 2000);
    }
  );

  //  닷버튼 슬라이드

  $(".r_dot_click_btn").click(function () {
    num++;

    if (num > 4) {
      num = 0;
    }
    $(".dot_slide_list > li").fadeOut().eq(num).fadeIn();
    $(".dot_wrap > li").removeClass();
    $(".dot_wrap > li").eq(num).addClass("active");
  });

  $(".l_dot_click_btn").click(function () {
    num--;

    if (num < 0) {
      num = 4;
    }
    console.log(num);
    $(".dot_slide_list > li").fadeOut().eq(num).fadeIn();
    $(".dot_wrap > li").removeClass();
    $(".dot_wrap > li").eq(num).addClass("active");
  });

  $(".dot_wrap > li").click(function () {
    var act = $(this).index();
    console.log(act);
    num = $(this).index();

    $(".dot_wrap > li").removeClass();
    $(this).addClass("active");
    $(".dot_slide_list > li").fadeOut();
    $(".dot_slide_list > li").eq(num).fadeIn();
  });

  function dot_auto() {
    num++;
    if (num > 4) {
      num = 0;
    }
    $(".dot_wrap > li").removeClass();
    $(".dot_wrap > li").eq(num).addClass("active");
    $(".dot_slide_list > li").fadeOut().eq(num).fadeIn();
  }

  var dot_auto_set = setInterval(dot_auto, 2000);
});
