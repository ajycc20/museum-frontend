<template>
  <div class="components-container">
    <!-- <aside>文章编辑页面，目前仅做测试使用。</aside> -->
    <el-form ref="form" :model="news" label-width="120px">
      <el-form-item label="ID">
        <el-col :span="11">
          <el-input v-model="news.newsId" disabled />
        </el-col>
      </el-form-item>

      <el-form-item label="标题">
        <el-col :span="11">
          <el-input v-model="news.newsTitle" />
        </el-col>
      </el-form-item>

      <el-form-item label="创建时间">
        <el-col :span="11">
          <el-date-picker
            v-model="news.createTime"
            type="datetime"
            placeholder="选择日期时间"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>

      <el-form-item label="作者">
        <el-col :span="11">
          <el-input v-model="news.creator" />
        </el-col>
      </el-form-item>
    </el-form>

    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="padding-blank">
      <el-button type="primary" plain size="medium" @click="submit">上传</el-button>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { uuid } from '@/utils'
export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content: `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`,
      news: {
        newsId: uuid(),
        newsTitle: '',
        newsTime: '',
        museumId: '',
        createTime: '',
        creator: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.content)
      alert('Submit!')
    }
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}

.padding-blank {
  float: right;
  padding-top: 15px;
}
</style>

