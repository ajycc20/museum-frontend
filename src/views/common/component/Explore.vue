<template>
  <div class="exp-container">
    <main-header />

    <div class="main-container">
      <el-row>
        <el-col :span="20">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix card-header">
              <el-carousel>
                <el-carousel-item v-for="(item, index) in picList" :key="index">
                  <el-image :src="item.imgSrc" :fit="fit" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="card-text">
              <h2>法门寺</h2>
              <p>法门寺（Famen Temple），又名“真身宝塔”，位于炎帝故里、青铜器之乡——宝鸡市，2004年被联合国教科文组织评为“世界第九大奇迹”，全国重点文物保护单位。据传始建于东汉明帝十一年（公元68年），约有1700多年历史，素有“关中塔庙始祖”之称，周魏以前称作“阿育王寺”，隋文帝时改称“成实道场”，唐高祖时改名“法门寺”。法门寺被誉为皇家寺庙，因安置释迦牟尼佛指骨舍利而成为举国仰望的佛教圣地。法门寺佛塔被誉为“护国真身宝塔”。寺庙所在的法门寺文化景区为国家AAAAA级旅游景区。</p>
              <p>法门寺地宫是迄今所见最大的塔下地宫。宝鸡法门寺地宫其出土了释迦牟尼佛指骨舍利、铜浮屠、八重宝函、银花双轮十二环锡杖等佛教至高宝物，法门寺珍宝馆拥有出土于法门寺地宫的两千多件大唐国宝重器，为世界寺庙之最。</p>
              <p>2014年10月16日，第27届世界佛教徒联谊会在宝鸡法门寺举行。2018中国西北旅游营销大会暨旅游装备展上，入围“神奇西北100景”榜单。</p>
              <hr>

              <h2>门票</h2>
              <p>门票实行一票制，旺季120元（每年3月1日至11月30日）、淡季90元（每年12月1日至次年2月29日），可参观法门寺院、法门寺博物馆、合十舍利塔等景区内的全部景点，凡持学生证均可享受半价优惠。</p>
              <hr>

              <h2>交通</h2>
              <h3>宝鸡——法门寺景区线路：</h3>
              <h4>高速：</h4>
              <ol>
                <li> 乘坐宝鸡长途汽车站到扶风汽车站的高速班车，始发早6：20，末班18：40，每15分钟一班次，90分钟路程，票价22元/票。</li>
                <li>在扶风汽车站转乘前往法门寺景区的车，班车或拼坐面包车，票价3元，10分钟路程。</li>
              </ol>
              <h4>低速：</h4>
              <p>乘坐宝鸡长途汽车站到法门寺院班车，始发早7：30，末班16：30，每1小时一班次，走关中环线，150分钟路程，票价19元/票。</p>
              <h3>西安-法门寺景区线路：<sub>（以下线路均走高速，路程2小时）</sub></h3>
              <ol>
                <li>盛唐之旅</li>
                <ul>
                  <li>发车地点：大唐芙蓉园西门</li>
                  <li>发车时间：8:00 -- 11:00</li>
                  <li>经停地点：大雁塔北广场东侧停车场</li>
                  <li>返程时间：14:30 -- 16:00</li>
                </ul>
                <li>公交车线路</li>
                <ul>
                  <li>游2（西安火车站——法门寺）（每日3班次）</li>
                  <li>发车地点：西安火车站东广场</li>
                  <li>发车时间：7:00 -- 10:00</li>
                  <li>返程时间：13:00 -- 16:00</li>
                </ul>
                <li>城西客运站线路</li>
                <ul>
                  <li><strong>西安城西客运站——法门寺院</strong></li>
                  <li>发车时间：</li>
                  <li>第一班：8:45 -- 9:00</li>
                  <li>第二班：11:00 -- 11:30</li>
                  <li>第三班：16:00 -- 16:20</li>
                  <li><strong>法门寺——西安城西客运站</strong></li>
                  <li>发车时间：</li>
                  <li>第一班：5:25</li>
                  <li>第二班：13:00</li>
                </ul>
              </ol>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <main-footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data() {
    return {
      fit: 'contain',
      picList: [
        {
          imgSrc: 'https://i.loli.net/2020/05/24/QyclUrjAuNIm2iV.jpg'
        },
        {
          imgSrc: 'https://i.loli.net/2020/05/24/Yzk3tW6ZNAGmPrp.jpg'
        },
        {
          imgSrc: 'https://i.loli.net/2020/05/24/2tm36GYLgAUTaS7.jpg'
        },
        {
          imgSrc: 'https://i.loli.net/2020/05/24/eEJbli9XZKQa6An.jpg'
        }
      ]
    }
  },
  created() {
    this.setPageTitle()
  },
  methods: {
    setPageTitle() {
      const title = 'Explore'
      document.title = `${title} - ${this.$route.params.key}`
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  height: calc(100vh - 241px);
}

.box-card {
  margin-top: 12px;
  margin-bottom: 12px;
  font-family: 楷体;
  font-weight: 500;

  .card-header {
    text-align: center;
  }

}

.card-text {
  p {
    text-indent: 2em;
  }

  hr {
    width: 80%;
    height: 1px;
    border: none;
    border-top: 1px solid #ddd;
    margin: 25px auto;
  }

  ol ul {
    list-style: none;
    font-size: 14px;
    padding-left: 16px;
  }
}
</style>
