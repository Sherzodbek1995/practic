export const state = () => ({
    arxiv: [{
            img: require("~/assets/icons/$.svg"),
            title: "Мы команда архивов",
            text: " Мы команда архивов, записей и управления информацией профессионалов, отвечающих за записи и информацию",
            link: "/",
        },
        {
            img: require("~/assets/icons/laptop.svg"),
            title: "Мы команда архивов",
            text: " Мы команда архивов, записей и управления информацией профессионалов, отвечающих за записи и информацию",
            link: "/",
        },
        {
            img: require("~/assets/icons/img.svg"),
            title: "Мы команда архивов",
            text: " Мы команда архивов, записей и управления информацией профессионалов, отвечающих за записи и информацию",
            link: "/",
        },

    ]
});
export const mutations = {
    setArxiv(state, payload) {
        state.arxiv = payload
    }

};

export const getters = {
    getArxiv(state) {
        return state.arxiv
    }
};