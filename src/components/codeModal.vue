<template>
  <ion-content class="ion-padding">
   
  </ion-content>
</template>

<script>
import {
  IonIcon,
  IonContent,
  IonButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  toastController,
} from "@ionic/vue";

import { heart, add, close, remove } from "ionicons/icons"

export default {
  name: 'CodeModal',
  props: {
    data: {
      type: Array
    },
    context: {
      type: Object
    },
    modalInstance: {
      type: Object
    }
  },
  components: {
    IonIcon,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons
  },
  data() {
    return {
      quantity: 1,
      selectedSize: 0,
      sizes: [5,6,7,8]
    }
  },
  setup() {
    return {
      heart,
      add,
      close,
      remove
    }
  },
  methods: {
    async copy(){
        navigator.clipboard.writeText("Welcome to affi");
        const toast = await toastController
        .create({
          message: 'Link Copied!',
          duration:"1000",
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        })
      await toast.present();
    },
    quantityFn(count) {
      this.quantity = this.quantity + count;
    },
    selectedSizeFn(index) {
      this.selectedSize = index;
    },
    closeForm() {
      this.modalInstance.dismiss();
      this.context.$emit("toggleImageFn", false);
    }
  }
}
</script>

<style scoped lang="scss">
ion-content {
  --background: #fff;
}

h1 {
  font-size: 50px;
  color: #000;
  margin: 0;
  padding: 0;
  span {
    font-size: 18px;
    margin-bottom: 20px;
  }
}

.item-name {
  border-top: 1px solid var(--brand-primary); 
  padding-top: 25px; 
  color: #000;
}

.size-label {
  margin-bottom: 20px;
}

.size-row {
  margin-left: -5px;
  padding: 0;
  
  span {
    background: #fff3b9;
    border: 1px solid #f9ebab; 
    border-radius: 5px; 
    padding: 6px 14px;
    margin: 3px;
    color: var(--brand-primary);
    &.selected {
      color: #000;
    }
  }
}

.description, .size-label {
  font-size: 13px;
}

ion-button {
  --background: var(--brand-primary);
  border-radius: 11px;

  &.close-btn {
    --background: #fff;
    color: #000;
    border: 1px solid var(--brand-primary);
  }
}

ion-col.quantity {
    text-align: right;
    width: 50%;
    margin: auto auto auto 100px;
    .q-count {
      background: #fff3b9;
      padding: 0px 15px;
      margin: -6px;
    }

    .quantity-icon {
      font-weight: 700;
    }

  ion-buttons {
    ion-button {
      font-weight: bold;
      --border-radius: 20px;
      --background: #fff;
      color: #000;
      border: 1px solid #f9edb6;
      width: 29px;
      height: 27px;
    }
  }
}
</style>