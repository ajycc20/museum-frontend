<template>
  <div class="app-container">
    <el-form ref="form" :model="antique" label-width="120px">

      <el-form-item label="Antique ID">
        <el-col :span="11">
          <el-input v-model="antique.antiqueId" disabled />
        </el-col>
      </el-form-item>

      <el-form-item label="Seq NO.">
        <el-col :span="11">
          <el-input v-model="antique.seqNo" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物名称">
        <el-col :span="11">
          <el-input v-model="antique.antiqueName" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物种类">
        <el-col :span="11">
          <el-input v-model="antique.antiqueType" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物朝代">
        <el-col :span="11">
          <el-input v-model="antique.antiqueType" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物地域">
        <el-col :span="11">
          <el-input v-model="antique.antiqueArea" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物材质">
        <el-col :span="11">
          <el-input v-model="antique.antiqueTexture" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物用途">
        <el-col :span="11">
          <el-input v-model="antique.antiqueUsage" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物完整度">
        <el-col :span="11">
          <el-input v-model="antique.antiqueCompletion" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物长度">
        <el-col :span="11">
          <el-input v-model="antique.antiqueLength" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物宽度">
        <el-col :span="11">
          <el-input v-model="antique.antiqueWidth" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物高度">
        <el-col :span="11">
          <el-input v-model="antique.antiqueHeight" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物重量">
        <el-col :span="11">
          <el-input v-model="antique.antiqueWeight" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物数量">
        <el-col :span="11">
          <el-input v-model="antique.antiqueCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="博物馆ID">
        <el-col :span="11">
          <el-input v-model="antique.museumId" />
        </el-col>
      </el-form-item>

      <el-form-item label="作者ID">
        <el-col :span="11">
          <el-input v-model="antique.authorId" />
        </el-col>
      </el-form-item>

      <el-form-item label="按赞数">
        <el-col :span="11">
          <el-input v-model="antique.antiqueLikeCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏数">
        <el-col :span="11">
          <el-input v-model="antique.antiqueFavouriteCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏数">
        <el-col :span="11">
          <el-input v-model="antique.antiqueFavouriteCount" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏部门">
        <el-col :span="11">
          <el-input v-model="antique.antiqueCollectionDepartment" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物来源">
        <el-col :span="11">
          <el-input v-model="antique.antiqueSource" />
        </el-col>
      </el-form-item>

      <el-form-item label="收藏日期">
        <el-col :span="11">
          <el-input v-model="antique.antiqueCollectionDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="注册数目">
        <el-col :span="11">
          <el-input v-model="antique.antiqueRegistrationNum" />
        </el-col>
      </el-form-item>

      <el-form-item label="认证日期">
        <el-col :span="11">
          <el-input v-model="antique.antiqueIdentificationDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物等级">
        <el-col :span="11">
          <el-input v-model="antique.antiqueLevel" />
        </el-col>
      </el-form-item>

      <el-form-item label="文物等级">
        <el-col :span="11">
          <el-input v-model="antique.antiqueLevel" />
        </el-col>
      </el-form-item>

      <el-form-item label="鉴定人">
        <el-col :span="11">
          <el-input v-model="antique.antiqueAppraiser" />
        </el-col>
      </el-form-item>

      <el-form-item label="保护等级">
        <el-col :span="11">
          <el-input v-model="antique.antiqueProtectionLevel" />
        </el-col>
      </el-form-item>

      <el-form-item label="创建日期">
        <el-col :span="11">
          <el-input v-model="antique.createDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="创建者">
        <el-col :span="11">
          <el-input v-model="antique.createDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="更新者">
        <el-col :span="11">
          <el-input v-model="antique.updater" />
        </el-col>
      </el-form-item>

      <el-form-item label="更新日期">
        <el-col :span="11">
          <el-input v-model="antique.updateDate" />
        </el-col>
      </el-form-item>

      <el-form-item label="删除标识">
        <el-col :span="11">
          <el-input v-model="antique.delFlag" />
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { uuid } from '@/utils'

export default {
  data() {
    return {
      antique: {
        antiqueId: uuid(),
        seqNo: '',
        antiqueName: '',
        antiqueType: '',
        antiqueDynasty: '',
        antiqueArea: '',
        antiqueTexture: '',
        antiqueUsage: '',
        antiqueCompletion: '',
        antiqueLength: '',
        antiqueWidth: '',
        antiqueHeight: '',
        antiqueWeight: '',
        antiqueCount: '',
        museumId: '',
        authorId: '',
        antiqueLikeCount: '',
        antiqueFavouriteCount: '',
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
        delFlag: 0
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

