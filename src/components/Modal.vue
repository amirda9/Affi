<template>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide v-for="item in data.images.edges" :key="item">
            <img style="height:50vh; width:100%;" :src="item.node.src" />
            <!-- <h1>Slide 1</h1> -->
          </ion-slide>
        </ion-slides>
        <!-- <img style="height:50vh; width:100%;" src="https://dkstatics-public.digikala.com/digikala-products/113542037.jpg?x-oss-process=image/resize,h_1600/quality,q_80"> -->
      </ion-row>
      <ion-row>
        <ion-col class="ion-text-center">
          <h1><span>T</span>{{ data.price.toLocaleString() }}</h1>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="ion-text-center">
          <h2 class="item-name">{{ data.name }}</h2>
          <p class="description" :innerHTML="data.shortDescription">
            <!-- {{Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.}} -->
          </p>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input :value="link" style="background:#dbe1f1" ></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="ion-text-center">
          <ion-button class="close-btn" @click="closeForm()">
            <ion-icon :icon="close"></ion-icon>
          </ion-button>
          <ion-button
            @click="
              copy()
            "
            >Copy Link</ion-button
          >
        </ion-col>
      </ion-row>
    </ion-grid>
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

import { heart, add, close, remove } from "ionicons/icons";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import { defineComponent, onMounted, ref } from "vue-demi";
import { data } from "jquery";

export default defineComponent({
  name: "ModalOne",
  props: {
    data: {
      type: Array,
    },
    context: {
      type: Object,
    },
    modalInstance: {
      type: Object,
    },
  },
  components: {
    IonIcon,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      quantity: 1,
      selectedSize: 0,
      sizes: [5, 6, 7, 8],
    };
  },
  setup(props) {
    const id = localStorage.id;
    const link = localStorage.link;
    const { mutate: linkReq, onDone, } = useMutation(gql`
      mutation linkReq($user: Int!, $prod: Int!) {
        requestAffiliationUrl(affUserId: $user, productId: $prod) {
          status
          error
          affiliationUrl
        }
      }
    `);
    onMounted(() => {
      // runMutation();
      // console.log(props.data);
      linkReq({
        user: +id,
        prod: +props.data.id,
      });
    });
    async function copy() {
      navigator.clipboard.writeText(link);
      const toast = await toastController.create({
        message: "Link Copied!",
        duration: "1000",
        buttons: [
          {
            text: "Ok",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ],
      });
      await toast.present();
    }

    function func(e) {
      console.log(e);
    }

    onDone((res) => {
      // copy(res.data.requestAffiliationUrl.affiliationUrl);
      // console.log(res.data.requestAffiliationUrl.affiliationUrl);
      // func(res.data.requestAffiliationUrl.affiliationUrl);
      // func(res.data.requestAffiliationUrl.affiliationUrl);
      localStorage.link = res.data.requestAffiliationUrl.affiliationUrl;
    });


    // const url = useMutation(linkReq,null,(data)=>{data.data})
    // console.log(url)

    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    return {
      slideOpts,
      heart,
      add,
      close,
      remove,
      linkReq,
      id,
      link,
    };
  },
  methods: {
    runMutation(e) {
      console.log(e);
    },
    async copy() {
      navigator.clipboard.writeText(this.link);
      const toast = await toastController.create({
        message: "Link Copied!",
        duration: "1000",
        buttons: [
          {
            text: "Ok",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ],
      });
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
    },
  },
});
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

.description,
.size-label {
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
