$("#returnTop").click(function () {
        var speed=500;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });