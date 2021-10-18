<template>
  <ion-grid>
    <ion-row>
      <ion-col>
          <!-- <div :v-if="loading"> loading...</div> -->
          <div :v-else-if="data">
        <ion-slides>
            <ion-slide  v-for="(item, index) in data.edges"
            :key="index">
                {{item.node.name}}
            </ion-slide>
        </ion-slides>
          </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon, IonButton } from "@ionic/vue";
import { card, swapHorizontal } from "ionicons/icons";
export default {
  name: "Cats",
  components: { IonGrid, IonRow, IonCol,  },
    props: {
        loading:{
            type:Boolean
        },
		data: {
			type: Array,
			required: false,
            default:()=>[]
		}
	},
  setup() {
    return {
      card,
      swapHorizontal
    }
  },
	methods: {
		pay() {
			this.$router.push("pay");
		}
	}
};
</script>

<style  scoped>
ion-button {
  width: 100%;
  text-transform: none;
  height: 40px;
  --border-radius: 15px;
}
.btn-icon {
  margin: -3px 5px;
}
</style>