(function (app) {
    
    var test = app || {};
    
    window.Application = test;
    
})(window.Application);

//Disable links for demo purpose
$(function() {
    $("a").click(function(e){
        e.preventDefault();
    });
});

//Managing search result table
$(function() {
    
    $(".table-checkbox").click(function(e) {
        $(this).toggleClass("selected");
        e.stopPropagation();
    });
    
    $(".search-table tbody").on("click", "tr", function() {
        window.location.href = "../view_vendor/index.html";
    });
    
});

$(function() {
        
    var app = window.Application || {},
        animationTime = 200;
    
    //0 - Simple search
    //1 - Advanced search
    app.searchMode = 0;
    
    $(".search-toggle").on("click", function(e) {
        e.preventDefault();
        
        $(".advanced-search-container").slideToggle(animationTime);
        app.searchMode = app.searchMode ? 0 : 1;
        
        $("#vendor-search-input, .search-button").attr("disabled", !!app.searchMode);
        $(".search-button").toggleClass("disabled");
    });
    
});