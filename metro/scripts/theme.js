$(document).ready(function()
{
    var themeLocalStorage = window.localStorage.theme;
    
    if(!themeLocalStorage)
    {
        $(document.body).attr("class", "orange");
    }
    else
    {
        $(document.body).attr("class", themeLocalStorage);
    }

    $("ul.theme-list").on("click","li",function()
    {
        var themeName = null;
        if(this.innerHTML === "Dusky orange")
            themeName = "orange";
        else if(this.innerHTML === "Peaceful blue")
            themeName = "peaceful-blue";
        else if(this.innerHTML === "Regular blue")
            themeName = "regular-blue";
        else if(this.innerHTML === "Sky blue")
            themeName = "sky-blue";
        else if(this.innerHTML === "Violet")
            themeName = "violet";
        else if(this.innerHTML === "Light yellow")
            themeName = "light-yellow";
        else if(this.innerHTML === "Dark yellow")
            themeName = "dark-yellow";
        else if(this.innerHTML === "Husky green")
            themeName = "husky-green";
        else if(this.innerHTML === "Brownie")
            themeName = "brownie";
        else if(this.innerHTML === "Green mojito")
            themeName = "green-mojito";

        window.localStorage.theme = themeName;
        $(document.body).attr("class", themeName);
        
    });

    themeLocalStorage = window.localStorage.theme;

});