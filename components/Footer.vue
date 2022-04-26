<template>
  <footer class="footer">
    <div class="home-border"></div>
    <div class="footer-main">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="footer-socials">
                <div class="header-logos">
                  <div class="header-logos__icon">
                    <img src="~/assets/icons/nav-1.png" alt="" />
                  </div>
                  <div class="header-logos__icon">
                    <img src="~/assets/icons/nav-2.png" alt="" />
                  </div>
                  <div class="header-logos__icon">
                    <img src="~/assets/icons/nav-3.png" alt="" />
                  </div>
                </div>
                <p>
                  Внимание! Если Вы нашли ошибку в тексте, выделите её и нажмите
                  Ctrl+Enter для уведомления администрации
                </p>
                <span>Мы в соцсетях:</span>
                <div class="socials-logos">
                  <a href=""><i class="icon-facebook1"></i></a>
                  <a href=""><i class="icon-instagram"></i></a>
                  <a href=""> <i class="icon-telegram1"></i></a>
                  <a href=""> <i class="icon-youtube"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-menu">
                <ul>
                  <h5>Меню</h5>
                  <Nuxt-link to="" v-for="(item, index) in getFootMenu" :key="index">{{
                    item.title
                  }}</Nuxt-link>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-contact">
                <div
                  class="footer-contact__content"
                  v-for="(item, index) in getFootAdress"
                  :key="index"
                >
                  <h5>{{ item.title }}</h5>
                  <p>
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-email">
                <input type="email" placeholder="Эл. почта" />
                <button type="submit" class="btn footer-btn">Подписаться</button>
                <h6>Сайт обновлялся последний раз: 06:42, 13.07.2021 (GMT+5)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom__inner">
            <span class="footer-date"
              >© 2007 - 2021 Все права защищены | При перепечатке материалов сайта ссылка
              на веб-сайт обязательна</span
            >
            <span class="footer-dev">Разработка сайта: Online Service Group</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("footMenu", ["getFootMenu", "getFootAdress"]),
  },
};
</script>

<style></style>
