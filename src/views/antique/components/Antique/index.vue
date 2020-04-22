<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">

      <!-- <el-form-item label="Antique ID">
        <el-col :span="11">
          <el-input v-model="form.antiqueId" />
        </el-col>
      </el-form-item>

      <el-form-item label="Seq NO.">
        <el-col :span="11">
          <el-input v-model="form.seqNo" />
        </el-col>
      </el-form-item> -->

      <el-form-item label="文物名称" prop="antiqueName">
        <el-col :span="11">
          <el-input v-model="form.antiqueName" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物种类" prop="antiqueType">
        <el-col :span="11">
          <el-input v-model="form.antiqueType" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物朝代" prop="antiqueDynasty">
        <el-col :span="11">
          <el-input v-model="form.antiqueDynasty" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物地域" prop="antiqueArea">
        <el-col :span="11">
          <el-input v-model="form.antiqueArea" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物材质">
        <el-col :span="11">
          <el-input v-model="form.antiqueTexture" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物用途">
        <el-col :span="11">
          <el-input v-model="form.antiqueUsage" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物完整度">
        <el-col :span="11">
          <el-input v-model="form.antiqueCompletion" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物长度">
        <el-col :span="11">
          <el-input v-model="form.antiqueLength" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物宽度">
        <el-col :span="11">
          <el-input v-model="form.antiqueWidth" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物高度">
        <el-col :span="11">
          <el-input v-model="form.antiqueHeight" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物重量">
        <el-col :span="11">
          <el-input v-model="form.antiqueWeight" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物数量">
        <el-col :span="11">
          <el-input v-model="form.antiqueCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="博物馆ID">
        <el-col :span="11">
          <el-input v-model="form.museumId" />
        </el-col>
      </el-form-item>

      <el-form-item label="作者ID">
        <el-col :span="11">
          <el-input v-model="form.authorId" />
        </el-col>
      </el-form-item>

      <el-form-item label="按赞数">
        <el-col :span="11">
          <el-input v-model="form.antiqueLikeCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏数">
        <el-col :span="11">
          <el-input v-model="form.antiqueFavouriteCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏部门">
        <el-col :span="11">
          <el-input v-model="form.antiqueCollectionDepartment" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物来源">
        <el-col :span="11">
          <el-input v-model="form.antiqueSource" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏日期">
        <el-col :span="11">
          <el-input v-model="form.antiqueCollectionDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="注册数目">
        <el-col :span="11">
          <el-input v-model="form.antiqueRegistrationNum" />
        </el-col>
      </el-form-item>

      <el-form-item label="认证日期">
        <el-col :span="11">
          <el-input v-model="form.antiqueIdentificationDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物等级">
        <el-col :span="11">
          <el-input v-model="form.antiqueLevel" />
        </el-col>
      </el-form-item>

      <el-form-item label="鉴定人">
        <el-col :span="11">
          <el-input v-model="form.antiqueAppraiser" />
        </el-col>
      </el-form-item>

      <el-form-item label="保护等级">
        <el-col :span="11">
          <el-input v-model="form.antiqueProtectionLevel" />
        </el-col>
      </el-form-item>

      <el-form-item label="删除标识">
        <el-col :span="11">
          <el-input v-model="form.delFlag" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物音频">
        <el-col :span="11">
          <el-input v-model="form.antiqueAudio" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物描述">
        <el-col :span="11">
          <el-input v-model="form.antiqueDesc" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物Img">
        <el-col :span="11">
          <el-input v-model="form.antiqueImg" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物模型">
        <el-col :span="11">
          <el-input v-model="form.antiqueModel" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物Pic">
        <el-col :span="11">
          <el-input v-model="form.antiquePic" />
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">创建</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { getAntiqueDetails, editAntique, addAntique } from '@/api/antique'
import { getUserId } from '@/utils/auth'

const defaultForm = {
  antiqueId: '',
  seqNo: '',
  antiqueName: '',
  antiqueType: '',
  antiqueDynasty: '',
  antiqueArea: '',
  antiqueTexture: '111',
  antiqueUsage: '1',
  antiqueCompletion: '2',
  antiqueLength: '100',
  antiqueWidth: '100',
  antiqueHeight: '100',
  antiqueWeight: '100',
  antiqueCount: '100',
  museumId: '111111',
  authorId: '111111',
  antiqueLikeCount: '100',
  antiqueFavouriteCount: '100',
  antiqueCollectionDepartment: '',
  antiqueSource: '',
  antiqueCollectionDate: '',
  antiqueRegistrationNum: '',
  antiqueIdentificationDate: '',
  antiqueLevel: '',
  antiqueAppraiser: '',
  antiqueProtectionLevel: '',
  createDate: '',
  creator: '',
  updateDate: '',
  updater: '',
  delFlag: '',
  antiqueAudio: '/audio/file.mp3',
  antiqueDesc: '这是文物描述',
  antiqueImg: '/img/file.png',
  antiqueModel: '/model/file.obj',
  antiquePic: '/pic/file.mtl'
}

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必填项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必填项'))
      } else {
        callback()
      }
    }

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        antiqueName: [{ validator: validateRequire }],
        antiqueType: [{ validator: validateRequire }],
        antiqueDynasty: [{ validator: validateRequire }],
        antiqueArea: [{ validator: validateRequire }]
      },
      tempRoute: {}
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.getDetails(id)
    } else {
      this.form = Object.assign({}, defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    getDetails(id) {
      getAntiqueDetails({ antiqueId: id }).then(res => {
        console.log(res)
        this.form = res.data
        this.setPageTitle()
      })
    },
    setPageTitle() {
      const title = 'Edit Antique'
      document.title = `${title} - ${this.form.userName}`
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.isEdit) {
            this.form = Object.assign(this.form, {
              updateDate: new Date().getTime(),
              updater: getUserId()
            })
            editAntique(getUserId(), this.form).then(res => {
              console.log(res)
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '文物信息已编辑',
                  type: 'success',
                  duration: 2000
                })
                this.$router.push('/relic/relic-list')
              } else {
                this.$notify({
                  title: 'Error',
                  type: 'error',
                  duration: 2000
                })
              }
            })
          } else {
            this.form = Object.assign(this.form, {
              createDate: new Date().getTime(),
              creator: getUserId()
            })
            console.log(this.form)
            addAntique(getUserId(), this.form).then(res => {
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '文物已创建',
                  type: 'success',
                  duration: 2000
                })
                this.$router.push('/relic/relic-list')
              } else {
                this.$notify({
                  title: 'Error',
                  type: 'error',
                  duration: 2000
                })
              }
            })
          }
        } else {
          console.log('err submit')
          return false
        }
      })
    },
    handleCancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

