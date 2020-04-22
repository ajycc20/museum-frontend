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
      <!-- <el-table-column align="center" type="selection" /> -->

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

      <el-table-column label="操作" align="center" width="200">
        <template #default="{ row }">
          <el-button type="primary" icon="el-icon-edit" @click="editUser(row.userId)" />
          <el-button type="primary" icon="el-icon-delete" @click="deleteUserFunc(row.userId)" />
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.offset" :limit.sync="listQuery.rows" @pagination="fetchUserList" />

  </div>
</template>

<script>
import { getUserList, deleteUser } from '@/api/user'
import { getUserId } from '@/utils/auth'
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
      listQuery: { // 请求的用户列表数据集
        offset: 1,
        rows: 20
      },
      deleteQuery: { // 删除用户时传递的参数
        currentUserId: undefined,
        userId: undefined
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
        this.tableData = res.data
        this.total = res.total
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    editUser(id) {
      // console.log(row)
      this.$router.push('/user/edit-user/' + id)
    },
    deleteUserFunc(id) {
      // console.log(index, row)
      this.deleteQuery = {
        currentUserId: getUserId(),
        userId: id
      }
      deleteUser(this.deleteQuery).then(res => {
        if (res.code === 200) {
          this.$notify({
            title: '成功',
            message: '该用户已删除',
            type: 'success',
            duration: 2000
          })
          this.fetchUserList()
        }
      })
    }
  }
}
</script>
