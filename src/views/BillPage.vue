<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0">
        <BackButton />
      </div>
    </ion-header>
    <div
      class="bg-primary rounded-xl p-6 flex flex-col justify-between w-11/12 mx-auto mb-6 h-44"
    >
      <div class="flex justify-between">
        <img class="w-20" src="@/assets/icons/turf-logo.svg" alt="" />
        <span class="self-start font-medium text-lg text-white">{{
          formatAmount(getUser.walletBalance)
        }}</span>
      </div>
      <!-- <span
        class="text-white text-xs text-right tracking-widest font-medium self-end justify-self-end"
        >{{ getUser.paymentDetails.accountName }}</span
      > -->
      <span
        class="text-white text-sm text-right tracking-widest font-bold self-end justify-self-end"
        >{{ getUser.paymentDetails.accountNumber }}</span
      >
      <span
        class="text-white text-xs text-right font-medium self-end justify-self-end"
        >{{ getUser.paymentDetails.bankName }}</span
      >
    </div>
    <ion-content class="ion-padding">
      <!-- <div class="flex flex-col space-y-2">
        <div class="text-lg font-medium">Bills</div>
        <div
          @click="
            $router.push({ name: 'BillPageDetails', params: { id: 'new' } })
          "
          class="flex flex-row bg-secondary/10 w-full  md:w-80 rounded-xl py46 px-4"
        >
          <div class="flex flex-row h-full w-full p-1">
            <div class="flex justify-center items-center w-2/5 h-full">
              <img class="w-10 h-10" src="@/assets/icons/recipt.svg" alt="" />
            </div>
            <div class="w-3/5 h-full flex flex-col gap-1 justify-center">
              <h1 class="text-sm font-medium">Security Bill</h1>
              <h1 class="text-sm font-medium">5,000</h1>
            </div>
          </div>
          <div class="h-full w-full flex justify-end items-center p-1">
            <h1 class="font-medium">view</h1>
          </div>
        </div>
      </div> -->

      <div class="flex flex-col space-y-2">
        <div class="text-lg font-medium">Transactions</div>
        <div
          style="border-radius: 20px"
          class="w-full bg-white h-full mb-0 -mt-7"
        >
          <ion-segment
            class="p-1 rounded-xl w-full mx-auto border border-gray bg-none mb-6"
            color="light"
            mode="ios"
            v-model="activeScreen"
          >
            <ion-segment-button
              :class="activeScreen == 'inflow' ? 'active' : ''"
              class="py-1 mx-1 text-base font-medium bg-background"
              value="inflow"
            >
              <ion-label
                :class="activeScreen == 'inflow' ? 'text-white' : undefined"
                class="text-sm"
                >Inflow</ion-label
              >
            </ion-segment-button>
            <ion-segment-button
              :class="activeScreen == 'outflow' ? 'active' : ''"
              class="py-1 mx-1 text-base font-medium bg-background"
              value="outflow"
            >
              <ion-label
                :class="activeScreen == 'outflow' ? 'text-white' : undefined"
                class="text-sm"
                >Outflow</ion-label
              >
            </ion-segment-button>
          </ion-segment>
        </div>
        <div
          v-for="data in history.inflow"
          :key="data.paidAt"
          @click="
            $router.push({
              name: 'TransactionDetails',
              params: { id: data.paidAt },
            })
          "
          class="flex flex-row bg-secondary/10 w-full md:w-80 rounded-xl py-4 px-4"
          v-show="activeScreen === 'inflow'"
        >
          <div class="flex flex-row gap-3 h-full w-full p-1">
            <div class="flex justify-center items-center h-full">
              <img class="w-10 h-10" src="@/assets/icons/inflow.svg" alt="" />
            </div>
            <div class="w-3/5 h-full flex flex-col gap-1 justify-center">
              <h1 class="text-sm text-success font-medium">
                {{ formatAmount(data.amount) }}
              </h1>
              <h1 class="text-sm text-secondary font-medium">
                {{ formatDateString(data.paidAt) }}
              </h1>
            </div>
          </div>
          <div class="h-full w-full flex justify-end items-center p-1">
            <h1 class="font-bold text-lg text-success">...</h1>
          </div>
        </div>

        <div
          v-for="data in history.outflow"
          :key="data.paidAt"
          @click="
            $router.push({
              name: 'TransactionDetails',
              params: { id: data.paidAt },
            })
          "
          class="flex flex-row bg-secondary/10 w-full md:w-80 rounded-xl py-4 px-4"
          v-show="activeScreen === 'outflow'"
        >
          <div class="flex flex-row gap-3 h-full w-full p-1">
            <div class="flex justify-center items-center h-full">
              <img class="w-10 h-10" src="@/assets/icons/outflow.svg" alt="" />
            </div>
            <div class="w-3/5 h-full flex flex-col gap-1 justify-center">
              <h1 class="text-sm text-primary font-medium">
                {{ formatAmount(data.amount) }}
              </h1>
              <h1 class="text-sm text-secondary font-medium">
                {{ formatDateString(data.paidAt) }}
              </h1>
            </div>
          </div>
          <div class="h-full w-full flex justify-end items-center p-1">
            <h1 class="font-bold text-lg text-primary">...</h1>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonHeader,
} from "@ionic/vue";
import BackButton from "@/components/BackButton.vue";

import { useDataStore } from "@/stores/data.js";
import { computed, onMounted, ref } from "vue";
import { helperFunctions } from "@/composable/HelperFunctions";

const { formatAmount, formatDateString } = helperFunctions;

const store = useDataStore();
const { query } = store;
const getUser = computed(() => store.getUserData);
const history = computed(() => store.getTransactionHistory);
const activeScreen = ref("inflow");
async function queryTransactions() {
  try {
    await query({
      endpoint: "FetchCustomerTransactionHistory",
      payload: {},
      service: "GENERAL",
      storeKey: "transactionHistory",
    });
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
  await queryTransactions();
});
</script>

<style scoped>
ion-segment {
  --border: 1px solid #d8e1ef;
}

ion-segment-button::part(indicator-background) {
  /* background: #08a391; */
  background: #d1643a;
  color: #fff;
}

/* Material Design styles */
ion-segment-button.md::part(native) {
  color: #000;
}

.segment-button-checked.md::part(native) {
  color: #d1643a;
}

ion-segment-button.md::part(indicator-background) {
  height: 4px;
}

/* iOS styles */
ion-segment-button.ios::part(native) {
  color: #d1643a;
}

.segment-button-checked.ios::part(native) {
  color: #fff;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 8px;
}
ion-segment-button.active {
  color: #fff;
  box-shadow: 0px 5.06963px 13.9415px -3.80222px rgba(24, 39, 75, 0.12),
    0px 8.87185px 40.557px -2.53481px rgba(24, 39, 75, 0.12);
}
</style>
