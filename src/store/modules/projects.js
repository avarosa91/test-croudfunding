import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

const { PROJECTS } = mutations;

const projectsToState = ({ data }) => {
  const project = data;
  return project;
};

const projects = {
  namespaced: true,
  state: {
    projects: {},
  },
  getters: {
    projects: ({ projects }) => projects,
  },
  mutations: {
    [PROJECTS](state, value) {
      state.projects = value;
    },
  },
  actions: {
    async fetchProjects(context) {
      try {
        const response = await axios.get("/projects");
        const projectsResponse = projectsToState(response);
        console.log(response);
        context.commit(PROJECTS, projectsResponse);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default projects;
