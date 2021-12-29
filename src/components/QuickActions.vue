<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-button color="dark" @click="pay" disabled>
          <ion-icon :icon="card" class="btn-icon"></ion-icon>برداشت
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button color="dark" @click="edit">
          <ion-icon :icon="swapHorizontal" class="btn-icon"></ion-icon>ویرایش
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon, IonButton, modalController} from "@ionic/vue";
import { card, swapHorizontal } from "ionicons/icons";
import walletEdit from "./walletEdit";
export default {
  name: "quick-actions",
  components: { IonGrid, IonRow, IonCol, IonIcon, IonButton },
  setup() {
    return {
      card,
      swapHorizontal
    }
  },
	methods: {
		pay() {
			this.$router.push("pay");
		},
    async edit(e){
      this.$emit("toggleImageFn", true);
      const modalInstance = modalController;
      const modal = await modalInstance
        .create({
          component: walletEdit,
          cssClass: "custom-modal-class",
          componentProps: {
              data:e,
            context: this,
            modalInstance,
          },
        })

      return modal.present();
    }
	}
};
</script>

<style  scoped>
ion-button {
  width: 100%;
  text-transform: none;
  height: 40px;
  --border-radius: 15px;
}
.btn-icon {
  margin: -3px 5px;
}
</style>