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
						{{data.bankAccountNumber}}
						<!-- {{num}} -->
					</ion-col>
				</ion-row>
				<ion-row>
					<ion-col class="balance">
						
						{{data.amount.toLocaleString()}} ریال
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
import { data } from 'jquery';
export default {
	name: "card-wallet",
	components: { IonSlides, IonSlide, IonGrid, IonRow, IonCol },
	data(){
		return{
			numString : 1000
		}	
	},
  props: {
		data: {
			type: Object,
			required: false,
		}
	},
	setup(){
		const num = data.bankAccountNumber;
		return{
			num
		}
	}
}
</script>

<style scoped>
.card {
	/* background-color: #1fc8db; */
  background-image: linear-gradient(141deg, var(--brand-quaternary) 0%, var(--brand-primary)  51%, var(--brand-quaternary)  75%);
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