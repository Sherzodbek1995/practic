<template>
  <section class="banner">
    <div class="home-border"><div class="home-border__radius"></div></div>
    <div class="banner-main">
      <div class="banner-item">
        <div class="container">
          <div class="banner-inner">
            <swiper :options="Top" :loadtheme="false">
              <swiper-slide v-for="(item, index) in getHeadSlide" :key="index">
                <div class="banner-content">
                  <span class="banner-content__date">{{ item.date }}</span>
                  <h3 class="banner-content__title">
                    {{ item.title }}
                  </h3>
                  <p class="banner-content__text">
                    {{ item.text }}
                  </p>
                  <p class="banner-content__hashtag">{{ item.tag }}</p>
                  <button class="btn banner-content__btn" type="button">Подробнее</button>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-news">
      <div class="container">
        <swiper :options="Bottom">
          <swiper-slide v-for="(item, index) in getEndSlide" :key="index">
            <div class="banner-col">
              <span class="banner-col__date">{{ item.date }}</span>
              <h3 class="banner-col__title">
                {{ item.title }}
              </h3>
              <p class="banner-col__text">
                {{ item.text }}
              </p>
              <p class="banner-col__hashtag">{{ item.tag }}</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-navigations">
          <i slot="button-prev" class="icon-angle-right swiper-button-prev"></i>
          <i slot="button-next" class="icon-angle-left swiper-button-next"></i>
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
      Bottom: {
        slidesPerView: 3,
        spaceBetween: 2,
        // autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 500,
        lazy: 2,
        loop: true,
        navigation: {
          nextEl: ".icon-angle-left",
          prevEl: ".icon-angle-right",
        },
      },
      Top: {
        slidesPerView: 1,
        spaceBetween: 6,
        // autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 500,
        lazy: 2,
        loop: true,
        navigation: {
          nextEl: ".icon-angle-left",
          prevEl: ".icon-angle-right",
        },
      },
    };
  },
  computed: {
    ...mapGetters("banner", ["getHeadSlide", "getEndSlide"]),
  },
};
</script>

<style></style>
