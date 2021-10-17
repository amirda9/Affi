<template>
  <ion-page>
    <ion-header style="padding:0; margin-bottom:0;">
      <ion-toolbar>
        <ion-title style="color:white; text-align:center;">فروشگاه‌ها</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title style="color:white; text-align:center;" size="large">فروشگاه‌ها</ion-title>
        </ion-toolbar>
      </ion-header> -->
<!-- 
      <ion-card>
    <ion-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAAA+VBMVEX///84gP9BuIM0SV75+vvL097O1uAqs3nx+fXw8fIWNU8zfv8pev8fdv8vfP9CvYUmeP8zPls0Rl0zQVzv9P86gv+lwf+YuP/S4P+Irv+txv9Ni/9tnf80S1/p8P9Eh//c5/+3zf+/0v99p/9nmf+Qs/+0y//K2v9BtIL0+P82tX5QvYx0yKA4bWkoQFfj7P8+nnqk2cA7iHLI6Njj8+w1V2I6gXC64s9elP9iwpYSr3EihGcVKkwAJEO9xMg+VGYXOlDT7OCZpKs2X2SIlJ0/qn5vforj5+g5dmyFzqtgcX49lXdUZnWosrc+o3uw3sgAbf+V1LZ7yqX6O2LGAAAIBklEQVR4nO2ca3faOBCGISGQjS3HJRcuJkAMSUrSNk2vtLvb9Lq9bdpt/v+PWbBk0IwsG1PJhHPm+ZCTAyLIk9Ho1WtZpRJBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBIPrHJ52g7DLGvIOg0wgvV92hO8t+u+Mz3/WcMsdxPJd5g7Cy6o7dQY7HzPXKCtOIdc4K7ck24g+I+oEKbIA/b/y/PWp4vqOGKo6Y3zs1/Y0pXL2uAf78a0fi7zfKB67l93fe1hCmo9XwXX2sIlh5ZPg7U7jYAOw+r29KHOHmN2/lt+993wWfrr0027nQcXEyOZ7jyPFzDrpmvzOVdzUYrh/35HA8eg9bVx7J79Y/wGBtvDLatVGHgTLlM3YQDIfjwGHMFSnnuPtR22ZjMGg0jX59Ig/OYXI9BMm1A0vXRxCte59gsGrPTHas6c1L+6Sgjxtn8yy6DE8CNg0Yi8p8s8e8CaxnPV7bKLnu74Hk+kdu+3kHpNYXmFrnX03263CeWC4bhmpx2m9PAtaZ/nbKxNh0mPWa/wsl1wsQrp2q1PQbHIj3UWptG+xVaxYs1z/RlabmsD/9KQ1YZj27NhBHckg2r+cN34DU2nuCSvyVwT51/LhcsVbWnHcgTwMHBjuRyEs4Fne/g0K/czNreA0y6xqV+A2DXerEc6E/zlzhhL4cLd+6Xn0Fr3r3Ayj0j2INdQNL/GM0Dp+a69AgDhY7zG7cAjrfa5nrRjLPUKH/BFXER96qAkv8Q1TiDaqHuMA73iJVaAzkqzc01w8Nt6jQf4Eq4nPUqDD1cBYHq7e/SHMYLWdsrB86FBUBh+K3aRuoHvZeoNT6Zawzo1h4BostowZwJA6MdUTLFUquJ6qK+BdEsI4q/Lm5BaLIFae3YPtjWOWPjXVED7r43Ws5NvVrRT3gBeJPYz05FRfvLLpYroB1t2esIyk8RSriMSz0NyUgwurPkXq4MNaRkfBnWH/hjxzL6rSI1JqoCDQWoYo4QiX+Byrx74z1o8XFA2vn+cwsXOzEWEdSSVcRm3DJg9XDA2Pd6PIL95Jntm542DhptM/wID31fWeCb3+ZGPMVqwhQ6AF79haIQmqyBO3QbRww33Vdz/VZ0IazSqXdCYIOf3EUGutNCii5NuraYFlUDzy13Ibyzv6ASUrB8X21iSBYdDL9LX6i5PquS64jewvEw6hqOa7yRpvh+xhuOVHoX/Y8+z7ElHTTeV7iLdrL3E5wldXhgJVVEmaC0QlzChGoWabzrMRbtJf7PCg+ruJjbM+LcOHR2PwvaqimZiZLiOt00zlOLYv28ombuHjpJAcrIbt4buZ3bapb1exGiHTTWaSWTXu5xy8W1Z1DXxMsVcM2ouqW27WpbFW38mdXuunMo2XRXt7nA9GBr3aTalYMskrFUM5roC4XrRKMFjadN1V7+dykvcxdUDwQh2m3X/GEIFJuIatnzpLRUkxnlFxW7eVSI6pPyEXop6WWIja4fZO3cC0ZLUVFwOWiVXt5Us2jS2XQiR8kbBiRQLFtu0kZl8Wy0UpXEVg9mLSXS7MZDb7ope+DQM4yv1uWV3EtG61003nP6s3pEh9zAXitqZ8QRXKBy+QThZPTnF86WmkqQlkgGr05La4UJUtbp7Vm0eqD9rx5zqXi0tFKNZ1Rha8t9QVaukmjqJVetiY1CloO0Wh2FnRQKzHTaMXk6zQKye5MRVi0lyP6XEBAadnJ2L5VdqGe5wKXLfSF1a2YalX6PVendaazRXuZI6IF7c/saMH5L0e0KtMgqeQck5pb1xbtZc7lOuaWxnS2aC8L1rJuJZjO0+SyaC8L1nFOnLCNl4t1q/byjPXTWxHYdJ6oiCMUwPOl/7geYdjAFzP2NK9Wy3MU09n27uWItVsnCvBy8TFWD2YXiIJlPAhUz4v1IGKQ6byBS7xp9RARJhrNd9ffmoGXi6ho3f7Gn9azbt7pnF94XgSpZVw9cPL78qhpob68TEq0jNrLMmt1zwfwMmUs/t5f1hPfT8T/Z939RLyj5oxnYTH3EyEXuliZtZcB+e5VK82GXmJuFgFWEbNxaEU9cMQ+CHWZd7rIPgiRmsXsg8DcJpcuw/YyYCSG0nJ7bPiOVSdQ3ymAZBVh2F5GDJbbvxURiqpXyP4tlauk5Dq3pB44QlxplsW6vYERFZF71p/00ZE0Dg3byxix79TPs++Uw1eZK0stxXSeYtpexlTy72nmCA27oqoV8UpJLSsLRJnc++U58eMubIWnamDT2by9rCKexfBy+Z+xU5EwmxYIMp1tLRBl4ud8vAWf85nSF2LfW+E4LGEVYcNeVsn5DJn0ibKb06oxDTCdbdjLCeR7PnG64VlYYKtR8TLyOLRhLyeR69nXyuzYiOIexdAiqQiLC0TE/LnqIGuOCx0vR2itMzOd7auHObNwZTyz3x/Pn4i6C8GaqQhL9rIG6TwIpj8PojNfahf0rF0mwnQuQj1IwLNGjtUE6x725rHysD29OqJoWbOXdaScY1Pph60ek+7LusGKpYMEN50L/9qKekZSORiPxz1veiqe/JbyCMtKubBqL+sJy8iQnz6zqdxe9IP+Cvqm513Npr2cRsPNOtvNP1iZRaPj9rVFezmVO3Vu4II8s2ovZxDqz6QcFHsm5XqQeN6pQ+ed6gFn6Q4aYZGHKxIEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRCEcf4HsS61Yls2H1oAAAAASUVORK5CYII="></ion-img>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>
        Here’s a small text description for the card component. 
        Nothing more, nothing less.
      </p>
      <ion-item>
        <ion-button fill="solid">Action</ion-button>
        <ion-icon :icon="heart" slot="end"></ion-icon>
        <ion-icon :icon="share" slot="end"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card> -->
  <CardListing :data="res"/>
  <!-- {{res}} -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from '@vue/runtime-core';
