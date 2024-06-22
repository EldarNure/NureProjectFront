const state = {
    userId: "",
    userName: "",
    userLastName: ""
  };
  
  const getters = {
    userId: (state) => state.userId,
    userName: (state) => state.userName,
  };
  
  const actions = {
    setUserShortInfo({ commit }, info) {
        commit('SET_ID', info.sub);
        commit('SET_NAME', info.name);
        commit('SET_LAST_NAME', info.last_name);
    },
    setUserId({ commit }, id) {
        commit('SET_ID', id);
    },
    setUserName({ commit }, name) {
        commit('SET_NAME', name);
    },
    setUserLastName({ commit }, lastName) {
        commit('SET_USER', lastName);
    },
    clearUser({ commit }) {
      commit('CLEAR_USER');
    },
  };
  
  const mutations = {
    SET_ID(state, id) {
        state.userId = id;
    },
    SET_NAME(state, name) {
        state.userName = name;
    },
    SET_LAST_NAME(state, lastName) {
        state.userLastName = lastName;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  