$(document).ready(function(){
    
    /* Start - code for slideshow  */
    var slidelist = $(".slideshow ul.slideshow-content li");
    var counter = 0;
    var timer = 0;
    
    timer = setTimeout(moveToNextImage, 5000);

    var slideshowControls = $(".slideshow ul.slideshow-navigation li");
    
    slideshowControls.eq(0).click(function()
    {
        clearTimeout(timer);
        timer = 0;
        moveToNextImage();
    });

    slideshowControls.eq(1).click(function()
    {
        clearTimeout(timer);
        timer = 0;
        
        slidelist.css({opacity : 0, display : "none"});
        var nextElement;
        if(counter === 0)
        {
            nextElement = slidelist.eq(2);
        }
        else if(counter === 1)
        {
            nextElement = slidelist.eq(0);
        }
        else if(counter === 2)
        {
            nextElement = slidelist.eq(1);
        }
        nextElement.css({opacity : 1, display : "block"});
        counter = counter - 1;
        if(counter === -1)
            counter = 2;
        
        timer = setTimeout(moveToNextImage, 5000);
        
    });
    
    function moveToNextImage()
    {
        slidelist.css({opacity : 0, display : "none"});
        var nextElement;
        if(counter === 0)
        {
            nextElement = slidelist.eq(1);
        }
        else if(counter === 1)
        {
            nextElement = slidelist.eq(2);
        }
        else if(counter === 2)
        {
            nextElement = slidelist.eq(0);
        }
        nextElement.css({opacity : 1, display : "block"});
        counter = (counter + 1) % 3;
        timer = setTimeout(moveToNextImage, 5000);
    }

    /* End - code for slideshow  */
    
    var themeLocalStorage = window.localStorage.theme;
    if(themeLocalStorage === "dark-yellow")
    {
        var img = $(".activity-pagination img");
        img[0].src = "../resources/icons/back-white.png";
        img[1].src = "../resources/icons/next-white.png";
    }

});