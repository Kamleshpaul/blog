let state = {
  users: null,
  LogInUser: null,
  token: null,
  message: null,
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
    AUTH_USER: (state, token, user) => {
      state.LogInUser = user;
      state.token = token
    }
  },


  actions = {
    GET_USER: async ({ commit }) => {
      const response = await axios.get('api/user');
      commit('SET_USER', response.data);
    },
    USER_LOGIN: async ({ commit }, { email, password }) => {
      axios.post('api/login', {
        email,
        password
      }).then((res) => {
        state.message = res.message;
        const token = res.data.access_token;
        const user = res.data.user
        localStorage.setItem('token', token)
        commit('AUTH_USER', token, user)
      }).catch(err => console.log('action error'));
    }
  }


export default {
  state,
  getters,
  mutations,
  actions
}