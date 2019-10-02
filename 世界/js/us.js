
$(function () {
  var mark = true;
  //设置cookie
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  //获取cookie
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
  }
  var user = getCookie("usname")
  console.log(user)
  //判断
  if (user === "English") {
   
    $(".navbar-brand span").eq(0).attr("class", "diso")
    $(".navbar-brand span").eq(1).attr("class", "disp")
    $(".lis span:nth-of-type(1)").attr("class", "diso")
    $(".lis span:nth-of-type(2)").attr("class", "disp")
    $(".T-content span:nth-of-type(1)").attr("class", "diso")
    $(".T-content span:nth-of-type(2)").attr("class", "disp")
    $("#learn span:nth-of-type(1)").attr("class", "diso")
    $("#learn span:nth-of-type(2)").attr("class", "disp")
    $("#about span:nth-of-type(1)").attr("class", "diso")
    $("#about span:nth-of-type(2)").attr("class", "disp")
    $("#projects span:nth-of-type(1)").attr("class", "diso")
    $("#projects span:nth-of-type(2)").attr("class", "disp")
    $("#footer span:nth-of-type(1)").attr("class", "diso")
    $("#footer span:nth-of-type(2)").attr("class", "disp")
    $("#more span:nth-of-type(1)").attr("class", "diso")
    $("#more span:nth-of-type(2)").attr("class", "disp")
    mark = false;
  }
  if (user === "chinese") {
   
    $(".navbar-brand span").eq(0).attr("class", "disp")
    $(".navbar-brand span").eq(1).attr("class", "diso")
    $(".lis span:nth-of-type(1)").attr("class", "disp")
    $(".lis span:nth-of-type(2)").attr("class", "diso")
    $(".T-content span:nth-of-type(1)").attr("class", "disp")
    $(".T-content span:nth-of-type(2)").attr("class", "diso")
    $("#learn span:nth-of-type(1)").attr("class", "disp")
    $("#learn span:nth-of-type(2)").attr("class", "diso")
    $("#about span:nth-of-type(1)").attr("class", "disp")
    $("#about span:nth-of-type(2)").attr("class", "diso")
    $("#projects span:nth-of-type(1)").attr("class", "disp")
    $("#projects span:nth-of-type(2)").attr("class", "diso")
    $("#footer span:nth-of-type(1)").attr("class", "disp")
    $("#footer span:nth-of-type(2)").attr("class", "diso")
    $("#more span:nth-of-type(1)").attr("class", "disp")
    $("#more span:nth-of-type(2)").attr("class", "diso")
    mark = true;
  }
  //点击
  $(".US").on("click", function () {
    if (mark) {

      $(".navbar-brand span").eq(0).attr("class", "diso")
      $(".navbar-brand span").eq(1).attr("class", "disp")
      $(".lis span:nth-of-type(1)").attr("class", "diso")
      $(".lis span:nth-of-type(2)").attr("class", "disp")
      $(".T-content span:nth-of-type(1)").attr("class", "diso")
      $(".T-content span:nth-of-type(2)").attr("class", "disp")
      $("#learn span:nth-of-type(1)").attr("class", "diso")
      $("#learn span:nth-of-type(2)").attr("class", "disp")
      $("#about span:nth-of-type(1)").attr("class", "diso")
      $("#about span:nth-of-type(2)").attr("class", "disp")
      $("#projects span:nth-of-type(1)").attr("class", "diso")
      $("#projects span:nth-of-type(2)").attr("class", "disp")
      $("#footer span:nth-of-type(1)").attr("class", "diso")
      $("#footer span:nth-of-type(2)").attr("class", "disp")
      $("#more span:nth-of-type(1)").attr("class", "diso")
      $("#more span:nth-of-type(2)").attr("class", "disp")
      var a = "English"
      setCookie("usname", a, 0.1)
      mark = false;
    } else {

      $(".navbar-brand span").eq(0).attr("class", "disp")
      $(".navbar-brand span").eq(1).attr("class", "diso")
      $(".lis span:nth-of-type(1)").attr("class", "disp")
      $(".lis span:nth-of-type(2)").attr("class", "diso")
      $(".T-content span:nth-of-type(1)").attr("class", "disp")
      $(".T-content span:nth-of-type(2)").attr("class", "diso")
      $("#learn span:nth-of-type(1)").attr("class", "disp")
      $("#learn span:nth-of-type(2)").attr("class", "diso")
      $("#about span:nth-of-type(1)").attr("class", "disp")
      $("#about span:nth-of-type(2)").attr("class", "diso")
      $("#projects span:nth-of-type(1)").attr("class", "disp")
      $("#projects span:nth-of-type(2)").attr("class", "diso")
      $("#footer span:nth-of-type(1)").attr("class", "disp")
      $("#footer span:nth-of-type(2)").attr("class", "diso")
      $("#more span:nth-of-type(1)").attr("class", "disp")
      $("#more span:nth-of-type(2)").attr("class", "diso")
      var b = "chinese"
      setCookie("usname", b, 0.1)
      mark = true;
    }
  })



})
