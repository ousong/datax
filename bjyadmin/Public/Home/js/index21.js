

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

var greenIcon = L.icon({
    iconUrl: '../../Public/Home/images/td1.png',
    iconSize:[27, 36], // size of the icon
});
//中国移动
var  marker=L.marker([35.204951,103.596876],{icon: greenIcon}).addTo(map);
// 巴基斯坦UFON
var  marker1=L.marker([30.102946,69.157136],{icon: greenIcon}).addTo(map);
//土耳其AREA
var  marker2=L.marker([39.434663,34.423039],{icon: greenIcon}).addTo(map);
//阿富汗AWCC
var  marker3=L.marker([33.98787,65.919212],{icon: greenIcon}).addTo(map);
//香港中国移动/CSL
var  marker4=L.marker([22.294421,114.138563],{icon: greenIcon}).addTo(map);
//美国/AT&T Wireless PCS
var  marker5=L.marker([37.090240,-95.712891],{icon: greenIcon}).addTo(map);
//日本/J-Phone Co.,Ltd
var  marker6=L.marker([36.204824,138.252924],{icon: greenIcon}).addTo(map);
//德国/E-Plus Mobilfunk GmbH
var  marker7=L.marker([51.165691,10.451526],{icon: greenIcon}).addTo(map);
//法国/Bouygues Telecom - GSM 1800
var  marker8=L.marker([46.227638,2.213749],{icon: greenIcon}).addTo(map);
//英国/United Kingdom
var  marker9=L.marker([55.378051,-3.435973],{icon: greenIcon}).addTo(map);
//意大利/H3G
var  marker10=L.marker([41.871940,12.567380],{icon: greenIcon}).addTo(map);
//加拿大/Microcell Telecommunications Inc
var  marker11=L.marker([56.130366,-106.346771],{icon: greenIcon}).addTo(map);
//俄罗斯/BM Telecom Limited
var  marker12=L.marker([61.524010,105.318756],{icon: greenIcon}).addTo(map);
//澳大利亚/Hutchison 3G Australia Pty Limited
var  marker13=L.marker([-25.274398,133.775136],{icon: greenIcon}).addTo(map);
//南非/Cell C (Pty) Ltd
var  marker14=L.marker([-30.559482,22.937506],{icon: greenIcon}).addTo(map);
//阿根廷/Hutchison Telecommunications Argentina S.A. (PORT-HABLE)
var  marker15=L.marker([34.555349,69.207486],{icon: greenIcon}).addTo(map);
//巴西/TIM Celular Centro Sul S.A. (TIM BRASIL)
var  marker16=L.marker([-14.235004,-51.925280],{icon: greenIcon}).addTo(map);
//印度/Aircel Digilink India Limited (Aircel Digilink India Limited - UP East)
var  marker17=L.marker([20.593684,78.962880],{icon: greenIcon}).addTo(map);
//印度尼西亚/PT Indosat MultiMedia Mobile ("IM3") (INDOSAT-M3)
var  marker18=L.marker([-0.789275,113.921327],{icon: greenIcon}).addTo(map);
//墨西哥/Pegaso Comunicaciones y Sistemas, S.A. De C.V
var  marker19=L.marker([23.634501,-102.552784],{icon: greenIcon}).addTo(map);
//沙特阿拉伯/Saudi Telecom Company
var  marker20=L.marker([23.885942,45.079162],{icon: greenIcon}).addTo(map);
//韩国/Korea, Republic of
var  marker21=L.marker([35.907757,127.766922],{icon: greenIcon}).addTo(map);
// window.onload=function(){
//     $.ajax({
//         url: "../Api/GetG20",
//         type: 'GET',
//         dataType: 'json',
//         data:{
//             country:'中国',
//         },
//         success: function(data){
//             var data=$.parseJSON(data);
//             var i=5;
//             $.each(data,function(key,v){
//                 var m='marker'+i;
//                 var  m=L.marker([v.lat,v.lng],{icon: greenIcon}).addTo(map);
//                 i++;
//             })
//         }
//     });
// }
marker21.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'韩国',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>美国</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign21('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker5.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'美国',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>美国</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign5('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'中国',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>中华人民共和国</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker1.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'巴基斯坦',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>巴基斯坦UFON</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign1('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker2.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'土耳其',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>土耳其AREA</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign2('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker3.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'阿富汗',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>阿富汗AWCC</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign3('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker4.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'香港',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>香港中国移动/CSL</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign4('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
});
marker6.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'日本',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>日本</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign6('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker7.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'德国',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>德国</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign7('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker8.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'法国',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>法国</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign8('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker9.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'英国',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>英国</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign9('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker10.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'意大利',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>意大利</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign10('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker11.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'加拿大',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>加拿大</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign11('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker12.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'俄罗斯',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>俄罗斯</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign12('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker13.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'澳大利亚',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>澳大利亚</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign13('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker14.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'南非',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>南非</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign14('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker15.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'阿根廷',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>阿根廷</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign15('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker16.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'巴西',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>巴西</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign16('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker17.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'印度',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>印度</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign17('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker18.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'印度尼西亚',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>印度尼西亚</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign18('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker19.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'墨西哥',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>墨西哥</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign19('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
marker20.on("click",function(){
        $.ajax({
            url: "../Api/Getquery",
            type: 'GET',
            dataType: 'json',
            data:{
                country:'沙特阿拉伯',
            },
            success: function(data){
                var data=$.parseJSON(data);
                if(data!=''&&data!=null){
                    var html='';
                    html+='<p>沙特阿拉伯</p>';
                    $.each(data,function(key,v){   
                        html+="<li><img onclick=\"sign20('"+v.operator_name+"')\" src='"+v.logo+"' /></li>";
                    });
                    // alert(html);
                    $("#showUL").html(html);
                    $("#showUL").show();
                }else{
                    $("#showUL").html("");
                }
            }
        });
   
});
var overlay = new L.echartsLayer(map, echarts);
var chinaTF = false;
function  newBox(chinaTF,html,html1,html2){
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
            data:['中国移动','巴基斯坦UFON','土耳其AREA','阿富汗AWCC','香港中国移动/CSL','美国/AT&T Wireless PCS, LLC','日本-Phone Co.,Ltd','德国E-Plus Mobilfunk GmbH',
'法国Bouygues Telecom - GSM 1800','英国Hutchison 3G UK Ltd (3)','意大利H3G','加拿大Microcell Telecommunications Inc','俄罗斯BM Telecom Limited',
'澳大利亚Hutchison 3G Australia Pty Limited','南非Cell C (Pty) Ltd','阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)',
'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)','印度Aircel Digilink India Limited','印度尼西亚PT Indosat MultiMedia Mobile','墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V',
'沙特阿拉伯Saudi Telecom Company','韩国KT ICOM'],
            selectedMode: 'single',
            // selected:{
            //         '中国移动':chinaTF,
            //         '巴基斯坦UFON':false,
            //         '土耳其AREA':false,
            //         '阿富汗AWCC':false,
            //         '香港中国移动/CSL':false,
            //         '美国/AT&T Wireless PCS: LLC':false,
            //         '日本-Phone Co.:Ltd':false,
            //         '德国E-Plus Mobilfunk GmbH':false,
            //         '法国Bouygues Telecom - GSM 1800':false,
            //         '英国Hutchison 3G UK Ltd (3)':false,
            //         '意大利H3G':false,
            //         '加拿大Microcell Telecommunications Inc':false,
            //         '俄罗斯BM Telecom Limited':false,
            //         '澳大利亚Hutchison 3G Australia Pty Limited':false,
            //         '南非Cell C (Pty) Ltd':false,
            //         '阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)':false,
            //         '巴西TIM Celular Centro Sul S.A. (TIM BRASIL)':false,
            //         '印度Aircel Digilink India Limited':false,
            //         '印度尼西亚PT Indosat MultiMedia Mobile':false,
            //         '墨西哥Pegaso Comunicaciones y Sistemas: S.A. De C.V':false,
            //         '沙特阿拉伯Saudi Telecom Company':false,
            //         '韩国KT ICOM':false,
            // },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
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

                geoCoord: {
                    '中国移动': [103.596876,35.204951],
                    '巴基斯坦UFON': [69.157136,30.102946],
                    '土耳其AREA': [34.423039,39.434663 ],
                    '阿富汗AWCC': [65.919212,33.98787],
                    '香港中国移动/CSL': [114.138563,22.294421],
                    '美国/AT&T Wireless PCS, LLC': [-95.712891,37.090240],
                    '日本-Phone Co.,Ltd': [138.252924,36.204824],
                    '德国E-Plus Mobilfunk GmbH': [10.451526,51.165691],
                    '法国Bouygues Telecom - GSM 1800': [2.213749,46.227638],
                    '英国Hutchison 3G UK Ltd (3)': [-3.435973,55.378051],
                    '意大利H3G': [12.567380,41.871940],
                    '加拿大Microcell Telecommunications Inc': [-106.346771,56.130366],
                    '俄罗斯BM Telecom Limited': [105.318756,61.524010],
                    '澳大利亚Hutchison 3G Australia Pty Limited': [133.775136,-25.274398],
                    '南非Cell C (Pty) Ltd': [22.937506,-30.559482],
                    '阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)': [69.207486,34.555349],
                    '巴西TIM Celular Centro Sul S.A. (TIM BRASIL)': [-51.925280,-14.235004],
                    '印度Aircel Digilink India Limited': [78.962880,20.593684],
                    '印度尼西亚PT Indosat MultiMedia Mobile': [113.921327,-0.789275],
                    '墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V': [-102.552784,23.634501],
                    '沙特阿拉伯Saudi Telecom Company': [45.079162,23.885942],
                    '韩国KT ICOM': [127.766922,35.907757],
                }
            },
            {
                name: '中国移动',
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
                    data : [
                        [{name:'中国移动'}, {name:'巴基斯坦UFON',value:90}],
                        [{name:'中国移动'}, {name:'土耳其AREA',value:40}],
                        [{name:'中国移动'}, {name:'阿富汗AWCC',value:50}],
                        [{name:'中国移动'}, {name:'香港中国移动/CSL',value:90}],
                        [{name:'中国移动'}, {name:'美国/AT&T Wireless PCS, LLC',value:80}],
                        [{name:'中国移动'}, {name:'日本-Phone Co.,Ltd',value:40}],
                        [{name:'中国移动'}, {name:'德国E-Plus Mobilfunk GmbH',value:20}],
                        [{name:'中国移动'}, {name:'法国Bouygues Telecom - GSM 1800',value:10}],
                        [{name:'中国移动'}, {name:'英国Hutchison 3G UK Ltd (3)',value:20}],
                        [{name:'中国移动'}, {name:'意大利H3G',value:6}],
                        [{name:'中国移动'}, {name:'加拿大Microcell Telecommunications Inc',value:15}],
                        [{name:'中国移动'}, {name:'俄罗斯BM Telecom Limited',value:20}],
                        [{name:'中国移动'}, {name:'澳大利亚Hutchison 3G Australia Pty Limited',value:11}],
                        [{name:'中国移动'}, {name:'南非Cell C (Pty) Ltd',value:30}],
                        [{name:'中国移动'}, {name:'阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)',value:14}],
                        [{name:'中国移动'}, {name:'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)',value:11}],
                        [{name:'中国移动'}, {name:'印度Aircel Digilink India Limited',value:4}],
                        [{name:'中国移动'}, {name:'印度尼西亚PT Indosat MultiMedia Mobile',value:5}],
                        [{name:'中国移动'}, {name:'沙特阿拉伯Saudi Telecom Company',value:3}],
                        [{name:'中国移动'}, {name:'韩国KT ICOM',value:90}],
                    ]
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
                    data : [
                        {name:'巴基斯坦UFON',value:90},
                        {name:'土耳其AREA',value:10},
                        {name:'阿富汗AWCC',value:80},
                        {name:'香港中国移动/CSL',value:40},
                        {name:'美国/AT&T Wireless PCS, LLC',value:80},
                        {name:'日本-Phone Co.,Ltd',value:30},
                        {name:'德国E-Plus Mobilfunk GmbH',value:60},
                        {name:'法国Bouygues Telecom - GSM 1800',value:90},
                        {name:'英国Hutchison 3G UK Ltd (3)',value:40},
                        {name:'意大利H3G',value:40},
                        {name:'加拿大Microcell Telecommunications Inc',value:40},
                        {name:'俄罗斯BM Telecom Limited',value:90},
                        {name:'澳大利亚Hutchison 3G Australia Pty Limited',value:60},
                        {name:'南非Cell C (Pty) Ltd',value:90},
                        {name:'阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)',value:10},
                        {name:'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)',value:10},
                        {name:'印度Aircel Digilink India Limited',value:20},
                        {name:'印度尼西亚PT Indosat MultiMedia Mobile',value:10},
                        {name:'沙特阿拉伯Saudi Telecom Company',value:80},
                        {name:'韩国KT ICOM',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox1(chinaTF,html,html1,html2){
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
            data:['巴基斯坦UFON', '香港中国移动/CSL','阿富汗AWCC', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '巴基斯坦UFON' : chinaTF,
                '香港中国移动/CSL' : false,
                // '阿富汗AWCC' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
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

                geoCoord: {
                    '巴基斯坦UFON': [69.157136,30.102946],                   
                    '香港中国移动/CSL': [114.138563,22.294421],
                    // '阿富汗AWCC': [65.919212,33.98787],
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951], 
                }
            },
            {
                name: '巴基斯坦UFON',
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
                    data : [
                        [{name:'巴基斯坦UFON'}, {name:'香港中国移动/CSL',value:80}],
                        // [{name:'巴基斯坦UFON'}, {name:'阿富汗AWCC',value:90}],
                        [{name:'巴基斯坦UFON'}, {name:'土耳其AREA',value:70}],
                        [{name:'巴基斯坦UFON'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'香港中国移动/CSL',value:80},
                        // {name:'阿富汗AWCC',value:90},
                        {name:'土耳其AREA',value:70},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox2(chinaTF,html,html1,html2){
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
            data:['土耳其AREA', '香港中国移动/CSL','巴基斯坦UFON', '阿富汗AWCC','中国移动'],
            selectedMode: 'single',
            selected:{
                '土耳其AREA' : chinaTF,
                '香港中国移动/CSL' : false,
                '巴基斯坦UFON' : false,
                '阿富汗AWCC' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
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

                geoCoord: {
                    '土耳其AREA': [34.423039,39.434663 ],           
                    '香港中国移动/CSL': [114.138563,22.294421],
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '阿富汗AWCC': [65.919212,33.98787], 
                    '中国移动': [103.596876,35.204951], 
                }
            },
            {
                name: '土耳其AREA',
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
                    data : [
                        [{name:'土耳其AREA'}, {name:'香港中国移动/CSL',value:30}],
                        [{name:'土耳其AREA'}, {name:'巴基斯坦UFON',value:90}],
                        [{name:'土耳其AREA'}, {name:'阿富汗AWCC',value:70}],
                        [{name:'土耳其AREA'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'香港中国移动/CSL',value:30},
                        {name:'巴基斯坦UFON',value:90},
                        {name:'阿富汗AWCC',value:80},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox3(chinaTF,html,html1,html2){
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
            data:['阿富汗AWCC', '香港中国移动/CSL','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '阿富汗AWCC' : chinaTF,
                '香港中国移动/CSL' : false,
                // '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
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

                geoCoord: {
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '香港中国移动/CSL': [114.138563,22.294421],
                    // '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951], 
                }
            },
            {
                name: '阿富汗AWCC',
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
                    data : [
                        [{name:'阿富汗AWCC'}, {name:'香港中国移动/CSL',value:30}],
                        // [{name:'阿富汗AWCC'}, {name:'巴基斯坦UFON',value:90}],
                        [{name:'阿富汗AWCC'}, {name:'土耳其AREA',value:70}],
                        [{name:'阿富汗AWCC'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'香港中国移动/CSL',value:90},
                        // {name:'巴基斯坦UFON',value:90},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox4(chinaTF,html,html1,html2){
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
            data:['香港中国移动/CSL', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '香港中国移动/CSL' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
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

                geoCoord: {
                    '香港中国移动/CSL': [114.138563,22.294421],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951], 
                }
            },
            {
                name: '香港中国移动/CSL',
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
                    data : [
                        [{name:'香港中国移动/CSL'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'香港中国移动/CSL'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'香港中国移动/CSL'}, {name:'土耳其AREA',value:90}],
                        [{name:'香港中国移动/CSL'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox21(chinaTF,html,html1,html2){
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
            data:['韩国KT ICOM', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '韩国KT ICOM' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                // name: '全球',
                // type: 'map',
                // roam: true,
                // hoverable: false,
                // mapType: 'none',
                // itemStyle:{
                //     normal:{
                //         borderColor:'rgba(100,149,237,1)',
                //         borderWidth:0.5,
                //         areaStyle:{
                //             color: '#1b1b1b'
                //         }
                //     }
                // },
                data:[],
                geoCoord: {
                    '韩国KT ICOM': [127.766922,35.907757],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '韩国KT ICOM',
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
                    data : [
                        [{name:'韩国KT ICOM'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'韩国KT ICOM'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'韩国KT ICOM'}, {name:'土耳其AREA',value:90}],
                        [{name:'韩国KT ICOM'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox5(chinaTF,html,html1,html2){
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
            data:['美国/AT&T Wireless PCS, LLC', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '美国/AT&T Wireless PCS, LLC' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '美国/AT&T Wireless PCS, LLC': [-95.712891,37.090240],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '美国/AT&T Wireless PCS, LLC',
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
                    data : [
                        [{name:'美国/AT&T Wireless PCS, LLC'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'美国/AT&T Wireless PCS, LLC'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'美国/AT&T Wireless PCS, LLC'}, {name:'土耳其AREA',value:90}],
                        [{name:'美国/AT&T Wireless PCS, LLC'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox6(chinaTF){
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
            data:['日本-Phone Co.,Ltd', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '日本-Phone Co.,Ltd' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '日本-Phone Co.,Ltd': [138.252924,36.204824],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '日本-Phone Co.,Ltd',
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
                    data : [
                        [{name:'日本-Phone Co.,Ltd'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'日本-Phone Co.,Ltd'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'日本-Phone Co.,Ltd'}, {name:'土耳其AREA',value:90}],
                        [{name:'日本-Phone Co.,Ltd'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox7(chinaTF){
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
            data:['德国E-Plus Mobilfunk GmbH', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '德国E-Plus Mobilfunk GmbH' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '德国E-Plus Mobilfunk GmbH': [10.451526,51.165691],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '德国E-Plus Mobilfunk GmbH',
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
                    data : [
                        [{name:'德国E-Plus Mobilfunk GmbH'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'德国E-Plus Mobilfunk GmbH'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'德国E-Plus Mobilfunk GmbH'}, {name:'土耳其AREA',value:90}],
                        [{name:'德国E-Plus Mobilfunk GmbH'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox8(chinaTF){
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
            data:['法国Bouygues Telecom - GSM 1800', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '法国Bouygues Telecom - GSM 1800' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '法国Bouygues Telecom - GSM 1800': [2.213749,46.227638],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '法国Bouygues Telecom - GSM 1800',
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
                    data : [
                        [{name:'法国Bouygues Telecom - GSM 1800'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'法国Bouygues Telecom - GSM 1800'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'法国Bouygues Telecom - GSM 1800'}, {name:'土耳其AREA',value:90}],
                        [{name:'法国Bouygues Telecom - GSM 1800'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox9(chinaTF){
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
            data:['英国Hutchison 3G UK Ltd (3)', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '英国Hutchison 3G UK Ltd (3)' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '英国Hutchison 3G UK Ltd (3)': [-3.435973,55.378051],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '英国Hutchison 3G UK Ltd (3)',
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
                    data : [
                        [{name:'英国Hutchison 3G UK Ltd (3)'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'英国Hutchison 3G UK Ltd (3)'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'英国Hutchison 3G UK Ltd (3)'}, {name:'土耳其AREA',value:90}],
                        [{name:'英国Hutchison 3G UK Ltd (3)'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox10(chinaTF){
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
            data:['意大利H3G', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '意大利H3G' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '意大利H3G': [12.567380,41.871940],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '意大利H3G',
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
                    data : [
                        [{name:'意大利H3G'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'意大利H3G'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'意大利H3G'}, {name:'土耳其AREA',value:90}],
                        [{name:'意大利H3G'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox11(chinaTF){
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
            data:['加拿大Microcell Telecommunications Inc', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '加拿大Microcell Telecommunications Inc' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '加拿大Microcell Telecommunications Inc': [-106.346771,56.130366],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '意大利H3G',
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
                    data : [
                        [{name:'加拿大Microcell Telecommunications Inc'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'加拿大Microcell Telecommunications Inc'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'加拿大Microcell Telecommunications Inc'}, {name:'土耳其AREA',value:90}],
                        [{name:'加拿大Microcell Telecommunications Inc'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox12(chinaTF){
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
            data:['俄罗斯BM Telecom Limited', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '俄罗斯BM Telecom Limited' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '俄罗斯BM Telecom Limited': [105.318756,61.524010],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '俄罗斯BM Telecom Limited',
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
                    data : [
                        [{name:'俄罗斯BM Telecom Limited'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'俄罗斯BM Telecom Limited'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'俄罗斯BM Telecom Limited'}, {name:'土耳其AREA',value:90}],
                        [{name:'俄罗斯BM Telecom Limited'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox13(chinaTF){
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
            data:['澳大利亚Hutchison 3G Australia Pty Limited', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '澳大利亚Hutchison 3G Australia Pty Limited' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '澳大利亚Hutchison 3G Australia Pty Limited': [133.775136,-25.274398],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '澳大利亚Hutchison 3G Australia Pty Limited',
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
                    data : [
                        [{name:'澳大利亚Hutchison 3G Australia Pty Limited'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'澳大利亚Hutchison 3G Australia Pty Limited'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'澳大利亚Hutchison 3G Australia Pty Limited'}, {name:'土耳其AREA',value:90}],
                        [{name:'澳大利亚Hutchison 3G Australia Pty Limited'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox14(chinaTF){
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
            data:['南非Cell C (Pty) Ltd', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '南非Cell C (Pty) Ltd' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '南非Cell C (Pty) Ltd': [22.937506,-30.559482],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '澳大利亚Hutchison 3G Australia Pty Limited',
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
                    data : [
                        [{name:'南非Cell C (Pty) Ltd'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'南非Cell C (Pty) Ltd'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'南非Cell C (Pty) Ltd'}, {name:'土耳其AREA',value:90}],
                        [{name:'南非Cell C (Pty) Ltd'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox15(chinaTF){
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
            data:['阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)': [69.207486,34.555349],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '澳大利亚Hutchison 3G Australia Pty Limited',
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
                    data : [
                        [{name:'阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)'}, {name:'土耳其AREA',value:90}],
                        [{name:'阿根廷Hutchison Telecommunications Argentina S.A. (PORT-HABLE)'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox16(chinaTF){
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
            data:['巴西TIM Celular Centro Sul S.A. (TIM BRASIL)', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '巴西TIM Celular Centro Sul S.A. (TIM BRASIL)' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '巴西TIM Celular Centro Sul S.A. (TIM BRASIL)': [-51.925280,-51.925280],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '巴西TIM Celular Centro Sul S.A. (TIM BRASIL)',
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
                    data : [
                        [{name:'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)'}, {name:'土耳其AREA',value:90}],
                        [{name:'巴西TIM Celular Centro Sul S.A. (TIM BRASIL)'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox17(chinaTF){
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
            data:['印度Aircel Digilink India Limited', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '印度Aircel Digilink India Limited' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '印度Aircel Digilink India Limited': [78.962880,20.593684],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '印度Aircel Digilink India Limited',
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
                    data : [
                        [{name:'印度Aircel Digilink India Limited'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'印度Aircel Digilink India Limited'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'印度Aircel Digilink India Limited'}, {name:'土耳其AREA',value:90}],
                        [{name:'印度Aircel Digilink India Limited'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox18(chinaTF){
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
            data:['印度尼西亚PT Indosat MultiMedia Mobile', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '印度尼西亚PT Indosat MultiMedia Mobile' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '印度尼西亚PT Indosat MultiMedia Mobile': [113.921327,-0.789275],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '巴西TIM Celular Centro Sul S.A. (TIM BRASIL)',
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
                    data : [
                        [{name:'印度尼西亚PT Indosat MultiMedia Mobile'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'印度尼西亚PT Indosat MultiMedia Mobile'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'印度尼西亚PT Indosat MultiMedia Mobile'}, {name:'土耳其AREA',value:90}],
                        [{name:'印度尼西亚PT Indosat MultiMedia Mobile'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox19(chinaTF){
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
            data:['墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V': [-102.552784,23.634501],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V',
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
                    data : [
                        [{name:'墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V'}, {name:'土耳其AREA',value:90}],
                        [{name:'墨西哥Pegaso Comunicaciones y Sistemas, S.A. De C.V'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function  newBox20(chinaTF){
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
            data:['沙特阿拉伯Saudi Telecom Company', '阿富汗AWCC','巴基斯坦UFON', '土耳其AREA','中国移动'],
            selectedMode: 'single',
            selected:{
                '沙特阿拉伯Saudi Telecom Company' : chinaTF,
                '阿富汗AWCC' : false,
                '巴基斯坦UFON' : false,
                '土耳其AREA' : false,
                '中国移动' : false,
            },
            textStyle : {
                color: '#f00'
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,//变色标尺形式
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                data:[],
                geoCoord: {
                    '沙特阿拉伯Saudi Telecom Company': [45.079162,23.885942],
                    '阿富汗AWCC': [65.919212,33.98787],           
                    '巴基斯坦UFON': [69.157136,30.102946],      
                    '土耳其AREA': [34.423039,39.434663 ], 
                    '中国移动': [103.596876,35.204951],
                }
            },
            {
                name: '沙特阿拉伯Saudi Telecom Company',
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
                    data : [
                        [{name:'沙特阿拉伯Saudi Telecom Company'}, {name:'阿富汗AWCC',value:30}],
                        [{name:'沙特阿拉伯Saudi Telecom Company'}, {name:'巴基斯坦UFON',value:80}],
                        [{name:'沙特阿拉伯Saudi Telecom Company'}, {name:'土耳其AREA',value:90}],
                        [{name:'沙特阿拉伯Saudi Telecom Company'}, {name:'中国移动',value:90}],
                    ]
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
                    data : [
                        {name:'阿富汗AWCC',value:30},
                        {name:'巴基斯坦UFON',value:80},
                        {name:'土耳其AREA',value:90},
                        {name:'中国移动',value:90},
                    ]
                }
            },
        ]
    };
    overlay.setOption(option);
}
function sign(obj){
    chinaTF=true;
    newBox(chinaTF);
    $("#showUL").hide();
}
function sign1(obj){
    chinaTF=true;
    newBox1(chinaTF);
    $("#showUL").hide();
}
function sign2(obj){
    chinaTF=true;
    newBox2(chinaTF);
    $("#showUL").hide();
}
function sign3(obj){
    chinaTF=true;
    newBox3(chinaTF);
    $("#showUL").hide();
}
function sign4(obj){
    chinaTF=true;
    newBox4(chinaTF);
    $("#showUL").hide();
}
function sign5(obj){
    chinaTF=true;
    newBox5(chinaTF);
    $("#showUL").hide();
}
function sign6(obj){
    chinaTF=true;
    newBox6(chinaTF);
    $("#showUL").hide();
}
function sign7(obj){
    chinaTF=true;
    newBox7(chinaTF);
    $("#showUL").hide();
}
function sign8(obj){
    chinaTF=true;
    newBox8(chinaTF);
    $("#showUL").hide();
}
function sign9(obj){
    chinaTF=true;
    newBox9(chinaTF);
    $("#showUL").hide();
}
function sign10(obj){
    chinaTF=true;
    newBox10(chinaTF);
    $("#showUL").hide();
}
function sign11(obj){
    chinaTF=true;
    newBox11(chinaTF);
    $("#showUL").hide();
}
function sign12(obj){
    chinaTF=true;
    newBox12(chinaTF);
    $("#showUL").hide();
}
function sign13(obj){
    chinaTF=true;
    newBox13(chinaTF);
    $("#showUL").hide();
}
function sign14(obj){
    chinaTF=true;
    newBox14(chinaTF);
    $("#showUL").hide();
}
function sign15(obj){
    chinaTF=true;
    newBox15(chinaTF);
    $("#showUL").hide();
}
function sign16(obj){
    chinaTF=true;
    newBox16(chinaTF);
    $("#showUL").hide();
}
function sign17(obj){
    chinaTF=true;
    newBox17(chinaTF);
    $("#showUL").hide();
}
function sign18(obj){
    chinaTF=true;
    newBox18(chinaTF);
    $("#showUL").hide();
}
function sign19(obj){
    chinaTF=true;
    newBox19(chinaTF);
    $("#showUL").hide();
}
function sign20(obj){
    chinaTF=true;
    newBox20(chinaTF);
    $("#showUL").hide();
}
function sign21(obj){
    chinaTF=true;
    newBox21(chinaTF);
    $("#showUL").hide();
}
$(".li01").on("click",function(chinaTF){
    chinaTF=true;
    newBox(chinaTF)
})



