import router from "../../router";

let state = {
        LogInUser: null,
        token: null,
        message: null
    },
    getters = {},
    mutations = {
        SET_USER: (state, payload) => {
            state.users = payload;
        },
        ADD_USER: (state, payload) => {
            state.users.push(payload);
        },
        AUTH_USER: (state, { token, user }) => {
            state.LogInUser = user;
            state.token = token;
        },
        AUTH_DESTROY: state => {
            state.LogInUser = null;
            state.token = null;
        },
        SET_AUTH_USER: (state, user) => {
            state.LogInUser = user;
            state.token = localStorage.getItem(`passport`);
        }
    },
    actions = {
        setAuth_user: ({ commit }) => {
            axios
                .get("/api/auth-user")
                .then(({ data }) => {
                    commit("SET_AUTH_USER", data.data);
                })
                .catch(e => localStorage.removeItem(`passport`));
        },
        getUser: async ({ commit }) => {
            const response = await axios.get("api/user");
            commit("SET_USER", response.data);
        },
        userLogin: async ({ commit }, { email, password }) => {
            await axios
                .post("/api/login", {
                    email,
                    password
                })
                .then(({ data }) => {
                    axios
                        .post("/oauth/token", {
                            grant_type: "password",
                            client_id: data.client_id,
                            client_secret: data.client_secret,
                            username: data.email,
                            password: data.password,
                            scope: "*"
                        })
                        .then(response => {
                            console.log(data.user);
                            if (response.data != "" && response.data != null) {
                                state.message = response.message;
                                const token = response.data.access_token;
                                const user = data.user;
                                const payload = {
                                    token: token,
                                    user: user
                                };
                                localStorage.setItem("passport", token);
                                Toast.fire({
                                    type: "success",
                                    title: `${user.name} Logged In`
                                });
                                commit("AUTH_USER", payload);
                                router.push({ name: "dashboard" });
                            } else {
                                Toast.fire({
                                    type: "error",
                                    title: "User Not Found."
                                });
                            }
                        });
                })
                .catch(e => {
                    Toast.fire({
                        type: "error",
                        title: e.response.data.message
                    });
                });
        },

        userLogout: async ({ commit }) => {
            axios.get("/api/logout").then(res => {
                localStorage.removeItem("passport");
                if (res.data.message === "success") {
                    commit("AUTH_DESTROY");
                    router.push({ name: "admin_login" });
                }
            });
        }
    };

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};
