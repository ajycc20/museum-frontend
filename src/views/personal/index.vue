<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Activity" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="Timeline" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="Account" name="account">
                <account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'
import { getUserDetails } from '@/api/user'
import { getUserId } from '@/utils/auth'

const defaultForm = {
  userId: undefined,
  userName: '',
  email: '',
  password: '',
  role: '',
  museumId: '',
  creator: '',
  createDate: '',
  updateDate: '',
  updater: '',
  avatar: ''
}

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account },
  data() {
    return {
      user: Object.assign({}, defaultForm),
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      getUserDetails({ 'userId': getUserId() }).then(res => {
        this.user = {
          userId: res.data.userId,
          userName: res.data.userName,
          email: res.data.email,
          password: res.data.password,
          role: res.data.role,
          museumId: res.data.museumId,
          creator: res.data.creator,
          createDate: res.data.createDate,
          avatar: this.avatar
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
