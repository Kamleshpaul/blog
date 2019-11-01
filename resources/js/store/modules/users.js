let state = {
  users: null,
},


  getters = {

  },


  mutations = {
    SET_USER: (state, payload) => {
      state.users = payload
    },
    ADD_USER: (state, payload) => {
      state.users.push(payload)
    },
  },


  actions = {
    GET_USER: async ({commit}) => {
      const response = await axios.get('api/user');
      commit('SET_USER', response.data);
    }
  }


export default {
  state,
  getters,
  mutations,
  actions
}