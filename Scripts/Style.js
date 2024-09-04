$("#banner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".list_products_titel1").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
$(".list_feedback").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$(".list_new").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$(window).resize(function () {
  if ($(window).width() <= 1400) {
    $(".long_text_menu").text("DANH MỤC");
  } else {
    $(".long_text_menu").text("DANH MỤC SẢN PHẨM");
  }
});
$(".menu_product a").click(function () {
  $(".menu_product a").removeClass("active");
  $(this).addClass("active");
});
$(document).ready(function () {
  $(".btn_ud_menu").click(function () {
    $("#drop_menu_product").slideToggle("slow");
    $(".arrow_menu").toggleClass("up");
  });
});
$(document).ready(function () {
  $(".btn_ud_sub_menu").click(function () {
    $(".sub_menu_product2").slideToggle("slow");
    $(".arrow_sub_menu").toggleClass("up");
  });
});
$(document).ready(function () {
  $(".updown1").click(function () {
    $(this).closest(".quest_title").siblings(".quest").slideToggle("slow");
    $(this).find(".arrowuse").toggleClass("up");
  });
});
$(document).ready(function () {
  $(".answer_all").click(function () {
    $(".answer").toggleClass("active");
  });
});
$(document).ready(function () {
  var isClicked = false;
  $(".answer_all").click(function () {
    if (isClicked) {
      $(this).html(
        '<i class="fa fa-caret-down" aria-hidden="true"></i> Xem Thêm'
      );
    } else {
      $(this).html('<i class="fa fa-caret-up" aria-hidden="true"></i> Ẩn Bớt');
    }
    isClicked = !isClicked;
  });
});
var i = false;
$(".btn_more_info").click(function () {
  $(this).siblings(".text_info_product").toggleClass("active");

  if (!$(".text_info_product").hasClass("active")) {
    $(this).html(
      '<i class="fa fa-caret-down" aria-hidden="true"></i> Xem Thêm'
    );
  } else {
    $(this).html('<i class="fa fa-caret-up" aria-hidden="true"></i> Ẩn Bớt');
  }
  i = !i;
});
$(".updown2").click(function () {
  $(this)
    .closest(".bot_product_title")
    .siblings(".full_info_product")
    .slideToggle("slow");
  $(this).find(".arrowuse").toggleClass("up");
});
$(".list_img_hor").slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: ".list_img_ver",
  vertical: false,
  autoplay: false,
  verticalSwiping: true,
  centerMode: false,
  fade: true,
});

$(".list_img_ver").slick({
  slidesToShow: 4,
  asNavFor: ".list_img_hor",
  vertical: true,
  focusOnSelect: true,
  autoplay: false,
  centerMode: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
      },
    },
  ],
});

//$(window).on('resize orientationchange', function () {
//    if ($(window).width() > 1200) {
//        $('.list_img_ver').slick('unslick');
//        $('.list_img_ver').slick({
//            slidestoshow: 4,
//            asnavfor: '.list_img_hor',
//            vertical: true,
//            focusonselect: true,
//            autoplay: false,
//            centermode: true
//        });
//    }
//});

$(".btn_add").click(function () {
  var input = $("#number_product");
  if (parseInt(input.val()) < 99) {
    input.val(parseInt(input.val()) + 1);
  }
});

$(".btn_remove").click(function () {
  var input = $("#number_product");
  if (parseInt(input.val()) > 0) {
    input.val(parseInt(input.val()) - 1);
  }
});

/*JS Reponsive*/
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".menu_mb").toggleClass("active");
  $(".overlay").toggleClass("active");
});
$(".show_menu").click(function () {
  $(".overlay").toggleClass("active");
  $(".menu_mb").toggleClass("active");
});
$(".overlay").click(function () {
  $(this).removeClass("active");
  $(".menu_mb").removeClass("active");
  $(".hamburger").removeClass("active");
});
$(".show_search").click(function () {
  $(".search_mb").show();
});
$(".close_search").click(function () {
  $(".search_mb").hide();
});
$(window).scroll(function () {
  var e = $(window).scrollTop();
  if (e > 300) {
    $(".back_to_top").show();
  } else {
    $(".back_to_top").hide();
  }
});
