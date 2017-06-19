/**
 * Created by Administrator on 2017/4/7.
 */
//左侧菜单栏交互
/*$(function(){
    var flage=true;
    $("#index_nav>li").on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(this).find(".line").addClass("active1");
        $(this).siblings().find(".line").removeClass("active1");
        $(this).find(".sevenContinents").slideDown(500);
        $(this).siblings().find(".sevenContinents").slideUp(500);
        $(this).siblings().find(".sevenContinents li").removeClass("active2");
        $(".mask").css("display","none");
    });
    $("#index_nav>li").eq(0).find(".sevenContinents li").on("click",function(){
        var index=$(this).index();
        $(this).addClass("active2");
        $(this).siblings().removeClass("active2");
        $(".mask").css("display","block");
        $(".maskli").css("display","none");
        $(".maskli").eq(index).css("display","block");
        $(".maskli").eq(index).addClass("anima");
        return false;
    })
});*/
//左侧菜单栏交互end


/**左侧菜单栏交互start**/
$(function () {
    var flage=true;
    $("#index_nav>li").on("click",function () {
        $(".maskli").css("display","none");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var index=$("#index_nav>li").index(this);
        $("#index_nav>li").eq(0).find(".sevenContinents>li").removeClass("active2");
        if(flage){
            $(this).siblings().children("ul").slideUp(500);
            flage=!flage;
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(this).children("ul").slideDown(500);

        }else{
            flage=!flage;
            if($(this).children("ul").css("display")=="none"){
                $(this).siblings().children("ul").slideUp(500);
                flage=!flage;
                $(this).children("ul").slideDown(500);
            }else{
                $(this).children("ul").slideUp(500);
                $(this).siblings().children("ul").slideUp(500);
            }
        }
    })
    $("#index_nav>li").eq(0).find(".sevenContinents li").on("click",function(){
        var index=$(this).index();
        $(this).addClass("active2");
        $(this).siblings().removeClass("active2");
        $(".mask").css("display","block");
        $(".maskli").css("display","none");
        $(".maskli").eq(index).css("display","block");
        $(".maskli").eq(index).addClass("anima");
        return false;
    })


})
/**左侧菜单栏交互end**/