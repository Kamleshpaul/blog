let state = {
        categories: {},
        categoriesCount: null
    },
    getters = {},
    mutations = {
        SET_CATEGORY: (state, payload) => {
            state.categories = payload.data;
        },
        STORE_CATEGORY: (state, payload) => {
            state.categories.data.push(payload);
        },
        UPDATE: (state, payload) => {
            const item = state.categories.data.find(
                item => item.id === payload.id
            );
            Object.assign(item, payload);
        },
        DESTROY: (state, payload) => {
            state.categories.data.forEach((element, index) => {
                if (element.id === payload) {
                    state.categories.data.splice(index, 1);
                }
            });
        },
        SET_COUNT: (state, payload) => {
            state.categoriesCount = payload;
        }
    },
    actions = {
        storeCategory: ({ commit }, name) => {
            axios
                .post("/api/categories", {
                    name
                })
                .then(({ data }) => {
                    if (data.message === "success") {
                        Toast.fire({
                            type: "success",
                            title: "Category Created"
                        });
                    }
                    commit("STORE_CATEGORY", data.data);
                });
        },
        setCategory: async ({ commit }, page = 1) => {
            await axios.get(`/api/categories?page=${page}`).then(({ data }) => {
                commit("SET_CATEGORY", data);
            });
        },
        update: ({ commit }, data) => {
            axios
                .put(`/api/categories/${data.id}`, { name: data.name })
                .then(({ data }) => {
                    if (data.message != "") {
                        Toast.fire({
                            type: "success",
                            title: "Category Update"
                        });
                        commit("UPDATE", data.data);
                    }
                });
        },
        destroy: ({ commit }, id) => {
            axios.delete(`/api/categories/${id}`).then(({ data }) => {
                if (data.message != "") {
                    Toast.fire({
                        type: "success",
                        title: "Category Deleted"
                    });

                    commit("DESTROY", id);
                }
            });
        },
        getCount: async ({ commit }) => {
            await axios.get("/api/categories-count").then(res => {
                commit("SET_COUNT", res.data);
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
