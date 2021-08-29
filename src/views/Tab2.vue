<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align:center; color:white;">کیف پول</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title style="text-align:center; color:white;" size="large">کیف پول</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-row class="ion-padding-top ion-padding-horizontal">
        <ion-col>
          <CardWallet/>
        </ion-col>
      </ion-row>
      <ion-row ion-padding-horizontal>
        <ion-col>
          <QuickActions/>
        </ion-col>
      </ion-row>

      <RecentList :data="recentList"/>
  
  
  <!-- <ion-fab horizontal="start" vertical="bottom">
      <ion-fab-button>Button</ion-fab-button>
    </ion-fab> -->
      <!-- <ExploreContainer name="Tab 2 page" /> -->
      
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonRow,IonCol,IonFab,IonFabButton } from '@ionic/vue';
import CardWallet from '@/components/CardWallet.vue';
import QuickActions from '@/components/QuickActions.vue';
import RecentList from '@/components/RecentList.vue';
import Bar from '@/components/Bar.vue';

export default  {
  name: 'Tab2',
  components: {CardWallet,QuickActions,IonHeader, IonToolbar, IonTitle, IonContent, IonPage , IonRow,IonCol,RecentList , IonFab,IonFabButton},
  data(){
    return{
      recentList: [
        {
          name: "Themna Makwa",
          cost: "19.30",
          date: "12 Aug 2020, 03:23 am",
        },
        {
          name: "Tami Muthambi",
          cost: "6.09",
          date: "10 Aug 2020, 13:40 pm",
        },
  ]
    }
  },
  
}
</script>


<style lang="scss" scoped>
ion-toolbar{
  --background:#383a5f;
}
</style>