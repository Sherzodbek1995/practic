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
          <swiper :options="usefull" :loadtheme="false">
            <swiper-slide>
              <div class="usefull-card">
                <img src="~assets/icons/pol.svg" alt="" />
                <p class="usefull__text">Пресс-служба Президента Республики Узбекистан</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="usefull-card">
                <img src="~assets/icons/pol2.svg" alt="" />
                <p class="usefull__text">Пресс-служба Президента Республики Узбекистан</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="usefull-card">
                <img src="~assets/icons/pol3.svg" alt="" />
                <p class="usefull__text">Пресс-служба Президента Республики Узбекистан</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="usefull-card">
                <img src="~assets/icons/pol4.svg" alt="" />
                <p class="usefull__text">Пресс-служба Президента Республики Узбекистан</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      usefull: {
        slidesPerView: 4,
        spaceBetween: 0,
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
};
</script>

<style></style>
