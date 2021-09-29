<template>
  <ion-page>
      <ion-grid>
    <ion-row id="list">
      <ion-col v-for="(item, index) in btns" :key="index" @click="select(index)" :class="active === index ? 'active' : null">
        {{ item }}
      </ion-col>
    </ion-row>
  </ion-grid>
  </ion-page>
</template>


<script>
import { defineComponent,ref } from "vue";
import {
 IonGrid, IonRow, IonCol
} from "@ionic/vue";

export default defineComponent({
    name: "Shop",
    
  components: { IonGrid, IonRow, IonCol },
  data() {
    return {
      active: null,
      btns: ["Category 1 ", "Food", "Clothes"]
    }
  },
	methods: {
		pay() {
			this.$router.push("pay");
    },
    select(index) {
      this.active = index;
    }
	}
})
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
  background: #312F3E;
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
</style>