<template>
  <div>
    <index-nav />
    <div class="container">

      <el-row>
        <div id="baidu-map">fff
        </div>
      </el-row>
      <div class="title"><h1>附近的博物馆</h1></div>
      <div class="museum">
        <el-row gutter="0" type="flex" justify="center">
          <el-col :span="10">
            <a href="#" class="img-museum"><img src="@/assets/index/Mask1.png" class="famensi"></a>
          </el-col>
          <el-col :span="14">
            <div class="museum-text">
              <div class="museum-title">
                <h3 style="display: inline;font-weight: lighter">法门寺</h3>
                <div class="distance" style="display: inline;margin-left: 1rem;font-size: 12px;">1.4km</div>
                <el-button size="mini" class="visit">参观</el-button>
              </div>

              <div class="museum-intro">法门寺（Famen Temple），又名“真身宝塔”，位于炎帝故里、青铜器之乡——宝鸡市，全国重点文物保护单位 [1]
                。据传始建于东汉明帝十一年（公元68年），约有1700多年历史，素有“关中塔庙始祖”之称，周魏以前称作“阿育王寺”，隋文帝时改称“成实道场”，唐高祖时改名“法门寺”。法门寺被誉为皇家寺庙，因安置释迦牟尼佛指骨舍利而成为举国仰望的佛教圣地。法门寺佛塔被誉为“护国真身宝塔”。寺庙所在的法门寺文化景区为国家AAAAA级旅游景区。
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="museum">
        <el-row gutter="0" type="flex" justify="center">
          <el-col :span="10">
            <a href="#" class="img-museum"><img src="@/assets/index/Mask1.png" class="famensi"></a>
          </el-col>
          <el-col :span="14">
            <div class="museum-text">
              <div class="museum-title">
                <h3 style="display: inline;font-weight: lighter">法门寺</h3>
                <div class="distance" style="display: inline;margin-left: 1rem;font-size: 12px;">1.4km</div>
                <el-button size="mini" class="visit">参观</el-button>
              </div>

              <div class="museum-intro">法门寺（Famen Temple），又名“真身宝塔”，位于炎帝故里、青铜器之乡——宝鸡市，全国重点文物保护单位 [1]
                。据传始建于东汉明帝十一年（公元68年），约有1700多年历史，素有“关中塔庙始祖”之称，周魏以前称作“阿育王寺”，隋文帝时改称“成实道场”，唐高祖时改名“法门寺”。法门寺被誉为皇家寺庙，因安置释迦牟尼佛指骨舍利而成为举国仰望的佛教圣地。法门寺佛塔被誉为“护国真身宝塔”。寺庙所在的法门寺文化景区为国家AAAAA级旅游景区。
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>
    <index-footer />
  </div>

</template>

<script type="javascript">
import NavMenu from '@/components/ShowNav'
import Footer from '@/components/ShowFooter'

export default {
  components: {
    'index-nav': NavMenu,
    'index-footer': Footer
  },
  data() {

  },
  mounted() {
    var map = new window.BMap.Map('baidu-map')
    // 创建地图实例
    var point = new window.BMap.Point(108.8836, 34.1536)
    // 创建点坐标
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom(true)

    // var marker = new window.Bmap.Marker(point);
    // map.addOverlay(marker);
    //
    // function addMarker(point, index){  // 创建图标对象
    //     var myIcon = new window.BMap.Icon("@/assets/index/Mask1.png", new window.BMap.Size(23, 25), {
    //         // 指定定位位置。
    //         // 当标注显示在地图上时，其所指向的地理位置距离图标左上
    //         // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
    //         // 图标中央下端的尖角位置。
    //         anchor: new window.BMap.Size(10, 25),
    //         // 设置图片偏移。
    //         // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
    //         // 需要指定大图的偏移位置，此做法与css sprites技术类似。
    //         imageOffset: new window.BMap.Size(0, 0 - index * 25)   // 设置图片偏移
    //     });
    //     // 创建标注对象并添加到地图
    //     var marker = new window.BMap.Marker(point, {icon: myIcon});
    //     map.addOverlay(marker);
    // }
    // var bounds = map.getBounds();
    // var lngSpan = bounds.maxX - bounds.minX;
    // var latSpan = bounds.maxY - bounds.minY;
    // for (var i = 0; i < 10; i ++) {
    //     var point1 = new window.BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),
    //         bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));
    //     addMarker(point1, i);
    // }
    // var geolocation = new window.BMap.Geolocation();
    // geolocation.getCurrentPosition(function(r){
    //     if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //         var mk = new window.BMap.Marker(r.point);
    //         map.addOverlay(mk);
    //         map.panTo(r.point);
    //         alert('您的位置：'+r.point.lng+','+r.point.lat);
    //     }
    //     else {
    //         alert('failed'+this.getStatus());
    //     }
    // });
  }
}

</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    div {
        display: block;
    }

    .container {
        justify-content: center;
        align-items: center;
    }

    el-row {
        margin-bottom: 20px;

        /* &:last-child {
            margin-bottom: 0;
        } */
    }

    el-col {
        border-radius: 4px;
    }

    #baidu-map {
        height: 682px;
        width: 66%;
        background-color: beige;
        margin: 30px auto;
        border-radius: 30px;
    }

    .title {
        font-family: "华文楷体";
        width: 1167px;
        margin: 1em auto;
        text-align: center;
        letter-spacing: 0.5rem;
    }

    .museum {
        color: #ffffff;
        margin: 1rem auto;
        width: 66%;
        height: 200px;
    }

    .img-museum {
        width: 100%;
        height: auto;
    }
    .famensi{
        width: 100%;
        height: auto;
        max-height: 200px;
        border-radius: 0;
}
    .museum-text {
        padding: 1rem;
        background-color: #772a10;
        height: 168px;
        overflow: auto;
    }
    .museum-title{
        margin: 1rem 0;
        display: inline-block;
        width: 100%;
    }
    .el-button,.el-button:hover,.el-button:active,.el-button:focus{
        background:none;
        color: #ffffff;
        border-color:  #ffffff;
    }
    .visit{
        color: #ffffff;
        float: right;
        }
.museum-intro{
    font-family: "微软雅黑 Light";
    font-weight: lighter;
    font-size: 14px;

}
</style>
