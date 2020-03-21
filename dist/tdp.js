// JavaScript source code

var initTdp = function (tdp_default, tdp_cultura) {

    if (tdp_default != tdp_cultura) {

        var variable = $("[data-tdp]");

        variable.each(function () {
            try {
                var valor = $(this).data("tdp");
                if ($(this).is('img')) {
                    $(this).attr("src", valor);
                }
                else if ($(this).is('a')) {
                    $(this).attr("href", valor);
                }
                else if ($(this).is('input') || $(this).is('textarea')) {
                    $(this).attr("placeholder", valor)
                }
                else { //button, span, h1...
                    $(this).html(valor);
                }
            } catch (e) {
                console.log("ERROR " + e);
            }
        })

    }
};