$(document).ready(function () {
    $('.multiSelectDropper span').each(function () {
        $(this).on('click', function () {
            $(this).hasClass('active')
                ? $(this).removeClass('active')
                : $('.multiSelectDropper span').removeClass('active') && $(this).addClass('active');
        });
    });
    $(document).ready(function(){
        $(".tab-link").click(function(){
            $(".tabs .tab-link").removeClass("active"); // Remove active class from all tab links
            $(this).addClass("active");
            $(".tab-content").removeClass("block").addClass('hidden');
            var tabId = $(this).attr("data-tab");
            $("#" + tabId).addClass("block").removeClass("hidden");
        });
    });
});
