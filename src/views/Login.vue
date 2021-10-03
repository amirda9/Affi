<template>
  <ion-page>
    <!-- <ion-header>
  <ion-toolbar>
    <ion-title
      class="ion-text-center"
      style="color: white;"
      translate>ورود</ion-title
    >
  </ion-toolbar>
</ion-header> -->

    <!-- <ion-content>
  <div style="margin-top: 7em">
      <ion-card>
    <ion-grid>
      <ion-row class="ion-justify-content-center ion-padding-top ion-padding-horizontal">
        <ion-col class="ion-text-left" size="12" size-lg="8">
          <ion-input v-model="user" placeholder="نام کاربری"> </ion-input>
        </ion-col>
      </ion-row>

      <ion-row
        class="ion-justify-content-center ion-padding-horizontal"
        style="padding-top: 0.3em"
      >
        <ion-col class="ion-text-left" size="12" size-lg="8">
          <ion-input
            shape="round"
            v-model="pass"
            placeholder="رمز عبور"
            type="password"
          >
          </ion-input>
        </ion-col>
      </ion-row>

      <ion-row
        class="ion-justify-content-center ion-padding-horizontal"
        style="padding-bottom: 1em"
      >
        <ion-col class="ion-text-center">
          <ion-label style="font-size: 0.8em; color: #57ca12; padding-left: 0.5em;">
            فراموشی رمز عبور
          </ion-label>
        </ion-col>
      </ion-row>

      <div class="footer">
        <ion-row class="ion-justify-content-center ion-padding-horizontal">
          <ion-col class="ion-text-center" size="8" size-lg="6">
            <ion-button
            @click="login()"
              shape="round"
              style="width: 100%; color: white; --background: #00a750; text-transform: none;">
              ورود
            </ion-button>
          </ion-col>
        </ion-row>
      </div>
    </ion-grid>
      </ion-card>
  </div>
</ion-content> -->

    <ion-content>
      <div class="circle circle1"></div>

      <div class="container">
        <div style="width:80%; display: inline-block;">
        <ion-icon name="person" color="primary"></ion-icon>
        <ion-item
          lines="none"
          class="ion-text-center ion-margin itemDesign"
          color="light"
        >
          <ion-input
            placeholder="Email"
            type="text"
            clearInput="true"
            v-model="user"
          ></ion-input>
        </ion-item>

          <ion-item
          size="6"
            lines="none"
            class="ion-text-center ion-margin itemDesign"
            color="light"
          >
            <ion-input
            v-model="pass"
            v-on:keyup.enter="onEnter()"
              placeholder="Password"
              type="password"
              clearInput="true"
            ></ion-input>
          </ion-item>
        </div>
      </div>
      

      <div class="circle circle2"></div>

      <div class="align ion-text-center">
        <ion-button @click="Login()" expand="block" shape="round" style="color:var(--brand-tertiary); --background:var(--brand-quaternary)"
          >Login</ion-button
        >
        <ion-text style="color:var(--brand-tertiary)" @click="forget()"><p>Forgot Password?</p></ion-text>
        <ion-text style="color:var(--brand-tertiary)" @click="forget()"><p>Register</p></ion-text>
        
        <ion-row>
          <ion-col size="3"
            ><ion-icon name="ellipse" color="light"></ion-icon
          ></ion-col>
          <ion-col size="3"
            ><ion-icon name="logoGoogle" color="light"></ion-icon
          ></ion-col>
        </ion-row>
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
import { ellipse, square, triangle, person,logoGoogle } from "ionicons/icons";
import { defineComponent,ref } from "vue";
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Login",
  components: {
    IonPage,
    IonText,
    IonRow,
    IonContent,
    IonInput,
    IonItem,
    IonButton,
    IonCol,
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
      router,
      logoGoogle
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
    },
    forget(){
      // console.log("amir")
      this.$router.push({
	path: '/forgetPass',
});
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
  color: white;
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
</style>
