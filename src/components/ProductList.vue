<template>
	<div>
        <!-- {{data}} -->
		<ion-grid  v-for="(item, index) in data" :key="index">
            <ion-card>
			<ion-row class="first-row">
				<div class="company">
					{{ item.node.name }}
					<br />
					<span class="model">
						{{ item.node.name }}
					</span>
				</div>
				<!-- <img v-bind:src="'http://37.152.180.217:8000/mediafiles/' + item.node.shopImage[0].src" /> -->
<img style="height: 40vh; width:100%" :src=item.node.images.edges[0].node.src>
			</ion-row>
			<ion-row class="second-row">
				<ion-col>
					<div class="label">امتیاز</div>
					<div class="value">
						{{item.node.averageRating}}
						<span class="unit">
							/5
						</span>
					</div>
				</ion-col>
				<ion-col>
					<div class="label">قیمت</div>
					<div class="value">
						{{item.node.price.toLocaleString()}}
					</div>
				</ion-col>
				<ion-col>
					<div class="label">مشخصات</div>
					<div class="value">
						<!-- <ion-button @click="openModal()" fill="clear" > -->
			<ion-icon :icon="chevronUpOutline" @click="openModal(item.node)" style="color: var(--brand-primary);"></ion-icon>
		<!-- </ion-button> -->
					</div>
				</ion-col>
			</ion-row>
            </ion-card>
		</ion-grid>
	</div>
</template>

<script>
import { IonGrid, IonRow, IonCol , IonCard , modalController , IonIcon } from "@ionic/vue";
import { chevronUpOutline } from "ionicons/icons";
import { useRouter } from 'vue-router';
import Modal from "./Modal";
export default {
	name: "product-list",
	components: { IonGrid, IonRow, IonCol , IonCard , IonIcon },
	setup(){
		const router = useRouter();
		return{
			router,
            chevronUpOutline
		}
	},
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		},
	},
	methods:{
		show(e){
			this.router.push({ path: '/product/'+e})  
		// console.log(this.data[0].node.shopImage[0].src);
	},
    async openModal(e) {
      this.$emit("toggleImageFn", true);
      const modalInstance = modalController;
      const modal = await modalInstance
        .create({
          component: Modal,
          cssClass: "custom-modal-class",
          componentProps: {
              data:e,
            context: this,
            modalInstance,
          },
        })

      return modal.present();
    }
	}
}
</script>

<style lang="scss" scoped>

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
ion-card{
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
.balance, .expDate, .card-number {
	text-align: left;
}
.balance, .card-number {
	font-size: 20px;
}
.card-number {
	font-size: 7vw;
}
.card-icon {
	text-align: right;
}
</style>