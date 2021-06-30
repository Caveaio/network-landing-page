<template>
  <div class="container">
    <OrganismsTop />
      <Nuxt />
    <OrganismsFooter />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
:root {
  --white: #fff;
  --dark-900: #101125;
  --dark-800: #1a162f;
  --dark-700: #2c2444;
  --dark-500: #43415d;
  --dark-400: #655f76;
  --dark-300: #a09caa;
  --dark-200: #bcb9c3;
  --dark-100: #d8d6dc;
}
.container {
  min-height: calc(100vh - 70px);
}
* {
  // box-sizing: border-box;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  transition: 0.3s;
  color:white;
  &::before,
  &::after {
    box-sizing: border-box;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
}
html {
  scroll-behavior: smooth;
}
body,
html {
  min-height: 100vh;
  padding-top: 0;
  width: 100%;
  background-color: var(--dark-900);
}

button,
a {
  cursor: pointer;
}

a {
  text-decoration: none;
}


.gltichingbtn {
    width: 200px;
    display: block;
    position: relative;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 30px;
    font-size: .75em;
    letter-spacing: .35em;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid hsla(0,0%,100%,.2);
    transition: all .1s ease;
    &:before, 
    &:after {
      content: 'APPLY NOW';
      position: absolute;
      top: 0;
      left: 0;
      padding: 8px 0;
      width: 100%;
      -webkit-clip: rect(0px, 0px, 0px, 0px);
      clip: rect(0px, 0px, 0px, 0px);
      text-shadow: 2px 0px 0px #71F95B, -2px 0px 4px #A577FF;
      background: hsla(0,0%,100%,.2);
      color: #000;
    }
    
    &:before {
      left: -3px;
      top: -2px;
      text-shadow: 2px 0 #fff;
      box-shadow: 2px 0 #fff;
    }
    &:after {
      left: 2px;
      bottom: -2px;
      text-shadow: -1px 0 #fff;
      box-shadow: -1px 0 #fff;
    }
    &:hover {
      background: white;
      color: black;
    }
    &:hover:before {
        animation: glitch-test 1.5s infinite linear alternate-reverse;
    }
    &:hover:after {
        animation: glitch-test 2s infinite linear alternate;
    }
}
.glitchingbtn > a {
    display: block;
    color: white;
    text-decoration: none;
    width: 175px;
    font-family: "Oswald";
}
@keyframes glitch-test {
  0% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  5.88235% {
    clip: rect(0px, 600px, 0px, 0px);
  }
  11.76471% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  17.64706% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  23.52941% {
    clip: rect(100px, 600px, 100px, 0px);
  }
  29.41176% {
    clip: rect(0px, 600px, 600px, 0px);
  }
  35.29412% {
    clip: rect(100px, 600px, 0px, 0px);
  }
  41.17647% {
    clip: rect(0px, 600px, 600px, 0px);
  }
  47.05882% {
    clip: rect(100px, 600px, 0px, 0px);
  }
  52.94118% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  58.82353% {
    clip: rect(100px, 450px,100px, 0px);
  }
  64.70588% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  70.58824% {
    clip: rect(100px, 450px, 100px, 0px);
  }
  76.47059% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  82.35294% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  88.23529% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  94.11765% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  100% {
    clip: rect(0px, 450px, 0px, 0px);
  }
}

</style>
