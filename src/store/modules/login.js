import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

const { REG_USERS, USER_LOGINNED, LOGGED_EMAILS } = mutations;

const getUser = ({ data }) => {
  const regUsers = data;
  return regUsers;
};

const getEmails = ({ data }) => {
  const userMailsWithPass = data;
  return userMailsWithPass;
};

const login = {
  namespaced: true,
  state: {
    regUsers: null,
    userMailsWithPass: null,
  },
  getters: {
    regUsers: ({ regUsers }) => regUsers,
    userMailsWithPass: ({ userMailsWithPass }) => userMailsWithPass,
  },
  mutations: {
    [REG_USERS](state, value) {
      state.regUsers = value;
    },
    [USER_LOGINNED](state, value) {
      state.userMailsWithPass = value;
    },
  },
  actions: {
    // async getLoggedUsers(context) {
    //   try {
    //     const response = await axios.get("/userLogined");
    //     const userResponse = loggedUsersToState(response);
    //     context.commit(LOGGED_EMAILS, userResponse);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async saveUser(context, payload) {
      try {
        context.commit(REG_USERS, payload);
        const newUser = getUser(payload);
        const res = await axios.post("/participants", payload);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    async addLoginedUsers(context, payload) {
      try {
        context.commit(USER_LOGINNED, payload);
        const newUser = getUser(payload);
        const res = await axios.post("/userLogined", payload);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default login;
