export const state = () => ({
    usefull: [{
            img: require("~/assets/icons/pol.svg"),
            text: "Пресс-служба Президента Республики Узбекистан",
            link: "/",
        },
        {
            img: require("~/assets/icons/pol2.svg"),
            text: "Министерство Инновационного развития Республики Узбекистан",
            link: "/",
        },
        {
            img: require("~/assets/icons/pol3.svg"),
            text: "Всемирный банк — международная финансовая организация",
            link: "/",
        },
        {
            img: require("~/assets/icons/pol4.svg"),
            text: "Министерство финансов Республики Узбекистан ",
            link: "/",
        }
    ]
});
export const mutations = {
    setUsefull(state, payload) {
        state.usefull = payload
    }
};

export const getters = {
    getUsefull(state) {
        return state.usefull
    }
};