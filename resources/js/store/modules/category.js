import router from "../../router";

let state = {
    categories: null
},
    getters = {

    },
    mutations = {
        store_category: (state, payload) => {
            state.categories = payload;
        }
    },


    actions = {
        STORE_CATEGORY: ({ commit }, name) => {
            axios.post('api/categories', {
                name
            }).then(({ data }) => {
                if (data.message === 'success') {
                    Toast.fire({
                        type: "success",
                        title: "Category Created"
                    });
                }
                commit('store_category', data.data);

            }).catch(e => console.log(e));
        }
    }


export default {
    state,
    getters,
    mutations,
    actions
}