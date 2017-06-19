/**
 * Created by Administrator on 2017/4/20.
 */
var map = L.map('mapId');
var baseLayers = {
    'GeoQ灰色底图': L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}').addTo(map),

};
map.setView(L.latLng(45.51, -122.68), 10,function(){

});

var myIcon = L.icon({
    iconUrl: '../../Public/Home/images/td1.png',
    iconAnchor: [13, 33],
    popupAnchor: [-2, -20],
    className:"icon"
});
function aaa(num) {
    setTimeout(function () {

        var ning =latlngs[num]['lat'];
        var ning1 =latlngs[num]['lng'];
        L.marker(latlngs[num],{icon: myIcon}).addTo(map).bindPopup("坐标是：("+ning+","+ning1+")").openPopup();

        //$(".icon").addClass('flash animated')
        $(".icon").eq(num).animate({marginTop:"-33px"},400)
            .animate({marginTop:"-63px"},400)
            .animate({marginTop:"-33px"},200)
            .animate({marginTop:"-48px"},200)
            .animate({marginTop:"-33px"},400)
            .animate({marginTop:"-33px"},400);
        $(".leaflet-popup").animate({bottom:"13px"},400)
            .animate({bottom:"43px"},400)
            .animate({bottom:"13px"},200)
            .animate({bottom:"28px"},200)
            .animate({bottom:"13px"},400)
            .animate({bottom:"13px"},400);

        if(num<latlngs.length-1){
            // console.log(latlngs[num],latlngs[num+1]);
            L.polyline([latlngs[num],latlngs[num+1]], {color: 'red',weight:"2px",lineCap:"suqere"}).addTo(map);
            map.panTo(latlngs[num+1],{
                animate:true,
                duration:2
            })
        }else {

        }

    },num*2000);
}
$("#chaxun2").on("click",function () {
    var imsi = $("#imsi").val();
    //var phone = $("#phone").val();
    $.ajax({
      url: "../Api/guiji_imsi",
      type: 'POST',
      dataType: 'json',
      data:{
            imsi:imsi,
        },
      success: function(data){

        if(data!=''&&data!=null&&data!='[]'){
            data=$.parseJSON(data);

            var zbidd_idd = '区号：'+'852';
            var zbidd_phone = '电话：'+data[0]['phone'];
            var zbidd_imsi = 'IMSI：'+data[0]['imsi'];

            $("#zbidd_idd").html(zbidd_idd);
            $("#zbphone_phone").html(zbidd_phone);
            $("#zbimsi_imsi").html(zbidd_imsi);
            var html='';
            $.each(data,function(key,v){
                html+="<p>时间："+v.time+"<br/>坐标："+v.lat+"&nbsp;&nbsp;"+v.lng+"</p>";
                 // html+="<p>时间："+v.date+"&nbsp;&nbsp;"+v.chn_time+"<br/>坐标："+v.lat+"&nbsp;&nbsp;"+v.lng+"</p>";
            })
            $("#zbbox_id").html(html);
            latlngs = [];
            for(var i=0;i<data.length;i++){
                var lat=data[i]['lat'];
                var lng=data[i]['lng'];
                latlngs[i] = {lat,lng};
                aaa(i);
            }
           
            $(".ningBox").show();
        }else{
            alert('输入信息有误');
        }
      }
});
})
   
$("#chaxun1").on("click",function () {
    var idd = $("#idd").val();
    var phone = $("#phone").val();
    $.ajax({
      url: "../Api/guiji",
      type: 'POST',
      dataType: 'json',
      data:{
            idd:idd,
            phone:phone,
        },
        success: function(data){
            if(data!=''&&data!=null&&data!='[]'){
                data=$.parseJSON(data);
                var zbidd_idd = '区号：'+data[0]['idd'];
                var zbidd_phone = '电话：'+data[0]['phone'];
                var zbidd_imsi = 'IMSI：'+data[0]['imsi'];

                $("#zbidd_idd").html(zbidd_idd);
                $("#zbphone_phone").html(zbidd_phone);
                $("#zbimsi_imsi").html(zbidd_imsi);
                var html='';
                $.each(data,function(key,v){
                     html+="<p>时间："+v.date+"&nbsp;&nbsp;"+v.chn_time+"<br/>坐标："+v.lat+"&nbsp;&nbsp;"+v.lng+"</p>";
                })
                $("#zbbox_id").html(html);
                latlngs = [];
                for(var i=0;i<data.length;i++){
                    var lat=data[i]['lat'];
                    var lng=data[i]['lng'];
                    latlngs[i] = {lat,lng};
                    aaa(i);
                }
               
                $(".ningBox").show();
            }else{
                alert('输入信息有误');
            }
      }
      // success: function(data){
      //   $(".ningBox").show();
      //   data=$.parseJSON(data);
      //   latlngs = [];
      //   for(var i=0;i<data.length;i++){
      //           var lat=data[i]['lat'];
      //           var lng=data[i]['lng'];
      //           latlngs[i] = {lat,lng};
      //           aaa(i);
      //       }
      // }
});
    /*latlngs = [
        [45.51, -122.68],
        [37.77, -122.43],
        [34.04, -118.2],
        [38.04, -108.2]
    ];
    for(var i=0;i<latlngs.length;i++){
        aaa(i);
    }*/
})

// zoom the map to the polyline






