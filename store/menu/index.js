export const state = () => ({
    isNavbar: false,
    menu: [{
            title: "Новости",
            link: "/news",
        },
        {
            title: "Руководство",
            link: "/report",
        },
        {
            title: "Медиа галерея",
            link: "",
        },
        {
            title: "О программе MUNIS",
            link: "",
        },
        {
            title: "Контакты",
            link: "/news",
        }
    ],
    child: [{
            title: "Состоянии проекта",
            link: "/",
        },
        {
            title: "Инновации",
            link: "/",
        },
        {
            title: "Наука",
            link: "",
        }

    ]
});
export const mutations = {
    setNavbar(state, payload) {
        state.isNavbar = payload;
    },
    setMenu(state, payload) {
        state.menu = payload
    },
    setChild(state, payload) {
        state.child = payload
    }
};

export const getters = {
    getNavbar: (state) => state.isNavbar,
    getMenu(state) {
        return state.menu
    },
    getChild(state) {
        return state.child
    }
};