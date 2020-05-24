<template>
  <div class="main-explore">
    <main-header />

    <div class="explore-main-pic" style="width:auto">
      <a href="#">
        <img src="@/assets/explore/bg.jpg">
      </a>
    </div>

    <div class="explore-badge">

      <el-card class="box-card">
        分类浏览
      </el-card>

      <br><br>

      <el-row :gutter="12">

        <el-col v-for="(item, index) in classifyList" :key="index" class="classify-layout" :span="6">
          <router-link :to="{ name: 'Exp', params: { key: item.key }}">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + item.bgUrl + ')' }">
              {{ item.title }}
            </el-card>
          </router-link>
        </el-col>

      </el-row>

    </div>

    <br>

    <div class="explore-badge">

      <el-card class="box-card">
        热门主题
      </el-card>

      <br><br>

      <el-row :gutter="12">

        <el-col v-for="(item, index) in hotThemeList" :key="index" class="hotheme-layout" :span="6">
          <router-link :to="{ name: 'Exp', params: { key: item.key }}">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + item.bgUrl + ')' }">
              {{ item.title }}
            </el-card>
          </router-link>
        </el-col>

      </el-row>

    </div>

    <main-footer />

  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
import { getCategoryList, getThisWeekTheme, getPopularTopic } from '@/api/explore'

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data() {
    return {
      classifyList: [
        {
          key: 'artist',
          title: '艺术家',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'dynasty',
          title: '朝代',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'material',
          title: '材质',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'area',
          title: '地域',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'museum',
          title: '博物馆',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'usage',
          title: '用途',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'color',
          title: '颜色',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'tool',
          title: '工具',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        }
      ],
      hotThemeList: [
        {
          key: 'mural',
          title: '敦煌壁画',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'porcelain',
          title: '耀州窑瓷器',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'palaceMuseum',
          title: '故宫博物院',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'originalEmperor',
          title: '秦始皇陵',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'landscapePainting',
          title: '山水画',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'longmenGrottoes',
          title: '龙门石窟',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'wudaoji',
          title: '吴道子',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'wanshiji',
          title: '王羲之',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'famenTemple',
          title: '法门寺',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'luoshenfu',
          title: '洛神赋图',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'forbiddenCity',
          title: '紫禁城',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        },
        {
          key: 'changanPalace',
          title: '汉长安宫',
          bgUrl: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
        }
      ]
    }
  },
  created() {
    this.fetchCategoryList()
    this.fetchWeekTheme()
    this.fetchPopularTopic()
  },
  methods: {
    fetchCategoryList() {
      getCategoryList({ topicType: '' }).then(res => {
        console.log(res, '分类浏览')
      }).catch(err => {
        console.log(err)
      })
    },
    fetchWeekTheme() {
      getThisWeekTheme().then(res => {
        console.log(res, '本周主题')
      }).catch(err => {
        console.log(err)
      })
    },
    fetchPopularTopic() {
      getPopularTopic().then(res => {
        console.log(res, '热门主题')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-layout, .hotheme-layout {
  margin: 0 0 12px 0;
}

.explore-main-pic img {
  width: 100%;
  padding: 25px;
}

.explore-badge {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 400px;
}

.box-card {
  width: 100%;
  text-align: center;
}

.badge {
  display: -moz-box;
  display: -webkit-box;

  -moz-box-align: center;
  -webkit-box-align: center;

  -moz-box-pack: center;
  -webkit-box-pack: center;

  height: 150px;
}

a {
  text-decoration:none;
}
</style>
