<template>
  <ion-page>
    <div
      class="bg-primary rounded-xl p-6 flex flex-col justify-between w-full md:w-80 h-44 mt-10"
    >
      <div class="flex justify-between">
        <img class="w-20" src="@/assets/icons/turf-logo.svg" alt="" />
        <span class="self-start font-medium text-base text-white"
          >NGN 2,000</span
        >
      </div>
      <span
        class="text-white tracking-widest font-medium self-end justify-self-end"
        >TURF ACCT</span
      >
    </div>
    <ion-content class="ion-padding">
      <div class="flex flex-col space-y-2">
        <div class="text-lg font-medium">Biils</div>
        <div
          @click="
            $router.push({ name: 'BillPageDetails', params: { id: 'new' } })
          "
          class="flex flex-row bg-secondary/10 w-full h-16 md:w-80 rounded-xl px-4"
        >
          <div class="flex flex-row h-full w-full p-1">
            <div class="flex justify-center items-center w-2/5 h-full">
              <img class="w-10 h-10" src="@/assets/icons/recipt.svg" alt="" />
            </div>
            <div class="w-3/5 h-full flex flex-col justify-center">
              <h1 class="text-sm font-medium">Security Bill</h1>
              <h1 class="text-sm font-medium">5,000</h1>
            </div>
          </div>
          <div class="h-full w-full flex justify-end items-center p-1">
            <h1 class="font-medium">view</h1>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style></style>
