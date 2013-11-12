$(document).ready(function()
{
    var themeLocalStorage = window.localStorage.theme;
    if (themeLocalStorage === "dark-yellow")
    {
        //$(".list-item .list-item-details img").attr("src", "../resources/icons/download-white.png");

        var img = $(".content-pagination img");
        img[0].src = "../resources/icons/back-white.png";
        img[1].src = "../resources/icons/next-white.png";
    }
});