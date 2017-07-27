$(function () {

    $(".slide-new").jCarouselLite({
        auto: 800,
        speed: 1500,
        mouseWheel: true
    });

    $(".slide-banner").jCarouselLite({
        auto: 800,
        speed: 2500
    });

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $(".click-modal").click(function () {
        var image = $(this).data("image");
        var name = $(this).find("img").attr("alt");
        var price = $(this).find(".date").text();

        $(".price").text(price);
        $("#title").text(name);
        $("#modal-photo").attr("src", image);
        $('.modal')
            .modal({ allowMultiple: false })
            .modal('show')
            .modal('attach events', '.ui.button');
    });

    $(".click-login").click(function () {
        $("#modal-login").fadeIn();
    });
    $("#close-btn").click(function () {
        $("#modal-login").fadeOut();
    });
});


