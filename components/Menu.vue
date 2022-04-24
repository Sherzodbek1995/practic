<template>
  <div class="menu">
    <div class="menu-position">
      <button type="button" class="menu__close" @click="closeMenu">
        <i class="icon-close"></i>
      </button>
    </div>
    <div class="menu__wrapper">
      <div class="container">
        <div class="menu__main">
          <div class="row">
            <div class="col-lg-8">
              <ul class="menu-bigger">
                <li v-for="(item, index) in menu" :key="index" @click="closeMenu">
                  <nuxt-link to=""
                    >{{ item.title
                    }}<small
                      ><span v-if="index < 9">0</span>{{ index + 1 }}</small
                    ></nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <ul class="menu-child">
                <li>
                  <a href="#">Состоянии проекта</a>
                </li>
                <li>
                  <a href="#">Инновации</a>
                </li>
                <li>
                  <a href="#">Наука</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbar: true,
      menu: [
        {
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
        },
      ],
    };
  },

  methods: {
    closeMenu() {
      this.$store.commit("menu/setNavbar", false);
      document.querySelector("body").style.overflowY = "unset";
    },
  },
  mounted() {},
};
</script>

<style></style>
