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

        <div class="drop-shadow">
<div class="glass"></div>
  </div>
      <div class="circle circle1"></div>

      <div class="container" style="margin-top:-5em; position:absolute; z-index:2;">
        <div style="width:80%; display: inline-block;">
        <ion-icon name="person" color="primary"></ion-icon>
        <ion-item
          lines="none"
          class="ion-text-center ion-margin itemDesign"
          color="light"
        >
          <ion-input
            placeholder="نام کامل"
            type="text"
            clearInput="true"
            v-model="name"
          ></ion-input>
        </ion-item>

          <ion-item
          size="6"
            lines="none"
            class="ion-text-center ion-margin itemDesign"
            color="light"
          >
            <ion-input
            v-model="nationalCode"
              placeholder="کد ملی"
              type="text"
              clearInput="true"
            ></ion-input>
          </ion-item>
          <ion-item
          size="6"
            lines="none"
            class="ion-text-center ion-margin itemDesign"
            color="light"
          >
            <ion-input
            v-model="phoneNumber"
              placeholder="شماره همراه"
              type="text"
              clearInput="true"
            ></ion-input>
          </ion-item>
          <ion-item
          size="6"
            lines="none"
            class="ion-text-center ion-margin itemDesign"
            color="light"
          >
            <ion-input
            v-model="email"
              placeholder="ایمیل"
              type="text"
              clearInput="true"
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
              placeholder="رمز عبور"
              type="password"
              clearInput="true"
            ></ion-input>
          </ion-item>
          <ion-item
          size="6"
            lines="none"
            class="ion-text-center ion-margin itemDesign"
            color="light"
          >
            <ion-input
            v-model="repass"
              placeholder="تکرار رمز عبور"
              type="password"
              clearInput="true"
            ></ion-input>
          </ion-item>
        </div>
      </div>
      

      <div class="circle circle2"></div>

      <div class="align ion-text-center">
        <ion-button @click="submit()" expand="block" shape="round" style="color:var(--brand-tertiary); --background:var(--brand-quaternary)"
          >ثبت نام</ion-button
        >
        
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
    const name = ref('')
    const nationalCode = ref('')
    const phoneNumber = ref('')
    const email = ref('')
    const pass = ref('')
    const repass = ref('')
    const { mutate: createAff,onDone,onError } = useMutation(gql`
      mutation createAff($name:String!,$national:String!,$data:CreateUserInputType!){
  createAff(fullName:$name,nationalCode:$national,userData:$data)
     {
    status
  }
}
    `,{variables:{
        name:name.value,
        national:nationalCode.value,
        data:{phoneNumber:phoneNumber.value,password:pass.value,emailAddress:email.value}
    },
    })

 onDone(()=>{

        // console.log(result.data.tokenAuth)
        // localStorage.token = result.data.tokenAuth.token;
        // localStorage.id = result.data.tokenAuth.user.id;
        router.push({ path: '/login' })       
    });

  onError(()=>{
    alert("Enter a valid Creditentials.");
  })
    
    return {
      ellipse,
      square,
      triangle,
      person,
      name,
      pass,
      email,
      repass,
      phoneNumber,
      nationalCode,
      createAff,
      router,
      logoGoogle
    };
  },
  methods:{
    submit(){
      // console.log(this.user,this.pass)
      this.createAff({name:this.name,national:this.nationalCode,data:{phoneNumber:this.phoneNumber,password:this.pass,emailAddress:this.email}});
      this.name = "";
      this.pass = "";
    },
    onEnter(){
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
