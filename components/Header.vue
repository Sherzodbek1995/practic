<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-left">
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
          <button type="button" class="btn header-search__btn">
            <div class="header-search__icon">
              <img src="~/assets/icons/search.png" alt="" /><span
                >Поиск по сайту</span
              >
            </div>
          </button>
        </div>
        <div class="header-right">
          <a href="tel:+998998889900" class="header-notification__tel">
            <i class="fa fa-mobile-phone"></i>
          </a>
          <a href="" class="header-notification__glass">
            <img src="~/assets/icons/eyeglasses.png" alt="" />
          </a>
          <a href="" class="header-notification__volume">
            <img src="~/assets/icons/high-volume (1).png" alt="" />
          </a>

          <span class="line"></span>

          <select id="lang">
            <option selected value="Rus">Rus</option>
            <option value="Eng">Eng</option>
            <option value="Uzb">Uzb</option>
          </select>
          <button type="button" class="btn header-right__btn">
            Вход в программу
          </button>
          <button type=" button" class="btn header-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style></style>
