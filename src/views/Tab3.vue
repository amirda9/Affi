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
          <h2 class="ion-no-padding">{{user.name}}</h2>
        </ion-col>
      </ion-row>
</div>
      <ion-row>
      
        <ion-col size="6">
          <ion-card>
            <ion-card-header class="ion-text-center">
              فروشگاه های آنلاین
            </ion-card-header>
            <ion-card-subtitle class="ion-text-center">
              12
            </ion-card-subtitle>
          </ion-card>
        </ion-col>
        <ion-col size="6">
          <ion-card>
            <ion-card-header class="ion-text-center">
              تعداد محصولات
            </ion-card-header>
            <ion-card-subtitle class="ion-text-center">
              89
            </ion-card-subtitle>
          </ion-card>
        </ion-col>
      </ion-row>
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
} from "@ionic/vue";
import { computed, defineComponent, onMounted, ref } from "vue-demi";
import { pencilOutline, exitOutline } from "ionicons/icons";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { useRouter } from "vue-router";
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
    IonCard,
    IonCardHeader,
  },
  setup() {
    // eslint-disable-next-line prefer-const
    let name = +localStorage.id;
    const { result, loading, error, variables } = useQuery(
      gql`
        query user ($id:Int!){
          user(id: $id) {
            name
          }
        }
      `,
      {
        id: name,
      }
    );

    const user = useResult(result, null, (data) => data.user);
    console.log(user.value)
    const router = useRouter();
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);
    const testData = computed<ChartData<"doughnut">>(() => ({
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
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
      user
    };
  },
  methods: {
    logout() {
      // console.log(1);
      localStorage.clear();
      this.$router.push({
        path: "/login",
      });
    },
  },
});
</script>

<style lang="scss" scoped>
// div {
//   // width: 140px;
//   // height: 140px;
//   border-radius: 50%;
//   border-style: solid;
//   border-color: #FFFFFF;
//   box-shadow: 0 0 8px 3px #B8B8B8;
//   position: relative;
// }

// div img {
//   height: 100%;
//   width: 100%;
//   border-radius: 50%;
// }

// div i {
//   position: absolute;
//   top: 20px;
//   right: -7px;
//   /* border: 1px solid; */
//   border-radius: 50%;
//   /* padding: 11px; */
//   height: 30px;
//   width: 30px;
//   display: flex !important;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   color: cornflowerblue;
//   box-shadow: 0 0 8px 3px #B8B8B8;
// }
ion-toolbar {
  --background: var(--brand-primary);
}

// @import url(https://fonts.googleapis.com/css?family=Oxygen:400, 300);
// @import url(https://fonts.googleapis.com/css?family=Montserrat:700);
</style>
