import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false
  },
  mutations: {
    load(state, value){
      state.loading = value
    },
  },
  getters: {
    isLoading: state => state.loading
  },
  actions: {
  },
  modules: {
  }
})
