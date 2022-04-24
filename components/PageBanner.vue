<template>
  <section class="pagebanner">
    <div class="container">
      <div class="pagebanner-inner">
        <h2>{{ title }}</h2>
        <div class="pagebanner-routes">
          <Nuxt-link to="">{{ text }} </Nuxt-link><span>/</span>
          <Nuxt-link to=""> {{ title }}</Nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>
