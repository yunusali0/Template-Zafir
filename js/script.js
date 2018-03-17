$(document).ready(function () {
    function setIntroPadding() {
        $("#intro").css("height", $(window).height() + "px");
    }
    setIntroPadding();

    $(window).resize(function () {
        setIntroPadding();
    });

    if ($("#typed").length) {
        var strings = $("#typed").data("string");
        strings = strings.split(",");

        var typed2 = new Typed('#typed', {
            strings: strings,
            typeSpeed: 40,
            loop: true,
            backDelay: 3000,
            backSpeed: 50,
            fadeOut: false,
        });
    }
    if ($(".progress-bar").length) {
        $(".progress-bar").each(function () {
            var self = $(this);
            var to = $(this).attr("aria-valuenow");

            var from = 65;
            var interval = setInterval(function () {
                self.css("width", from + "%");
                from++;
                self.parent().prev().text(from + "%");
                if (from == to) {
                    clearInterval(interval);
                }
            }, 30);
        });
    }


    $(window).scroll(function (ev) {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass("scrolled");
        } else {
            $('#header').removeClass("scrolled");
        }

        if ($(this).scrollTop() >= $("#about").offset().top-15) {
            $(".nav-item.active").removeClass("active")
            $('[href="#about"]').parent().addClass("active");
        }
    })

})