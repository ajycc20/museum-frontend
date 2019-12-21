<template>
  <div class="main-search">
    <main-header />

    <div class="dropdown-select">
      <div class="condition">
        <div>
          <img class="wing-size arrow-left" src="@/assets/search/slogen.png">
        </div>
        <div>
          <span class="title">选择朝代</span>
        </div>
        <div>
          <img class="wing-size arrow-right" src="@/assets/search/slogen.png">
        </div>
      </div>

      <div class="select">
        <el-select
          v-model="value1"
          class="select-width"
          placeholder="请选择朝代"
          @change="change()"
        >
          <el-option
            v-for="item1 in optionsDynasty"
            :key="item1.value"
            :label="item1.label"
            :value="item1.value"
          />
        </el-select>
      </div>
    </div>

    <div class="dropdown-select">

      <div class="condition">
        <div>
          <img class="wing-size arrow-left" src="@/assets/search/slogen.png">
        </div>
        <div>
          <span class="title">选择时期</span>
        </div>
        <div>
          <img class="wing-size arrow-right" src="@/assets/search/slogen.png">
        </div>
      </div>

      <div class="select">
        <el-select
          v-model="value2"
          class="select-width"
          placeholder="请选择时期"
          @change="change()"
        >
          <el-option
            v-for="item2 in optionsPeriod"
            :key="item2.value"
            :label="item2.label"
            :value="item2.value"
          />
        </el-select>
      </div>
    </div>

    <div class="dropdown-select">
      <div class="condition">
        <div>
          <img class="wing-size arrow-left" src="@/assets/search/slogen.png">
        </div>
        <div>
          <span class="title">选择地域</span>
        </div>
        <div>
          <img class="wing-size arrow-right" src="@/assets/search/slogen.png">
        </div>
      </div>
      <div class="select">
        <el-select
          v-model="value3"
          class="select-width"
          placeholder="请选择地域"
          @change="change()"
        >
          <el-option
            v-for="item in optionsArea"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>

    <div class="dropdown-select">
      <div class="condition">
        <div>
          <img class="wing-size arrow-left" src="@/assets/search/slogen.png">
        </div>
        <div>
          <span class="title">选择材质</span>
        </div>
        <div>
          <img class="wing-size arrow-right" src="@/assets/search/slogen.png">
        </div>
      </div>
      <div class="select">
        <el-select
          v-model="value4"
          class="select-width"
          placeholder="请选择材质"
          @change="change()"
        >
          <el-option
            v-for="item in optionsMaterial"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>

    <div class="dropdown-select">
      <div class="condition">
        <div>
          <img class="wing-size arrow-left" src="@/assets/search/slogen.png">
        </div>
        <div>
          <span class="title">选择用途</span>
        </div>
        <div>
          <img class="wing-size arrow-right" src="@/assets/search/slogen.png">
        </div>
      </div>
      <div class="select">
        <el-select
          v-model="value5"
          class="select-width"
          placeholder="请选择用途"
          @change="change()"
        >
          <el-option
            v-for="item in optionsUsage"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>

    <div class="dropdown-select">
      <div class="condition">
        <div>
          <img class="wing-size arrow-left" src="@/assets/search/slogen.png">
        </div>
        <div>
          <span class="title">选择博物馆</span>
        </div>
        <div>
          <img class="wing-size arrow-right" src="@/assets/search/slogen.png">
        </div>
      </div>
      <div class="select">
        <el-select
          v-model="value6"
          class="select-width"
          placeholder="请选择博物馆"
          @change="change()"
        >
          <el-option
            v-for="item in optionsMuseum"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>

    <div class="search-div">
      <el-button
        type="primary"
        size="medium "
        class="search-button"
      >搜索</el-button>
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
      // 避免多个select选值混乱
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      value5: [],
      value6: [],
      optionsDynasty: [
        {
          value: 'tang',
          label: '唐代'
        },
        {
          value: 'song',
          label: '宋代'
        },
        {
          value: 'yuan',
          label: '元代'
        },
        {
          value: 'ming',
          label: '明代'
        },
        {
          value: 'qing',
          label: '清代'
        }
      ],
      optionsPeriod: [
        {
          value: 'initial',
          label: '初期'
        },
        {
          value: 'middle',
          label: '中期'
        },
        {
          value: 'final',
          label: '末期'
        }
      ],
      optionsArea: [
        {
          value: 'zhongyuan',
          label: '中原'
        },
        {
          value: 'jiangnan',
          label: '江南'
        },
        {
          value: 'xiyu',
          label: '西域'
        },
        {
          value: 'lingnan',
          label: '岭南'
        },
        {
          value: 'saiwai',
          label: '塞外'
        },
        {
          value: 'hedong',
          label: '河东'
        },
        {
          value: 'hexi',
          label: '河西'
        },
        {
          value: 'liaodong',
          label: '辽东'
        }
      ],
      optionsMaterial: [
        {
          value: 'gold',
          label: '金器'
        },
        {
          value: 'silver',
          label: '银器'
        },
        {
          value: 'pottery',
          label: '陶器'
        },
        {
          value: 'porcelain',
          label: '瓷器'
        }
      ],
      optionsUsage: [
        {
          value: 'farmTools',
          label: '农具'
        },
        {
          value: 'weapon',
          label: '兵器'
        },
        {
          value: 'WineVessel',
          label: '酒器'
        },
        {
          value: 'meter',
          label: '计量器'
        }
      ],
      optionsMuseum: [
        {
          value: 'hanyangling',
          label: '汉阳陵博物馆'
        },
        {
          value: 'Shaanxihistory',
          label: '陕西历史博物馆'
        },
        {
          value: 'qinshihuangling',
          label: '秦始皇陵博物馆'
        },
        {
          value: 'famensi',
          label: '法门寺博物馆'
        }
      ]
    }
  },
  methods: {
    change() {
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &-search {
    height: 100%;
    position: relative;
  }
}

.condition {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2%;
  font-size: 1em;
}

.wing-size {
  height: 13px;
  width: 40px;
  display: inline-block;
}

.arrow {
  &-left {
    padding-top: 2px;
    float: left;
    margin-right: 5px;
  }

  &-right {
    transform: scaleX(-1);
    float: left;
    margin-top: 2px;
    margin-left: 5px;
  }
}

.title {
  line-height: 15px;
  float: left;
}

.select {
  text-align: center;
  margin-top: 1.5%;

  &-width {
    width: 50%;
  }
}

.search {
  &-div {
    margin-top: 2%;
    text-align: center;
    margin-bottom: 6%;
  }

  &-button {
    width: 15%;
    padding: 1% 3%;
  }
}
</style>
