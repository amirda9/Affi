<template>
	<div class="header" id="ax">
		<ion-icon :icon="arrowBack" class="back"  @click="back"></ion-icon>
	</div>
</template>

<script>
import { IonIcon, onIonViewDidEnter } from "@ionic/vue";
import { arrowBack } from "ionicons/icons";
export default {
	name: "overview-header",
	components: { IonIcon },
	setup() {
        onIonViewDidEnter(()=>{
            // console.log(document.getElementById('ax'))
        })
    return {
      arrowBack
    }
  },
  methods: {
		back() {
			this.$router.back();
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	background: #000000;
//   background-image: url("/assets/img/b.jpg");
  background-image: url("https://dkstatics-public.digikala.com/digikala-products/113542037.jpg?x-oss-process=image/resize,h_1600/quality,q_80");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
	height: 45%;
	padding: 15px 0 0 15px;
	z-index: -99999999999;
}
ion-icon {
	font-size: 18px;
	background: #1d1d23;
	padding: 13px;
	color: #ffffff;
	border-radius: 50px;
	font-weight: 600;
	&.back {
		border-radius: 10px;
	}
}
</style>