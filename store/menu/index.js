export const state = () => ({
    isNavbar: false,
});
export const mutations = {
    setNavbar(state, payload) {
        state.isNavbar = payload;
    },
};

export const getters = {
    getNavbar: (state) => state.isNavbar,
};