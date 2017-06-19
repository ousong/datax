/**
 * Created by Administrator on 2017/4/20.
 */
var map = L.map('mapId').setView([51.505, -0.09], 9);
L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}').addTo(map);
var greenIcon = L.icon({
    iconUrl: '../../Public/Home/images/leaf-green.png',
    popupAnchor:  [10, 0] 

});

var arr=[[35.86166,104.19539],[30.375321,69.345116],[31.046051,34.851612]]
$("#btn").on("click",function(){
    getdata();
})

function lacmap(zuobiao,data){

    $(".leaflet-marker-pane").children("*").remove();
    $("g").remove();
    var i=Math.floor(Math.random()*arr.length);
    var mark=L.marker(zuobiao, {icon: greenIcon});
    var circle = L.circle(zuobiao, 1500, {
        color: '#ffa349',
        fillColor: '#ffa349',
        fillOpacity: 0.7
    });
    map.panTo(zuobiao,{
        animate:true,
        duration:2
    });
    mark.addTo(map).bindPopup('靠近：'+data[0]+'<br>范围：'+data[1]+'<br>区划：'+data[2]+'<br>'+data[3]+'<br>')
        .openPopup();
    circle.addTo(map);
    map.setView(zuobiao,15);

}

function getdata(){
    var mcc = $('#mcc').val();
    var type = $('input:checkbox').val();
    var mnc = $('#mnc').val();
    var lac = $('#lac').val();
    var ci = $('#ci').val();

    $.ajax({
        url: "../Api/GetLacData",
        type: 'POST',
        dataType: 'json',
        data:{mcc:mcc,
              type:type,
              mnc:mnc,
              lac:lac,
              ci:ci,
              },
        success: function(data){
            if(data!=''&&data!=null){
                lacmap(
                       [data.lng,
                        data.lat
                       ],
                       [ data.name,
                         data.fanwei,
                         data.quhua,
                         data.bianhao
                       ]
                );
            }
        }
    });
}