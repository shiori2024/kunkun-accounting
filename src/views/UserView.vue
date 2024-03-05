<template>
    <div class="user">
        <h1>用户中心</h1>
    </div>
</template>

<script>
export default {
  name: 'UserView',
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

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
}
</style>
