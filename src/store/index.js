import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    },
    CLEAR_USER(state) {
      state.user = null
      state.isAuthenticated = false
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/api/auth/login', credentials)
        commit('SET_USER', response.data.user)
        localStorage.setItem('authToken', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      } catch (error) {
        throw error.response.data.message || '登录失败'
      }
    },
    async logout({ commit }) {
      try {
        await axios.post('/api/auth/logout')
      } finally {
        commit('CLEAR_USER')
        localStorage.removeItem('authToken')
        delete axios.defaults.headers.common['Authorization']
      }
    },
    checkAuth({ commit }) {
      // 检查本地是否有token来恢复登录状态
      const token = localStorage.getItem('authToken')
      if (token) {
        commit('SET_USER', {
          username: '已登录用户',
          token: token
        })
      }
    }
  },
  getters: {
    currentUser: state => state.user,
    isAuthenticated: state => state.isAuthenticated
  }
})