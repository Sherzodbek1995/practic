<template>
  <section class="usefull">
    <div class="home-border"></div>
    <div class="usefull-main">
      <div class="container">
        <div class="usefull-inner">
          <div class="usefull-header">
            <h2>Полезные ссылки</h2>
            <div class="pagination_banner">
              <div class="swiper-pagination" slot="pagination" />
            </div>
          </div>
          <swiper effect="fade" :options="usefull" :loadtheme="false">
            <swiper-slide v-for="(item, index) in getUsefull" :key="index">
              <div class="usefull-card">
                <img :src="item.img" alt="" />
                <p class="usefull__text">{{ item.text }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      usefull: {
        slidesPerView: 4,
        spaceBetween: 24,
        // autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 500,

        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          // type: "bullets",
          clickable: true,
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + "</span>";
          // },
        },
      },
    };
  },
  computed: {
    ...mapGetters("usefull", ["getUsefull"]),
  },
};
</script>

<style></style>
