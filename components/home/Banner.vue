<template>
  <section class="banner">
    <div class="banner-border"></div>
    <div class="banner-main">
      <div class="banner-item">
        <div class="container">
          <div class="banner-inner">
            <swiper :options="Bannertop" :loadtheme="false">
              <swiper-slide>
                <div class="banner-content">
                  <span class="banner-content__date">30 сентября 2021</span>
                  <h3 class="banner-content__title">
                    Узбекистан и Венгрия запускают конкурс на разработку научных проектов
                    и стартапов
                  </h3>
                  <p class="banner-content__text">
                    Мининноваций Узбекистана совместно с Министерством иностранных дел и
                    торговли Венгрии объявили о запуске конкурса стартапов и научных
                    проектов по всем совместным направлениям...
                  </p>
                  <p class="banner-content__hashtag">#инновации</p>
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
        <swiper :options="BannerBottom" :loadtheme="false">
          <swiper-slide>
            <div class="banner-col">
              <span class="banner-col__date">14 сентября 2021</span>
              <h3 class="banner-col__title">
                Индия запустит в Узбекистане онлайн-платформу телемедицины
              </h3>
              <p class="banner-col__text">
                Власти Узбекистана провели онлайн-встречу с партнерами из Индии по
                вопросам трансфера...
              </p>
              <p class="banner-col__hashtag">#инновации</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="banner-col">
              <span class="banner-col__date">13 сентября 2021</span>
              <h3 class="banner-col__title">
                В Андижане открылся инновационный молодежный технопарк
              </h3>
              <p class="banner-col__text">
                Министр инновационного развития Иброхим Абдурахмонов ознакомился в
                Андижане...
              </p>
              <p class="banner-col__hashtag">#инновации</p>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="banner-col">
              <span class="banner-col__date">14 сентября 2021</span>
              <h3 class="banner-col__title">
                Ученый из РФ поможет властям Узбекистана усовершенствовать...
              </h3>
              <p class="banner-col__text">
                Министр инновационного развития Республики Узбекистан Иброхим Абдурахмонов
                провел...
              </p>
              <p class="banner-col__hashtag">#инновации</p>
            </div></swiper-slide
          >
        </swiper>
        <div class="swiper-navigations">
          <i slot="button-next" class="icon-angle-left swiper-button-next"></i>
          <i slot="button-prev" class="icon-angle-right swiper-button-prev"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      BannerTop: {
        slidesPerView: 3,
        spaceBetween: 0,
        // autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 500,

        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      BannerBottom: {
        slidesPerView: 3,
        spaceBetween: 0,
        // autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 500,

        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style></style>
