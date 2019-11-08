import router from "../../router";

let state = {
    categories: {},
    categoryPagination: {}
},
    getters = {

    },
    mutations = {
        SET_CATEGORY: (state, payload) => {
            state.categoryPagination = payload;
            state.categories = payload.data;
        },
        STORE_CATEGORY: (state, payload) => {
            state.categories.push(payload);
        },
        UPDATE: (state, payload) => {
            console.log('payload', payload);
            // state.categories.forEach(element => {
            //     if (element.id === payload) {
            //         state.categories.splice(element, 1);
            //     }
            // });
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
            axios.post('/api/categories', {
                name
            }).then(({ data }) => {
                if (data.message === 'success') {
                    Toast.fire({
                        type: "success",
                        title: "Category Created"
                    });
                }
                commit('STORE_CATEGORY', data.data);

            });
        },
        setCategory: ({ commit }) => {
            axios.get('/api/categories')
                .then(({ data }) => {

                    commit('SET_CATEGORY', data.data);
                })
        },
        update: ({ commit }, id, name) => {
            axios.put(`/api/categories/${id}`, { name })
                .then(({ data }) => {
                    if (data.message != '') {
                        Toast.fire({
                            type: "success",
                            title: "Category Update"
                        });

                        commit('UPDATE', id, name);
                    }
                });
        },
        destroy: ({ commit }, id) => {
            axios.delete(`/api/categories/${id}`)
                .then(({ data }) => {
                    if (data.message != '') {
                        Toast.fire({
                            type: "success",
                            title: "Category Deleted"
                        });

                        commit('DESTROY', id);
                    }
                });
        }
    }


export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}