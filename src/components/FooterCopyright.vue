<template>
    <div class="container">
        <span>
            <a :href="repoUrl" target="_blank">
                <slot name="repo">源代码</slot>
            </a>
            &nbsp;&copy;{{ nowTime }}&nbsp;
            <a :href="link" target="_blank">
                <slot name="author">shiori2024</slot>
            </a>
        </span>
    </div>
</template>

<script>
export default {
  name: 'FooterCopyright',
  props: {
    repoUrl: {
      type: String,
      default: 'https://github.com/shiori2024/vue-todo-list'
    },
    link: {
      type: String,
      default: 'https://github.com/shiori2024'
    }
  },
  data () {
    return {
      nowTime: ''
    }
  },
  created () {
    this.getTime()
  },
  methods: {
    getTime () {
      // 获取当前年份
      this.nowTime = new Date().getFullYear()
      if (this.nowTime > 2024) {
        this.nowTime = '2024 - ' + this.nowTime
      } else {
        this.nowTime = '2024'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
    background-color: #eee;
    padding: 20px;
    box-shadow: 0 0 10px #ccc;
    margin: 0 auto;
    width: 100%;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    color: #42b983;

    &:hover {
        border-bottom: 2px solid #42b983;
    }
}
</style>
