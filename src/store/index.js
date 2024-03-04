import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户鉴权token
    token: null,
    // 用户信息
    userInfo: []
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
  },
  mutations: {
    // 设置token
    setToken (state, token) {
      state.token = token
    },
    // 清除token
    removeToken (state) {
      state.token = null
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
    }
  },
  modules: {
  }
})

export default store
