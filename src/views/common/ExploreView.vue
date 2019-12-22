<template>
  <div class="main-explore">
    <main-header />

    <div class="explore-main-pic" style="width:auto">
      <a href="https://wanchiu.me">
        <img src="@/assets/explore/bg.jpg">
      </a>
    </div>

    <div class="explore-badge">

      <el-card class="box-card">
        分类浏览
      </el-card>

      <br><br>

      <el-row :gutter="12">

        <el-col :span="6">
          <router-link :to="url.artist">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.artist + ')' }">
              艺术家
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.dynasty">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.dynasty + ')' }">
              朝代
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.material">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.material + ')' }">
              材质
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.area">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.area + ')' }">
              地域
            </el-card>
          </router-link>
        </el-col>

      </el-row>

      <br>

      <el-row :gutter="12">

        <el-col :span="6">
          <router-link :to="url.museum">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.museum + ')' }">
              博物馆
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.usage">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.usage + ')' }">
              用途
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.color">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.color + ')' }">
              颜色
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.tool">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.tool + ')' }">
              工具
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

        <el-col :span="6">
          <router-link :to="url.mural">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.mural + ')' }">
              敦煌壁画
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.porcelain">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.porcelain + ')' }">
              耀州窑瓷器
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.palaceMuseum">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.palaceMuseum + ')' }">
              故宫博物院
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.originalEmperor">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.originalEmperor + ')' }">
              秦始皇陵
            </el-card>
          </router-link>
        </el-col>

      </el-row>

      <br>

      <el-row :gutter="12">

        <el-col :span="6">
          <router-link :to="url.landscapePainting">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.landscapePainting + ')' }">
              山水画
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.longmenGrottoes">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.longmenGrottoes + ')' }">
              龙门石窟
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.wudaoji">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.wudaoji + ')' }">
              吴道子
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.wanshiji">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.wanshiji + ')' }">
              王羲之
            </el-card>
          </router-link>
        </el-col>

      </el-row>

      <br>

      <el-row :gutter="12">

        <el-col :span="6">
          <router-link :to="url.famenTemple">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.famenTemple + ')' }">
              法门寺
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.luoshenfu">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.luoshenfu + ')' }">
              洛神赋图
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.forbiddenCity">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.forbiddenCity + ')' }">
              紫禁城
            </el-card>
          </router-link>
        </el-col>

        <el-col :span="6">
          <router-link :to="url.changanPalace">
            <el-card shadow="hover" class="badge" :style="{ backgroundImage: 'url(' + pic.changanPalace + ')' }">
              汉长安宫
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

export default {
  components: {
    MainHeader,
    MainFooter
  },
  data() {
    return {
      pic: {
        artist: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        dynasty: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        material: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        area: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        museum: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        usage: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        color: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        tool: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        mural: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        porcelain: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        palaceMuseum: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        originalEmperor: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        landscapePainting: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        longmenGrottoes: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        wudaoji: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        wanshiji: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        famenTemple: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        luoshenfu: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        forbiddenCity: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg',
        changanPalace: 'https://i.loli.net/2019/09/11/snPyomah6WIdpHf.jpg'
      },
      url: {
        artist: '/',
        dynasty: '/',
        material: '/',
        area: '/',
        museum: '/',
        usage: '/',
        color: '/',
        tool: '/',
        mural: '/',
        porcelain: '/',
        palaceMuseum: '/',
        originalEmperor: '/',
        landscapePainting: '/',
        longmenGrottoes: '/',
        wudaoji: '/',
        wanshiji: '/',
        famenTemple: '/',
        luoshenfu: '/',
        forbiddenCity: '/',
        changanPalace: '/'
      }
    }
  }
}
</script>

<style>
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
