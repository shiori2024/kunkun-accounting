<template>
  <div class="about">
    <h1>鲲鲲记账</h1>
    <p>一款基于 vue-cli 的 vue2 + echarts 的个人记账清单项目</p>
    <img src="https://gd-hbimg.huaban.com/263d6ec05ebfe8dd914d49fede4d7fa0098602a1140022-WmX7V0_fw658" alt="GIF" width="300px" height="200px">
    <p>本项目采用前后端分离的架构</p>
    <p>前端项目地址：<a href="https://github.com/shiori2024/kunkun-accounting">{{ frontText }}</a></p>
    <p>后端项目地址：<a href="https://github.com/shiori2024/kunkun-accounting/tree/main/server">{{ backText }}</a></p>
    <FooterCopyright :repoUrl="repoUrl"></FooterCopyright>
  </div>
</template>

<script>
import FooterCopyright from '@/components/FooterCopyright.vue'

export default {
  name: 'AboutView',
  components: { FooterCopyright },
  data () {
    return {
      frontText: 'kunkun-accounting-client',
      backText: 'kunkun-accounting-server',
      frontUrl: '',
      backUrl: '',
      repoUrl: 'https://github.com/shiori2024/kunkun-accounting'
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

.about {
  height: calc(100vh - 100px);
}
</style>
