export const state = () => ({
  token: null,
  dayTheme:null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  setDayTheme(state,val){
    state.dayTheme = val
  }
}

export const actions = {
  nuxtServerInit({commit}){
    //first init of vuex
    // console.log('nuxtServerInit');

  },
  login({commit}){
    commit('setToken','trueToken');
  },
  logout({commit}){
    commit('clearToken');
  },
}

export const getters = {
  hasToken: s => !!s.token,
  getTheme: s => s.dayTheme

}
