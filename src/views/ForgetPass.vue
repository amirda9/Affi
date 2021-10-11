<template>
  <ion-page>

   <ion-content>
      <div class="circle circle1"></div>

      <div class="container">
        <div style="width:80%; display: inline-block;">
        <ion-icon :name="person" color="primary"></ion-icon>
        <ion-item
          lines="none"
          class="ion-text-center ion-margin itemDesign"
          color="light"
        >
          <ion-input
            placeholder="شماره همراه"
            type="text"
            clearInput="true"
            v-model="user"
          ></ion-input>
        </ion-item>

          <!-- <ion-item
          size="6"
            lines="none"
            class="ion-text-center ion-margin itemDesign"
            color="light"
          >
            <ion-input
            v-model="pass"
            v-on:keyup.enter="onEnter()"
              placeholder="رمز عبور"
              type="password"
              clearInput="true"
            ></ion-input>
          </ion-item> -->
        </div>
      </div>
      

      <div class="circle circle2"></div>

      <div class="align ion-text-center">
        <ion-button @click="Login()" expand="block" shape="round" style="color:var(--brand-tertiary); --background:var(--brand-quaternary)"
          >ارسال</ion-button
        >
        <!-- <ion-text style="color:var(--brand-tertiary)" @click="forget()"><p>فراموشی رمز عبور</p></ion-text> -->
        <!-- <ion-text style="color:var(--brand-tertiary)" @click="forget()"><p>Register</p></ion-text> -->
        
        <ion-row>
          <ion-col size="3"
            ><ion-icon :name="ellipse" color="light"></ion-icon
          ></ion-col>
          <ion-col size="3"
            ><ion-icon :name="logoGoogle" color="light"></ion-icon
          ></ion-col>
        </ion-row>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { ellipse, square, triangle, person } from "ionicons/icons";
import { defineComponent,ref } from "vue";
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Login",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonItem,
    IonButton,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    const user = ref('')
    const pass = ref('')
    const { mutate: auth,onDone,onError } = useMutation(gql`
      mutation auth ($user: String!,$pass:String!) {
        tokenAuth (phoneNumber: $user , password:$pass) {
          token
          user{
            id
          }
        }
      }
    `)

 onDone(result=>{

        console.log(result.data.tokenAuth)
        localStorage.token = result.data.tokenAuth.token;
        localStorage.id = result.data.tokenAuth.user.id;
        router.push({ path: '/tabs' })       
    });

  onError(()=>{
    alert("Enter a valid Creditentials.");
  })
    
    return {
      ellipse,
      square,
      triangle,
      person,
      user,
      pass,
      auth,
      router
    };
  },
  methods:{
    Login(){
      // console.log(this.user,this.pass)
      this.auth({user:this.user,pass:this.pass});
      this.user = "";
      this.pass = "";
    },
    onEnter(){
     this.auth({user:this.user,pass:this.pass});
     this.user = "";
     this.pass = "";
    }
  }
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar,
*::-webkit-scrollbar {
  display: none;
  overflow: hidden;
}

.scroll-content {
  overflow: hidden;
}

ion-content {
  --background: linear-gradient(
    45deg,
    var(--brand-tertiary) 50%,
    var(--brand-secondary) 100%
  );
  overflow: hidden;
  --overflow: hidden;
}

.circle {
  height: 600px;
  width: 600px;
  // background: linear-gradient(90deg, var(--ion-color-secondary) 0%, var(--ion-color-primary) 100%);
  background: var(--brand-primary);
  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);
  border-radius: 50%;
}
.circle1 {
  margin-left: -200px;
  margin-top: -255px;
  margin-bottom: 10px;
}

.circle2 {
  margin-left: -15px;
  margin-top: -18px;
}

.container {
  position: absolute;
  top: 6vh;
  // left: 9vw;
  // margin-left: auto;
  // margin-right: auto;
  width: 100%;
  align-items: center;
  text-align: center;
}

.itemDesign {
  border: 1px solid var(--ion-color-light);
  border-radius: 20px;
}

ion-icon {
  font-size: 5rem;
  margin-left: 25vw;
}

.align {
  position: absolute;
  width: 65%;
  margin: auto;
  bottom: 8vh;
  left: 16vw;
  ion-text {
    font-size: small;
  }
}

ion-row {
  margin-left: -8vw;
  ion-icon {
    font-size: 2rem;
  }
}
@import url('https://fonts.googleapis.com/css?family=Rajdhani:300&display=swap');

$blur: 20px;
$shadow-opacity: 0.30;
$image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/jess-harding-lqT6NAmTaiY-unsplash.jpg';


body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}


body {
   display: flex;
  justify-content: center;
  align-items: center;
  background-image: url($image);
  background-size: cover;
  background-position: center;
font-family: 'Rajdhani', sans-serif;

}

*, *:before, *:after {
  box-sizing: border-box;
}

.glass {
  height: 100%;
  width: 100%;
   background-image: url($image);
  background-size: cover;
  background-position: center;
  clip-path: inset(10em);
  filter: blur($blur);
  display: flex;
  justify-content: center;
  align-items: center;
}

.drop-shadow {
  height: 100%;
  width: 100%;
filter:  drop-shadow(0px 20px 10px rgba(0, 0, 0, $shadow-opacity));
  display: flex;
  justify-content: center;
  align-items: center;
   &:before {
    display: block;
    content: "";
    position: absolute;
    top: 10em;
     height: calc(100% - 20em);
    width: calc(100% - 20em);
     border-top: 2px solid rgba(225,225,225, 0.2);
    border-left: 1px solid rgba(225,225,225, 0.1);
     border-right: 1px solid rgba(225,225,225, 0.3);
     z-index: 2;
   //  filter: blur(1px);
  }
    
  
  > span {
    position: absolute;
    z-index: 5;
    color: white;
    font-size: 4em;
    letter-spacing: 0.75em;
    padding-left: 0.375em;
  }
}

@media (max-width: 980px) {
  .glass {
     clip-path: inset(5em);
  }
  .drop-shadow {
    &:before {
      top: 5em;
      width: calc(100% - 10em);
    }
    > span {
      font-size: 4em;
    }
  }
}

@media (max-width: 640px) {
  
  .drop-shadow {
    > span {
      font-size: 2em;
    }
  }
}
</style>
