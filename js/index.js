$(function () {

    $(".slide-new").jCarouselLite({
        visible: 4,
        auto: 800,
        speed: 1500,
        mouseWheel: true
    });

    $(".slide-banner").jCarouselLite({
        visible: 4,
        auto: 800,
        speed: 2500
    });

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $("#login-click").click(function () {
        $('#login-modal')
            .modal('show')
            .modal('attach events', '.ui.button');

        console.log("gogogogo");
    });
    $("#login-btn").click(function () {
        $("#login-modal").modal('hide');
    });

    $(".click-modal").click(function () {
        var image = $(this).data("image");
        var name = $(this).find("img").attr("alt");
        var price = $(this).find(".date").text();

        $(".price").text(price);
        $("#title").text(name);
        $("#modal-photo").attr("src", image);
        $('#notice-modal')
            .modal('show')
            .modal('attach events', '.ui.button');
    });

});


