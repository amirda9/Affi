<template>
  <!-- <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="cart" />
          <ion-label>فروشگاه‌ها</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="wallet" />
          <ion-label>کیف پول</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="person" />
          <ion-label>پروفایل</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page> -->
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="cart" />
          <ion-label>فروشگاه‌ها</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="wallet" />
          <ion-label class="ion-no-padding">کیف پول</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="person" />
          <ion-label>پروفایل</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="" href=""> </ion-tab-button>
        <!-- <div class="tubelight">
		<div class="light-ray"></div>
	</div> -->
      </ion-tab-bar>
      <ion-fab vertical="bottom" horizontal="end" edge slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import {
  ellipse,
  square,
  triangle,
  wallet,
  cart,
  person,
  add,
} from "ionicons/icons";
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Tabs",
  components: {
    IonPage,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
    IonRouterOutlet,
    IonFab,
    IonFabButton,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      wallet,
      cart,
      person,
      add,
    };
  },
});
</script>

<style lang="scss" scoped>
	.tubelight {
		position: absolute;
		left: 0;
    right:0;
		top: 0px;
		transform: translateX(-50%);
		width: 45px;
		height: 5px;
		border-radius: 5px;
		background: #ffffff;
		transition: left 400ms ease;
		z-index: 10;
		.light-ray {
			position: absolute;
			left: -30%;
			top: 5px;
			width: 160%;
			height: 80px;
			clip-path: polygon(5% 100%, 25% 0px, 75% 0px, 95% 100%);
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) -50%, rgba(255, 255, 255, 0) 90%);
			pointer-events: none;
		}
	}
ion-tab-bar {
  // --background:var(--brand-tertiary);
  height: 60px;
  ion-icon {
    font-size: 35px;
    color: var(--brand-primary);
  }
  span {
    font-weight: 500;
    font-size: 14px;
  }
}
ion-tab-button {
  --color-selected: var(--brand-quaternary);
}
ion-fab-button {
  --background: var(--brand-primary);
  bottom: 55px;
  margin-right: 15px;
  position: relative;
  transform: rotate(44deg);
  --border-radius: 15px;
  // border: 3px solid #fff;
  ion-icon {
    transform: rotate(-44deg);
  }
}
</style>
