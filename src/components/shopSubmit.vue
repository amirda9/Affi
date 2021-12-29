<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-icon :icon="arrowBack" @click="backFn()"></ion-icon>

      <h1 class="greeting ion-text-center">
        اتصال به افی
      </h1>
      <!-- <p class="greeting-tag">
        Fresh virtual credit cards are the next thing
      </p> -->

      <div class="form">
        <div class="image">
          <img src="assets/shop.png" class="card-img" />
        </div>
        <ion-grid>
            <ion-row>
            <ion-col class="ion-text-center" >
                <ion-label  >
               محصولات شما یک روز کاری پس از ثبت اطلاعات زیر ، قابل مشاهده خواهد بود
                </ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col class="ion-text-center">
              <ion-label>API Consumer Key</ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col class="value-col">
              <ion-input class="ion-text-center" v-model="name"> </ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col class="ion-text-center">
              <ion-label>API Secret Key</ion-label>
            </ion-col>
          </ion-row>
          <ion-row class="ion-padding-bottom">
            <ion-col class="value-col">
              <ion-input class="ion-text-center" v-model="number"> </ion-input>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <ion-button expand="full" @click="submit(name)">اتصال</ion-button>
      <ion-button expand="full" @click="submit(name)">درخواست پشتیبانی <ion-icon :icon="callOutline" style="color:white;"></ion-icon></ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonIcon,
  IonButton,
  IonInput
} from "@ionic/vue";
import {
  callOutline
} from "ionicons/icons";
import { personCircleOutline, arrowBack } from "ionicons/icons";
import { defineComponent, ref } from "vue-demi";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default defineComponent({
  name: "card-details",
  title: "card-details",
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
    IonPage,
    IonContent,IonGrid,
    IonCol,
    IonInput,IonButton,
    IonRow,
    IonLabel
  },
  setup() {
    const number = ref('');
    const name = ref('');
    const { mutate: updateWallet, onDone, onError } = useMutation(gql`
      mutation updateWallet($num: String!, $bank: String!) {
        updateWallet(bankAccountNumber: $num, bankName: $bank) {
          status
        }
      }
    `);
    return {
      personCircleOutline,
      arrowBack,
      number,
      name,
      updateWallet,
      callOutline
    };
  },
  data() {
    return {
      recentList: [
        {
          name: "Netflix",
          cost: "K140.20",
          description: "Today",
          color: "#36AEEA",
        },
        {
          name: "Audible",
          cost: "K98.20",
          description: "Yesterday",
          color: "#226391",
        },
        {
          name: "Canva",
          cost: "K98.20",
          description: "Jan 23, 2021",
          color: "#797A7C",
        },
        {
          name: "F1 TV",
          cost: "K44.20",
          description: "Jan 18, 2021",
          color: "#D8373F",
        },
      ],
    };
  },
  methods: {
    backFn() {
      this.modalInstance.dismiss();
      this.context.$emit("toggleImageFn", false);
      this.$router.go('/tabs/tab2')
    },
    submit(e) {
      // console.log(this.name.valueOf,this.number,3,this.recentList,e)
      this.updateWallet({num:this.number,bank:this.name})
      this.name = "";
      this.number = "";
      this.backFn();
    },
  },
});
</script>

<style lang="scss" scoped>
ion-content {
  --background: #f7f7f7;
}
ion-icon {
  font-size: 30px;
  color: var(--brand-primary);
  font-weight: 500;
}
h1.greeting {
  font-size: 24px;
  color: #000000;
}
p.greeting-tag {
  color: #767676;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
}
.image {
  text-align: center;
}
.card-img {
  width: 60%;
  margin-top: -12vh;
  margin-right: -1.5em;
}
.form {
  background: #fff;
  padding: 0 20px;
  margin-top: 85px;
  border-radius: 50px;
  ion-grid {
    padding-bottom: 0;
    padding-top: 0;
    ion-row {
      margin: 20px 0;
      ion-col {
        ion-label {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          color: #a4a4a4;
        }
        &.value-col {
          font-style: normal;
          font-weight: bold;
          //   font-size: 15px;
          //   line-height: 18px;
          color: #000;
          background: #f7f7f7;
          //   padding: 20px;
          border-radius: 10px;
        }
      }
      &.spaced-col {
        text-align: center;
        ion-col:nth-child(odd) {
          margin-right: 20px;
        }
        &.spaced-col > ion-col:nth-child(even) {
          margin-left: 20px;
        }
        &.spaced-col > ion-col:nth-child(1) {
          margin-bottom: 20px;
        }
        &.spaced-col > ion-col:nth-child(2) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
ion-button {
  --background: var(--brand-primary);
  font-size: 24px;
  text-transform: none;
  --border-radius: 20px;
  height: 60px;
  margin-top: 40px;
  &::part(native) {
    border-radius: 20px;
  }
}
</style>
