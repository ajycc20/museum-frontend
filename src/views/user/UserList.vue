<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
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

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.offset" :limit.sync="listQuery.rows" @pagination="fetchUserList" />

  </div>
</template>

<script>
import { getUserList } from '@/api/user'
import Pagination from '@/components/Pagination'

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
  components: {
    Pagination
  },
  data() {
    return {
      tableData: null, // 用户列表
      listLoading: true,
      switchIsActive: true,
      total: 100,
      listQuery: {
        offset: 0,
        rows: 20
      }
    }
  },
  created() {
    this.fetchUserList()
  },
  methods: {
    fetchUserList() {
      this.listLoading = true
      this.tableData = []
      getUserList(this.listQuery).then(res => {
        // console.log(res.data)
        this.tableData = res.data
        // this.total = res.data.length
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
