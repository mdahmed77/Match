$(document).ready(function () {
    var menu = $('#sideBar');
    var backdrop = $('.sidebarOverlay');
    $('#sidebarOpener').on('click', function () {
        menu.removeClass('-translate-x-full').addClass('translate-x-0');
        backdrop.removeClass('invisible').addClass('visible');
        $('#sidebarCloser').removeClass('opacity-0 right-0 invisible').addClass('opacity-100 -right-5 visible');
    });
    $('#sidebarCloser, .sidebarOverlay').on('click', function () {
        menu.removeClass('translate-x-0').addClass('-translate-x-full');
        backdrop.addClass('invisible').removeClass('visible');
        $('#sidebarCloser').removeClass('opacity-100 -right-5 visible').addClass('opacity-0 right-0 invisible');
    });
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
    $('#toggleUserDrop').on('click', function () {
        $('#userDrop').hasClass('invisible')
            ? $('#userDrop').removeClass('invisible opacity-0 translate-y-3').addClass('visible opacity-1 translate-y-0')
            : $('#userDrop').addClass('invisible opacity-0 translate-y-3').removeClass('visible opacity-1 translate-y-0');
    });
    $('.toggleSidebarDropdown').each(function () {
        $(this).on('click', function () {
            var sidebarDrop = $(this).parent().next();
            var dropCaret = $(this).find('img');
            sidebarDrop.hasClass('h-0') 
            ? sidebarDrop.removeClass('h-0').addClass('h-auto') && dropCaret.addClass('rotate-180') 
            : sidebarDrop.removeClass('h-auto').addClass('h-0') && dropCaret.removeClass('rotate-180')
        });
    });
});
