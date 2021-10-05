<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align:center; color:white;">پروفایل</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
  
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { onMounted } from 'vue-demi';


export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
}
</script>

<style lang="scss" scoped>
ion-toolbar{
  --background:var(--brand-primary);
}

@import url(https://fonts.googleapis.com/css?family=Oxygen:400,300);
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);


</style>