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

    $('.small.modal')
        .modal('show')
        ;

    $("#login-click").click(function () {
        console.log("gogogogo");
        $("#login-modal").fadeIn();
    });
    $("#login-btn").click(function () {
        $("#login-modal").fadeOut();
    });

    $(".click-modal").click(function () {
        var image = $(this).data("image");
        var name = $(this).find("img").attr("alt");
        var price = $(this).find(".date").text();

        $(".price").text(price);
        $("#title").text(name);
        $("#modal-photo").attr("src", image);
        $('#notice-modal')
            .modal({ allowMultiple: false })
            .modal('show')
            .modal('attach events', '.ui.button');
    });

});


