$(document).ready(function() {
    $("#card-panel-1").click(function() {
        $("#card-panel-1").hide("slow");
    });

    $("#card-panel-2").click(function() {
        $("#card-panel-2").hide("medium");
    });

    $("#card-panel-3").click(function() {
        $("#card-panel-3").hide("fast");
    });

    $("#card-panel-4").click(function() {
        $("#card-panel-4").hide(3000);
    });
});