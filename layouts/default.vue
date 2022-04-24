<template>
  <div
    id="wrapper"
    :class="{
      menu__active: getNavbar,
    }"
  >
    <PageNav v-if="$route.path != '/'" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("menu", ["getNavbar", "getNotification"]),
  },
};
</script>

<style>
#wrapper {
  position: relative;
}
</style>
