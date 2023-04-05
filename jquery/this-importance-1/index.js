$(document).ready(function() {
    $("p").click(function() {
        $(this).text("Changed only the text for this paragraph");
    })

    $(".card").mouseenter(function() {
        $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
    })
})