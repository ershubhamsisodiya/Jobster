// navbar background function start
window.onscroll = function () { scrollFunction() };
var prevScrollpos = window.pageYOffset;

function scrollFunction() {
    var bgclass = document.querySelector(".navbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        bgclass.classList.add("bg-nav");
    }
    else {
        bgclass.classList.remove("bg-nav");
    }

    var currentScrollPos = window.pageYOffset;

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 & prevScrollpos < currentScrollPos) {

        document.querySelector(".navbar").style.transform = "translateY(-10rem)";
    }
    else {
        document.querySelector(".navbar").style.transform = "translateY(0rem)";
    }

    prevScrollpos = currentScrollPos;
}
// navbar background function end


// toggle button funciton start
const togglebtn = document.querySelector(".navbar-toggler");

togglebtn.addEventListener("click", myFunction);
var bgclass = document.querySelector(".navbar");
function myFunction() {
    bgclass.classList.add("bg-nav");
}
// toggle button funciton end



// jquery ready start
$(document).ready(function () {
    // jQuery code

    $("[data-trigger]").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    // Close menu when pressing ESC
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            $(".mobile-offcanvas").removeClass("show");
            $("body").removeClass("overlay-active");
        }
    });

    $(".btn-close, .screen-overlay").click(function (e) {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });

}); // jquery end