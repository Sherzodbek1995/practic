<template>
  <section class="HomeNav">
    <div class="container"></div>
    <div class="HomeNav-inner">
      <div class="HomeNav-left">
        <div class="HomeNav-logos">
          <div class="HomeNav-logos__icon">
            <img src="~/assets/icons/nav-1.png" alt="" />
          </div>
          <div class="HomeNav-logos__icon">
            <img src="~/assets/icons/nav-2.png" alt="" />
          </div>
          <div class="HomeNav-logos__icon">
            <img src="~/assets/icons/nav-3.png" alt="" />
          </div>
        </div>
        <button type="button" class="btn HomeNav-search__btn">
          <div class="HomeNav-search__icon">
            <img src="~/assets/icons/search.png" alt="" /><span>Поиск по сайту</span>
          </div>
        </button>
      </div>
      <div class="HomeNav-right">
        <div class="HomeNav-notification"></div>
        <div class="HomeNav-notification__tel">
          <i class="fa fa-mobile-phone"></i>
        </div>
        <div class="HomeNav-notification__glass">
          <img src="~/assets/icons/eyeglasses.png" alt="" />
        </div>
        <div class="HomeNav-notification__volume">
          <img src="~/assets/icons/high-volume (1).png" alt="" />
        </div>
        <span class="line"></span>

        <select id="lang">
          <option selected value="Rus">Rus</option>
          <option value="Eng">Eng</option>
          <option value="Uzb">Uzb</option>
        </select>
        <button type="button" class="btn HomeNav-right__btn">
          <span>Вход в программу</span>
        </button>
        <div class="HomeNav-menu"><span></span><span></span><span></span></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