import { heart,share } from 'ionicons/icons';
import CardListing from '@/components/CardListing.vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag'


export default defineComponent( {
  name: 'Tab1',
  components: { CardListing, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  setup(){

     const { result,loading, error,variables } = useQuery(gql`
      query shops {
  allShop {
    edges {
      node {
        id
        url
        shopRate
        user{
          name
        }
        shopPic
        productsCount
      }
    }
  }
}

    `,() => ({
  fetchPolicy: 'no-cache',
})
)

    const res = useResult(result, null, data => data.allShop.edges)
    // console.log(res)

    return{
      heart,share,res,result
    }
  },
   data(){
     return{
       cards: [
        {
          new: "59.990",
          rate: "481",
          term: "36",
          company: "Digikala",
          model: "digital market",
          image: "../images/digi.png"
        },
        {
          new: "54.980",
          rate: "342",
          term: "36",
          company: "Snapp food",
          model: "Food Delivery",
          image: "../images/digi.png"
        },
        {
          new: "43.986",
          rate: "366",
          term: "36",
          company: "DigiStyle",
          model: "Clothes",
          image: "../images/digi.png"
        },
      ],
     }
   }
})

</script>


<style lang="scss" scoped>
ion-header {
  padding: 7px 0;
  margin-bottom: 10px;
  border-bottom: none;
}

ion-toolbar{
  --background:var(--brand-primary);
}

ion-content{
  --background:#ffffff;
}
</style>