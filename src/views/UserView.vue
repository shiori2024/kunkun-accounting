<template>
  <div class="user">
    <PictureBox :imgUrl="imgUrl" width="100" height="100" />
    <br>
    <div class="list" v-if="infoList.length > 0">
      <h3>欢迎ikun回家</h3>
      <ul v-for="(item, index) in infoList" :key="index">
        <li><span>用户名: {{ item.username }}</span></li>
        <li><span>昵称: {{ item.nickname }}</span></li>
        <li><span>角色: {{ item.role }}</span></li>
        <li><span>邮箱: {{ item.email }}</span></li>
        <li><span>手机号: {{ item.phone ? item.phone : '无' }}</span></li>
      </ul>
      <div class="tabs">
        <button @click="logout">退出登录</button>
      </div>
    </div>
    <div class="list" v-else>
      <h3>尊敬的ikun，您还没有登录</h3>
      <span class="tip">--- 没有用户信息！ ---</span>
    </div>
  </div>
</template>

<script>
import PictureBox from '@/components/PictureBox'
export default {
  name: 'UserView',
  data () {
    return {
      infoList: [],
      imgUrl: 'favicon.ico'
    }
  },
  components: { PictureBox },
  created () {
    // const userInfo = JSON.parse(localStorage.getItem('user_info'))
    // 模拟数据
    const userInfo = [
      {
        uid: 'ikun007',
        nickname: 'ikun114514',
        username: '114514',
        avatar: '',
        gender: '男',
        role: '管理员',
        email: '123456@123.com',
        phone: '',
        token: null
      }
    ]
    console.log(userInfo)
    this.infoList = userInfo.filter(item => {
      // 返回一个不包含password属性的新对象
      const { password, ...filteredItem } = item
      return filteredItem
    })
    console.log(this.infoList)
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;

  &:hover {
    color: #42b983;
  }
}

.user {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100vh - 56px);

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 5px;

    .tip {
      text-align: center;

    }
  }
}
</style>
