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
                    aa+="<span onclick=operator('"+v.location_id+"','"+obj+"','"+v.name_chs+"')>"+v.name_chs+"</span>";;

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
function operator(obj,continent,name_chs){
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
                    bb+="<span onclick=\"equipment('"+v.id+"','"+v.operator_name+"','"+continent+"','"+name_chs+"')\">"+v.operator_name+"</span>";

                });
                var cc1='<span class="allChoose_con">'+continent+'-'+name_chs+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc1);
                // alert(html);
                $("#operator").find(".chau_r").append(bb);
            }else{
                $("#tongxin123").html("");
            }
        }
    });
}
function equipment(id,operator_name,continent,name_chs){
    $("#ne").show();
    $.ajax({
        url: "../Api/Getequipment",
        type: 'GET',
        dataType: 'json',
        data:{
            operator_id:id,
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var dd='';
                $.each(data,function(key,v){
                    dd+="<span onclick=\"equipment123('"+v.type+"','"+id+"','"+operator_name+"','"+continent+"','"+name_chs+"',1,5)\">"+v.type+"</span>";
                });
                var cc2='<span class="allChoose_con">'+continent+'-'+name_chs+'-'+operator_name+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc2);
                // alert(html);
                $("#ne").find(".chau_r").append(dd);
            }else{
                $("#devpatch").find(".chau_r").append("");
            }
        }
    });
}

var equipment123data = [];
function equipment123(type,id,operator_name,continent,name_chs,page,limit){

    equipment123data['type'] = type;
    equipment123data['manu'] = id;
    equipment123data['manutype'] = operator_name;
    equipment123data['versionnum'] = continent;
    equipment123data['patchnum'] = name_chs;

    $.ajax({
        url: "../Api/Getequipmentinfo",
        type: 'GET',
        dataType: 'json',
        data:{
            type:type,
            operator_id:id,
            page:page,
            limit:limit
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){

                $('#id1').jqPaginator('option', {
                    currentPage: page,
                    totalCounts: parseInt(data.count),
                });

                var html='';
                $.each(data.info,function(key,v){
                    html+='<tr>';
                    html+='<td>'+v.name_chs+'</td>';
                    html+='<td>'+v.type+'</td>';
                    html+='<td>'+v.os+'</td>';
                    html+='<td>5</td>';
                    html+='<td>'+v.core_chip_manufacture+'</td>';
                    html+='<td>'+v.core_chip_manufacture+'</td>';
                    html+='<td>'+v.os+'</td>';
                    html+='<td>5</td>';
                    html+='<td>'+v.version_number+'</td>';
                    html+='<td>zhong</td>';
                    html+='<td>'+v.interface_type+'</td>';
                    html+='<td>'+v.interface_number+'</td>';
                    html+='<td>'+v.nic_type+'</td>';
                    html+='</tr>';
                });
                // alert(html);
                //var a="<a href='http://www.x.com/Home/Daochu/daochu?typ=ne&operator_id="+id+"&type="+type+"'>导出列表</a>";
                var a="<span onclick=\"daochu('"+id+"','"+type+"')\">"+"导出列表</span>";
                $(".allChoose_con1").html(a);
                $("#patchnum123").html(html);
                $(".allChoose_con1").css("opacity","1");
            }else{
                $("#patchnum123").html("");
            }
            var cc3='<span class="allChoose_con">'+continent+'-'+name_chs+'-'+operator_name+'-'+type+'<img src="../../Public/Home/images/chacha.png"></span>';
            $(".allChoose").prepend(cc3);
        }
    });
}
function daochu(id,type){
    if(confirm("确定导出表单吗?")){
         window.location.href="http://192.168.1.118/Home/Daochu/daochu?typ=ne&operator_id="+id+"&type="+type;
    }else{

    }
}
$(function(){
    // var aa="<span class='chinaa'>中国</span>";
    // var bb="<span>中国移动</span><span>中国联通</span><span>中国电信</span>";
    // var dd="<span>A1</span><span>A2</span><span>A3</span>";
    // var cc='<span class="allChoose_con">'+'亚洲'+'<img src="../../Public/Home/images/chacha.png"></span>';
    // var cc1='<span class="allChoose_con">'+'亚洲-中国'+'<img src="../../Public/Home/images/chacha.png"></span>';
    // var cc2='<span class="allChoose_con">'+'亚洲-中国-中国移动'+'<img src="../../Public/Home/images/chacha.png"></span>';
    // var cc3='<span class="allChoose_con">'+'亚洲-中国-中国移动-A1'+'<img src="../../Public/Home/images/chacha.png"></span>';
    $("#continent span").on("click",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#state").find(".chau_r").find("span").remove();
        // $("#state").find(".chau_r").append(aa);
        $("#operator").find(".chau_r").find("span").remove();
        $("#ne").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc);
    });
    $("#state").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#operator").find(".chau_r").find("span").remove();
        // $("#operator").find(".chau_r").append(bb);
        $("#ne").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc1);
    })
    $("#operator").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#ne").find(".chau_r").find("span").remove();
        // $("#ne").find(".chau_r").append(dd);
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc2);
    });
    $("#ne").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc3);
    });
    $(".allChoose").on("click","img",function(){
        $("#continent span").css("color","#374c6c");
        $("#state").find(".chau_r").find("span").remove();
        $("#operator").find(".chau_r").find("span").remove();
        $("#ne").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        $(".allChoose_con1").css("opacity","0");
        $("#patchnum123").html("");
        $("#ne").hide();
        $("#operator").hide();
        $("#state").hide();
    })

});

//分页
var pageSize = 5;
var totalCounts = 5;
var currentPage;
$('#id1').jqPaginator({
    totalCounts:totalCounts,
    pageSize:pageSize,
    currentPage:1,
    first: '<li class="prev"><a href="javascript:;">首页</a></li>',
    prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
    next: '<li class="next"><a href="javascript:;">下一页</a></li>',
    last: '<li class="prev"><a href="javascript:;">末页</a></li>',
    page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
    onPageChange: function (num, type) {
        if(type != 'init'){
            equipment123(equipment123data['type'],
                         equipment123data['manu'],
                         equipment123data['manutype'],
                         equipment123data['versionnum'] ,
                         equipment123data['patchnum'],
                         num,
                         pageSize
            );
        }
    }
});
/*大洲操作end*/