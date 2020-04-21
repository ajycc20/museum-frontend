<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      fit
      stripe
      highlight-current-row
    >
      <el-table-column align="center" type="selection" />

      <el-table-column align="center" label="ID" width="auto">
        <template #default="{ row }">{{ row.userId }}</template>
      </el-table-column>

      <el-table-column label="用户名" align="center">
        <template #default="{ row }">
          <span>{{ row.userName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="邮箱" align="center">
        <template #default="{ row }">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="创建时间" width="180">
        <template #default="{ row }">
          <i class="el-icon-time" />
          <span>{{ row.createDate | formatLocalTime(row.createDate) }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="更新时间" width="180">
        <template #default="{ row }">
          <i class="el-icon-time" />
          <span>{{ row.updateDate | formatLocalTime(row.updateDate) }}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建者" align="center">
        <template #default="{ row }">
          <span>{{ row.creator }}</span>
        </template>
      </el-table-column>

      <el-table-column label="更新者" align="center">
        <template #default="{ row }">
          <span>{{ row.updater }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <span>
            <a><i class="el-icon-delete" @click="deleteUser(row)" /></a>
            &nbsp;&nbsp;
            <el-switch
              v-model="row.userStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="toggleStatus(row)"
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
import { parseTime } from '@/utils'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        online: 'success',
        offline: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    formatLocalTime(time) {
      return parseTime(time)
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
      total: 0,
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
        this.total = res.total
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
