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
    var dt = new Date();
    var time = dt.getHours();
    console.log(time);

    if(time > 6 && time < 19){
      commit('setDayTheme','day');
    }else{
      commit('setDayTheme','night');
    }

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
