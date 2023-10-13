<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0 mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div
        class="flex flex-row justify-center items-center space-x-2 bg-primary h-14 rounded-xl w-40 mb-5"
      >
        <img class="w-10 h-10" src="@/assets/icons/info.svg" alt="" />
        <h1 class="text-white font-medium">Reciept</h1>
      </div>

      <div>
        <h1 class="mb-2.5 text-sm font-medium">Details</h1>
        <!-- <div
          class="flex flex-row items-center space-x-2 bg-secondary/10 h-14 rounded-xl w-full mb-2.5 p-5 font-medium"
        >
          Security Bill
        </div> -->
        <div
          v-if="singleData"
          class="flex flex-col gap-6 bg-secondary/10 rounded-xl w-full mb-5 py-8 px-5"
        >
          <div class="flex flex-row justify-between w-full">
            <h1 class="text-sm w-full font-medium">Reference</h1>
            <span class="font-medium w-40 text-right text-sm">
              {{ singleData && formatAmount(singleData.amount) }}
            </span>
          </div>

          <div class="flex flex-row justify-between w-full">
            <h1 class="text-sm w-full font-medium">Reference</h1>
            <span class="font-medium w-40 text-right text-sm">
              {{ singleData && singleData.reference }}
            </span>
          </div>

          <div
            v-if="singleData && singleData.recipient"
            class="flex flex-row justify-between w-full"
          >
            <h1 class="text-sm font-medium">Beneficiary</h1>
            <h1 class="font-medium text-sm">
              {{
                singleData && singleData.recipient && singleData.recipient.name
              }}
            </h1>
          </div>

          <div class="flex flex-row justify-between w-full">
            <h1 class="text-sm font-medium">Bank</h1>
            <h1 class="font-medium text-sm">
              {{
                singleData && singleData.senderBank
                  ? singleData.senderBank
                  : singleData.recipient && singleData.recipient.bankName
              }}
            </h1>
          </div>

          <div
            v-if="singleData && singleData.recipient"
            class="flex flex-row justify-between w-full"
          >
            <h1 class="text-sm font-medium">Receiver Account</h1>
            <h1 class="font-medium text-sm">
              {{ singleData && singleData.recipient.bankAccount }}
            </h1>
          </div>

          <!-- <div class="flex flex-row justify-between w-full">
            <h1 class="text-sm font-medium">Debit Account</h1>
            <h1 class="font-medium text-sm">3298467159</h1>
          </div> -->

          <div class="flex flex-row justify-between w-full">
            <h1 class="text-sm font-medium">Date</h1>
            <h1 class="font-medium text-sm">
              {{ singleData && formatDateString(singleData.paidAt) }}
            </h1>
          </div>

          <div class="flex flex-row justify-between w-full">
            <h1 class="text-sm font-medium">Remark</h1>
            <h1 class="font-medium text-sm">N/A</h1>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import BackButton from "@/components/BackButton.vue";
import { useRoute } from "vue-router";

import { useDataStore } from "@/stores/data.js";
import { computed } from "vue";
import { helperFunctions } from "@/composable/HelperFunctions";

const { formatAmount, formatDateString } = helperFunctions;

const store = useDataStore();
const route = useRoute();

const history = computed(() =>
  store.getTransactionHistory && store.getTransactionHistory.inflow
    ? store.getTransactionHistory
    : []
);
const singleData = computed(() => {
  const data = [...history.value.inflow, ...history.value.outflow];
  const info = data.find((d) => d.paidAt === route.params.id);
  return info;
});
</script>

<style></style>
