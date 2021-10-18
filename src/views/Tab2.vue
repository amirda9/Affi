<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align:center; color:white;">کیف پول</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="loading">Loading</div>
      <div v-if="result">
        <ion-row class="ion-padding-top ion-padding-horizontal">
          <ion-col>
            <CardWallet :data="res" />
          </ion-col>
        </ion-row>
        <ion-row ion-padding-horizontal>
          <ion-col>
            <QuickActions />
          </ion-col>
        </ion-row>

        <RecentList :data="recentList" :id="res.id" />

        <!-- <ion-fab horizontal="start" vertical="bottom">
      <ion-fab-button>Button</ion-fab-button>
    </ion-fab> -->
        <!-- <ExploreContainer name="Tab 2 page" /> -->
      </div>



      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
} from "@ionic/vue";
import CardWallet from "@/components/CardWallet.vue";
import QuickActions from "@/components/QuickActions.vue";
import RecentList from "@/components/RecentList.vue";
import Bar from "@/components/Bar.vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "Tab2",
  components: {
    CardWallet,
    QuickActions,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    RecentList,
  },
  setup() {
    // eslint-disable-next-line prefer-const
    let name = +localStorage.id;
    const { result, loading, error, variables } = useQuery(
      gql`
        query wallet($id: Int!) {
          wallet(userId: $id) {
            id
            amount
            bankName
            user {
              name
            }
            bankAccountNumber
            transactions {
              edges {
                node {
                  amount
                  transactionDate
                  destination {
                    id
                    user {
                      shop {
                        user {
                          name
                        }
                      }
                      aff {
                        user {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      {
        id: name,
      },
      () => ({
        fetchPolicy: "no-cache",
      })
    );

    const res = useResult(result, null, (data) => data.wallet);
    const recentList = useResult(
      result,
      null,
      (data) => data.wallet.transactions.edges
    );

    return {
      res,
      result,
      recentList,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-toolbar {
  --background: var(--brand-primary);
}
</style>
