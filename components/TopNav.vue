<template>
  <header ref="header" class="header" :class="{ 'header--sticky': sticky }">
    <div class="container">
      <div class="row">
        <NuxtLink to="/">
          <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
        </NuxtLink>

        <a href="https://blog.netwrk.gg" class="link" target="_blank">Blog</a>

        <div>
          <a href="#" class="gltichingbtn" data-text="Apply now">Apply now</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopNav',

  data() {
    return {
      sticky: false,
    }
  },

  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', () => this.calculateHeaderPosition())
    }
  },

  methods: {
    calculateHeaderPosition() {
      this.sticky = window.scrollY >= 40 ? true : false
    },
  },
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
  transition: all 0.2s ease;

  &--sticky {
    background-color: #0b0b19;
    top: 0;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 380px) {
    .logo img {
      height: 1rem;
    }
  }
}

.link {
  color: #fff;
  margin-left: auto;
  margin-right: 2.5rem;
  font-weight: 600;
}
</style>
