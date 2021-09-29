<template>
	<div>
		<ion-grid @click="show(item.node.id)" v-for="(item, index) in data" :key="index">
            <ion-card>
			<ion-row class="first-row">
				<div class="company">
					{{ item.node.name }}
					<br />
					<span class="model">
						{{ item.node.name }}
					</span>
				</div>
				<img :src=item.node.image />
			</ion-row>
			<ion-row class="second-row">
				<ion-col>
					<div class="label">امتیاز</div>
					<div class="value">
						{{item.node.rating}}
						<span class="unit">
							/5
						</span>
					</div>
				</ion-col>
				<ion-col>
					<div class="label">تعداد محصولات</div>
					<div class="value">
						89
						<!-- <span class="unit">
							months
						</span> -->
					</div>
				</ion-col>
				<ion-col>
					<div class="label">سود مشارکت</div>
					<div class="value">
						{{ item.node.rating }}
					</div>
				</ion-col>
			</ion-row>
            </ion-card>
		</ion-grid>
	</div>
	{{res}}
</template>

<script>
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
export default {
	name: "card-wallet",
	components: { IonGrid, IonRow, IonCol },
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		},
	},
	methods:{
		show(e){
		console.log(e);
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