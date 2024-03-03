<template>
  <div>
    <FormComponent :btnChange="login" v-model.trim="username" btnText="登录" vertical="column" idName="username"
      label="用户名：">
      <template #input>
        <label for="pwd">密码：</label>
        <input id="pwd" type="password" v-model.trim="password" placeholder="请输入密码">
      </template>
    </FormComponent>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
export default {
  data () {
    return {
      username: 'admin',
      password: 'admin',
      info: []
    }
  },
  components: { FormComponent },
  created () {
    this.info = JSON.parse(localStorage.getItem('LoginInfo'))
    this.username = this.info.username
    this.password = this.info.password
  },
  methods: {
    async login () {
      if (!this.username || !this.password) {
        return alert('用户名和密码不能为空')
      } else {
        this.saveLoginInfo()
        console.log('数据已保存到本地', this.info)
      }
      this.username = ''
      this.password = ''
    },
    saveLoginInfo () {
      this.info = JSON.stringify({
        username: this.username,
        password: this.password,
        token: 'test'
      })
      localStorage.setItem('LoginInfo', this.info)
    }
  }
}
</script>
