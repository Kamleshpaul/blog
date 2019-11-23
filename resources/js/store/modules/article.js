let state = {
        articles: {},
        articlesCount: null,
        todayPostCount: null
    },
    getters = {},
    mutations = {
        SET: (state, payload) => {
            state.articles = payload;
        },
        STORE: (state, paylod) => {
            state.articles.data.push(paylod);
        },
        UPDATE: (state, payload) => {
            const item = state.articles.data.find(
                item => item.id === payload.id
            );
            Object.assign(item, payload);
        },
        DESTROY: (state, payload) => {
            state.articles.data.forEach((element, index) => {
                if (element.id === payload) {
                    state.articles.data.splice(index, 1);
                }
            });
        },
        SET_COUNT: (state, payload) => {
            state.articlesCount = payload;
        },
        SET_TODAY_POSTED_COUNT: (state, payload) => {
            state.todayPostCount = payload;
        }
    },
    actions = {
        set: async ({ commit }, page = 1) => {
            await axios.get(`/api/articles?page=${page}`).then(({ data }) => {
                commit("SET", data.data);
            });
        },
        store: ({ commit }, payload) => {
            axios.post("/api/articles", payload).then(({ data }) => {
                if (data.message === "success") {
                    Toast.fire({
                        type: "success",
                        title: "Article Created"
                    });
                }
                commit("STORE", data.data);
            });
        },
        update: ({ commit }, payload) => {
            axios
                .put(`/api/articles/${payload.id}`, payload)
                .then(({ data }) => {
                    if (data.message != "") {
                        Toast.fire({
                            type: "success",
                            title: "Article Update"
                        });
                        commit("UPDATE", data.data);
                    }
                });
        },
        destroy: ({ commit }, id) => {
            axios.delete(`/api/articles/${id}`).then(({ data }) => {
                if (data.message != "") {
                    Toast.fire({
                        type: "success",
                        title: "Article Deleted"
                    });

                    commit("DESTROY", id);
                }
            });
        },
        getCount: ({ commit }) => {
            axios.get("/api/articles-count").then(res => {
                commit("SET_COUNT", res.data);
            });
        },
        getTodayPostCount: ({ commit }) => {
            axios.get("/api/today-posting").then(res => {
                commit("SET_TODAY_POSTED_COUNT", res.data);
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
