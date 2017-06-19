/**
 * Created by Administrator on 2017/4/7.
 */
 function devman(type,manu){
    $("#devtype").show();
    $.ajax({
        url: "../Api/GetEquipmentData",
        type: 'GET',
        dataType: 'json',
        data:{
            type:type,
            manu:manu,
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var bb='';
                $.each(data,function(key,v){
                    bb+="<span onclick=manutype(3,'"+manu+"','"+v+"')>"+v+"</span>";

                });
                var cc='<span class="allChoose_con">'+manu+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc);
                // alert(html);
                $("#devtype").find(".chau_r").append(bb);
            }else{
                $("#tongxin123").html("");
            }
        }
    });
 }
function manutype(type,manu,manutype){
    $("#devversion").show();
    $.ajax({
        url: "../Api/GetEquipmentData",
        type: 'GET',
        dataType: 'json',
        data:{
            type:type,
            manu:manu,
            manutype:manutype
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var dd='';
                $.each(data,function(key,v){
                    dd+="<span onclick=versionnum(4,'"+manu+"','"+manutype+"','"+v+"')>"+v+"</span>";
                });
                var cc1='<span class="allChoose_con">'+manu+'-'+manutype+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc1);
                // alert(html);
                $("#devversion").find(".chau_r").append(dd);
            }else{
                $("#devversion").find(".chau_r").append(dd);
            }
        }
    });
 }

 function versionnum(type,manu,manutype,versionnum){
    $("#devpatch").show();
    $.ajax({
        url: "../Api/GetEquipmentData",
        type: 'GET',
        dataType: 'json',
        data:{
            type:type,
            manu:manu,
            manutype:manutype,
            versionnum:versionnum
        },
        success: function(data){
            var data=$.parseJSON(data);
            if(data!=''&&data!=null){
                var ee='';
                $.each(data,function(key,v){
                    ee+="<span onclick=patchnum(5,'"+manu+"','"+manutype+"','"+versionnum+"','"+v+"',1,5)>"+v+"</span>";
                });
                var cc2='<span class="allChoose_con">'+manu+'-'+manutype+'-'+versionnum+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose").prepend(cc2);
                // alert(html);
                $("#devpatch").find(".chau_r").append(ee);
            }else{
                $("#devpatch").find(".chau_r").append("");
            }
        }
    });
 }

var patchnumdata = [];

  function patchnum(type,manu,manutype,versionnum,patchnum,page,limit){
      patchnumdata['type'] = type;
      patchnumdata['manu'] = manu;
      patchnumdata['manutype'] = manutype;
      patchnumdata['versionnum'] = versionnum;
      patchnumdata['patchnum'] = patchnum;

    $.ajax({
        url: "../Api/GetEquipmentData",
        type: 'GET',
        dataType: 'json',
        data:{
            type:type,
            manu:manu,
            manutype:manutype,
            versionnum:versionnum,
            patchnum:patchnum,
            page:page,
            limit:limit
        },
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
                //var a="<a href='http://www.x.com/Home/Daochu/daochu?typ=devman&manu="+manu+"&manutype="+manutype+"&versionnum="+versionnum+"&patchnum="+patchnum+"'>导出列表</a>";
                var a="<span onclick=\"daochu('"+manu+"','"+manutype+"','"+versionnum+"','"+patchnum+"')\">"+"导出列表</span>";
                var cc3='<span class="allChoose_con">'+manu+'-'+manutype+'-'+versionnum+'-'+patchnum+'<img src="../../Public/Home/images/chacha.png"></span>';
                $(".allChoose_con").remove();

                $(".allChoose").prepend(cc3);

                $(".allChoose_con1").html(a);
                $("#patchnum123").html(html);
                $(".allChoose_con1").css("opacity","1");
            }else{
                $("#patchnum123").html("");
            }
        }
    });
 }
 function daochu(manu,manutype,versionnum,patchnum){
    if(confirm("确定导出表单吗?")){
         window.location.href="http://192.168.1.118/Home/Daochu/daochu?typ=devman&manu="+manu+"&manutype="+manutype+"&versionnum="+versionnum+"&patchnum="+patchnum;
    }else{

    }
}
/*大洲操作*/
$(function(){
    // var bb="<span>A1</span><span>A2</span><span>A3</span>";
    // var dd="<span>21</span><span>22</span><span>23</span>";
    // var ee="<span>0.1</span><span>0.2</span><span>0.3</span>";
    // var cc='<span class="allChoose_con">'+'华为'+'<img src="../../Public/Home/images/chacha.png"></span>';
    // var cc1='<span class="allChoose_con">'+'华为-A1'+'<img src="../../Public/Home/images/chacha.png"></span>';
    // var cc2='<span class="allChoose_con">'+'华为-A1-21'+'<img src="../../Public/Home/images/chacha.png"></span>';
    // var cc3='<span class="allChoose_con">'+'华为-A1-21-0.1'+'<img src="../../Public/Home/images/chacha.png"></span>';
    $("#devman span").on("click",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#devtype").find(".chau_r").find("span").remove();
        // $("#devtype").find(".chau_r").append(bb);
        $("#devversion").find(".chau_r").find("span").remove();
        $("#devpatch").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc);
    });
    $("#devtype").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#devversion").find(".chau_r").find("span").remove();
        // $("#devversion").find(".chau_r").append(dd);
        $("#devpatch").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc1);
    })
    $("#devversion").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $("#devpatch").find(".chau_r").find("span").remove();
        // $("#devpatch").find(".chau_r").append(ee);
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc2);
    });
    $("#devpatch").on("click","span",function(){
        $(this).css("color","#ff0000");
        $(this).siblings().css("color","#374c6c");
        $(".allChoose").find(".allChoose_con").remove();
        // $(".allChoose").prepend(cc3);
    })

    $(".allChoose").on("click","img",function(){
        $("#devman span").css("color","#374c6c");
        $("#devtype").find(".chau_r").find("span").remove();
        $("#devversion").find(".chau_r").find("span").remove();
        $("#devpatch").find(".chau_r").find("span").remove();
        $(".allChoose").find(".allChoose_con").remove();
        $(".allChoose_con1").css("opacity","0");
        $("#devtype").hide();
        $("#devversion").hide();
        $("#devpatch").hide();
        $("#patchnum123").html("");
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
            patchnum(patchnumdata['type'],
                     patchnumdata['manu'],
                     patchnumdata['manutype'],
                     patchnumdata['versionnum'],
                     patchnumdata['patchnum'],
                     num,
                     pageSize
            );
        }
    }
});
/*大洲操作end*/