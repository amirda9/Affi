<template>
  <ion-page scrollable>
    <ion-header style="padding:0; margin-bottom:0;">
      <ion-toolbar>
        <ion-title style="color:white; text-align:center;"
          >شخصی سازی فروشگاه</ion-title
        >
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
        <ion-row>
          <ion-col>
            <img src="assets/Personalize.jpg" style="height:30vh" />
          </ion-col>
        </ion-row>

        <ion-row class="ion-justify-content-center" style="align-items: center;
    justify-content: center;">
            <ion-col size="4" >
                <ion-button @click="shopRate" style="color:var(--brand-tertiary); --background:var(--brand-quaternary)">
                اعمال عمومی
            </ion-button>
            </ion-col>
            <ion-col size="4" class="ion-padding-horizontal">
                <ion-input style="background:#f6f6f6" class="ion-text-center" placeholder="نرخ جدید" v-model="rate" type="number">
                </ion-input>
            </ion-col>
        </ion-row>
        <div v-if="loading">loading</div>
        <div v-if="result">
          <!-- {{result.user.shop.allProducts}} -->
          <ion-row>
            <ion-col>
              <!-- <ion-list>
    <ion-item v-for="(item,index) in result.user.shop.allProducts" :key="index">
      
      <img class="img_icon" style="height:15vh" :src="item.productImages[0].src">
      <ion-label>
        <h2>{{ item.name }}</h2>
        <p>{{ item.date }}</p>
      </ion-label>
      <ion-text slot="end">
        <b>R {{ item.cost }}</b>
      </ion-text>
    </ion-item>
  </ion-list> -->

              <ion-grid
                v-for="(item, index) in result.user.shop.allProducts"
                :key="index"
              >
                <ion-card>
                  <ion-row class="first-row">
                    <div class="company">
                      {{ item.name }}
                      <br />
                      <span class="model">
                        {{ item.name }}
                      </span>
                    </div>
                    <img
                      style="height: 30vh; width:100%"
                      :src="item.productImages[0].src"
                    />
                    <!-- {{item.node.shopImage.src}} -->
                  </ion-row>
                  <ion-row class="second-row">
                    <ion-col>
                      <div class="label">وضعیت</div>
                      <div class="value">
                        <div v-if="item.visibility == true">
                          <ion-text style="color:green">
                          نمایان
                          </ion-text>
                        </div>
                        <div v-if="item.visibility == false">
                          <ion-text style="color:red">
                          مخفی
                          </ion-text>
                        </div>
                      </div>
                    </ion-col>
                    
                    <ion-col>
                      <div class="label">سود مشارکت</div>
                      <div class="value">
                        {{item.affiliateRate}}
                        <!-- <ion-input v-model="num" :placeholder="item.affiliateRate">

                        </ion-input> -->
                        <!-- {{ item.affiliateRate }} -->
                        <!-- <span class="unit">
							months
						</span> -->
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row class="second-row" style="align-items: center;
    justify-content: center;">
                    <ion-col class="ion-text-center">
                      <!-- <ion-button
                        style="width:30vw; color:var(--brand-tertiary); --background:var(--brand-quaternary)"
                        @click="status(item.id,item.visibility)"
                      >
                        تغییر وضعیت
                      </ion-button> -->
                      <div v-if="item.visibility==true">
          <ion-toggle @click="status(item.id,item.visibility)" name="kiwi" color="success" checked></ion-toggle>
                      </div>
                      <div v-if="item.visibility==false">
          <ion-toggle @click="status(item.id,item.visibility)" name="kiwi" color="success" ></ion-toggle>
                      </div>
                    </ion-col>
                    <ion-col class="ion-text-left">
                      <ion-button
                        style="width:30vw; color:var(--brand-tertiary); --background:var(--brand-quaternary)"
                        @click="openModal(item)"
                      >
                        تغییر نرخ
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-card>
              </ion-grid>
            </ion-col>
          </ion-row>
        </div>
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
  IonContent,
  toastController,
  modalController,
  IonInput
} from "@ionic/vue";
import {
  arrowBack,
  filterOutline,
  linkOutline,
  pricetagOutline,
} from "ionicons/icons";
import { useRoute } from "vue-router";
import gql from "graphql-tag";
import { useQuery, useResult, useMutation } from "@vue/apollo-composable";
import ModalAff from '../components/ModalAff'

