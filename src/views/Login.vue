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


<ion-content >
  <div class="circle circle1"></div>

  <div class="container">
    <ion-icon name="person" color="primary"></ion-icon>
    <ion-item lines="none" class="ion-text-center ion-margin itemDesign" color="light">
      <ion-input placeholder="Email" type="text" clearInput="true"></ion-input>
    </ion-item>    
    <ion-item lines="none" class="ion-text-center ion-margin itemDesign" color="light">
      <ion-input placeholder="Password" type="password" clearInput="true"></ion-input>
    </ion-item>
  </div>

  <div class="circle circle2"></div>

  <div class="align ion-text-center">
    <ion-button expand="block" shape="round" color="primary">Login</ion-button>
    <ion-text color="medium"><p>Forgot Password?</p></ion-text>
    <ion-row>
      <ion-col size="3"><ion-icon name="logo-facebook" color="primary"></ion-icon></ion-col>
      <ion-col size="3"><ion-icon name="logo-google" color="danger"></ion-icon></ion-col>
    </ion-row>
  </div>
</ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonPage,IonText,IonRow,IonContent,IonInput,IonItem,IonButton,IonCol,IonIcon } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { defineComponent } from 'vue';


export default defineComponent ({
  name: 'Login',
  components: {  IonPage,IonText,IonRow,IonContent,IonInput,IonItem,IonButton,IonCol,IonIcon },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>


<style lang="scss" scoped>


::-webkit-scrollbar, *::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}

.scroll-content {
    overflow: hidden;
}

ion-content {
    --background: linear-gradient(45deg, var(brand-primary) 50%, var(--ion-color-primary) 100%);
    overflow: hidden;
    --overflow: hidden;
}

.circle {  
    height: 600px;
    width: 600px;
    // background: linear-gradient(90deg, var(--ion-color-secondary) 0%, var(--ion-color-primary) 100%);
    background: #383a5f;
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
    left: 9vw;
    align-items: center;
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



</style>