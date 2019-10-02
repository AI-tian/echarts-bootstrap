$(function () {
    var mark = true;
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
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
    if (user === "English") {
     
        $("body span:nth-of-type(1)").attr("class", "diso")
        $("body span:nth-of-type(2)").attr("class", "disp")
        mark = false;
    }
    if (user === "chinese") {
      
        $("body span:nth-of-type(1)").attr("class", "disp")
        $("body span:nth-of-type(2)").attr("class", "diso")
        mark = true
    }

    $(".US").on("click", function () {
        if (mark) {

            $("body span:nth-of-type(1)").attr("class", "diso")
            $("body span:nth-of-type(2)").attr("class", "disp")
            var a = "English"
            setCookie("usname", a, 30)
            mark = false;
        } else {
            $("body span:nth-of-type(1)").attr("class", "disp")
            $("body span:nth-of-type(2)").attr("class", "diso")
            var b = "chinese"
            setCookie("usname", b, 30)
            mark = true;
        }
    })

})
