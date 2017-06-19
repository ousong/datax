function GetCountryData(obj){
    $.ajax({
            url: "../Api/GetCountryDataFromContinent",
            type: 'POST',
            dataType: 'json',
            data:{continent:obj},
            success: function(data){
                var data=$.parseJSON(data);

                if(data.list!=''&&data.list!=null){
                    var html='';
                    $.each(data.list,function(key,v){
                        html+='<div class="maskli_listli clearfix">';
                        html+='<div class="continentPart">'+v.continent_full+'(<span>'+v.count+'</span>)</div>';
                        html+='<div class="continentState clearfix">';
                        html+='<div class="partition">|</div>';
                        html+='<div class="countries">';
                        $.each(v.data,function(k,va){
                            html+="<span class='country' jsondata="+va.jsondata+" onclick=\"changshang("+va.lng+","+va.lat+")\">"+va.name_chs+'</span>';
                        })
                        html+='</div>';
                        html+='</div>';
                        html+='</div>';
                    });
                    // alert(html);
                    $("#diqu").html(html);
                    $("#Continent1").html(data.Continent);
                    $(".maskli").css("display","block");
                }else{
                    $("#diqu").html("");
                    $("#Continent1").html(data.Continent);
                    $(".maskli").css("display","block");
                }
            }
    });
}
//左侧菜单栏交互
$(function(){
  var flage=true;
  $("#index_nav>li").on("click",function(){
    var index=$(this).index();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(this).find(".line").addClass("active1");
    $(this).siblings().find(".line").removeClass("active1");
    if(index!=1){
      $(".sevenContinents").slideUp(500);
      $(".sevenContinents li").removeClass("active2");
    }
  });
  $(".index_nav_list").eq(0).on("click",function(){
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    $(this).next(".line").addClass("active1");
    $(this).parent().siblings().find(".line").removeClass("active1");
    if(flage){
      flage=!flage;
      $(".sevenContinents").slideDown(500);
    }else {
      flage=!flage;
      $(".sevenContinents").slideUp(500);
      $(".sevenContinents li").removeClass("active2");
      $(".mask").css("display","none");
    }
  })
  $(".sevenContinents li").on("click",function(){
    $(this).addClass("active2");
    $(this).siblings().removeClass("active2");
    $(".mask").css("display","block");
    $(".maskli").css("display","none");
    $(".maskli").eq(0).css("display","block");
    $(".maskli").eq(0).addClass("anima");
  })
})
//左侧菜单栏交互end

var style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 0, 0, 1)'
  }),
  stroke: new ol.style.Stroke({
    color: '#f00',
    width: 1,
  }),
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: '#000'
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',
      width: 3
    })
  })
});
/*香港*/
var vectorLayer1 = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: '../../../../Public/Home/libs/json/HongKong.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 0, 0, 0.4)'
    }),
    stroke: new ol.style.Stroke({
      color: '#f00',
      width: 1
    })
  })
});
/*中国*/
var vectorLayer2 = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: '../../../../Public/Home/libs/json/CHN.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(55, 76, 108, 0.5)',
    }),
    stroke: new ol.style.Stroke({
      color: '#374c6c',
      width: 1
    })
  })
});
/*巴基斯坦*/
var vectorLayer3 = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: '../../../../Public/Home/libs/json/PAK.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, 0.4)'

    }),
    stroke: new ol.style.Stroke({
      color: '#0f0',
      width: 1
    })
  })
});

/*土耳其*/
var vectorLayer4 = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: '../../../../Public/Home/libs/json/TUR.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(0, 255, 0, 0.4)'
    }),
    stroke: new ol.style.Stroke({
      color: '#0f0',
      width: 1
    })
  })
});

/*阿富汗*/
var vectorLayer5 = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: '../../../../Public/Home/libs/json/AFG.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 0, 255, 0.4)'
    }),
    stroke: new ol.style.Stroke({
      color: '#f0f',
      width: 1
    })
  })
});

var istanbul = ol.proj.fromLonLat([75.896897,36.666806]);
// var bern = ol.proj.fromLonLat([114.279275,22.33755]);
var view = new ol.View({
  center: istanbul,
  zoom: 4
});

//一个弹性放松方法.
function elastic(t) {
  return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}

function onClick(id, callback) {
  document.getElementById(id).addEventListener('click', callback);
}

function flyTo(location, done) {
  // console.log(11);
  var duration = 2000;
  var zoom = view.getZoom();
  var parts = 2;
  var called = false;

  function callback(complete) {
    --parts;
    if(called) {
      return;
    }
    if(parts === 0 || !complete) {
      called = true;
      done(complete);
    }
  }
  view.animate({
    center: location,
    duration: duration
  }, callback);
  view.animate({
    zoom: zoom - 1,
    duration: duration / 2
  }, {
    zoom: 5,
    duration: duration / 2
  }, callback);
}

function newflyTo(location, done) {
  var duration = 2000;
  var zoom = view.getZoom();
  var parts = 2;
  var called = false;

  function callback(complete) {
    --parts;
    if(called) {
      return;
    }
    if(parts === 0 || !complete) {
      called = true;
      done(complete);
    }
  }
  view.animate({
    center: location,
    duration: duration
  }, callback);
  view.animate({
    zoom: zoom - 1,
    duration: duration / 2
  }, {
    zoom: 10,
    duration: duration / 2
  }, callback);
}

function new1flyTo(location, done) {
  var duration = 2000;
  var zoom = view.getZoom();
  var parts = 2;
  var called = false;

  function callback(complete) {
    --parts;
    if(called) {
      return;
    }
    if(parts === 0 || !complete) {
      called = true;
      done(complete);
    }
  }
  view.animate({
    center: location,
    duration: duration
  }, callback);
  view.animate({
    zoom: zoom - 1,
    duration: duration / 2
  }, {
    zoom: 3.5,
    duration: duration / 2
  }, callback);
}
function changshang(lng,lat){
  // alert(lng);
  // alert(lat);
  var name=this.innerHTML;
  document.getElementById("mask").style.display="none";
  if(lng==114.10949&&lat==22.39642){
    newflyTo(ol.proj.fromLonLat([lng,lat]), function() {});
  }else if(lng==104.195395&&lat==35.861665){
    new1flyTo(ol.proj.fromLonLat([lng,lat]), function() {});
  }else{
    flyTo(ol.proj.fromLonLat([lng,lat]), function() {});
  }
}
// onClick('.country', function() {
//   // console.log(22);
//   alert(1);
//   var name=this.innerHTML;
//   document.getElementById("mask").style.display="none";
//   // //别的国家
//   flyTo(ol.proj.fromLonLat([114.279275,22.33755]), function() {});
//   //香港
//   // newflyTo(ol.proj.fromLonLat([114.279275,22.33755]), function() {});
// });
function onClick(c, callback) {
  var s=document.querySelectorAll(c);

  for (var i= 0;i<s.length;i++){

    s[i].addEventListener('click', callback);
  }
}

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({
        url: 'http://192.168.1.175:9999/styles/osm-bright/rendered/{z}/{x}/{y}.png'
      })
    }),
    vectorLayer1,
    vectorLayer2,
    vectorLayer3,
    vectorLayer4,
    vectorLayer5,
  ],
  target: 'mapId',
  view: view
});
