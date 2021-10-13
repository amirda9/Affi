<template>
  <ion-page scrollable>
    <ion-header style="padding:0; margin-bottom:0;">
      <ion-toolbar>
        <ion-title style="color:white; text-align:center;">{{
          name
        }}</ion-title>
        <ion-buttons slot="start">
          <ion-button @click="back">
            <ion-icon
              style="color:white;"
              :icon="arrowBack"
              class="back"
            ></ion-icon>
          </ion-button>
          <!-- <ion-back-button></ion-back-button> -->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row id="list">
        <ion-col
          v-for="(item, index) in btns"
          :key="index"
          @click="select(index)"
          :class="active === index ? 'active' : null"
        >
          {{ item }}
        </ion-col>
      </ion-row>
      <ion-row>
        <!-- <product-lis -->
        <ProductList :data="products" />
      </ion-row>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButtons,
  IonHeader,
  IonButton,
  IonContent
} from "@ionic/vue";
import { arrowBack } from "ionicons/icons";
import ProductList from "@/components/ProductList.vue";
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router'
import gql from "graphql-tag";
import { useQuery, useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "Shop",
  setup() {
    const route = useRoute()
console.log(route.params.id)
    const { result, variables } = useQuery(
      gql`
        query shop($id: Int!) {
          shop(id: $id) {
            name
            id
            shopRate
            shopPic
            products {
              edges {
                node {
                  id
                  name
                  averageRating
                  price
                  stockQuantity
                  shortDescription
                  permalink
                  images{
                    src
                  }
                }
              }
            }
          }
        }
      `,
      {
        id: +route.params.id,
      },() => ({
  fetchPolicy: 'no-cache',
})
    );

    const name = useResult(result, null, (data) => data.shop.name);
    const products = useResult(result, null, (data) => data.shop.products.edges);

    return {
      result,
      arrowBack,
      name,
      products
    };
  },

  components: {
    ProductList,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonButtons,
    IonHeader,
    IonButton,
    IonContent
  },
  data() {
    return {
      active: null,
      btns: ["Category 1 ", "Food", "Clothes"],
    };
  },

  methods: {
    back() {
      // console.log("1");
      this.$router.go(-1);
    },
    select(index) {
      // this.active = index;
    },
  },
});
</script>

<style lang="scss" scoped>
ion-grid {
  margin-bottom: 20px;
}
ion-col {
  // background: #0f0f17;
  color: #838688;
  padding: 7px;
  text-align: center;
  font-weight: 500;
  margin: 5px;
  border-radius: 20px;
  // &:first-child {
  //   border: 1px #2f2f2f solid;
  //   color: #d0cdcd;
  // }
}
.active {
  border: 1px #2f2f2f solid;
}
.btn-icon {
  margin: -3px 5px;
}
.overview-wrapper {
  margin-bottom: 10px;
}
.overview {
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
}
.overview-add {
  background: #ffffff;
  padding: 0px;
  border-radius: 10px;
  color: #000;
  float: right;
  font-size: 28px;
}
.price {
  background: #312f3e;
  width: fit-content;
  padding: 20px 7px;
  border-radius: 15px;
  float: right;
  color: #cecbcb;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  .total-price {
    font-weight: normal;
    margin-top: 7px;
    font-size: 10px;
    color: #838688;
  }
}
.date {
  color: #838688;
}

ion-toolbar {
  --background: var(--brand-primary);
}
</style>
