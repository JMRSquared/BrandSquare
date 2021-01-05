import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInSocialNetworks: [],
    isLoggedIn: false,
    allPosts: new Array<Post>()
  },
  mutations: {
    updatePost(state, doc) {
      state.allPosts = doc;
    }
  },
  actions: {

  }
});
Vue.prototype.$store = store;
export default store;
