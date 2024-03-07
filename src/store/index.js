import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户鉴权token
    token: null,
    // 用户信息
    userInfo: [],
    // 暗黑模式
    isDarkMode: false
    // userInfo: [
    //   {
    //     'uid': '',
    //     'nickname': '',
    //     'username': '',
    //     'avatar': '',
    //     'gender': '',
    //     'role': '',
    //     'email': '',
    //     'phone': '',
    //     'token': null
    //   }
    // ]
  },
  getters: {
    isLoggedIn: state => state.token !== null
  },
  mutations: {
    // 设置token
    setToken (state, token) {
      state.token = token
    },
    // 清除token
    removeToken (state) {
      state.token = null
    },
    // 设置用户信息
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    // 清除用户信息
    removeUserInfo (state) {
      state.userInfo = []
    },
    // 切换暗黑模式
    toggleDarkMode (state) {
      state.isDarkMode = !state.isDarkMode
    }
  },
  actions: {
    // 设置token
    setToken ({ commit }, token) {
      commit('setToken', token)
      localStorage.setItem('user_token', token)
    },
    // 清除token
    removeToken ({ commit }) {
      commit('removeToken')
      localStorage.removeItem('user_token')
    },
    // 设置用户信息
    setUserInfo ({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
      localStorage.setItem('user_info', userInfo)
    },
    // 清除用户信息
    removeUserInfo ({ commit }) {
      commit('removeUserInfo')
      localStorage.removeItem('user_info')
    },
    // 设置暗黑模式
    toggleDarkMode ({ commit }) {
      commit('toggleDarkMode')
    }
  },
  modules: {
  }
})

export default store
