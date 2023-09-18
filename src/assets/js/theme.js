$(document).ready(function () {
    // var menu = $('#mobileMenu');
    // var backdrop = $('#menuBackdrop');
    // $('#menuOpener').on('click', function () {
    //     menu.removeClass('translate-x-full').addClass('translate-x-0');
    //     backdrop.removeClass('opacity-0 invisible').addClass('opacity-50 visible');
    // });
    // $('#menuCloser').on('click', function () {
    //     menu.removeClass('translate-x-0').addClass('translate-x-full');
    //     backdrop.addClass('opacity-0 invisible').removeClass('opacity-50 visible');
    // });
    $('.pill').each(function () {
        $(this).on('click', function () {
            var pillName = $(this).attr("data-pill");
            if ($('.pill').hasClass('pill-active')) {
                $('.pill').removeClass('pill-active');
                $(this).addClass('pill-active');
            }
            $('.pill-tab.block').removeClass('block').addClass('hidden');
            $("#" + pillName).removeClass('hidden').addClass("block");
        });
    });
});