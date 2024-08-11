$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var line1 = $(".line1");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
               .removeClass("close");
        line1.text("Te amo negra hermosa");
    }

    function close() {
        envelope.addClass("close")
               .removeClass("open");
        line1.text(""); // Limpiar el texto cuando se cierra
    }
   
});
