var doc;
doc = $(document);

var Loadin = {

    start: function (capa) {
        if (capa === undefined) {
            capa = "contenBody";
        }
        var ancho = $("#" + capa).width();
        var alto = $("#" + capa).height();
        var posicion = $("#" + capa).position();

        $("#load").css({ 'top': posicion.top, 'left': posicion.left, 'height': alto, 'width': ancho });
        $("#load").show();
    },

    stop: function () {
        $("#load").hide();
    }
};


doc.ajaxStart(function () {
    Loadin.start();
});

doc.ajaxStop(function () {
    Loadin.stop();
});