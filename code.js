function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1 || myNav.indexOf('trident') != -1) ? true : false;
}

if(isIE()){
    alert("Twoja przeglądarka nie jest obsługiwana. Zainstaluj Edge!");
    $(location).attr('href', 'https://www.microsoft.com/pl-pl/edge');

}

$(document).ready(function() {
    $("#backspace" ).click(function() {
        window.location.href = "http://wprost.pl";
    });
    $("#title" ).click(function() {
        window.location.href = "http://historia.wprost.pl";
    });
    $("#subtitle" ).click(function() {
        window.location.href = "http://historia.wprost.pl";
    });
    $("#top-bar" ).click(function() {
        window.location.href = "https://cyfrowy.wprost.pl/oferty";
    });
    $( "#menu-icon" ).click(function() {
        $( "#overlay" ).toggle( "slow", function() {
            $("#top-bar").css("margin-top", "0");
            $("#top-bar>p").css("margin", "0");
        });
    });
    $( "#search-icon" ).click(function() {
        $( "#overlay-search" ).toggle( "slow", function() {
            $("#top-bar").css("margin-top", "0");
            $("#top-bar>p").css("margin", "0");
        });
    });

    $("#log-icon").click(function() {
        $('#fade').popup({
            transition: 'all 0.3s',
            closebutton: true
        });
        $('#jqpopup').popup('toggle');
    });

    $(function() {
        $('.page-news').lazy();
    });
    isIE();
});


