let state = {
        settings: null
    },
    getters = {},
    mutations = {
        SET_WEBSETTING: (state, payload) => {
            state.settings = payload;
        },
        STORE: (state, payload) => {
            state.settings = payload;
        }
    },
    actions = {
        setWebsetting: ({ commit }) => {
            axios
                .get("/api/websetting")
                .then(({ data }) => {
                    commit("SET_WEBSETTING", data);
                })
                .catch(err => console.log(err));
        },
        store: ({ commit }, data) => {
            axios
                .post("/api/websetting", data)
                .then(({ data }) => {
                    Toast.fire({
                        type: "success",
                        title: "Settings Updated."
                    });
                    commit("STORE", data);
                })
                .catch(err => console.log(err));
        }
    };

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};