export default defineComponent({
  name: "Shop",
  props: {
    // id=0
  },
  setup() {
    const rate = ref;
    const order = ref("");
    const slideOpts = {
      initialSlide: -1,
      slidesPerView: 3,
    };
    const route = useRoute();

    const { mutate: linkReq } = useMutation(gql`
      mutation linkReq($user: Int!, $shop: Int!) {
        requestAffiliationUrl(affUserId: $user, shopId: $shop) {
          status
          error
          affiliationUrl
        }
      }
    `);
    const name = +localStorage.id;
    const { result, onResult, refetch, loading, variables } = useQuery(
      gql`
        query user($id: Int) {
          user(id: $id) {
            name
            profilePic
            shop {
              allProducts {
                id
                visibility
                affiliateRate
                name
                productImages {
                  src
                }
              }
            }
          }
        }
      `,
      {
        id: name,
      },
      () => ({
        fetchPolicy: "no-cache",
      })
    );


  const { mutate: updateShopProductsAffiliationRate } = useMutation(gql`
    mutation updateShopProductsAffiliationRate($rate:Float!){
  updateShopProductsAffiliationRate(affiliationRate:$rate){
    status
  }
}
    `);


    const { mutate: shopProductManager,onDone } = useMutation(gql`
      mutation shopProductManager($user:Int!,$id:Int!,$visibility:Boolean!){
  shopProductManager(products:{id:$id,visibility:$visibility},shopUserId:$user){
    status
  }
}
    `);

    async function toast(e) {
      console.log(e);
      const toast = await toastController.create({
        message: e,
        duration: 20000,
      });
      return toast.present();
    }

    onDone(() => {
      refetch()
    });
    
    
    const products = useResult(
      result,
      null,
      (data) => data.user.allProducts.edges
    );

    console.log(products);
    onResult((res) => {
      console.log(res.data.user.shop);
    });

    onMounted(() => {
      console.log("mounted");
      // refetch({ id: name });
    });


    return {
      result,
      arrowBack,
      name,
      products,
      slideOpts,
      refetch,
      filterOutline,
      linkOutline,
      linkReq,
      loading,
      pricetagOutline,
      shopProductManager,
      updateShopProductsAffiliationRate
    };
  },

  components: {
    IonGrid,
    IonRow,
    IonPage,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonButtons,
    IonHeader,
    IonButton,
    IonContent,
    IonCol,
    IonInput
  },
  data() {
    return {
      active: null,
      btns: ["Category 1 ", "Food", "Clothes"],
    };
  },
  methods: {
    async openModal(e) {
      const modal = await modalController
        .create({
          component: ModalAff,
          cssClass: 'my-custom-class',
          componentProps: {
            data:e
          },
        })
      return modal.present();
    },
    status(e,bool){
      console.log(e,bool)
      const dic={
        id:e,
        visibility:bool
      }
      this.shopProductManager({user:+localStorage.id,id:+e,visibility:!bool})
    },
    back() {
      // console.log("1");
      // this.$router.push("/tabs");
      this.$router.go(-1);
    },
    shopRate() {
      // console.log(this.data.id, this.rate);
      this.updateShopProductsAffiliationRate({
        rate: +this.rate,
      });
      setTimeout(() => {
        this.refetch()
        this.rate = null;
      }, 400);
    },
    select(index) {
      console.log(index);
      this.cat = index;
      this.$router.push({
        path: "/shop/" + this.$route.params.id,
        query: { cat: this.cat },
      });
      this.refetch({ id: 1, cat: this.cat, order: "" });
    },
    filter() {
      this.refetch({ id: 1, cat: this.cat, order: "affiliateRate" });
    },
    async openToast() {
      this.linkReq({ user: +localStorage.id, shop: +this.$route.params.id });
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
  // border: 1px #2f2f2f solid;
  color: red;
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

h2 {
  font-weight: 600;
  color: #000000;
}
ion-item {
  // --background: #e2e9ea;
  --border-style: none;
}
.img_icon {
  background: #ffffff;
  padding: 10px;
  border-radius: 16px;
  color: #000;
}
.company {
  color: #ffffff;
  font-weight: 500;
  margin: 0 0 -64px 0;
  padding: 15px;
  z-index: 9999999999999;
  background-color: var(--brand-primary);
}
.model {
  font-size: 13px;
  float: left;
}
ion-card {
  border-radius: 20px;
  // --background:var(--brand-tertiary);
}
ion-row {
  img {
    border-radius: 20px;
    margin: 0;
    padding: 0;
  }
  &.first-row {
    border-radius: 20px 20px 0 0;
    // background: #ffffff;
    margin: 0;
    padding: 0;
  }
  &.second-row {
    padding: 10px;
    // background: #ffffff;
    border-radius: 0 0 20px 20px;
  }
  ion-col {
    .label {
      text-align: center;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 13px;
      color: var(--brand-quaternary);
    }
    .value {
      font-weight: 500;
      text-align: center;
      font-size: 15px;
      color: var(--brand-quaternary);
    }
    .unit {
      font-size: 11px;
    }
  }
}
.balance,
.expDate,
.card-number {
  text-align: left;
}
.balance,
.card-number {
  font-size: 20px;
}
.card-number {
  font-size: 7vw;
}
.card-icon {
  text-align: right;
}
</style>
