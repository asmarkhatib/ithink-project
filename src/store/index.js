import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userData: [],
    };
  },
  mutations: {
    getUser(state, payload) {
      state.userData.push(payload);
    },
  },

  actions: {
    userInfo(context, payload) {
      const data = {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        sum: payload.sum,
      };
      context.commit("getUser", data);
    },
  },

  getters: {
    showUser(state) {
        return state.userData;
      },
  }
});

export default store