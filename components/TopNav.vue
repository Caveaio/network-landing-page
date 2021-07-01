<template>
  <header class="header" ref="header" :class="{ 'header--sticky': sticky }">
    <div class="container">
      <div class="row">
        <NuxtLink to="/">
          <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
        </NuxtLink>

        <div style="margin-left: auto;">
          <a href="#" class="gltichingbtn" data-text="Apply Now">Apply Now</a>
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
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: sticky;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #1a162f;
  height: 5rem;
  width: 100%;

  @media screen and (max-width: 380px) {
    .logo img {
      height: 1rem;
    }
  }
}
</style>
