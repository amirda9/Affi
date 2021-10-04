<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align:center; color:white;">پروفایل</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="intro">
  <div class="black"></div>  
  <div class="white"></div>
  <div class="boxfather">
    <div class="box">
      <h1>WELCOME</h1>
      <button>Enter</button>
    </div>
  </div>
  
</div>



<div class="homepage">
  <h1>The Great White</h1>
  <p>Messenger bag kickstarter chia swag craft beer irony art party pinterest cardigan, skateboard ethical. Pitchfork tilde seitan, crucifix asymmetrical flexitarian church-key mustache shoreditch occupy polaroid next level microdosing kickstarter. Kitsch lumbersexual tacos small batch, VHS hoodie taxidermy four loko keytar craft beer listicle narwhal four dollar toast authentic. Tofu pour-over truffaut tumblr before they sold out. Kale chips polaroid beard, ugh williamsburg fixie gluten-free quinoa fap bitters flexitarian. Meh master cleanse plaid 90's hammock, schlitz brunch quinoa kombucha intelligentsia aesthetic blog. Wolf austin readymade, literally freegan bitters pour-over cliche hella migas chambray tacos PBR&B. <br /> <br />

Ramps wolf cronut retro. Farm-to-table actually slow-carb 3 wolf moon blog godard, taxidermy knausgaard asymmetrical gastropub narwhal quinoa. Deep v raw denim tousled flexitarian, celiac letterpress hammock beard put a bird on it lo-fi marfa. Poutine microdosing cold-pressed keytar retro, intelligentsia portland DIY craft beer pug seitan. Mumblecore readymade listicle fap, retro waistcoat meggings church-key craft beer chambray narwhal VHS. Messenger bag direct trade venmo hoodie blue bottle. Craft beer drinking vinegar meditation heirloom pork belly.  <br /> <br />
   Cronut scenester fixie helvetica, deep v beard pabst godard. Meditation beard swag yr, hella cardigan flexitarian master cleanse irony bitters godard banjo. Organic banh mi chartreuse, kombucha shoreditch iPhone fanny pack. Irony seitan direct trade authentic four loko butcher poutine gluten-free, tumblr polaroid bespoke DIY. Before they sold out drinking vinegar hoodie, helvetica humblebrag tumblr lumbersexual yuccie keytar yr sriracha VHS synth retro. Narwhal sustainable marfa tilde godard. Retro shabby chic etsy austin skateboard.</p>
 
</div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { onMounted } from 'vue-demi';
import jQuery from "jquery";

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup(){
onMounted(()=>{
  const $ = jQuery;
  $(function(){
  $('.homepage').hide();
  // $('.box').delay(500).effect("bounce", { times: 8 }, 800);
  $('.box').hide().slideDown(500);
  
  
  $('button').click(function(){
    $('.intro').slideUp(400);
     $('.box').slideUp(200);
    $('.homepage').delay(500).slideDown(300);
  });
  
});
})
  }
}
</script>

<style lang="scss" scoped>
ion-toolbar{
  --background:var(--brand-primary);
}

@import url(https://fonts.googleapis.com/css?family=Oxygen:400,300);
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);

*{
  margin: 0;
  padding: 0;
}
.intro{
  margin: auto;
}
.black {
  width: 50%;
  float: left;
  background: #283644;
  height: 100vh;
}

.white{
  width: 50%;
  float: right;
  background: #4D727E;
  height: 100vh;
}

.box{
  height: 300px;
  width: 500px;
  background: #069A8E;
  position:absolute;
  top:150px;
  left:0;
  right:0;
  margin:auto;
  border-radius:20px;
}

.boxfather{
  width:100%;
  position:absolute;
}
.box h1{
  color: #E4E4E4;
  font-size: 5em;
  text-align: center;
  position: relative;
  top:70px;
  font-family: 'Montserrat', sans-serif;
}

.box button{
  left:43%;
  position:relative;
  top:120px;
  padding: 8px 20px;
  cursor:pointer;
  border:0;
  outline:none;
  color:#525252;
  background:#E4E4E4;
  transition:all .3s ease;
  font-size: 19px;
  font-family: montserrat;
  border-radius:5px;
}
.homepage{
  height: 100vh;
  position:relative;
  top:40px;
  
 
}
.homepage p{
  width: 80%;
  line-height: 1.5;
  margin:50px auto;
  font-family: oxygen;
  font-size: 18px;
  color: #585858;
}
.homepage h1{
  padding-top: 50px;
  width: 80%;
  margin:auto;
  font-family: montserrat;
  color: #525252;
  font-size: 40px;
}


</style>