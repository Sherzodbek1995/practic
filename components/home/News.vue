<template>
  <section class="news">
    <div class="home-border"></div>
    <div class="container">
      <div class="news-inner">
        <div class="news-header">
          <h2>Новости</h2>
          <a href="">Все новости</a>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9">
          <div class="row">
            <div class="col-lg-4" v-for="(item, index) in getNewsHead" :key="index">
              <Nuxt-link to="/news">
                <div class="news-card">
                  <div class="news-card__img">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="news-card__date">
                    <span>{{ item.date }}</span> |<span>10</span>
                  </div>
                  <div class="news-card__content">
                    <h3>{{ item.title }}</h3>
                    <p>
                      {{ item.text }}
                    </p>
                    <span>{{ item.tag }}</span>
                  </div>
                </div>
              </Nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="news-side">
            <div class="news-side__col" v-for="(item, index) in getNewsEnd" :key="index">
              <h3>{{ item.title }}</h3>
              <div class="news-side__commit">
                <span>{{ item.date }}</span
                ><span>#состоянии проекта</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("news", ["getNewsHead", "getNewsEnd"]),
  },
};
</script>

<style></style>
