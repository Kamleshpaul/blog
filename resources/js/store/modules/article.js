let state = {
    articles: []
},
    getters = {

    },

    mutations = {
        SET: (state, payload) => {
            state.articles = payload;
        },
        STORE: (state, paylod) => {
            state.articles.push(paylod);

        }
    },
    actions = {
        set: ({ commit }, page = 1) => {
            axios.get(`/api/articles?page=${page}`).then(({ data }) => {
                commit("SET", data.data);
            });
        },
        store: ({ commit }, payload) => {
            axios.post("/api/articles", payload)
                .then(({ data }) => {
                    if (data.message === "success") {
                        Toast.fire({
                            type: "success",
                            title: "Article Created"
                        });
                    }
                    commit("STORE", data.data);
                });
        }
    }

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};
