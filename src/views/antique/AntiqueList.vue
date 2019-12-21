<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="antiques"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" width="150" label="序列号">
        <template slot-scope="scope">{{ scope.row.seqNo }}</template>
      </el-table-column>

      <el-table-column align="center" label="文物名称">
        <template slot-scope="scope">{{ scope.row.antiqueName }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="文物种类">
        <template slot-scope="scope">{{ scope.row.antiqueType }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="博物馆ID">
        <template slot-scope="scope">{{ scope.row.museumId }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="作者ID">
        <template slot-scope="scope">{{ scope.row.authorId }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="创建时间">
        <template slot-scope="scope">{{ scope.row.createDate }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="创建者">
        <template slot-scope="scope">{{ scope.row.creator }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="更新时间">
        <template slot-scope="scope">{{ scope.row.updateDate }}</template>
      </el-table-column>

      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <span>
            <i class="el-icon-delete" @click="deleteAntique(scope.row)" />
            &nbsp;&nbsp;
            <i class="el-icon-edit" @click="editAntique(scope.row)" />
          </span>
        </template>
      </el-table-column>
    </el-table>

    <br>

    <div style="text-align: right">
      <el-button @click="previous">上一页</el-button>
      <span style="font-size: 90%">第 {{ offset + 1 }} 页</span>
      <el-button @click="next">下一页</el-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        online: 'success',
        offline: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      antiques: null,
      list: null,
      listLoading: true,
      switchIsActive: true,
      offset: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    deleteAntique(row) {
      console.log('DELETE ' + row.antiqueId)
    },
    editAntique(row) {
      console.log('EDIT ' + row.antiqueId)
    },
    setStatus(row) {
      console.log(row.userStatus)
    },
    fetchData() {
      this.listLoading = true
      request
        .get('/api/antique/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.antiques = response.data.antiques
          this.listLoading = false
        })
    },
    previous() {
      if (this.offset !== 0) {
        this.offset--
      }
      request
        .get('/api/antique/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.antiques = response.data.antiques
          this.listLoading = false
        })
    },
    next() {
      this.offset++
      request
        .get('/api/antique/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.antiques = response.data.antiques
          this.listLoading = false
        })
    }
  }
}
</script>
