<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align:center; color:white;">پروفایل</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title style="text-align:center; color:white;"
           size="large">پروفایل</ion-title>
        </ion-toolbar>
      </ion-header> -->
<div class="muck-up">
  <div class="overlay"></div>
  <div class="top"  style="background-color:var(--brand-primary)">
    
    
  </div>


  <div class="bottom">
    <div class="title">
      <h3>My Tasks</h3>
      <small>February 8,2015</small>
    </div>
    <!-- <ul class="tasks">
      <li class="one red">
        <span class="task-title">Make New Icon</span>
        <span class="task-time">5pm</span>
        <span class="task-cat">Web App</span>

      </li>
      <li class="one red">
        <span class="task-title">Catch up with Brian</span>
        <span class="task-time">3pm</span>
        <span class="task-cat">Mobile Project</span>

      </li>
      <li class="two green">
        <span class="task-title">Design Explorations</span>
        <span class="task-time">2pm</span>
        <span class="task-cat">Company Web site</span>

      </li>
      </li>
      <li class="tow green hang">
        <span class="task-title">Team Meeting</span>
        <span class="task-time">2pm</span>
        <span class="task-cat">Hangouts</span>
        <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/2.jpg">
        <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/3.jpg">
        <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/profile.jpg">
      </li>
      <li class="three yellow">
        <span class="task-title">New Projects</span>
        <span class="task-time">2pm</span>
        <span class="task-cat">Starting</span>


      </li>

      <li class="three yellow">
        <span class="task-title">Lunch with Mary</span>
        <span class="task-time">2pm</span>
        <span class="task-cat">Grill House</span>
      </li>
      <li class="three yellow">
        <span class="task-title">Team Meeting</span>
        <span class="task-time">2pm</span>
        <span class="task-cat">Hangouts</span>
      </li>

    </ul> -->
  </div>
</div>
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>

<style lang="scss" scoped>
ion-toolbar{
  --background:var(--brand-primary);
}

*,
:after,
:before {
  box-sizing: border-box
}

.clearfix:after,
.clearfix:before {
  content: '';
  display: table
}

.clearfix:after {
  clear: both;
  display: block
}

.muck-up {
  // width: 310px;
  // height: 545px;
  // margin: 5em auto;
  position: relative;
  overflow: hidden;
}

.overlay {
  // background: url(https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/header.jpg) no-repeat top /contain;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.overlay:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(71, 32, 84, 0.5);
}

.muck-up > .top {
  position: relative;
  min-height: 240px;
  padding: 15px;
  color: #fff;
  --background:#383a5f;
}

.top .nav span {
  --background:var(--brand-primary);;
  float: left;
  display: block;
}

.nav p {
  margin-top: 2px;
  display: inline-block;
  float: left;
  vertical-align: bottom;
}

.ion-android-menu {
  font-size: 24px;
  margin-right: 17px;
}

.nav .ion-ios-more-outline {
  font-size: 38px;
  float: right !important;
}

.user-profile {
  margin-top: 90px;
}




.muck-up .bottom {
  background-color: #fff;
  min-height: 303px;
  z-index: 1;
  padding: 35px;
  position: relative;
  color: #222;
  padding-top: 0px;
}

.bottom:after {
  content: '';
  position: absolute;
  top: -250px;
  background: #fff;
  left: 0px;
  right: 0;
  height: 600px;
  transform: rotate(-45deg);
  width: 200%;
  // width: 337px;
  z-index: -1;
}

.bottom .title {
  margin-bottom: 20px;
}

.bottom .title h3 {
  font-size: 22px;
  margin-bottom: 5px;
}

.title small {
  font-size: 10px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
}

ul.tasks .task-title {
  font-size: 13px;
  display: inline-block;
}

ul.tasks .task-time {
  float: right;
  font-size: 10px;
  color: #888;
}

ul.tasks .task-cat {
  font-size: 10px;
  display: block;
  color: #888;
}

ul.tasks li {
  margin-bottom: 16px;
  position: relative;
  z-index: 8;
}

ul.tasks li:after {
  content: '';
  position: absolute;
  left: -18px;
  top: 8px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
}

ul.tasks li.red:after {
  background: #FF3163;
}

ul.tasks li.green:after {
  background: #54D6C7;
}

ul.tasks li.yellow:after {
  background: #EAB429;
}

ul.tasks::after {
  content: '';
  position: absolute;
  height: 400px;
  width: 1px;
  background: #eee;
  left: 20px;
  top: -68px;
}

ul li.hang {
  margin-bottom: 48px;
}

ul li.hang img {
  float: left;
  height: 20ox;
  width: 20px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>