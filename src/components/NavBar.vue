<template>
  <div class="nav" :class="{ 'dark-theme': isDarkMode }">
    <div class="left">
      <slot name="logo">
        <a href="/">鲲鲲记账</a>
      </slot>
    </div>
    <div class="main">
      <router-link to="/home">首页</router-link>
      <router-link to="/user">用户</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <div class="right">
      <router-link to="/login">登录</router-link>
      <button class="btn" type="button" @click="toggleDarkMode">{{ isDarkMode ? '浅色' : '暗黑' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isDarkMode () {
      return this.$store.state.isDarkMode
    }
  },
  methods: {
    toggleDarkMode () {
      this.$store.dispatch('toggleDarkMode')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: $bg-color-theme-light;
  margin: 0 0 20px auto;
  width: 100vw;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .left {
    color: $color-theme-light;
    font-weight: bold;
    letter-spacing: 2px;
  }
}

.layout-fixed {
  position: fixed;
  top: 0px;
  left: 0px;
}

.btn {
  flex: 1;
  width: 42px;
  height: 28px;
  margin-left: 20px;
  border: 1px solid $bg-color-btn-light;
  color: $color-theme-light;
  transition: background-color 0.3s ease, color 0.3s ease;
}

// 暗黑模式样式
.dark-theme {
  background-color: $bg-color-theme-nav-dark;
  color: $color-theme-dark;

  a {
    color: $color-theme-dark;

    &.router-link-exact-active {
      background-color: $color-link-active;
      color: darken($bg-color-link-active, 10%);
    }
  }

  .left {
    color: $color-theme-dark;
  }

  .right .btn {
    color: $bg-color-btn-dark;
    background: $bg-color-btn-light;
    border: none;
  }
}

// 定义动画
// 如果有更好看的过渡效果，欢迎提PR ^^
// @keyframes fadeInOutDark {
//   0% {
//     background-color: $bg-color-btn-dark;
//     color: $color-theme-dark;
//   }

//   50% {
//     background-color: darken($bg-color-btn-dark, 10%);
//     color: lighten($color-theme-dark, 10%);
//   }

//   100% {
//     background-color: $bg-color-btn-dark;
//     color: $color-theme-dark;
//   }
// }

a {
  text-decoration: none;
  font-weight: bold;
  color: $color-theme-light;
  padding: 5px;

  &.router-link-exact-active {
    background: $bg-color-link-active;
    color: $color-link-active;
  }
}
</style>
