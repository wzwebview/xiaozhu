$(document).ready(function(){
    var mySwiper01 = new Swiper("#carousel01",{  
        direction:"horizontal",
        loop:true,
        effect : 'fade',
        autoplayDisableOnInteraction:false,
        prevButton:".swiper-button-prev", 
        nextButton:".swiper-button-next",
        autoplay:3000,
        speed:1500,
        onlyExternal:true,
        breakpoints:{
        	992:{
        		onlyExternal:false
        	}
        }
    });
    var $sel_li = $(".house_box ul.ul_sel > li");
    $sel_li.mouseover(function(){
        var index =  $sel_li.index(this);
        $(this)
                .addClass("selected") 
                .siblings().removeClass("selected"); 
        $(".house_box ul.ul_cnt > li")
                .eq(index).show()
                .siblings().hide();
    });
});