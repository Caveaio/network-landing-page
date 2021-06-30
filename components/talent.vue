<template>
  <div class="talent-container">
    <div class="main-tc">
      <img class="main-icon" src="@/assets/cup-graphic.png" alt="Trophy icon" />
      <div class="context-tc">
        <h3>JOIN THE BEST TALENT FROM ACROSS THE GLOBE!</h3>
        <p>
          NETWRK is the place to go to grow, develop your game and become part
          of a pro organization, whether you are a creator, player, or streamer.
          Form friendships and partnerships, and earn real rewards for chasing
          your dreams.
        </p>
        <p>Learn from and connect with iconic esports businesses</p>
      </div>
      <div class="b-icons">
        <img src="@/assets/fnatic.png" alt="FNATIC logo" />
        <img src="@/assets/faze.png" alt="Faze clan logo" />
        <img src="@/assets/g2.png" alt="G2 Esport logo" />
        <img src="@/assets/g100.png" alt="100 Thieves logo" />
        <img src="@/assets/ge.png" alt="Guild esport logo" />
        <img src="@/assets/n.png" alt="Team EnvyUs logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Talent',
}
</script>
<style lang="scss" scoped>
.talent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 145px;

  .main-tc {
    display: flex;
    flex-direction: column;
    height: auto;
    background: #1a162f;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 380px) {
      width: 100%;
    }
    .main-icon {
      margin-top: 46px;
      padding-left: 456px;
      padding-right: 463px;
      margin-bottom: 52px;
      @media screen and (max-width: 380px) {
        margin-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 10px;
      }
    }
  }
  .context-tc {
    h3 {
      display: flex;
      justify-content: center;
      align-content: center;
      font-family: Oswald;
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 26px;
      padding-bottom: 20px;
      @media screen and (max-width: 380px) {
        justify-content: center;
        display: flex;
        align-items: center;
        padding-left: 0px;
        font-family: Oswald;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 5px;
        padding-bottom: 15px;
      }
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20%;
      margin-right: 20%;
      font-family: Oswald;
      font-style: normal;
      font-weight: normal;
      padding-bottom: 54px;
      @media screen and (max-width: 380px) {
        margin-left: 25px;
        margin-right: 25px;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        padding-bottom: 0px;
      }
    }
    :last-child {
      justify-content: center;
      align-items: center;
      color: #a09caa;
      @media screen and (max-width: 380px) {
        justify-content: center;
        display: flex;
        align-items: center;
        color: #a09caa;
        font-size: 15px;
        margin-left: 0px;
        margin-bottom: 25px;
      }
    }
  }
  .b-icons {
    @media screen and (max-width: 380px) {
      margin-left: 35px;
    }
  }
  .b-icons img {
    padding-right: 15px;
    padding-bottom: 35px;
    @media screen and (max-width: 380px) {
      overflow: hidden;
      padding-right: 15px;
      padding-bottom: 35px;
    }
  }
  .b-icons img:hover {
    opacity: 0.5;
    transition: all 0.5s ease;
  }
}
</style>
