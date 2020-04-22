<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2019/11/3',
          title: '项目选题',
          content: ''
        },
        {
          timestamp: '2019/12/6',
          title: '第一次会议指导',
          content: ''
        },
        {
          timestamp: '2020/1/3',
          title: '开题报告',
          content: ''
        },
        {
          timestamp: '2020/2/24',
          title: '线上指导',
          content: '解决近期遇到的问题'
        },
        {
          timestamp: '2020/3/24',
          title: '线上指导',
          content: '近期工作总结'
        }
      ]
    }
  }
}
</script>
