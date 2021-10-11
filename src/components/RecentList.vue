<template>
  <ion-list>
    
    <ion-item v-for="(item,index) in data" :key="index">
      <!-- <ion-col v-if="item.node.destination.id==id" > -->
      <ion-icon slot="start" :icon="person"></ion-icon>
      <ion-label>
        <h2  v-if="item.node.destination.id!=id" >برداشت</h2>
        <h2  v-if="item.node.destination.id==id" >واریز</h2>
        <p>{{item.node.transactionDate}}</p>
      </ion-label>
      <ion-text slot="end">
        <b>ریال {{item.node.amount.toLocaleString()}}</b>
      </ion-text>
      <!-- </ion-col> -->
      <!-- <ion-col v-else> -->
        <!-- <ion-icon slot="start" :icon="person"></ion-icon>
      <ion-label>
        <h2>{{item.node.destination.user.id}}</h2>
        <p>{{item.node.transactionDate}}</p>
      </ion-label>
      <ion-text slot="end">
        <b>ریال {{item.node.amount.toLocaleString()}}</b>
      </ion-text> -->
      <!-- </ion-col> -->
    </ion-item>
    
  </ion-list>
</template>

<script>

import { IonList, IonItem, IonLabel, IonText, IonIcon } from "@ionic/vue";
import { person } from "ionicons/icons";
export default {
  name: "recent-list",
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		},
    id:{
      type:Number
    }
  },
  components: { IonList, IonItem, IonLabel, IonText, IonIcon },
  setup() {
    return {
      person
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 600;
	color: #000000;
}
ion-item {
  --background: var(--brand-tertiary);
  --border-style: none;
}
ion-icon {
  background: #ffffff;
  padding: 10px;
  border-radius: 16px;
  color: #000;
}
</style>