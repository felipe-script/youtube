import Vue from 'vue'
import Vuex from 'vuex'
import services from '@/services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    storedSearches: localStorage.storedSearches ? [...JSON.parse(localStorage.storedSearches)] : [],
  },
  getters: {
    getVideosItems: state => state.items,
  },
  mutations: {
    SET_VIDEOS_BY_SEARCH(state, items){
      state.items = items
    },
    SET_STORED_SEARCHES(state, search){
      state.storedSearches.unshift(search)
    }
  },
  actions: {
    async setVideosBySearch({commit, state}, search = ''){
      let items
      try {
        const {data} = await services.getVideosBySearch(search, 10)
        items = [...data.items]
      } catch (error) {
          console.log(error)
      }

      commit("SET_VIDEOS_BY_SEARCH", items)

      if (!state.storedSearches.includes(search)) {
        commit("SET_STORED_SEARCHES", search)
        localStorage.storedSearches = JSON.stringify([...state.storedSearches])
      }
    },
  },
  modules: {
  }
})
