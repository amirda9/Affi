<template>
  <ion-header>
    <ion-toolbar>
      <ion-title style="color:white; text-align:center">{{
        data.name
      }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <!-- {{data}} -->
    <ion-slides pager="true" :options="slideOpts">
      <ion-slide v-for="x in data.productImages" :key="x">
        <!-- {{x}} -->
        <img style="height:60vh; width:100%;" :src="x.src" />
        <!-- <h1>Slide 1</h1> -->
      </ion-slide>
    </ion-slides>

    <ion-row
      class="ion-padding ion-justify-content-center"
      style="align-items: center;
    justify-content: center;"
    >
      <ion-col size="3">
        <ion-button
          @click="productRate"
          style="color:var(--brand-tertiary); --background:var(--brand-quaternary)"
        >
          اعمال
        </ion-button>
      </ion-col>
      <ion-col size="9">
        <ion-input
          style="background:#f6f6f6"
          class="ion-text-center"
          placeholder="نرخ جدید"
          v-model="rate"
          type="number"
        >
        </ion-input>
      </ion-col>
    </ion-row>
    <ion-row @click="close" class="ion-padding ion-justify-content-center">
      <ion-button
        style="color:var(--brand-tertiary); --background:var(--brand-quaternary)"
      >
        بستن
      </ion-button>
    </ion-row>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useQuery, useResult, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "vue";

export default defineComponent({
  name: "ModalAff",
  props: {
    data: { type: Object },
  },
  setup() {
    const rate = ref;
    const { mutate: updateProductAffiliationRate } = useMutation(gql`
      mutation updateProductAffiliationRate($rate: Float!, $id: Int!) {
        updateProductAffiliationRate(affiliationRate: $rate, productId: $id) {
          status
        }
      }
    `);

    return {
      updateProductAffiliationRate,
      rate,
      modalController,
    };
  },
  data() {
    return {
      Rate: 0,
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonInput },
  methods: {
    close() {
      // modalController.dismiss();
      // return modal.dismiss()
      // this.close(0)
      // console.log(this.modalController)
      this.modalController.dismiss();
    },
    productRate() {
      console.log(this.data.id, this.rate);
      this.updateProductAffiliationRate({
        rate: +this.rate,
        id: +this.data.id,
      });
      setTimeout(() => {
        this.close();
      }, 400);
      this.$router.go(0);
    },
  },
});
</script>
<style scoped>
ion-toolbar {
  --background: var(--brand-primary);
}
</style>
