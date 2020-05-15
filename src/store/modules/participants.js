import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

const { USERS } = mutations;

const usersToState = ({ data }) => {
  const user = data;
  return user;
};

const participants = {
  namespaced: true,
  state: {
    users: {}
  },
  getters: {
    users: ({ users }) => users
  },
  mutations: {
    [USERS](state, value) {
      state.users = value;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const response = await axios.get("/participants");
        const userResponse = usersToState(response);
        context.commit(USERS, userResponse);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default participants;
