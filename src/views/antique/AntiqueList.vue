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
      <el-table-column align="center" label="序列号">
        <template #default="{ row }">{{ row.seqNo }}</template>
      </el-table-column>

      <el-table-column align="center" label="文物名称">
        <template #default="{ row }">{{ row.antiqueName }}</template>
      </el-table-column>

      <el-table-column align="center" label="文物种类">
        <template #default="{ row }">{{ row.antiqueType }}</template>
      </el-table-column>

      <el-table-column align="center" label="博物馆ID">
        <template #default="{ row }">{{ row.museumId }}</template>
      </el-table-column>

      <el-table-column align="center" label="作者ID">
        <template #default="{ row }">{{ row.authorId }}</template>
      </el-table-column>

      <el-table-column align="center" width="180" label="创建时间">
        <template #default="{ row }">{{ row.createDate | formatLocalTime(row.createDate) }}</template>
      </el-table-column>

      <el-table-column align="center" width="180" label="创建者">
        <template #default="{ row }">{{ row.creator }}</template>
      </el-table-column>

      <el-table-column align="center" width="180" label="更新时间">
        <template #default="{ row }">{{ row.updateDate | formatLocalTime(row.updateDate) }}</template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="200">
        <template #default="{ row }">
          <el-button type="primary" icon="el-icon-edit" @click="editAntique(row.antiqueId)" />
          <el-button type="primary" icon="el-icon-delete" @click="deleteAntiqueFunc(row.antiqueId)" />
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.offset" :limit.sync="listQuery.rows" @pagination="fetchAntiqueList" />

  </div>
</template>

<script>
import { getAntiqueList, deleteAntique } from '@/api/antique'
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
      tableData: null,
      listLoading: true,
      switchIsActive: true,
      total: 0,
      listQuery: {
        offset: 1,
        rows: 20
      },
      deleteQuery: { // 删除用户时传递的参数
        currentUserId: undefined,
        antiqueId: undefined
      }
    }
  },
  created() {
    this.fetchAntiqueList()
  },
  methods: {
    fetchAntiqueList() {
      this.listLoading = true
      this.tableData = []
      getAntiqueList(this.listQuery).then(res => {
        this.tableData = res.data
        this.total = res.total
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    editAntique(id) {
      // console.log(row)
      this.$router.push('/relic/edit-relic/' + id)
    },
    deleteAntiqueFunc(id) {
      this.deleteQuery = {
        currentUserId: getUserId(),
        antiqueId: id
      }
      deleteAntique(this.deleteQuery).then(res => {
        if (res.code === 200) {
          this.$notify({
            title: '成功',
            message: '该文物已删除',
            type: 'success',
            duration: 2000
          })
          this.fetchAntiqueList()
        }
      })
    }
  }
}
</script>
