<template>
  <header class="header" ref="header" :class="{ 'header--sticky': sticky }">
    <div class="container">
      <div class="row">
        <NuxtLink to="/">
          <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
        </NuxtLink>

        <div style="margin-left: auto;">
          <a href="#" class="gltichingbtn" data-text="Apply now">Apply now</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'TopNav',
  
  data () {
    return {
      sticky: false
    }
  },

  mounted () {
    if(process.browser){

      window.addEventListener('scroll', () => this.calculateHeaderPosition())
    }
  },

  methods: {
      calculateHeaderPosition () {
        this.sticky = window.scrollY >= 40 ? true : false
      }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 1;
  top: 2.5rem;
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100%;
  transition: all .2s ease;

  &--sticky {
    background-color: #0b0b19;
    top: 0;
    box-shadow: 4px 0 10px rgba(0,0,0,.25);
  }

  @media screen and (max-width: 380px) {
    .logo img {
      height: 1rem;
    }
  }
}
</style>
