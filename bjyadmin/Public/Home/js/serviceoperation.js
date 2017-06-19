/**
 * Created by Administrator on 2017/4/7.
 */
/*大洲操作*/
function getcontinent(obj){
    $("#state").show();
    $.ajax({
        url: "../Api/getcontinent",
        type: 'GET',
        dataType: 'json',
        data:{
            continent:obj,
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var aa='';
                $.each(data,function(key,v){
                    aa+="<span onclick=continent('"+v.location_id+"','"+obj+"','"+v.name_chs+"')>"+v.name_chs+"</span>";;

                });
                var cc='<span class="allChoose_con">'+obj+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc);
                // alert(html);
                $("#state").find(".chau_r").append(aa);
                
            }else{
                $("#tongxin123").html("");
            }
        }
    });
}
function continent(obj,continent,name_chs){
    $("#operator").show();
    $.ajax({
        url: "../Api/Getoperator",
        type: 'GET',
        dataType: 'json',
        data:{
            location_id:obj,
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var bb='';          
                $.each(data,function(key,v){
                    bb+="<span onclick=\"operator('"+v.operator_name+"','"+continent+"','"+name_chs+"')\">"+v.operator_name+"</span>";

                });
                var cc1='<span class="allChoose_con">'+continent+'-'+name_chs+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc1);
                // alert(html);
                // $("operator").hide();
                $("#operator").find(".chau_r").append(bb);
            }else{
                $("#tongxin123").html("");
            }
        }
    });
}
function operator(obj,continent,name_chs){
    $.ajax({
        url:"../Api/Getindex1info1",
        type:"GET",
        dataType:'json',
        data:{
            operator:obj,
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var html="";
                $.each(data,function(key,v){
                    if(v.signcount == 0){
                        v.signcount = 80;
                    }
                    html+='<tr>';
                    html+='<td>'+v.operator_name+'</td>';
                    html+='<td>'+v.name_chs+'</td>';
                    html+='<td>'+v.network_type+'</td>';
                    html+='<td>'+v.signcount+'</td>';
                    html+='<td><a href="../../Home/Index/gplot">查看拓扑图</a></td>';
                    html+='</tr>';
                })
                var cc2='<span class="allChoose_con">'+continent+'-'+name_chs+'-'+obj+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").append(cc2);
                $("#operator123").html(html);
            }else{
                $("#operator123").html("");
            }   
        }
    });   
}
$(function(){
    // var aa="<span class='chinaa'>中国</span>";
    // var bb="<span>中国移动</span><span>中国联通</span><span>中国电信</span>";
    // var cc='<span class="allChoose_con">'+'亚洲'+'<img src="images/chacha.png"></span>';
    //var cc1='<span class="allChoose_con">'+'亚洲-中国'+'<img src="images/chacha.png"></span>';
    //var cc2='<span class="allChoose_con">'+'亚洲-中国-中国移动'+'<img src="images/chacha.png"></span>';
    $("#continent span").on("click",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#state").find(".chau_r").find("span").remove();
        $("#operator").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        // $("#state").find(".chau_r").append(aa);
        // $(".allChoose").append(cc);
    });
    $("#state").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#operator").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        // $("#operator").find(".chau_r").append(bb);
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").append(cc1);
    })
    $("#operator").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").append(cc2);

    });

    $(".allChoose").on("click","img",function(){
        // alert(11111)
        $("#continent span").css("color","#374c6c");
        $("#state").find(".chau_r").find("span").remove();
        $("#operator").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        $("#state").hide();
        $("#operator").hide();
        $("#operator123").html("");
    })

});
/*大洲操作end*/