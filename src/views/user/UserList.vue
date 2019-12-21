<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="users"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" width="300" label="ID">
        <template slot-scope="scope">{{ scope.row.userId }}</template>
      </el-table-column>

      <el-table-column label="用户名" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.userName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="邮箱" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="创建时间" width="150">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="更新时间" width="150">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.updateDate }}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建者" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.creator }}</span>
        </template>
      </el-table-column>

      <el-table-column label="更新者" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.updater }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <span>
            <a><i class="el-icon-delete" @click="deleteUser(scope.row)" /></a>
            &nbsp;&nbsp;
            <el-switch
              v-model="scope.row.userStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="toggleStatus(scope.row)"
            />
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
      users: null,
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
    deleteUser(row) {
      console.log(row.userId)
      request
        .get('/api/user/delete', {
          params: {
            'user-id': row.userId
          }
        })
        .then(response => {
          this.$router.go(0)
        })
    },
    toggleStatus(row) {
      console.log(row.userStatus)
      request
        .get('/api/user/toggle-status', {
          params: {
            'user-id': row.userId
          }
        })
        .then(response => {
          console.log(response)
        })
    },
    fetchData() {
      this.listLoading = true
      request
        .get('/api/user/list', {
          params: {
            offset: this.offset
          }
        })
        .then(response => {
          this.users = response.data.users
          this.listLoading = false
        })
    },
    previous() {
      if (this.offset !== 0) {
        this.offset--
        request
          .get('/api/user/list', {
            params: {
              offset: this.offset
            }
          })
          .then(response => {
            this.users = response.data.users
            this.listLoading = false
          })
      }
    },
    next() {
      if (this.users !== undefined) {
        this.offset++
        request
          .get('/api/user/list', {
            params: {
              offset: this.offset
            }
          })
          .then(response => {
            this.users = response.data.users
            this.listLoading = false
          })
      }
    }
  }
}
</script>
