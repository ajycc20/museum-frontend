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
      <el-table-column align="center" width="150" label="序列号">
        <template #default="{ row }">{{ row.seqNo }}</template>
      </el-table-column>

      <el-table-column align="center" label="文物名称">
        <template #default="{ row }">{{ row.antiqueName }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="文物种类">
        <template #default="{ row }">{{ row.antiqueType }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="博物馆ID">
        <template #default="{ row }">{{ row.museumId }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="作者ID">
        <template #default="{ row }">{{ row.authorId }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="创建时间">
        <template #default="{ row }">{{ row.createDate }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="创建者">
        <template #default="{ row }">{{ row.creator }}</template>
      </el-table-column>

      <el-table-column align="center" width="150" label="更新时间">
        <template #default="{ row }">{{ row.updateDate }}</template>
      </el-table-column>

      <el-table-column label="操作" width="150" align="center">
        <template #default="{ row }">
          <span>
            <i class="el-icon-delete" @click="deleteAntique(row)" />
            &nbsp;&nbsp;
            <i class="el-icon-edit" @click="editAntique(row)" />
          </span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.offset" :limit.sync="listQuery.rows" @pagination="fetchUserList" />

  </div>
</template>

<script>
import { getAntiqueList } from '@/api/antique'
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
