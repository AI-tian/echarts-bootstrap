$(function () {
  $("#top_do").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 2000)
  })
  $(".deco-img").each(function (index, elem) {

    $(elem).on("mouseenter", function () {

      $(".deco").eq(index).stop().slideDown(500);

    })
    $(elem).on("mouseleave", function () {

      $(".deco").eq(index).stop().slideUp(500)

    })
  })
  var timer = function () {
    $(".carousel-item").toggleClass("active")
    $(".carousel-indicators li").toggleClass("active")
  }
  $(".carousel-indicators li").on("click", function () {
    $(this).toggleClass("active").siblings().removeClass("active")
    $(".carousel-item").toggleClass("active")
  })
  setInterval(timer,5000)

})


