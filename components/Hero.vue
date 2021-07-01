<template>
  <div class="hero" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
    <!--  <img src="@/assets/hero.png" alt="" /> -->
    <div class="content container">
      <h1>Get discovered.</h1>
      <h2>Join the creator <span class="glitch" data-text="NETWRK">NETWRK</span></h2>
      <p>Stream and play. Become a pro.</p>
      <div>
        <a href="#" class="gltichingbtn" data-text="Apply Now">Apply Now</a>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImagePath from '@/assets/hero.png'
export default {
  name: 'Hero',
  data() {
    return {
      backgroundImagePath,
    }
  },
}
</script>
<style lang="scss" scoped>
@use "sass:math";
.hero {
  width: calc(100vw - 3rem);
  height: 100vh;
  max-height: 740px;
  padding: 0 1.5rem;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  place-items: center;

  @media screen and (max-width: 380px) {
    height: 100vh;
    width: 100%;
    padding: 3rem 0 0;
  }
}
.content {
  text-align: center;

  @media screen and (max-width: 380px) {
    text-align: left;
  }

  h2 {
    font-weight: bold;
    font-size: 3rem;
    text-shadow: 2px 0px 0px #71f95b, -2px 0px 4px #a577ff;

    @media screen and (max-width: 768px) {
      font-size: 1.875rem;
      text-shadow: none;
      margin: .5rem 0 1rem;
    }

    @media screen and (max-width: 380px) {
      font-size: 1.25rem;
      text-shadow: none;
      margin: .5rem 0 1rem;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 76px;
    text-shadow: 2px 0px 0px #71f95b, -2px 0px 4px #a577ff;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
      text-shadow: none;
    }

    @media screen and (max-width: 380px) {
      font-size: 2rem;
      text-shadow: none;
    }
  }
  p {
    font-size: 1.5rem;
    margin: 1.5rem 0 2.5rem;

    @media screen and (max-width: 380px) {
      font-size: 1.125rem;
      text-shadow: none;
      padding-top: 10px;
      padding-bottom: 22px;
    }

    @media screen and (max-width: 768px) {
      text-shadow: none;
      font-size: 1.25rem;
    }
  }
  i {
    text-decoration: underline;
  }
  button {
    background: #f0792e;
    border-style: solid;
    color: #f1f1f1;
    border-radius: 10px;
    border: none;

    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    @media screen and (max-width: 380px) {
      font-size: 25px;
      text-shadow: none;
      font-size: 16px;
      line-height: 25px;
    }
  }
  button:hover {
    background-color: transparent;
    transition: 0;
    color: #f1f1f1;
  }
}

.nav ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: #333;
  top: 0;
  // position: absolute;
  padding-top: 50px;
  padding-right: 150px;
}

.logo {
  font-weight: bold;
  font-size: 25px;
}

.nav ul > li {
  list-style-type: none;
}
.nav ul > li > button {
  color: #ffffff;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
}

.nav ul > li > button:hover {
  transition: ease all;
  border: none;
  color: #f1f1f1;
}

button {
  text-align: center;
  width: 165px;
  height: 54px;
  @media screen and (max-width: 380px) {
    margin-top: -25px;
    width: 165px;
    height: 35px;
  }
}
.glitch {
  color: white;
  position: relative;
  margin: 0 auto;
}
@keyframes noise-anim {
  $steps: 20;

  @for $i from 0 through $steps {
    #{percentage($i*math.div(1, $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: 2px 0px 0px #71f95b, -2px 0px 4px #a577ff;
  top: 0;
  color: white;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  $steps: 20;

  @for $i from 0 through $steps {
    #{percentage($i*math.div(1, $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
