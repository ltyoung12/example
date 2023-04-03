$(function () {
  // 드롭 코드 //
  var all = $(".drop_nav_all");
  var solo = $(".drop_nav_solo > li");
  //  가로  //
  //   한번에   //
  $(".trans")
    .find(all)
    .mouseover(function () {
      $(this).find(".drop_nav_all_sub").stop().slideDown(300);
    });
  $(".trans")
    .find(all)
    .mouseout(function () {
      $(this).find(".drop_nav_all_sub").stop().slideUp(300);
    });
  //   한번에   //

  //   하나씩   //
  $(".trans")
    .find(solo)
    .mouseover(function () {
      $(this).find(".drop_nav_solo_sub").stop().slideDown(300);
    });
  $(".trans")
    .find(solo)
    .mouseout(function () {
      $(this).find(".drop_nav_solo_sub").stop().slideUp(300);
    });
  //   하나씩   //

  //  세로  //
  //   한번에   //
  $(".length")
    .find(all)
    .mouseover(function () {
      $(this).find(".drop_nav_all_sub").stop().slideDown(300);
    });
  $(".length")
    .find(all)
    .mouseout(function () {
      $(this).find(".drop_nav_all_sub").stop().slideUp(300);
    });

  //   한번에   //

  //   하나씩   //
  $(".length")
    .find(solo)
    .mouseover(function () {
      $(this).find(".drop_nav_solo_sub").stop().slideDown(300);
    });
  $(".length")
    .find(solo)
    .mouseout(function () {
      $(this).find(".drop_nav_solo_sub").stop().slideUp(300);
    });
  //   하나씩   //

  // 아코디언

  $(".title").click(function () {
    $(".title").next().stop().slideUp(600);
    if ($(this).next(".accordion_slide_sub").css("display") == "none") {
      $(this).next(".accordion_slide_sub").stop().slideDown(600);
    }
  });
});
