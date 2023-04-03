$(function () {
  // x = new Date();
  // currentTimeZoneOffsetInHours = -x.getTimezoneOffset() / 60;
  // console(currentTimeZoneOffsetInHours);
  // 시간 함수
  var korea = setInterval(koreaclock, 500);

  function koreaclock() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var secon = now.getSeconds();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var year = now.getFullYear();

    $(".all_clock").text(now);
    $(".hour").text(hour + "시");
    $(".min").text(min + "분");
    $(".clock_second").text(secon + "초");
    $(".month").text(month + "월");
    $(".date").text(date + "일");
    if (hour > 12) {
      $(".hour").text(hour - 12 + "시");
    }
    // AM PM 구분 //
    if (hour < 12) {
      $(".am_pm").text("AM");
    } else {
      $(".am_pm").text("PM");
    }

    // 요일 한글로 변경 //
    if (day == 1) {
      $(".day").text("월요일");
    } else if (day == 2) {
      $(".day").text("화요일");
    } else if (day == 3) {
      $(".day").text("수요일");
    } else if (day == 4) {
      $(".day").text("목요일");
    } else if (day == 5) {
      $(".day").text("금요일");
    } else if (day == 6) {
      $(".day").text("토요일");
    } else if (day == 7) {
      $(".day").text("요일");
    }
  }

  var usa = setInterval(usaclock, 500);

  function usaclock() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var secon = now.getSeconds();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var year = now.getFullYear();

    $(".all_clock1").text(now);
    $(".usa_hour").text(hour + "시");
    $(".usa_min").text(min + "분");
    $(".usa_clock_second").text(secon + "초");
    $(".usa_month").text(month + "월");
    $(".usa_date").text(date + "일");

    if (hour == 0) {
      hour = 24;
    } else if (hour == 1) {
      hour = 25;
    } else if (hour == 2) {
      hour = 26;
    } else if (hour == 3) {
      hour = 27;
    } else if (hour == 4) {
      hour = 28;
    } else if (hour == 5) {
      hour = 29;
    } else if (hour == 6) {
      hour = 30;
    } else if (hour == 7) {
      hour = 31;
    } else if (hour == 8) {
      hour = 32;
    } else if (hour == 9) {
      hour = 33;
    } else if (hour == 10) {
      hour = 34;
    } else if (hour == 11) {
      hour = 35;
    } else if (hour == 12) {
      hour = 36;
    }
    if (hour - 13 < 12) {
      $(".usa_am_pm").text("AM");
    } else {
      $(".usa_am_pm").text("PM");
    }
    // AM PM 구분 //
    if (hour >= 21) {
      hour = hour - 12;
      $(".usa_hour").text(hour - 13 + "시");
    } else if (hour > 12) {
      $(".usa_hour").text(hour - 13 + "시");
    }

    // 요일 한글로 변경 //
    if (day == 1) {
      $(".usa_day").text("월요일");
    } else if (day == 2) {
      $(".usa_day").text("화요일");
    } else if (day == 3) {
      $(".usa_day").text("수요일");
    } else if (day == 4) {
      $(".usa_day").text("목요일");
    } else if (day == 5) {
      $(".usa_day").text("금요일");
    } else if (day == 6) {
      $(".usa_day").text("토요일");
    } else if (day == 7) {
      $(".usa_day").text("요일");
    }
  }

  var eng = setInterval(engclock, 500);

  function engclock() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var secon = now.getSeconds();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var year = now.getFullYear();

    $(".all_clock2").text(now);
    $(".eng_hour").text(hour + "시");
    $(".eng_min").text(min + "분");
    $(".eng_clock_second").text(secon + "초");
    $(".eng_month").text(month + "월");
    $(".eng_date").text(date + "일");
    if (hour == 0) {
      hour = 24;
    } else if (hour == 1) {
      hour = 25;
    } else if (hour == 2) {
      hour = 26;
    } else if (hour == 3) {
      hour = 27;
    } else if (hour == 4) {
      hour = 28;
    } else if (hour == 5) {
      hour = 29;
    } else if (hour == 6) {
      hour = 30;
    } else if (hour == 7) {
      hour = 31;
    }
    // else if (hour == 8) {
    //   hour = 32;
    // } else if (hour == 9) {
    //   hour = 33;
    // } else if (hour == 10) {
    //   hour = 34;
    // }
    // AM PM 구분 //
    if (hour - 8 < 12) {
      $(".eng_am_pm").text("AM");
    } else {
      $(".eng_am_pm").text("PM");
    }
    // AM PM 구분 //
    // 시차 계산
    if (hour >= 21) {
      hour = hour - 12;
      $(".eng_hour").text(hour - 8 + "시");
    } else if (hour > 12) {
      $(".eng_hour").text(hour - 8 + "시");
    }
    // 시차 계산

    // 요일 한글로 변경 //
    if (day == 1) {
      $(".eng_day").text("월요일");
    } else if (day == 2) {
      $(".eng_day").text("화요일");
    } else if (day == 3) {
      $(".eng_day").text("수요일");
    } else if (day == 4) {
      $(".eng_day").text("목요일");
    } else if (day == 5) {
      $(".eng_day").text("금요일");
    } else if (day == 6) {
      $(".eng_day").text("토요일");
    } else if (day == 7) {
      $(".eng_day").text("요일");
    }
  }
  var spain = setInterval(spainclock, 500);
  function spainclock() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var secon = now.getSeconds();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var year = now.getFullYear();

    $(".all_clock").text(now);
    $(".spain_hour").text(hour + "시");
    $(".spain_min").text(min + "분");
    $(".spain_clock_second").text(secon + "초");
    $(".spain_month").text(month + "월");
    $(".spain_date").text(date + "일");
    if (hour == 0) {
      hour = 24;
    } else if (hour == 1) {
      hour = 25;
    } else if (hour == 2) {
      hour = 26;
    } else if (hour == 3) {
      hour = 27;
    } else if (hour == 4) {
      hour = 28;
    } else if (hour == 5) {
      hour = 29;
    } else if (hour == 6) {
      hour = 30;
    }
    // else if (hour == 7) {
    //   hour == 31;
    // } else if (hour == 8) {
    //   hour == 32;
    // } else if (hour == 9) {
    //   hour == 33;
    // } else if (hour == 10) {
    //   hour == 34;
    // }
    // AM PM 구분 //

    if (hour - 7 < 12) {
      $(".spain_am_pm").text("AM");
    } else {
      $(".spain_am_pm").text("PM");
    }

    if (hour >= 19) {
      hour = hour - 12;
      $(".spain_hour").text(hour - 7 + "시");
    } else if (hour > 12) {
      $(".spain_hour").text(hour - 7 + "시");
    }

    // 요일 한글로 변경 //
    if (day == 1) {
      $(".spain_day").text("월요일");
    } else if (day == 2) {
      $(".spain_day").text("화요일");
    } else if (day == 3) {
      $(".spain_day").text("수요일");
    } else if (day == 4) {
      $(".spain_day").text("목요일");
    } else if (day == 5) {
      $(".spain_day").text("금요일");
    } else if (day == 6) {
      $(".spain_day").text("토요일");
    } else if (day == 7) {
      $(".spain_day").text("요일");
    }
  }
  // var korea_clock = $(".korea_clock").css("display");
  // var usa_clock = $(".usa_clock").css("display");
  // var eng_clock = $(".eng_clock").css("display");
  // var spin_clock = $(".spin_clock").css("display");
  // clearInterval(korea);
  // clearInterval(usa);
  // clearInterval(eng);
  // clearInterval(spain);3
  // 시간 함수 끝 ///
  $(".clock").css("display", "none");
  $(".korea_clock").css("display", "flex");
  $(".month_wrap > ul").css("display", "flex");

  $(".from > p").click(function () {
    clearInterval(korea);
    clearInterval(usa);
    clearInterval(eng);
    clearInterval(spain);

    var from_n = $(this).text();
    // console.log(from_n);
    $(".from_name").text(from_n);

    var from = $(this).attr("class");

    if (from == "korea") {
      $(".clock").css("display", "none");
      $(".korea_clock").css("display", "flex");
      $(".month_wrap > ul").css("display", "flex");
      var korea = setInterval(koreaclock, 500);
    }
    if (from == "usa") {
      $(".clock").css("display", "none");
      $(".usa_clock").css("display", "flex");

      $(".month_wrap >ul").css("display", "flex");
      var usa = setInterval(usaclock, 500);
    }
    if (from == "eng") {
      $(".clock").css("display", "none");
      $(".eng_clock").css("display", "flex");

      $(".month_wrap >ul").css("display", "flex");
      var eng = setInterval(engclock, 500);
    }

    if (from == "spain") {
      $(".clock").css("display", "none");
      $(".spain_clock").css("display", "flex");
      $(".month_wrap >ul").css("display", "flex");
    }

    // console.log(from);
    // if (from == "korea") {
    //   var korea = setInterval(koreaclock, 500);
    // }
    // if (from == "usa") {
    //   var usa = setInterval(usaclock, 500);
    // }
    // if (from == "eng") {
    //   var eng = setInterval(engclock, 500);
    // }

    // if (from == "spain") {
    //   clearInterval(korea);
    //   clearInterval(eng);
    //   clearInterval(spain);
    //   var spain = setInterval(spainclock, 500);
    // }
    // var has = $(this).hasClass("usa");
    // console.log(has);
    // if ($(this).hasClass("korea")) {
    //   clearInterval(korea);
    //   clearInterval(usa);
    //   clearInterval(eng);
    //   clearInterval(spain);
    //   var korea = setInterval(krclock, 500);
    // }
    // if ($(this).hasClass("usa")) {
    //   clearInterval(korea);
    //   clearInterval(usa);
    //   clearInterval(eng);
    //   clearInterval(spain);
    //   var usa = setInterval(usaclock, 500);
    // }
    // if ($(this).hasClass("eng")) {
    //   var eng = setInterval(engclock, 500);
    // }
    // if ($(this).hasClass("spain")) {
    //   var spain = setInterval(spainclock, 500);
    // }
  });
});
