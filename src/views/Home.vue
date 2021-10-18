<template>
  <ion-page>
    <ion-content fullscreen="true">
      <div class="intro">
        <div class="black"></div>
        <div class="white"></div>
        <div class="boxfather">
          <div class="box">
            <ion-row class="ion-padding">
              <ion-col class="ion-text-center">
                <img
                  :src="require('../../public/assets/2.png')"
                  style="padding-bottom:10vh; max-height:50vh;"
                />
              </ion-col>
            </ion-row>
            <!-- <h1>WELCOME</h1> -->
            <ion-row>
              <ion-col class="ion-text-center">
                <!-- <button>Enter</button> -->
                <button type="button" class="btn">
                  <span>
                    <b></b>
                    <svg viewBox="-5.5 -5.5 71 71" id="circle">
                      <circle
                        cx="30"
                        cy="30"
                        r="30"
                        stroke="white"
                        stroke-width="11"
                        fill="transparent"
                      ></circle>
                    </svg>
                  </span>
                </button>
              </ion-col>
            </ion-row>
          </div>
        </div>
      </div>

      <div class="homepage">
        <div class="container">
          <div class="slider">
            <div class="boxx">
              <div class="bg"></div>
              <div class="details">
                <!-- <h1 class="ion-padding-top">AFFI</h1> -->
                <ion-row class="ion-padding" style="padding-top:15vh;">
                  <ion-col class="ion-text-center">
                    <ion-button
                      @click="shop"
                      style="color:var(--brand-tertiary); --background:var(--brand-quaternary); width:40vw;"
                    >
                      ثبت نام فروشگاه
                    </ion-button>
                  </ion-col>
                </ion-row>
                <ion-row style="padding:1em">
                  <ion-col class="ion-text-center">
                    <ion-button
                      @click="affi"
                      style="color:var(--brand-tertiary); --background:var(--brand-quaternary); width:40vw;"
                    >
                      ثبت نام افی
                    </ion-button>
                  </ion-col>
                </ion-row>
                <ion-row style="padding:1em">
                  <ion-col class="ion-text-center">
                    <ion-button
                      @click="login()"
                      style="color:var(--brand-quaternary); --background:var(--brand-tertiary); width:40vw;"
                    >
                      ورود
                    </ion-button>
                  </ion-col>
                </ion-row>
                <ion-row class="ion-padding" style="bottom:50px;">
                  <ion-col class="ion-text-center">
                    <ion-text> Affi copyright &copy; </ion-text>
                  </ion-col>
                </ion-row>

                <div v-if="status == 2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                    mattis orci pellentesque eget.
                  </p>
                  <button>Check then</button>
                </div>
              </div>

              <div class="illustration">
                <ion-col class="ion-text-center">
                <div class="inner ">
                  <img
                    :src="require('../../public/assets/2.png')"
                    style="padding-top:5vh; max-height:30vh"

                  />
                </div>
                </ion-col>
              </div>
            </div>

            <div class="box2 boxx">
              <div class="bg"></div>
              <div class="details">
                <h1>Login</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div class="illustration"><div class="inner"></div></div>
            </div>

            <div class="box3 boxx">
              <div class="bg"></div>
              <div class="details">
                <h1>I'm the third Box</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div class="illustration"><div class="inner"></div></div>
            </div>

            <div class="box4 boxx">
              <div class="bg"></div>
              <div class="details">
                <h1>I'm the fourth Box</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div class="illustration"><div class="inner"></div></div>
            </div>

            <div class="box5 boxx">
              <div class="bg"></div>
              <div class="details">
                <h1>I'm the fifth Box</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div class="illustration"><div class="inner"></div></div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonText,
  IonRow,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { ellipse, square, triangle, person } from "ionicons/icons";
import { defineComponent, onMounted, ref } from "vue";
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";

import { useRouter } from "vue-router";
import jQuery from "jquery";

