<template>
  <ion-page>
    <OverviewHeader />
    <!-- <div class="quantity-counter">
      <ion-icon :icon="add" @click="quantityFn(1)"></ion-icon>
      <ion-chip>
        <ion-label>{{ quantity }}</ion-label>
      </ion-chip>
      <ion-icon :icon="remove" @click="quantityFn(-1)"></ion-icon>
    </div> -->
    <ion-content class="ion-padding">
      <div class="content-wrapper">
        <h2>Blackberry</h2>
        <p>Fresh Drink</p>
        <br />
        <h4 style="color: #d6d6d6;">Tip</h4>
        <ion-chip
          v-for="(item, index) in tips"
          :key="index"
        >
          <ion-label>{{ item }}</ion-label>
        </ion-chip>
      </div>
      <!-- <ion-grid>
        <ion-row>
          <ion-col size="6" class="row-col-one">R8 + Drink</ion-col>
          <ion-col size="6" class="row-col-two">R8 + Drink</ion-col>
        </ion-row>
      </ion-grid> -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonLabel, IonChip, onIonViewDidEnter } from "@ionic/vue";
import { add, remove } from 'ionicons/icons';
import OverviewHeader from "../components/OverviewHader";
export default {
  name: "pay",
  title: "Pay",
  requiresAuth: false,
  components: {
    IonPage,
    IonContent, 
    IonLabel, 
    IonChip, 
    // IonIcon,
    OverviewHeader
  },
  setup() {
       onIonViewDidEnter(() => {
    //   console.log('Home page did enter');
    const a = document.getElementById("ax");
    console.log(a)
    // a.style.backgroundImage = "https://dkstatics-public.digikala.com/digikala-products/113542037.jpg?x-oss-process=image/resize,h_1600/quality,q_80";
    });
    return {
      add,
      remove
    }
  },
  data() {
    return {
      quantity: 0,
      tips: ["15%", "25%", "60%"],
      activeTip: -1,
    };
  },
  methods: {
    quantityFn(int) {
      this.quantity = this.quantity + int;
    }
  },
};
</script>

<style lang="scss" scoped>
ion-content{
--ion-background-color: #0f0f17 !important;
  --background: #0f0f17 !important;
  --padding-bottom: 130px !important;
}
// ion-content .after {
//     --ion-background-color: #0f0f17 !important;
//   --background: #0f0f17 !important;
//   --padding-bottom: 130px !important;
//     background-color: grey;
//     content: '';
//     display: block;
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     right: 10px;
//     bottom: 10px;
//     z-index: -1;
// }
// ion-content {
// //   z-index: -99999;
// --background:var(--brand-tertiary)
// }
  .activeTip {
    color: green;
  }
.content-wrapper {
  margin-top: -35px;
  ion-chip {
    color: #d6d6d6;
    border: 1px #413f3f solid;
    padding: 20px;
  }
  h2 {
    color: #d4d3d3;
    font-weight: bold;
    margin: 22px 0 -12px 0;
  }
  p {
    color: #bdbcbc;
  }
} 



.quantity-counter {
  float: right;
  --background-color: var(--brand-tertiary) !important;
  --background: var(--brand-tertiary) !important;
  background: var(--brand-quaternary);
  border-radius: 10px;
  padding: 10px 10px 10px 20px;
  margin: -60px 35px 0 315px;
  width: 65px;
  z-index: 9999999999;
  ion-icon {
    font-size: 18px;
    background: #1d1d23;
    padding: 5px;
    color: #ffffff;
    border-radius: 50px;
    font-weight: 600;
    &.back {
      border-radius: 10px;
    }
  }
  ion-chip {
    color: #ffffff;
    background: #49455e;
    margin: 5px 0px 10px -9px;
    padding: 20px 18px;
    font-weight: bold;
  }
}
.row-col-one,
.row-col-two {
  margin: 10px 0;
  color: #9a9a9a;
  background: #0b0c13;
  padding: 12px;
  border-radius: 30px;
  border: 1px #0e0e0e solid;
  text-align: center;
}
</style>