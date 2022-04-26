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
                <li v-for="(list, index) in getMenu" :key="index" @click="closeMenu">
                  <nuxt-link to=""
                    >{{ list.title
                    }}<small
                      ><span v-if="index < 9">0</span>{{ index + 1 }}</small
                    ></nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <ul class="menu-child">
                <li v-for="(item, index) in getChild" :key="index">
                  <Nuxt-link to="/"> {{ item.title }}</Nuxt-link>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isNavbar: true,
    };
  },
  computed: {
    ...mapGetters("menu", ["getMenu", "getChild"]),
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
