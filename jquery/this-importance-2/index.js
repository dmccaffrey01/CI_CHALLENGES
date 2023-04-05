$(document).ready(function() {
    $(".module-nav").on("click", function() {
        let allModulesCardsSelector = ".card";
        let thisModuleCardsSelector = "." + this.id + "-card";
    })
    $(allModulesCardsSelector).removeClass("card-highlight");
    $(thisModuleCardsSelector).addClass("card-highlight");

})