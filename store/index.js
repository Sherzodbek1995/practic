export const state = () => ({
    transactions: []
})
export const mutations = {
    loadTransactions(state, payload) {
        state.transactions = payload
    }
}
export const actions = {
    loadTrans(context) {
        this.$axios.get('https://my-json-server.typicode.com/Sunpacker/vue-pagination/db')
            .then((response) => {
                let reversed = response.data.transactions.reverse()
                context.commit('loadTransactions', reversed)
            })
    }
}
export const getters = {
    trans: state => state.transactions,
}