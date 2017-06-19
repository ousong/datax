/**
 * Created by Administrator on 2017/4/7.
 */
 
/*大洲操作*/
var querydata = [];

function query(obj,typ,page,limit){

    querydata['service'] = obj;
    querydata['service_name'] = typ;

    var cc='<span class="allChoose_con">'+typ+'<img src="../../Public/Home/images/chacha.png"></span>';

    $(".allChoose").find(".allChoose_con").remove();
    $(".allChoose").prepend(cc);
    $.ajax({
            url: "../Api/GetEquipmentDataFromService",
            type: 'GET',
            dataType: 'json',
            data:{service:obj,page:page,limit:limit},
            success: function(data){
                var data=$.parseJSON(data);
                if(data.info!=''&&data.info!=null){

                    $('#id1').jqPaginator('option', {
                        currentPage: page,
                        totalCounts: parseInt(data.count),
                    });

                    var html='';
                    $.each(data.info,function(key,v){
                        html+='<tr>';
                        html+='<td>'+v.name_chs+'</td>';
                        html+='<td>'+v.type+'</td>';
                        html+='<td>'+v.operator_name+'</td>';
                        html+='<td>CN2017</td>';
                        html+='<td>'+v.os+'</td>';
                        html+='<td>'+v.core_chip_manufacture+'</td>';
                        html+='<td>'+v.os+'</td>';
                        html+='<td>5</td>';
                        html+='<td>'+v.version_number+'</td>';
                        html+='<td>'+v.patch_number+'</td>';
                        html+='<td>'+v.interface_type+'</td>';
                        html+='<td>'+v.interface_number+'</td>';
                        html+='<td>'+v.nic_type+'</td>';
                        html+='</tr>';
                    });

                    var a="<span onclick=\"daochu('"+obj+"')\">"+"导出列表</span>";
                    $("#tongxin123").html(html);
                    $(".allChoose_con1").html(a);
                    $(".allChoose_con1").css("opacity","1");
                }else{
                    $("#tongxin123").html("");
                }
            }
    });
}
function daochu(obj){

    if(confirm("确定导出表单吗?")){
        window.location.href="http://192.168.1.118/Home/Daochu/daochu?typ=1&type="+obj;
    }else{

    }
}
$(function(){
    //var cc='<span class="allChoose_con">'+'亚洲123'+'<img src="../../Public/Home/images/chacha.png"></span>';
    $("#querybusiness span").on("click",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        //$(".allChoose").find(".allChoose_con").remove();
        //$(".allChoose").prepend(cc);
    });
    $(".allChoose").on("click","img",function(){
        $("#querybusiness span").css("color","#374c6c");
        $(".allChoose").find(".allChoose_con").remove();
        $("#tongxin123").html("");
        $(".allChoose_con1").css("opacity","0");
    })


});

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
            query(querydata['service'],querydata['service_name'],num,pageSize);
        }

    }
});

/*大洲操作end*/