export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonText,
    IonRow,
    IonContent,
    IonButton,
    IonCol,
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
      const $ = jQuery;
      $(function() {
        $(".homepage").hide();
        // $('.box').delay(500).effect("bounce", { times: 8 }, 800);
        $(".box")
          .hide()
          .slideDown(500);

        $("button").click(function() {
          $(".intro").slideUp(400);
          $(".box").slideUp(200);
          $(".homepage")
            .delay(500)
            .slideDown(300);
        });
      });
    });
    const user = ref("");
    const pass = ref("");

    return {
      ellipse,
      square,
      triangle,
      person,
      user,
      pass,
      router,
      status,
      
    };
  },
  methods: {
    login() {
      // console.log(1)
      // this.auth({ user: this.user, pass: this.pass });
      this.router.push({ path: "/login" });
    },
    affi() {
      // console.log(1)
      // this.auth({ user: this.user, pass: this.pass });
      this.router.push({ path: "/affiRegister" });
    },
    shop() {
      // console.log(1)
      // this.auth({ user: this.user, pass: this.pass });
      this.router.push({ path: "/shopRegister" });
    },
  },
});
</script>

<style lang="scss" scoped>
// Colors
$b1cd: #500033;
$b1cl: #ff0077;
$b2cd: #000050;
$b2cl: #0033ff;
$b3cd: #00501d;
$b3cl: #00ff44;
$b4cd: #554d00;
$b4cl: #ff4e00;
$b5cd: #300050;
$b5cl: #8000ff;
$black: #000;
$white: #fff;
$grey: #b5b4b4;

////////// Mixin

// Generate different colors for slides
@mixin color_render($DC, $LC) {
  background-color: var(--brand-primary) !important;
  .illustration .inner {
    // background-color: $LC;
    // &::after, &::before{ background-color: rgba($LC, .4);}
  }
  button {
    background-color: $LC;
  }
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  background-color: #000;
  color: $white;
  padding: 8rem;
  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
}

.container {
  background-color: var(--brand-primary) !important;
  position: relative;
  overflow: hidden;
  border-radius: 5rem;

  @media only screen and (max-width: 1000px) {
    border-radius: 0;
  }
}

.slider {
  display: flex;
  width: 500%;
  height: 55rem;
  transition: all 0.25s ease-in;
  // overflow-x: auto;
  // scroll-snap-type: x mandatory;
  // -webkit-overflow-scrolling: touch;
  // scroll-behavior: smooth;
  transform: translateX(0);

  @media only screen and (max-width: 1000px) {
    height: 100vh;
  }

  .boxx {
    height: 100%;
    width: 110%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    overflow: hidden;
    position: relative;

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }

    .bg {
      padding: 1rem;
      background-color: rgba($black, 0.2);
      width: 55%;
      // transform: skewX(7deg);
      position: absolute;
      height: 100%;
      left: -10%;
      padding-left: 20rem;
      transform-origin: 0 100%;

      @media only screen and (max-width: 800px) {
        width: 65%;
      }

      @media only screen and (max-width: 650px) {
        width: 100%;
        left: 0;
        bottom: 0;
        height: 54%;
        transform: skewX(0deg);
      }

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: inherit;
        pointer-events: none;
        transform: skewX(10deg);

        @media only screen and (max-width: 650px) {
          width: 120%;
          bottom: 0;
          transform: skewX(0deg);
        }
      }
    }

    .details {
      padding: 5rem;
      padding-left: 10rem;
      z-index: 100;
      grid-column: 1 / span 1;
      grid-row: 1 / -1;

      @media only screen and (max-width: 650px) {
        grid-row: 2 / span 1;
        grid-column: 1 / -1;
        text-align: center;
        padding: 2rem;
        transform: translateY(-9rem);
      }

      h1 {
        font-size: 3.5rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      p {
        display: inline-block;
        font-size: 1.3rem;
        color: $grey;
        margin-bottom: 2rem;
        margin-right: 5rem;

        @media only screen and (max-width: 800px) {
          margin-right: 0;
        }
      }

      button {
        // padding: 1rem 3rem;
        color: $white;
        border-radius: 2rem;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.8;
        }

        &:focus {
          outline: none;
          border: none;
        }
      }
    }
  }

  .illustration {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    justify-self: center;

    @media only screen and (max-width: 650px) {
      grid-row: 1 / span 1;
      grid-column: 1 / -1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      height: 25rem;
      width: 18rem;
      border-radius: 3rem;
      // background-color: $b1cl;
      background-image: url("../../public/assets/2.png");
      position: relative;
      transform: skewX(-10deg);

      @media only screen and (max-width: 800px) {
        height: 20rem;
        width: 15rem;
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 3rem;
        top: 0;
        left: 0;
      }

      &::after {
        transform: translate(4rem, -1rem);
      }
      &::before {
        transform: translate(2rem, -2rem);
      }
    }
  }
}

