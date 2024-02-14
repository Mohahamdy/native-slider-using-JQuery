$.fn.MohamedHamdy = function(){
    var Imgs = $(this);
    $(this).click(function(){
        var index = $(this).index();

        var OverlayDiv = $("<div id='overlay' class='overlay'><span class='close'>x</span><img src="+$(this).attr('src')+" id='overlay-img' class='overlay-img' /><span class='prev'><<</span><span class='next'>>></span></div>");

        $('body').append(OverlayDiv);

        $('.next').click(function(){
            index++;
            if(index>Imgs.length-1)
            {
                index = 0;
            }
            $('#overlay-img').attr('src',Imgs.eq(index).attr('src'));
        })

        $('.prev').click(function(){
            index--;
            if(index<0)
            {
                index = Imgs.length-1;
            }
            $('#overlay-img').attr('src',Imgs.eq(index).attr('src'));
        })

        $('.close').click(function(){
            OverlayDiv.remove();
        })
    })
}

$(function(){
    $('#Cointainer-imgs img').MohamedHamdy();
})

