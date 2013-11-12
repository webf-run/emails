$(document).ready(function(){
    
    var formList = $(".new-company li");
    
    var buttonNext = $(".form-pagination img.next", formList.eq(0));
    buttonNext.click(function()
    {
        formList.eq(0).css("display", "none");
        formList.eq(1).css("display", "block");
    });
    
    buttonNext = $(".form-pagination img.next", formList.eq(1));
    buttonNext.click(function()
    {
        formList.eq(1).css("display", "none");
        formList.eq(2).css("display", "block");
    });
    
    
    var buttonBack = $(".form-pagination img.back", formList.eq(1));
    buttonBack.click(function()
    {
        formList.eq(1).css("display", "none");
        formList.eq(0).css("display", "block");
    });
    
    
    buttonBack = $(".form-pagination img.back", formList.eq(2));
    buttonBack.click(function()
    {
        formList.eq(2).css("display", "none");
        formList.eq(1).css("display", "block");
    });

    var themeLocalStorage = window.localStorage.theme;
    if (themeLocalStorage === "dark-yellow")
    {
        $(".new-company .next").attr("src", "../resources/icons/next-white.png");
        $(".new-company .back").attr("src", "../resources/icons/back-white.png");
        $(".new-company .next-final").attr("src", "../resources/icons/next-final-white.png");
    }
    
});