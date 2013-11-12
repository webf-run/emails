$(document).ready(function()
{
    var themeLocalStorage = window.localStorage.theme;
    if (themeLocalStorage === "dark-yellow")
    {
        var img = $(".content-pagination img");
        img[0].src = "../resources/icons/back-white.png";
        img[1].src = "../resources/icons/next-white.png";
        
        img = $(".company-settings img");
        img[0].src = "../resources/icons/search-white.png";
        img[1].src = "../resources/icons/add-white.png";
        img[2].src = "../resources/icons/i-white.png";
        img[3].src = "../resources/icons/settings-white.png";
    }

});