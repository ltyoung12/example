$(function () {
  $(".close").click(function () {
    $(".fixed_popup").css("display", "none");
  });

  $(".open").click(function () {
    $(".fixed_popup").css("display", "block");
  });

  $(".fixed_btn").click(function () {
    if ($(".top_fixed_box").css("display") == "none") {
      $(".top_fixed_box").stop().slideDown(1000);
    } else {
      $(".top_fixed_box").stop().slideUp(1000);
    }
  });

  // ------------------------------
});
