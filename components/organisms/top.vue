<template>
  <div>
      <NuxtLink to="/">
        <div class="logo"><img src="/logo.png" alt=""></div>
      </NuxtLink>
  </div>
</template>

<script lang="ts">

export default ({
  name: 'TopNav',
})
</script>
<style lang="scss" scoped>
    .logo {
    position: fixed;
    z-index: 1;
    top: 0;
    padding-left: 150px;
    padding-top: 50px;
    @media screen and (max-width: 380px) {
        display: none;
    }
  }
</style>
