<template>
  <div class="main-index">
    <main-header />

    <div class="carousel">
      <el-carousel :height="height" :interval="interval">
        <el-carousel-item v-for="item in list" :key="item.id" class="carousel-img">
          <img style="width: 100%; height: 100%" :src="item.url" :fit="item.fit">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div>

      <div class="featured-antique-img">
        <img src="@/assets/index/featured-antique.png">
      </div>

      <div class="view-all">
        <a href="#" @click.prevent="">查看全部</a>
      </div>

      <div class="featured-antique">

        <div class="antiques">
          <a href="#" class="antique" @click.prevent="">
            <img src="@/assets/index/feature-1.png">
          </a>
        </div>

        <div class="antiques">
          <a href="#" class="antique" @click.prevent="">
            <img src="@/assets/index/feature-2.png">
          </a>
        </div>

        <div class="antiques">
          <a href="#" class="antique" @click.prevent="">
            <img src="@/assets/index/feature-3.png">
          </a>
        </div>

      </div>

      <div class="featured-antique-img">
        <img src="@/assets/index/museum.png">
      </div>

      <div class="view-all">
        <a href="#" @click.prevent="">查看全部</a>
      </div>

      <div class="featured-museum">

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask8.png">
            <span>中国国家博物馆</span>
          </a>
        </div>

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask6.png">
            <span>秦始皇帝陵博物馆</span>
          </a>
        </div>

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask4.png">
            <span>中国丝绸博物馆</span>
          </a>
        </div>

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask2.png">
            <span>故宫博物院</span>
          </a>
        </div>

      </div>

      <div class="featured-museum">

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask7.png">
            <span>陕西省历史博物馆</span>
          </a>
        </div>

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask5.png">
            <span>苏州博物馆</span>
          </a>
        </div>

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask3.png">
            <span>台北故宫博物馆</span>
          </a>
        </div>

        <div class="museums">
          <a href="#" class="museum">
            <img src="@/assets/index/Mask1.png">
            <span>台北故宫博物馆</span>
          </a>
        </div>

      </div>

      <div class="under">

        <div class="featured-antique-img">
          <img src="@/assets/index/featured-theme.png">
        </div>

        <div class="view-all">
          <a href="#" @click.prevent="">查看全部</a>
        </div>

        <div class="featured-theme">

          <div class="themes">
            <a href="#" class="theme">
              <img src="@/assets/index/bronze.png">
            </a>
          </div>

          <div class="themes">
            <a href="#" class="theme">
              <img src="@/assets/index/architecture.png">
            </a>
          </div>

          <div class="themes">
            <a href="#" class="theme">
              <img src="@/assets/index/ceramic.png">
            </a>
          </div>

          <div class="themes">
            <a href="#" class="theme">
              <img src="@/assets/index/painting.png">
            </a>
          </div>

        </div>

      </div>

    </div>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
import { getAntique, getMuseumList } from '@/api/index'
export default {
  components: {
    MainHeader,
    MainFooter
  },
  data() {
    return {
      list: [
        {
          id: 'pic1',
          fit: 'fill',
          url: require('@/assets/index/1.png')
        },
        {
          id: 'pic2',
          fit: 'fill',
          url: require('@/assets/index/2.png')
        },
        {
          id: 'pic3',
          fit: 'fill',
          url: require('@/assets/index/3.png')
        },
        {
          id: 'pic4',
          fit: 'fill',
          url: require('@/assets/index/4.png')
        },
        {
          id: 'pic5',
          fit: 'fill',
          url: require('@/assets/index/5.png')
        }
      ],
      // 轮播图高度及自动切换的时间间隔
      height: '28.5em',
      interval: 5000,
      // 屏幕宽度
      screenWidth: ''
    }
  },
  computed: {
    insetMuseum() {
      return '$@/inset-museum/index.html'
    }
  },
  watch: {
    // 监听浏览器窗口宽度
    screenWidth(val) {
      const x = val / 2.8 / 16
      this.height = x + 'em'
    }
  },
  created() {
    this.fetchAntique()
    this.fetchMuseum()
  },
  mounted() {
    window.onload = () => {
      return (() => {
        window.screenWidth = window.innerWidth
        this.screenWidth = window.screenWidth
      })()
    }
    window.onresize = () => {
      return (() => {
        window.screenWidth = window.innerWidth
        this.screenWidth = window.screenWidth
      })()
    }
  },
  methods: {
    /**
     * @description 请求精选文物列表
     * @returns
     */
    fetchAntique() {
      getAntique().then(res => {
        console.log(res.data, '精选文物列表')
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * @description 请求博物馆列表
     * @returns
     */
    fetchMuseum() {
      getMuseumList().then(res => {
        console.log(res.data, '博物馆列表')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel { // 轮播图
  margin-top: 10px;
  &-img {
    border-radius: 10px;
  }
}

.featured-antique-img { // 精选文物 博物馆 精选主题
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.view-all {
  position: absolute;
  margin-top: -15px;
  width: 100%;
}
.view-all a {
  text-decoration: none;
  float: right;
  padding-right: 18.7%;
  color: black;
  &:hover {
    color: #2752c7;
  }
}
.featured-antique {
  margin-top: 1%;
  width: 65%;
  margin-left: 16.3%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.antiques {
  margin-left: 3.5%;
}
.antique {
  height: 16.3em;
  overflow: hidden;
}
.antique img {
  width: 100%;
  height: auto;
}
.featured-museum {
  margin-top: 15px;
  width: 70%;
  margin-left: 14.2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.museums {
  margin-left: 2.4%;
}
.museum {
  overflow: hidden;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.museum img {
  width: 100%;
  height: auto;
}
.museum span{
  display: inline-block;
}
.under {
  margin-bottom: 5%;
}
.featured-theme {
  width: 65%;
  margin-left: 16.5%;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.themes{
  margin-left: 3%;
}
.theme {
  margin-top: 15px;
  overflow: hidden;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.theme img {
  width: 100%;
  height: auto;
}
</style>
