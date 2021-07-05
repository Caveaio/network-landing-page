<template>
  <div class="container">
    <div class="talent-container">
      <div class="main-tc">
        <div class="context-tc">
          <h3>Join the best talent from around the globe!</h3>
          <p>
            NETWRK is the place to go to grow, develop your game and become part
            of a pro organization, whether you are a creator, player, or
            streamer. Form friendships and partnerships, and earn real rewards
            for chasing your dreams.
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
  margin-bottom: 6rem;
  align-items: center;

  .main-tc {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    background: #1a162f;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 6rem 0;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 380px) {
      width: 100%;
    }
    .main-icon {
      margin-bottom: 4rem;

      @media screen and (max-width: 380px) {
        margin-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 10px;
      }
    }
  }
  .context-tc {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      display: flex;
      justify-content: center;
      align-content: center;
      font-weight: bold;
      font-size: 2rem;

      @media screen and (max-width: 380px) {
        justify-content: center;
        display: flex;
        align-items: center;
        padding-left: 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 5px;
        padding-bottom: 15px;
      }
    }
    p {
      color: #6d739d;
      max-width: 640px;
      text-align: center;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 2rem;

      @media screen and (max-width: 380px) {
        margin-left: 25px;
        margin-right: 25px;
        font-style: normal;
        font-weight: normal;
        padding-bottom: 0px;
      }
    }
    :last-child {
      justify-content: center;
      align-items: center;
      color: #fff;
      @media screen and (max-width: 380px) {
        justify-content: center;
        display: flex;
        align-items: center;
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
