<template>
  <div class="hero">
    <img src="@/assets/hero.png" alt="" />
    <div class="content">
      <h1>GET DISCOVERED.</h1>
      <h2>JOIN THE CREATOR <i class="glitch" data-text="NETWRK">NETWRK</i></h2>
      <p>Stream and play. Become a pro.</p>
      <div>
        <a href="#" class="gltichingbtn" data-text="Apply Now">Apply Now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
@use "sass:math";
.hero img {
  width: 100%;
  z-index: 2;
  @media screen and (max-width: 380px) {
    width: 100vw;
    height: 300px;
  }
}
.content {
  font-family: 'Oswald';
  position: absolute;
  z-index: 1;
  top: 35%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  // text-align:center;
  @media screen and (max-width: 380px) {
    top: 0%;
  }
  @media screen and (min-width: 768px) {
    top: 15%;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    @media screen and (max-width: 380px) {
      line-height: 0px;
    }
    // @media screen and (min-width: 1024px) {
    //   line-height: 0px;
    // }
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 76px;
    line-height: 80px;
    text-shadow: 2px 0px 0px #71f95b, -2px 0px 4px #a577ff;
    @media screen and (max-width: 380px) {
      font-size: 25px;
      line-height: 0px;
      text-shadow: none;
      white-space: nowrap;
      margin-top: 10px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 50px;
      line-height: 0px;
      text-shadow: none;
      white-space: nowrap;
      margin-top: 10px;
    }
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 76px;
    line-height: 80px;
    text-shadow: 2px 0px 0px #71f95b, -2px 0px 4px #a577ff;
    @media screen and (max-width: 380px) {
      font-size: 25px;
      text-shadow: none;
      line-height: 10px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 50px;
      line-height: 10px;
    }
  }
  p {
    padding-top: 21px;
    padding-bottom: 44px;
    @media screen and (max-width: 380px) {
      font-size: 15px;
      text-shadow: none;
      padding-top: 10px;
      padding-bottom: 22px;
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
    font-style: normal;
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
  position: absolute;
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
  font-style: normal;
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
