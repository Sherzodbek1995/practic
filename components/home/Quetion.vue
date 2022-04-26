<template>
  <section class="quetion">
    <div class="home-border"></div>
    <div class="quetion-main">
      <div class="container">
        <div class="quetion-inner">
          <div class="quetion-header">
            <h2>Часто задаваемые вопросы</h2>
          </div>
          <div class="quetion-body">
            <div class="row">
              <div class="col-lg-9">
                <div class="quetion-body__list">
                  <div
                    class="quetion-item"
                    v-for="(item, index) in getquetion"
                    :key="index"
                  >
                    <b-button
                      v-b-toggle="'collapse-' + index"
                      class="quetion-btn"
                      variant="transparent"
                      ><span>{{ item.title }}</span>
                      <img src="~/assets/icons/plus.svg" alt="" />
                    </b-button>
                    <b-collapse :id="'collapse-' + index" class="mt-2">
                      <div class="quetion-card">
                        <p class="card-text">
                          {{ item.text }}
                        </p>
                      </div>
                    </b-collapse>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="quetion-banner">
                  <h2>The world bank system</h2>
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
    ...mapGetters("quetion", ["getquetion"]),
  },
};
</script>

<style></style>
