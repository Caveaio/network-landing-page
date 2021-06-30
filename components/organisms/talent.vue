<template>
  <div class="talent-container">
      <div class="main-tc">
        <img class="main-icon" src="/cup-graphic.png" alt="">
        <div class="context-tc">
            <h3>JOIN THE BEST TALENT FROM ACROSS THE GLOBE!</h3>
            <p>NETWRK is the place to go to grow, develop your game and become part of a pro organization, wether you are a creator, player, or streamer. Form friendships and partnerships, and earn real rewards for chasing your dreams.</p>
            <p>Learn from and connect with iconic esports businesses</p>
        </div>
        <div class="b-icons">
            <img src="/fnatic.png" alt="fnatic">
            <img src="/faze.png" alt="faze">
            <img src="/g2.png" alt="">
            <img src="/g100.png" alt="">
            <img src="/ge.png" alt="">
            <img src="/n.png" alt="asd">
        </div>
      </div>
  </div>
</template>

<script>    
export default {
  name: "Talent"
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
            width: 1138px;
            height: auto;
            background: #1A162F;
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
                padding-left: 315px;
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
                    padding-left: 0px;;
                    font-family: Oswald;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 5px;
                    padding-bottom: 15px;
                }
            }
            p {
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
                    padding-bottom: 0px;;
                }
            }
            :last-child {
                justify-content: center;
                align-items: center;
                color: #A09CAA;
                margin-left: 33%;
                @media screen and (max-width: 380px) {
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    color: #A09CAA;
                    font-size: 15px;
                    margin-left: 0px;
                    margin-bottom: 25px;
                }
            }
        }
        .b-icons  {
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
             opacity: .5;
             transition: all .5s ease;
        }
    }

</style>
