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
        <!-- <ion-row id="list">
          <ion-col
            v-for="(item, index) in categories"
            :key="index"
            @click="select(index)"
            :class="active === index ? 'active' : null"
          >
            {{ item.node.name }}
          </ion-col>
        </ion-row> -->
        <div v-if="loading ">Loading</div>
        <!-- {{result}} -->
        <div v-if="categories">
          <ion-slides :options="slideOpts">
            <ion-slide
              v-for="(item, index) in categories.edges"
              :key="index"
              @click="select(item.node.name)"
            >
              <ion-button expand="block" shape="round" style="width:30vw; color:var(--brand-tertiary); --background:var(--brand-quaternary)">
                {{ item.node.name }}
              </ion-button>
            </ion-slide>
          </ion-slides>
        
        <ion-row><ion-col>
          <ion-button @click="filter()" expand="block" shape="round" style="color:white; --background:var(--brand-quaternary)"> 
            <ion-icon :icon="filterOutline"></ion-icon> مرتب سازی بر اساس نرخ بازگشت
          </ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <ProductList :data="products" />
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
  IonSlides,
  IonSlide
} from "@ionic/vue";
import { arrowBack,filterOutline } from "ionicons/icons";
import ProductList from "@/components/ProductList.vue";
import Cats from "@/components/Cats.vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import gql from "graphql-tag";
import { useQuery, useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "Shop",
  setup() {
    const cat = ref('')
    const order = ref('')
    const slideOpts = {
      initialSlide: -1,
      slidesPerView: 3,
    };
    const route = useRoute();
    const { result, variables, loading,refetch,onResult } = useQuery(
      gql`
        query shop($id: Int!,$cat:String,$order:String) {
          shop(id: $id) {
            user {
              name
            }
            id
            shopRate
            shopPic
            categorySet {
              edges {
                node {
                  name
                  id
                  baseId
                }
              }
            }
            products(category:$cat,orderBy:$order) {
              edges {
                node {
                  id
                  name
                  averageRating
                  price
                  stockQuantity
                  shortDescription
                  permalink
                  images {
                    edges {
                      node {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }

      `,
      {
        id: +route.params.id,
        cat:route.query.cat,
        order:order
      },
      () => ({
        fetchPolicy: "no-cache",
      })
    );

      const name = useResult(result, null, (data) => data.shop.user.name);
    const categories = useResult(result, null, (data) => data.shop.categorySet);
    const products = useResult(
      result,
      null,
      (data) => data.shop.products.edges
    );
    onResult(res=>{
    console.log(res)
    })
    
    return {
      result,
      arrowBack,
      name,
      products,
      categories,
      slideOpts,
      loading,
      refetch,
      filterOutline
    };
  },

  components: {
    ProductList,
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
    IonSlides,
    IonSlide
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
      this.$router.push("/tabs");
    },
    select(index) {
      console.log(index)
      this.cat = index;
      this.$router.push({ path: ('/shop/'+this.$route.params.id), query: { cat: this.cat}})
      this.refetch({id:1,cat:this.cat,order:""});
    },
    filter(){
      this.refetch({id:1,cat:this.cat,order:"affiliateRate"});
    }
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
</style>
