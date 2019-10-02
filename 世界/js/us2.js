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
    console.log(user)
    if (user === "English") {

        $("#h1").html("wonder of the world")
        $("#h2").html("The world is so big to explore")
        $("#start").html("Began to explore")
        mark = false;
    }
    if (user === "chinese") {

        $("#h1").html("世界奇观")
        $("#h2").html("世界这么大等着我们去探索")
        $("#start").html("开始探索")
        mark = true
    }
    $(".US").on("click", function () {
        if (mark) {
            $("#h1").html("wonder of the world")
            $("#h2").html("The world is so big to explore")
            $("#start").html("Began to explore")
            var a = "English"
            setCookie("usname", a, 0.1)
            mark = false;
        } else {
            $("#h1").html("世界奇观")
            $("#h2").html("世界这么大等着我们去探索")
            $("#start").html("开始探索")
            var b = "chinese"
            setCookie("usname", b, 0.1)
            mark = true;
        }
    })


})