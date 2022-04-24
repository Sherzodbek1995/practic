<template>
  <div>
    <PageBanner title="Международном экспертном совете" text="Главная" />
    <section class="guides">
      <div class="container">
        <div class="guides-inner">
          <div class="row">
            <div class="col-xl-9">
              <div class="row">
                <div class="col-xl-4" v-for="item in card" :key="item.id">
                  <div class="guides-card">
                    <div class="guides-card__img">
                      <img :src="item.img" alt="" />
                    </div>

                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                    <span>{{ item.commit }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="info">
                <h3>Информационная служба</h3>
                <div class="info-content">
                  <Nuxt-link to="">Международном экспертном совете</Nuxt-link>
                  <Nuxt-link to="">Инфографика</Nuxt-link>
                  <Nuxt-link to="">Объявления</Nuxt-link>
                </div>
              </div>
              <div class="quetion-banner">
                <h2>The world bank system</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: [
        {
          id: 1,
          img: require("../../assets/images/guid1.png"),
          title: "Рафаэль Перес Колон",
          text: " Эксперт в области компьютерных наук/ИКТ",
          commit: "Испания",
        },
        {
          id: 2,
          img: require("../../assets/images/guid1.png"),
          title: "Рафаэль Перес Колон",
          text: " Эксперт в области компьютерных наук/ИКТ",
          commit: "Испания",
        },
        {
          id: 3,
          img: require("../../assets/images/guid1.png"),
          title: "Рафаэль Перес Колон",
          text: " Эксперт в области компьютерных наук/ИКТ",
          commit: "Испания",
        },
        {
          id: 4,
          img: require("../../assets/images/guid1.png"),
          title: "Рафаэль Перес Колон",
          text: " Эксперт в области компьютерных наук/ИКТ",
          commit: "Испания",
        },
        {
          id: 5,
          img: require("../../assets/images/guid1.png"),
          title: "Рафаэль Перес Колон",
          text: " Эксперт в области компьютерных наук/ИКТ",
          commit: "Испания",
        },
        {
          id: 6,
          img: require("../../assets/images/guid1.png"),
          title: "Рафаэль Перес Колон",
          text: " Эксперт в области компьютерных наук/ИКТ",
          commit: "Испания",
        },
      ],
    };
  },
};
</script>
