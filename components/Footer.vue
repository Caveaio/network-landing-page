<template>
  <footer>
    <div class="container">
      <div class="rights">
        <div class="socials">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm.915 18.642v-6.07h1.96l.294-2.366h-2.254V8.695c0-.685.183-1.152 1.128-1.152h1.205V5.427a15.52 15.52 0 0 0-1.756-.094c-1.738 0-2.927 1.103-2.927 3.128v1.745H8.6v2.365h1.965v6.071h2.35z"
                opacity=".205"
              ></path>
            </svg>
          </i>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm.915 18.642v-6.07h1.96l.294-2.366h-2.254V8.695c0-.685.183-1.152 1.128-1.152h1.205V5.427a15.52 15.52 0 0 0-1.756-.094c-1.738 0-2.927 1.103-2.927 3.128v1.745H8.6v2.365h1.965v6.071h2.35z"
                opacity=".205"
              ></path>
            </svg>
          </i>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM6.863 17.32h2.465V9.39H6.863v7.93zm1.233-9.014a1.43 1.43 0 1 0-.003-2.859 1.43 1.43 0 0 0 .003 2.86v-.001zm10.462 9.014v-4.35c0-2.135-.46-3.777-2.956-3.777-1.2 0-2.003.657-2.332 1.28h-.033V9.39h-2.364v7.93h2.463v-3.923c0-1.034.196-2.036 1.479-2.036 1.263 0 1.28 1.183 1.28 2.103v3.856h2.463z"
                opacity=".205"
              ></path>
            </svg>
          </i>
        </div>
        <ul>
          <li>
            &copy; All rights reserved NETWRK {{ new Date().getFullYear() }}
          </li>
          <li style="margin-left: auto">
            Made by
            <a class="cavea" href="https://cavea.io" target="_blank"
              >Cavea.io</a
            >
          </li>
          <li>
            <NuxtLink to="/terms">
              <a href="">Terms of Service</a>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/policy">
              <a href="">Privacy Policy</a>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 3rem 0;
  background: #0b0b19;

  @media screen and (max-width: 380px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    @media screen and (max-width: 380px) {
      display: inline-block;
      margin-top: 0px;
      margin-left: 0px;
    }
  }
  .socials {
    margin-top: 62px;
    display: flex;
    margin-left: 15px;
    @media screen and (max-width: 380px) {
      display: inline-block;
      margin-top: 0px;
      margin-left: 0px;
    }
    i {
      margin-right: 5px;
      @media screen and (max-width: 380px) {
        margin-right: 0px;
        display: inline-block;
      }
    }
    i:hover {
      color: #f1f1f1;
    }
  }
  .rights {
    color: #6d739d;
    display: flex;

    @media screen and (max-width: 380px) {
      margin-top: 0px;
      display: inline-block;
    }
    .socials {
      display: none;
    }
    ul {
      width: 100%;
      display: flex;

      @media screen and (max-width: 380px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 0px;
        margin-left: 0px;
      }

      li {
        justify-content: flex-end;
        list-style-type: none;
        background: #0b0b19;

        &:not(:last-child) {
          margin-right: 2.5rem;
        }

        @media screen and (max-width: 380px) {
          display: inline-block;
          margin-top: 5px;
        }
        @media screen and (min-width: 1024px) {
          margin-top: 5px;
        }
        a {
          color: #6d739d;
          text-decoration: none;
        }
        a:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
