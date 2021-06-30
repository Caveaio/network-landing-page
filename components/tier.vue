<template>
  <div class="tier-container">
    <div class="tier-inner">
      <h3>THE ELITE TIER</h3>
      <p>
        Apply and create a profile to get the opportunity to partner with top
        tier esports & gaming organizations. NETWRK's is the main monetization
        platform for content creators.
      </p>
      <blockquote>Don't sell your game short. Join the NETWRK</blockquote>
      <div>
        <a href="#" class="gltichingbtn" data-text="Apply Now">Apply Now</a>
      </div>
      <div class="faq">
        <h3>FREQUENTLY ASKED QUESTIONS</h3>
        <div v-for="faq in faqs" :key="faq.title" class="faq-wrap">
          <div class="accordion" @click="display($event, faq)">
            <h3>{{ faq.title }}</h3>
            <i class="action">{{ faq.display ? faq.icons.f : faq.icons.t }}</i>
          </div>
          <transition name="slide-fade">
            <div v-if="faq.display" class="faq-context">
              <span>{{ faq.context }}</span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tier',
  data: () => ({
    faqs: [
      {
        title: 'What is NETWRK?',
        context:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores et alias natus velit eius ad eligendi in, ut quis explicabo recusandae a reprehenderit dolores!',
        display: false,
        icons: {
          t: '+',
          f: '-',
        },
      },
      {
        title: 'What is the application review process?',
        context:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores et alias natus velit eius ad eligendi in, ut quis explicabo recusandae a reprehenderit dolores!',
        display: false,
        icons: {
          t: '+',
          f: '-',
        },
      },
      {
        title: 'Is the platform going to be available to the public?',
        context:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores et alias natus velit eius ad eligendi in, ut quis explicabo recusandae a reprehenderit dolores!',
        display: false,
        icons: {
          t: '+',
          f: '-',
        },
      },
    ],
  }),
  methods: {
    display($event, faq) {
      faq.display = faq.display ? false : true
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
a {
  font-family: 'Oswald';
  margin-bottom: 15px;
}
button {
  width: 165px;
  height: 54px;
  border-radius: 50px;
  @media screen and (max-width: 380px) {
    margin-top: -25px;
    width: 165px;
    height: 35px;
  }
}
button:hover {
  opacity: 0.5;
}
.tier-container {
  margin-bottom: 50px;
  .tier-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      margin-bottom: 31px;
      font-family: Oswald;
      font-style: normal;
      font-weight: bold;
      font-size: 54px;
      line-height: 26px;
      @media screen and (max-width: 380px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    p {
      color: #ffff;
      font-family: Oswald;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      @media screen and (max-width: 380px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        line-height: 22px;
        width: 80%;
      }
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        line-height: 22px;
        width: 80%;
      }
    }
    blockquote {
      margin-top: 25px;
      margin-bottom: 43px;
      color: #bcb9c3;
      font-family: Oswald;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 22px;
      @media screen and (max-width: 380px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        line-height: 22px;
        width: 80%;
      }
    }
    button {
      background: #f0792e;
      border-style: solid;
      color: #f1f1f1;
      border-radius: 10px;
      border: none;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 45px;
      @media screen and (max-width: 380px) {
        font-size: 25px;
        text-shadow: none;
        font-size: 16px;
        line-height: 5px;
      }
    }
    button:hover {
      background-color: transparent;
      transition: 0;
      color: #f1f1f1;
    }
    .faq {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .accordion {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 750px;
        background: #1a162f;
        border-radius: 5px;
        margin-top: 15px;
        z-index: 9;
        @media screen and (max-width: 380px) {
          width: 100vw;
          h3 {
            font-size: 13px;
          }
        }
      }
      .faq-context {
        display: flex;
        flex-direction: column;
        background: #1a162f;
        width: 750px;
        height: auto;
        @media screen and (max-width: 380px) {
          width: 100%;
          // margin-left: 10px;
          // margin-right: 10px;
        }
        span {
          content: '';
          padding-bottom: 10px;
          padding-top: 10px;
          font-family: Oswald;
          font-style: normal;
          font-weight: bold;
          padding-right: 15px;
          padding-left: 15px;
          @media screen and (max-width: 380px) {
            padding-bottom: 10px;
            padding-top: 10px;
            font-size: 13px;
          }
        }
      }
      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        margin-top: 14px;
        margin-left: 14px;
        @media screen and (max-width: 380px) {
          font-size: 20px;
        }
      }
      i {
        display: flex;
        margin-left: auto;
        justify-content: center;
        align-items: center;
        margin-right: 32px;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .slide-fade-enter {
    transform: translateY(10px);
    transition: all 0.1s ease;
  }
}
</style>
