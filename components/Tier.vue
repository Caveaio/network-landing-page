<template>
  <div class="tier-container container">
    <div class="tier-inner">
      <h3>The Elite Tier</h3>
      <p>
        Apply and create a profile to get the opportunity to partner with top
        tier esports & gaming organizations. NETWRK's is the main monetization
        platform for content creators.
      </p>
      <blockquote>Don't sell your game short. Join the NETWRK</blockquote>
      <div>
        <a href="#" class="gltichingbtn" data-text="Apply now">Apply now</a>
      </div>
      <div class="faq">
        <h3>Frequently Asked Questions</h3>
        <div v-for="faq in faqs" :key="faq.title" class="faq-wrap" :class="{ 'faq-wrap--open' : faq.display }">
          <div class="accordion" @click="display($event, faq)">
            <h3>{{ faq.title }}</h3>
            <div class="faq__icon">{{ faq.display ? faq.icons.f : faq.icons.t }}</div>
          </div>
          <div v-if="faq.display" class="faq-context">
            <span>{{ faq.context }}</span>
          </div>
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
a {
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
  margin-bottom: 10rem;

  .tier-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 54px;

      @media screen and (max-width: 380px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    p {
      color: #6d739d;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 2;
      text-align: center;
      max-width: 960px;

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
      }
    }
    blockquote {
      margin-top: 25px;
      margin-bottom: 43px;
      color: #fff;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
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
    .gltichingbtn {
      margin-bottom: 6rem;
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
      width: 750px;

      .accordion {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        overflow: hidden;
        width: 100%;
        align-items: center;
        z-index: 9;

        @media screen and (max-width: 380px) {
          width: 100vw;
          h3 {
            font-size: 13px;
          }
        }
      }

      .faq-wrap {
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        border-radius: 5px;
        overflow: hidden;
        background-color: #1a162f;
        width: 100%;
        transition: all .5s ease;

        &:not(:last-child) {
          margin-bottom: .5rem;
        }

        &:hover, &--open {
          background-color: #211d34;
        }

        &--open {
          h3 {
            color: #fff;
          }

          .accordion {

          }
        }
      }

      .faq-context {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background: #1a162f;
        width: 750px;
        height: auto;
        @media screen and (max-width: 380px) {
          width: 100%;
          // margin-left: 10px;
          // margin-right: 10px;
        }
        span {
          color: #6d739d;

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
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .faq__icon {
        margin-left: auto;
      }
    }
  }
  .slide-fade-enter {
    transform: translateY(10px);
    transition: all 0.1s ease;
  }

  .faq-wrap .accordion {
    padding: 1.5rem 2rem;
    align-items: center;

    &:hover {
      h3 {
        color: #fff;
      }
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      color: #6d739d;
      margin: 0;
    }
  }
}
</style>
