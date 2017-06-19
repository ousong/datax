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
    map.setView([34.23451,82.75391],4);
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
var ning=false;
var s='';
var a='';
var b='';
var c='';
function aa(){
  for(var i=0;i<arr.length;i++){
    // alert(arr.length);
      ddd(arr[i],map).on({
          'click': function (e) {

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
                          bb+="<li class='clearfix' onclick=\"sign1('"+v.operator_name+"','"+v.name_chs+'/ '+v.operator_name+"')\">";
                            bb+="<div class='li_l'>";
                            bb+="<img src='"+v.img+"'>";
                            bb+="</div>";
                            bb+="<div class='li_r'>";
                            // bb+="<div class='li_rt'>"+v.network_name+"<span>("+v.operator_name+")</span></div>";
                            bb+="<div class='li_rt'>"+v.operator_name+"<span></span></div>";
                            bb+="<div class='li_rm'>"+v.network_name+"</span></div>";
                            bb+="<div class='li_rb'><span>语音</span><span>短信</span><span>数据</span><span>位置</span></div>";
                            bb+="</div>";
                            bb+="</li>";
                            //bb+="<li><img onclick=\"sign1('"+v.operator_name+"','"+v.name_chs+"')\" src='"+v.logo+"' /></li>";
                        });
                        $("#showUL").html(bb);
                        $("#showUL").show();
                        $("#newUL").hide();



                    }else{
                        $("#showUL").html('');
                    }
                }
            });
          },
          'mouseover': function (e) {
            // s='';
            var sss=this;
            if(ning==true){
              $.ajax({
                  url: "../Api/GetsignOPerator",
                  type: 'GET',
                  dataType: 'json',
                  data:{
                      lng:e.latlng.lng,
                      lat:e.latlng.lat,
                      operator_name:c,
                  },
                  success: function(data){
                      var data=$.parseJSON(data);
                      if(data!=''&&data!=null){
                          s='';
                          $.each(data,function(key,v){
                             s+=v.network_name+'<br>';
                          });
                          s=s.substring(0,s.length-2);
                          sss.bindPopup(s).openPopup();
                      }else{

                      }
                  }
              }); 
              }
          },
      });
  }
}

function sign1(obj,country){
    c=obj;
    ning=true;
    $("#showUL").hide();
    $("#newUL").show();
    $.ajax({
            url: "../Api/GetSignDataFromOperator",
            type: 'GET',
            dataType: 'json',
            data:{
                operator:obj,
            },
            success: function(data){
                var data=$.parseJSON(data);
                var sign=data.sign;
                var signdata=data.signdata;
                var country1=data.country;
                var html='';
                if(data!=''&&data!=null){
                  chinaTF=true;
                  newBox(chinaTF,sign,country);

                  html+="<li class='clearfix'>";
                  html+="<div class='li_l'>";
                  html+="<img src='"+country1.img+"'>";
                  html+="</div>";
                  html+="<div class='li_r'>";
                  // bb+="<div class='li_rt'>"+v.network_name+"<span>("+v.operator_name+")</span></div>";
                  html+="<div class='li_rt'>"+country1.operator_name+"<span></span></div>";
                  html+="<div class='li_rm'>"+country1.name_chs+"</span></div>";
                  html+="<div class='li_rb'><span>语音</span><span>短信</span><span>数据</span><span>位置</span></div>";
                  html+="</div>";
                  html+="</li>";
                  $.each(signdata,function(key,v){
                      html+='<li>';
                      html+='<span class="guojia">'+key+'</span>';
                      $.each(v,function(k,vo){
                          html+='<p>'+vo+'</p >';
                      });
                      html+='</li>';
                  });
                   $("#newUL").html(html);
                }else{
                    chinaTF=false;
                    newBox(chinaTF); 
                }
               // chinaTF=false;
               // newBox(chinaTF,data,country);
            }
    });
}
var overlay = new L.echartsLayer(map, echarts);

var chinaTF = false;
function  newBox(chinaTF,data,fromcountry){

    if(data!=''&&data!=null){
        var array1 = new Array();
        var array2 = new Array();
        var array3 = {};
        var array4 = [];
        var array5 = [];
        array2[fromcountry] = false;
        array3[fromcountry] = [data['0']['operator_lng'],data['0']['operator_lat']];
        $.each(data,function(key,v){ 
            array1[key] = v.name_chs;
            array2[v.name_chs] = false;
            array3[v.name_chs] = [v.sign_lng,v.sign_lat];
            array4[key]=[{name:fromcountry}, {name:v.name_chs,value:v.count}];
            array5[key] = {name:v.name_chs,value:v.count};
        });
        array1.unshift(fromcountry);

    }else{
        var array1 = new Array()
        var array2 = new Array();
        var array3 = {};
        var array4 = [];
        var array5 = [];
    }
    var chartsContainer=overlay.getEchartsContainer();
    var myChart=overlay.initECharts(chartsContainer);
    window.onresize = myChart.onresize;
    var option = {
        color: ['gold','aqua','lime'],
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            orient: 'vertical',
            x:'right',
            y:'bottom',
            data:[],
            selectedMode: 'single',
            selected:array2,
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 1,
            max : 5,
            calculable : true,//变色标尺形式
            color: ['#ff0000', '#ffee36'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                name: '全球',
                type: 'map',
                roam: true,
                hoverable: false,
                mapType: 'none',
                itemStyle:{
                    normal:{
                        borderColor:'rgba(100,149,237,1)',
                        borderWidth:0.5,
                        areaStyle:{
                            color: '#1b1b1b'
                        }
                    }
                },
                data:[],

                geoCoord: array3
            },
            {
                name: '中国',
                type: 'map',
                mapType: 'none',
                data:[],
                markLine : {
                    smooth:true,
                    effect : {
                        show: true,//动效小圆点
                        scaleSize: 2,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle : {
                        normal: {
                            borderWidth:1,
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data :array4
                },
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 5 + v/10
                    },
                    effect : {
                        show: true,
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        },
                        emphasis: {
                            label:{position:'top'}
                        }
                    },
                    data :array5
                }
            },
        ]
    };
    overlay.setOption(option);
}
// $("#showUL li").on("click",function(){
//     $("#showUL").hide();
//     $(".mask1").css("display","block");
// })
$("#mapBusiness").on("click",function(){
    $('#newUL').hide();
})