.prev,
.next,
.trail {
  z-index: 10000;
  position: absolute;
}

.prev,
.next {
  width: 4rem;
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.3s ease;

  @media only screen and (max-width: 650px) {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
}
.prev {
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
}

.next {
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
}

.trail {
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;

  @media only screen and (max-width: 650px) {
    width: 90%;
    bottom: 13%;
  }

  div {
    padding: 2rem;
    border-top: 3px solid #fff;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    @media only screen and (max-width: 650px) {
      padding: 1rem;
    }
  }
}

.active {
  opacity: 1 !important;
}

* {
  margin: 0;
  padding: 0;
}
.intro {
  margin: auto;
}
.black {
  width: 50%;
  float: left;
  background: var(--brand-primary);
  height: 100vh;
}

.white {
  width: 50%;
  float: right;
  background: var(--brand-quaternary);
  height: 100vh;
}

.box {
  height: 50vh;
  width: 70vw;
  background: transparent;
  position: absolute;
  top: 20vh;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 20px;
}

.boxfather {
  width: 100%;
  position: absolute;
}
.box h1 {
  color: #e4e4e4;
  font-size: 5em;
  text-align: center;
  position: relative;
  top: 70px;
  font-family: "Montserrat", sans-serif;
}

button {
  --w: 6em;
  --bg: rgb(var(--rgb));
  --bga: rgba(var(--rgb), 0.4); /* Safari fix */
  -webkit-appearance: none;
  border: none;
  font-size: 100%;
  width: var(--w);
  height: var(--w);
  background: var(--brand-tertiary);
  box-shadow: 0 3px 12px 2px var(--bga);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1s transform, 0.3s box-shadow;
  will-change: transform, box-shadow;
  backface-visibility: hidden;
}

button > * {
  pointer-events: none;
}

button:focus {
  outline: none;
}

button:active {
  transform: scale(0.97);
}

button:after {
  --bg: rgb(var(--rgb));
  content: "";
  position: absolute;
  top: -15%;
  left: -15%;
  width: 200%;
  height: 200%;
  background: var(--bg);
  border-radius: inherit;
  transform: translate(5%, 5%) scale(0.03);
  pointer-events: none;
}

button.animating:after {
  animation: c 0.5s cubic-bezier(0.5, 0, 0.5, 1) backwards;
}

button.active,
button:not(.active):after {
  --rgb: 64, 227, 120;
}

button:not(.active),
button.active:after {
  --rgb: 229, 55, 94;
}

@keyframes c {
  to {
    transform: none;
  }
}

button span {
  display: inline-block;
  position: relative;
  margin-top: 5px;
}
button b {
  --w: 7px;
  overflow: hidden;
  border-radius: var(--w);
  display: grid;
  width: var(--w);
  height: 35px;
  top: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 3;
  will-change: transform;
}
button b:before {
  content: "";
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: var(--w);
  transform: translateY(-15px);
  transition-timing-function: var(--timing);
  transition: 0.5s;
}

button.active b:before {
  transform: translateY(12px);
  transition-delay: 0.27s;
  transition-timing-function: cubic-bezier(0.25, 0.25, 0.25, 1.25);
}

button svg {
  --dash: 190;
  stroke-linecap: round;
  stroke-dasharray: var(--dash);
  stroke-dashoffset: var(--dash);
  width: 46px;
  height: 46px;
  transform: scaleX(-1) rotate(-89deg);
  transition: 0.4s;
  transition-timing-function: var(--timing);
  margin: auto;
  position: relative;
  z-index: 1;
  will-change: transform, stroke-dashoffset;
}
button:not(.active) svg {
  stroke-dashoffset: 40;
  transform: scaleX(-1) rotate(-52deg);
  transition: 0.5s 0.25s;
}

.homepage {
  height: 100vh;
  position: relative;
  //   top:40px;
}
.homepage p {
  width: 80%;
  line-height: 1.5;
  margin: 50px auto;
  font-family: oxygen;
  font-size: 18px;
  color: #585858;
}
.homepage h1 {
  padding-top: 50px;
  width: 80%;
  margin: auto;
  font-family: montserrat;
  //   color: #525252;
  font-size: 40px;
}
</style>
