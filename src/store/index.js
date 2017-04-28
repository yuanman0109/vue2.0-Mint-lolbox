import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
    slideout:false
  },
  mutations:{
    setSlide(state,isShow){
      state.slideout=isShow;
    }
  },
  strict: debug
})