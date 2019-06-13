// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
let med = window.matchMedia("(max-width: 850px)");
let egg = new Konami(function () {
    $('body').addClass('barrel_roll');
    setTimeout("$('body').removeClass('barrel_roll')", 4000);
    setTimeout("$('body').toggle(\"explode\")", 2000);
    if ($('body').is(":visible")) {
        setTimeout("alert('Vous savez quoi faire !')", 3000);
    }
    else {
        setTimeout("alert('De retour pour vous jouer un mauvais tour')", 3000);
    }
})

if ($(window).width() < 850) {
    egg.load();
    $(".modal-content").click(function () {
        $(".modal").hide();
    })
}


$(document).scroll(function () {
    if ($(window).width() > 850) {
            let off = $('#about-left').offset(); // Offset of the left part
            let offr = $('#about-right').offset(); // Offset of the right part
            let winh = $(window).scrollTop() + $(window).height() // Offset of the bottom of the window
        let w = $('#about-right').width();

            // Stick when the window reaches the top offset
            if (off.top <= $(window).scrollTop() || winh <= offr.top + $('#about-right').height()) {
                $('#about-left').css("position", "fixed");
                $('#about-left').css("top", '0');
                $('#about-left').css("left", '0');
                $('#about-left').css("width", w);
                $('#ghost1').css("display", "block");
            }

            // Unstick when the window reaches the bottom of the scrolling part
            if (winh >= offr.top + $('#about-right').height()) {
                $('#about-left').css("position", "relative");
                $('#about-left').css("top", "");
                $('#about-left').css("margin-top", "auto");
                $('#about-left').css("left", "");
                $('#about-left').css("width", "50%");
                $('#ghost1').css("display", "none");
            }

            // Unstick if you scroll back top
            if (offr.top >= $(window).scrollTop()) {
                $('#about-left').css("position", "relative");
                $('#about-left').css("top", "");
                $('#about-left').css("left", "");
                $('#about-left').css("margin-top", "0");
                $('#about-left').css("width", "50%");
                $('#ghost1').css("display", "none");
            }

            let poff = $('#port-right').offset(); // Offset of the left part
            let poffr = $('#port-left').offset(); // Offset of the right part
        let winh2 = $(window).scrollTop() + $(window).height() // Offset of the bottom of the window
        let w2 = $('#port-left').width();

            // Stick when the window reaches the top offset
            if (poff.top <= $(window).scrollTop() || winh2 <= poffr.top + $('#port-left').height()) {
                $('#port-right').css("position", "fixed");
                $('#port-right').css("top", "0");
                $('#port-right').css("width", w2);
                $('#port-right').css("left", w2);

            }

            // Unstick when the window reaches the bottom of the scrolling part
            if (winh2 >= poffr.top + $('#port-left').height()) {
                $('#port-right').css("position", "relative");
                $('#port-right').css("top", "");
                $('#port-right').css("margin-top", "auto");
                $('#port-right').css("width", "50%");
                $('#port-right').css("left", "");

            }

            // Unstick if you scroll back top
            if (poffr.top >= $(window).scrollTop()) {
                $('#port-right').css("position", "relative");
                $('#port-right').css("top", "");
                $('#port-right').css("left", "");
                $('#port-right').css("width", "50%");
                $('#port-right').css("margin-top", "0");
            }
    }
})
    


function useModals() {
    let modals = $(".modal");
    console.log(modals);
    for (let j = 0; j < modals.length; j++) {
        $(".modal-mini:eq( "+j+" )").click(function () {
            // var mod = this.nextElementSibling;
            $(".modal:eq( " + j + " )").css("display", "block");
        })
        $(".close:eq( " + j + " )").click(function () {
            $(".modal:eq( " + j + " )").hide();
        })
    }
}

useModals();