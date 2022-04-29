$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 110) {
      $(".left").css("width", "2rem");
    } else {
      $(".left").css("width", "");
    }
  });
});

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 110) {
      $(".logo-div h3").css("font-size", "1.1rem");
    } else {
      $(".logo-div h3").css("font-size", "");
    }
  });
});

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 110) {
      $("nav ul li a").css("font-size", "1.1rem");
    } else {
      $("nav ul li a").css("font-size", "");
    }
  });
});

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 110) {
      $(".top").css("opacity", "0.2");
    } else {
      $(".top").css("opacity", "");
    }
  });
});
