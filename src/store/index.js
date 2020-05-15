import Vue from "vue";
import Vuex from "vuex";
import participants from "./modules/participants";
import projects from "./modules/projects";
import login from "./modules/login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    participants,
    projects,
    login
  }
});
