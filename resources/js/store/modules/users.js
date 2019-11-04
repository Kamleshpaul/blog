import router from "../../router";

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
    AUTH_USER: (state, { token, user }) => {
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
        const response = res.data;
        if (response.data != '' && response.data != null) {
          state.message = response.message;
          const token = response.data.access_token;
          const user = response.data.user
          const payload = {
            'token': token,
            'user': user
            
          }
          localStorage.setItem('passport', token);
          Toast.fire({
            type: "success",
            title: `${user.name} Logged In`
          });
          commit('AUTH_USER', payload);
        } else {
          Toast.fire({
            type: "error",
            title: "User Not Found."
          });
          router.push({ name: 'admin_users' });
        }
      });
    }
  }


export default {
  state,
  getters,
  mutations,
  actions
}