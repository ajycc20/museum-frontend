<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="newsList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >

      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.newsId }}
        </template>
      </el-table-column>

      <el-table-column label="标题" width="150">
        <template slot-scope="scope">
          {{ scope.row.newsTitle }}
        </template>
      </el-table-column>

      <el-table-column label="内容">
        <template slot-scope="scope">
          {{ scope.row.newsText }}
        </template>
      </el-table-column>

      <el-table-column label="作者" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.creator }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <span>
            <i class="el-icon-delete" @click="deleteNews(scope.row)" />
            &nbsp;&nbsp;
            <i class="el-icon-edit" @click="editNews(scope.row)" />
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
// import { getList } from '@/api/table'
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
      newsList: null,
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
    deleteNews(row) {
      console.log('DELETE ' + row.newsId)
    },
    editNews(row) {
      console.log('EDIT ' + row.newsId)
    },
    fetchData() {
      this.listLoading = true
      request
        .get('/api/news/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.newsList = response.data.newsList
          this.listLoading = false
        })
    },
    previous() {
      if (this.offset !== 0) {
        this.offset--
      }
      request
      request
        .get('/api/news/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.newsList = response.data.newsList
          this.listLoading = false
        })
    },
    next() {
      this.offset++
      request
        .get('/api/news/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.newsList = response.data.newsList
          this.listLoading = false
        })
    }
  }
}
</script>
