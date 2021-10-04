<template>
<ion-page>
  <ion-content>
    
    <!-- <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        
        <title>Slider</title>
    </head> -->
    <!-- <body> -->
      
        <div class="container"> 
            <div class="slider">

                <div class="box1 box" >
                    
                    
                    <div class="bg"></div>
                    <div class="details">
                        <!-- <h1 class="ion-padding-top">AFFI</h1> -->
                        <div v-if="status==1"> 
                        <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                        <button>Check Now</button> -->
                        </div>

                        <div v-if="status==2"> 
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                        <button>Check then</button>
                        </div>
                    </div>

                    <div class="illustration"><div class="inner ">
                      <img src="../../public/assets/2.png">
                      
                      </div>
                      </div>
                    


                </div>
                                
                
                <div class="box2 box" >
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Login</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                        <button>Check Now</button>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box3 box" >
                    <div class="bg"></div>
                    <div class="details">
                        <h1>I'm the third Box</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                        <button>Check Now</button>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box4 box" >
                    <div class="bg"></div>
                    <div class="details">
                        <h1>I'm the fourth Box</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                        <button>Check Now</button>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box5 box" >
                    <div class="bg"></div>
                    <div class="details">
                        <h1>I'm the fifth Box</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                            diam, ac mattis orci pellentesque eget. 
                        </p>
                        <button>Check Now</button>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
            </div>
<!-- <ion-row style="padding-top:3em;">
            <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
            <div class="trail">
                    <div class="box1" @click="state(1)">1</div>
                    <div class="box2" @click="state(2)">2</div>
                    <div class="box3" @click="state(3)">3</div>
                    <div class="box4" @click="state(4)">4</div>
                    <div class="box5" @click="state(5)">5</div>
            </div>
</ion-row> -->
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
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {


  },
  setup() {
    const router = useRouter();
    const { mutate: auth, onDone } = useMutation(gql`
      mutation auth($user: String!, $pass: String!) {
        tokenAuth(username: $user, password: $pass) {
          token
          user {
            id
          }
        }
      }
    `);
    onDone((result) => {
      console.log(result.data.tokenAuth.token);
      localStorage.token = result.data.tokenAuth.token;
      localStorage.id = result.data.tokenAuth.user.id;
      router.push({ path: "/tabs" });
    });



    
    onMounted(()=>{
      console.log("amir")
     
    })
    const user = ref("");
    const pass = ref("");
    
    return {
      ellipse,
      square,
      triangle,
      person,
      user,
      pass,
      auth,
      router,
      status
    };
  },
  methods: {
    Login() {
      // console.log(this.user,this.pass)
      this.auth({ user: this.user, pass: this.pass });
    },
  },
});
</script>

<style lang="scss" scoped>
// Colors
$b1cd: #500033;
$b1cl: #FF0077;
$b2cd: #000050;
$b2cl: #0033FF;
$b3cd: #00501D;
$b3cl: #00FF44;
$b4cd: #554D00;
$b4cl: #FF4E00;
$b5cd: #300050;
$b5cl: #8000FF;
$black: #000;
$white: #fff;
$grey: #B5B4B4;

////////// Mixin 

// Generate different colors for slides
@mixin color_render($DC, $LC) {
    background-color: var(--brand-primary);;
    .illustration .inner {
        // background-color: $LC;
        // &::after, &::before{ background-color: rgba($LC, .4);}
    }
    button {background-color: $LC;}
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
    transition: all .25s ease-in;
    // overflow-x: auto;
    // scroll-snap-type: x mandatory;
    // -webkit-overflow-scrolling: touch;
    // scroll-behavior: smooth;
    transform: translateX(0);

    @media only screen and (max-width: 1000px) {
        height: 100vh;
    }

    .box {
        height: 100%;
        width: 100%;
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
            padding: 2rem;
            background-color: rgba($black, .2);
            width: 55%;
            transform: skewX(7deg);
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
                padding:2rem;
                transform: translateY(-9rem);
            }
            
            h1 {
                font-size: 3.5rem;
                font-weight: 500;
                margin-bottom: .5rem;
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
                padding: 1rem 3rem;
                color: $white;
                border-radius: 2rem;
                outline: none;
                border: none;
                cursor: pointer;
                transition: all .3s ease;

                &:hover {opacity: .8;}
    
                &:focus {
                    outline: none;
                    border: none;
                }
            }
        }
    }

    .box1 {@include color_render($b1cd, $b1cl)}
    .box2 {@include color_render($b2cd, $b2cl)}
    .box3 {@include color_render($b3cd, $b3cl)}
    .box4 {@include color_render($b4cd, $b4cl)}
    .box5 {@include color_render($b5cd, $b5cl)}

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
            background-image: url('../../public/assets/2.png');
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

            &::after {transform: translate(4rem, -1rem);}
            &::before {transform: translate(2rem, -2rem);}
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
    opacity: .2;
    transition: all .3s ease;

    @media only screen and (max-width: 650px) {
       display: none;
    }

    &:hover { opacity: 1;}
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
        opacity: .3;
        transition: all 0.3s ease;

        &:hover {opacity: .6;}

        @media only screen and (max-width: 650px) {
            padding: 1rem;
        }
    }
}

.active {
    opacity: 1 !important;
}
</style>
