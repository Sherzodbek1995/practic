<template>
  <section class="arxiv">
    <div class="home-border">
      <div class="home-border__top"></div>
      <div class="home-border__bottom"></div>
    </div>
    <div class="arxiv-main">
      <div class="container">
        <div class="arxiv-inner">
          <div class="row">
            <div class="col-lg-4" v-for="(item, index) in getArxiv" :key="index">
              <div class="arxiv-inner__border">
                <div class="arxiv-card__border">
                  <div class="arxiv-card">
                    <div class="arxiv-card__icon">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="arxiv-card__title">{{ item.title }}</div>
                    <div class="arxiv-card__text">
                      {{ item.text }}
                    </div>
                  </div>
                </div>
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
    ...mapGetters("arxiv", ["getArxiv"]),
  },
};
</script>

<style></style>
