<template>
  <div class="main">
    <h1>Hello World!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloView',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
}
</style>
