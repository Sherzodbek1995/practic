<template>
  <header class="allNav">
    <div class="container">
      <div class="header-inner">
        <div class="allnav-left">
          <div class="header-logos">
            <div class="header-logos__icon">
              <img src="~/assets/icons/p1.png" alt="" />
            </div>
            <div class="header-logos__icon">
              <img src="~/assets/icons/p2.png" alt="" />
            </div>
            <div class="header-logos__icon">
              <img src="~/assets/icons/p3.png" alt="" />
            </div>
          </div>
          <button type="button" class="btn header-search__btn">
            <div class="header-search__icon">
              <i class="icon-search"></i>
              <span>Поиск по сайту</span>
            </div>
          </button>
        </div>
        <div class="allnav-right">
          <a href="tel:+998998889900" class="header-notification__tel">
            <i class="icon-mobile"></i>
          </a>
          <a href="" class="header-notification__glass">
            <i class="icon-glasses"></i>
          </a>
          <a href="" class="header-notification__volume">
            <i class="icon-volume"></i>
          </a>

          <span class="line1"></span>

          <select id="lang">
            <option selected value="Rus">Rus</option>
            <option value="Eng">Eng</option>
            <option value="Uzb">Uzb</option>
          </select>
          <button type="button" class="btn header-right__btn">Вход в программу</button>
          <button type=" button" class="btn nav-menu">
            <i class="icon-menu"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>

<style lang="scss" scoped></style>
