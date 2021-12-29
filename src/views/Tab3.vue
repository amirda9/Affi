<template>
  <ion-page>
    <ion-header style="padding:0; margin-bottom:0;">
      <ion-toolbar>
        <ion-title style="color:white; text-align:center;">پروفایل</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-icon name="exitOutline"></ion-icon>
      <ion-row
        class="ion-padding-top ion-justify-content-center"
        style="align-items:center"
      >
        <ion-col class="ion-text-right" size="3"> </ion-col>
        <ion-col class="ion-text-center" size="6">
          <img
            :src="require('../../public/assets/2.png')"
            style="height:10em; border-radius:50%;"
          />
        </ion-col>
        <ion-col class="ion-text-left" size="3">
          <ion-row>
            <ion-button @click="logout()" fill="clear">
              <ion-icon :icon="exitOutline"></ion-icon>
            </ion-button>
          </ion-row>
          <ion-row>
            <ion-button fill="clear">
              <ion-icon :icon="pencilOutline"></ion-icon>
            </ion-button>
          </ion-row>
        </ion-col>
      </ion-row>
      <div v-if="loading">Loading</div>
      <div v-if="user">
        <ion-row>
          <ion-col class="ion-text-center">
            <h2 class="ion-no-padding">{{ user.name }}</h2>
          </ion-col>
        </ion-row>
        <ion-row v-if="user.role!='AFF'" class="ion-justify-content-center ion-padding-horizontal">
        <ion-col size="6" class="ion-text-center">
          <ion-button style="color:var(--brand-tertiary); --background:var(--brand-quaternary)" @click="shopEdit()">
            شخصی سازی فروشگاه
          </ion-button>
        </ion-col>
        <ion-col size="6" class="ion-text-center">
          <ion-button style="color:var(--brand-tertiary); --background:var(--brand-quaternary)" @click="shopSubmit">
            اتصال فروشگاه به افی
          </ion-button>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-card>
            <ion-card-header class="ion-text-center">
              جزییات فروش
            </ion-card-header>
            <!-- <ion-card-subtitle class="ion-text-center">
              12
            </ion-card-subtitle> -->
            <ion-row>
               <ion-col class="ion-text-center">
                
              </ion-col>
              <ion-col class="ion-text-center">
                روزانه
              </ion-col>

              <ion-col class="ion-text-center">
                ماهانه
              </ion-col>
              <ion-col class="ion-text-center">
                سالیانه
              </ion-col>
            </ion-row>
            <ion-row >
              <ion-col class="ion-text-center">
                تومان
              </ion-col>
               <ion-col class="ion-text-center">
                {{overview.saleByDay}}
              </ion-col>

              <ion-col class="ion-text-center">
                {{overview.saleByMonth}}
              </ion-col>
              <ion-col class="ion-text-center">
                {{overview.saleByYear}}
              </ion-col></ion-row>

              <ion-row class="ion-padding-bottom"> 
                <ion-col class="ion-text-center">
                عدد
              </ion-col>
              <ion-col class="ion-text-center">
                {{overview.countByDay}}
              </ion-col>

              <ion-col class="ion-text-center">
                {{overview.countByMonth}}
              </ion-col>
              <ion-col class="ion-text-center">
                {{overview.countByYear}}
              </ion-col></ion-row>

          </ion-card>
        </ion-col>
        <!-- <ion-col size="6">
          <ion-card>
            <ion-card-header class="ion-text-center">
              تعداد محصولات
            </ion-card-header>
            <ion-card-subtitle class="ion-text-center">
              89
            </ion-card-subtitle>
          </ion-card>
        </ion-col> -->
      </ion-row>
      </div>
      
      <ion-row>
        <ion-col class="ion-text-center">
          <h1>
            آمار
          </h1>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <DoughnutChart v-bind="doughnutChartProps" />
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonRow,
  IonCol,
  IonIcon,
  IonCard,
  IonCardHeader,
  modalController
} from "@ionic/vue";
import { computed, defineComponent, onMounted, ref } from "vue-demi";
import { pencilOutline, exitOutline } from "ionicons/icons";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { useRouter } from "vue-router";
import shopSubmit from "../components/shopSubmit.vue";
import gql from "graphql-tag";
import { useQuery, useResult } from "@vue/apollo-composable";

Chart.register(...registerables);

export default defineComponent({
  name: "Tab3",
  components: {
    DoughnutChart,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonIcon,
    // IonCard,
    // IonCardHeader,
  },
  setup() {
    // eslint-disable-next-line prefer-const
    let name = +localStorage.id;
    const { result } = useQuery(
      gql`
        query user($id: Int!) {
          user(id: $id) {
            name
            role
          }
          overview(userId:9){
    saleByDay
    saleByMonth
    saleByYear
    countByDay
    countByYear
    countByMonth
  }
        }
        
      `,
      {
        id: name,
      }
    );

    

    const user = useResult(result, null, (data) => data.user);
    const overview = useResult(result, null, (data) => data.overview);
    console.log(user.value);
    const router = useRouter();
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);
    const testData = computed<ChartData<"doughnut">>(() => ({
      labels: ["لباس زمستانی", "گوشی هوشمند", "عطر", "دمبل", "متفرقه"],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    }));
    const options = computed<ChartOptions<"doughnut">>(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });
    return {
      router,
      exitOutline,
      pencilOutline,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
      user,
      overview
    };
  },
  methods: {
    logout() {
      // console.log(1);
      localStorage.clear();
      this.$router.push({
        path: "/",
      });
    },
    shopEdit() {
      this.router.push({ path: "/shopEdit/" });
    },
    async shopSubmit(e: any){
      this.$emit("toggleImageFn", true);
      const modalInstance = modalController;
      const modal = await modalInstance
        .create({
          component: shopSubmit,
          cssClass: "custom-modal-class",
          componentProps: {
              data:e,
            context: this,
            modalInstance,
          },
        })

      return modal.present();
    }
  },
});
</script>

<style lang="scss" scoped>

ion-toolbar {
  --background: var(--brand-primary);
}

</style>
