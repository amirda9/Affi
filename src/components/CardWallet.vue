<template>
	<ion-slides pager="true">
		<ion-slide>
			<ion-grid class="card" >
				<ion-row>
					<ion-col class="ion-text-center expDate">
						امیر نایینی
					</ion-col>
					<!-- <ion-col class="card-icon">
						<ion-icon name="card" />
					</ion-col> -->
				</ion-row>
				<ion-row>
					<ion-col class="ion-text-center card-number">
						6037 9974 6659 5908
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col class="balance">
						{{ num.toLocaleString() }} ریال
					</ion-col>
                    <ion-col class="ion-text-right expDate">
						02/05 
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-slide>
	</ion-slides>
</template>

<script>
import { IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";
export default {
	name: "card-wallet",
	components: { IonSlides, IonSlide, IonGrid, IonRow, IonCol },
	data(){
		return{
			num:100000
		}	
	},
  props: {
		data: {
			type: Array,
			required: false,
			default: () => []
		}
		
	},
}
</script>

<style scoped>
.card {
	background-color: #1fc8db;
  background-image: linear-gradient(141deg, #383a3e 0%, #383a5f 51%, #383a48 75%);
	border-radius: 25px;
  height: 170px;
	margin: 0 3px;
}
ion-row {
	margin: 10px;
}
.balance, .expDate, .card-number {
	text-align: left;
    color: white;
}
.balance, .card-number {
	font-size: 20px;
    color:white;
}
.card-number {
	font-size: 7vw;
}
.card-icon {
	text-align: right;
}
</style>