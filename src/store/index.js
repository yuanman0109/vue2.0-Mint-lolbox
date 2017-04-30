import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
    slideout:{
      isShow:false,
      type:'slide'
    }
  },
  mutations:{
    setSlide(state,obj){
      state.slideout.isShow=obj.isShow;
      state.slideout.type=obj.type;
    }
  },
  strict: debug
})