let state = {
    categories: {},
},
    getters = {},
    mutations = {
        SET_CATEGORY: (state, payload) => {
            state.categories = payload.data;
        },
        STORE_CATEGORY: (state, payload) => {
            state.categories.push(payload);
        },
        UPDATE: (state, payload) => {
            const item = state.categories.find(item => item.id === payload.id);
            Object.assign(item, payload);
        },
        DESTROY: (state, payload) => {
            state.categories.forEach(element => {
                if (element.id === payload) {
                    state.categories.splice(element, 1);
                }
            });
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
        setCategory: ({ commit }, page = 1) => {
            axios.get(`/api/categories?page=${page}`).then(({ data }) => {
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
        }
    };

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};
