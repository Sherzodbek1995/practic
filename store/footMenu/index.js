export const state = () => ({
        footMenu: [{
                title: "О центре",
                link: '/'
            },
            {
                title: "Разделы",
                link: '/'
            },
            {
                title: "Международное сотрудничество",
                link: '/'
            },
            {
                title: "Услуги",
                link: '/'
            },
            {
                title: "Новости",
                link: '/'
            },
            {
                title: "Контакты",
                link: '/'
            }
        ],
        footAdress: [{
                title: "Адрес:",
                text: "  Адрес: 100174, г. Ташкент, Алмазарский р-н, ул. Университетская, дом 7",
            },
            {
                title: "Телефон:",
                text: "+998 97 170 67 84",
            },
            {
                title: "Эл. адрес",
                text: " munis@mininnovation.uz",
            }
        ]
    }

)
export const mutations = {
    setFootMenu(state, payload) {
        state.footMenu = payload
    },
    setFootAdress(state, payload) {
        state.footAdress = payload
    }
}
export const getters = {
    getFootMenu(state) {
        return state.footMenu
    },
    getFootAdress(state) {
        return state.footAdress
    }
}