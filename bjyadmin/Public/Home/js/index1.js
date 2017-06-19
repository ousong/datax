/**
 * Created by Administrator on 2017/4/10.
 */
var map = L.map('mapBusiness');
var baseLayers = {

    'GeoQ灰色底图': L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}').addTo(map),
    //'baitone':L.tileLayer('http://192.168.1.175:9999/styles/osm-bright/rendered/{z}/{x}/{y}.png').addTo(map)

};
var layercontrol = L.control.layers(baseLayers, {
    position: "topleft"
}).addTo(map);
map.setView(L.latLng(34.23451,82.75391), 4,function(){

});
$("#mapBtn").on("click",function(){
    map.setView([39.92728, 116.38178],4);
})
var greenIcon = L.icon({
    iconUrl: '../../Public/Home/images/td1.png',
    iconSize:[27, 36], // size of the icon
});
function ddd(arr,map){
    return L.marker(arr,{icon: greenIcon}).addTo(map);
}
function print_array(arr){  
    for(var key in arr){  
        if(typeof(arr[key])=='array'||typeof(arr[key])=='object'){//递归调用    
            print_array(arr[key]);  
        }else{  
            document.write(key + ' = ' + arr[key] + '<br>');  
        }  
    }  
}
var arr=new Array();
window.onload=function(){
  $.ajax({
      url: "../Api/Getcontinent",
      type: 'GET',
      dataType: 'json',
      success: function(data){
          var data=$.parseJSON(data);
          
          if(data!=''&&data!=null){
            $.each(data,function(key,v){
               arr[key]=[v.lat,v.lng];
            })
          }
          new aa;
      }
  });
}
function aa(){
  for(var i=0;i<arr.length;i++){
    // alert(arr.length);
      ddd(arr[i],map).on("click",function(e){
          // alert(e.latlng.lat);
          $.ajax({
              url: "../Api/Getindex1",
              type: 'GET',
              dataType: 'json',
              data:{
                  lng:e.latlng.lng,
                  lat:e.latlng.lat,
              },
              success: function(data){
                  var data=$.parseJSON(data);
                  if(data!=''&&data!=null){
                      var bb='';
                      bb+="<p>"+data[0]['name_chs']+"</p>"
                      $.each(data,function(key,v){
                          bb+="<li class='clearfix' onclick=\"sign1('"+v.operator_name+"')\">";
                          bb+="<div class='li_l'>";
                          bb+="<img src='"+v.img+"'>";
                          bb+="</div>";
                          bb+="<div class='li_r'>";
                          bb+="<div class='li_rt'>"+v.operator_name+"<span></span></div>";
                          // bb+="<div class='li_rt'>"+v.network_name+"<span>("+v.operator_name+")</span></div>";
                          bb+="<div class='li_rm'>"+v.network_name+"</span></div>";

                          bb+="<div class='li_rb'><span>语音</span><span>短信</span><span>数据</span><span>位置</span></div>";
                          bb+="</div>";
                          bb+="</li>";
                          //bb+="<li><img onclick=\"sign1('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                      });
                      $("#showUL").html(bb);
                      $("#newUL").hide();
                      $("#showUL").show();
                  }else{
                      $("#showUL").html('');
                  }
              }
          });
          /*$("#showUL").show();*/
      });
  }
}
function sign1(obj){
    $.ajax({
            url: "../Api/Getindex1info",
            type: 'GET',
            dataType: 'json',
            data:{
                operator:obj,
            },
            success: function(data){
                var data=$.parseJSON(data);
               if(data.signcount == 0){
                   data.signcount = 80;
               }
               var yunying=data.network_type;
               var yunying1=yunying.replace(/\//g,'<br/>');
               console.log(yunying1);
                var html = '';
                if(data!=''&&data!=null){
                    if(data.operator_website!=''&&data.operator_website!=null){
                      var aaaaa='<p>官方网站:<span><a href='+data.operator_website+' target="view_window">'+data.operator_website+'</a></span></p >';
                    }else{
                      var aaaaa='<p>官方网站:<span></span></p >';
                    }
                    $('#showUL').hide();
                    $('#newUL').show();
                    html+='<li>';
                    html+='<span class="guojia">运营商介绍</span>';
                    html+='<p>名称:<span>'+data.operator_name+'</span></p >';
                    html+='<p>简称:<span>'+data.network_name+'</span></p >';
                    html+='<p>所属国家:<span>'+data.name_chs+'</span></p >';
                    html+='<p>国家编码:<span>'+data.national_network_code+'</span></p >';
                    html+='<p>行政区号:<span>'+data.code+'</span></p >';
                    html+='<p>运营商编号:<span>'+data.operator_network_code+'</span></p >';
                    html+='<p>漫游签约数:<span>'+data.signcount+'</span></p >';
                    html+=aaaaa;
                    html+='</li>';
                    html+='<li>';
                    html+='<span class="guojia">网络制式</span>';
                    html+='<p class="second"><span>'+yunying1+'</span></p >';
                    html+='</li>';
                   $('#newUL').html(html);
                }else{
                   $('#showUL').hide();
                   $('#newUL').show();
                   $('#newUL').html('');
                }
            }
    });
}

$("#mapBusiness").on("click",function(){
    $('#newUL').hide();
})