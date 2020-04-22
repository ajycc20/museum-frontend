<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col :span="6" :xs="24">
          <user-card :user="user" />
          <el-card style="margin: 0 0 20px 0;">
            <div slot="header" class="clearfix">
              <span>Skill</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="18" :xs="24">
          <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
              <el-card style="margin: 0 0 20px 0;">
                <el-row :gutter="0">
                  <el-col :span="8">
                    <div class="icon-people">
                      <svg-icon icon-class="peoples" />
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="countto">
                      <count-to :start-val="0" :end-val="1220" :duration="2600" class="card-panel-num" />
                    </div>
                    <div class="card-panel-text">
                      新访客
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
              <el-card style="margin: 0 0 20px 0;">
                <el-row :gutter="0">
                  <el-col :span="8">
                    <div class="icon-message">
                      <svg-icon icon-class="message" />
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="countto">
                      <count-to :start-val="0" :end-val="1990" :duration="2600" class="card-panel-num" />
                    </div>
                    <div class="card-panel-text">
                      消息数
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
              <el-card style="margin: 0 0 20px 0;">
                <el-row :gutter="0">
                  <el-col :span="8">
                    <div class="icon-user">
                      <svg-icon icon-class="user" />
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="countto">
                      <count-to :start-val="0" :end-val="385" :duration="2600" class="card-panel-num" />
                    </div>
                    <div class="card-panel-text">
                      用户数
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
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
import CountTo from 'vue-count-to'

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
  components: { UserCard, Activity, Timeline, Account, CountTo },
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
<style lang="scss" scoped>

.icon-people, .icon-message, .icon-user {
  text-align: center;
  padding: 8px 0 0 0;
}

.icon-people {
  color: #40c9c6;
}

.icon-message {
  color: #36a3f7;
}

.icon-user {
  color: #f4516c;
}

.countto, .card-panel-text {
  text-align: center;
  line-height: 18px;
  margin: 4px 16px 4px 0;
}
</style>
