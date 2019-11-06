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
    },
    AUTH_DESTROY: (state) => {
      state.LogInUser = null;
      state.token = null;
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
          router.push({ name: 'dashboard' });

        } else {
          Toast.fire({
            type: "error",
            title: "User Not Found."
          });
        }
      });
    },

    USER_LOGOUT: async ({ commit }) => {
      axios.get('api/logout').then((res) => {
        if (res.data.message === 'success') {
          localStorage.removeItem('passport');
          commit('AUTH_DESTROY');
          router.push({ name: 'admin_login' });
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