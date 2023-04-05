$(document).ready(function() {
    $("button").mouseenter(function() {
        $("button").removeClass("make-red").addClass("make-border");
    })

    $("button").mouseleave(function() {
        $("button").removeClass("make-border").addClass("make-red");
    })
})