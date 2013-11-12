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

$(function() {
    
    $(".list-label").click(function() {
        
        $(".list-label").removeClass("selected");
        $(this).addClass("selected");
        
        $(".list-panel").css("display", "none");
        if(this.id === "address-filter") {
            $("#address-list-panel").css("display", "block");
        }
        if(this.id === "members-filter") {
            $("#member-list-panel").css("display", "block");
        }
        if(this.id === "providers-filter") {
            $("#providers-list-panel").css("display", "block");
        }
        
    });
});