<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 items-center w-full mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div
        class="w-full h-36 rounded-2xl bg-secondary flex mb-5 p-4 grid grid-row-2 content-between"
      >
        <div class="grid grid-cols-2 w-full h-10 content-center">
          <div>
            <span class="text-white text-sm font-medium">Your balance</span>
          </div>
          <div class="justify-self-end">
            <span class="text-white text-sm font-medium">wallet</span>
          </div>
        </div>

        <div class="grid grid-cols-2 w-full h-10 content-center">
          <div>
            <span class="text-3xl font-medium text-white">1,000,000</span>
          </div>
          <div class="justify-self-end">
            <span class="text-primary text-sm font-medium">**** **** 1234</span>
          </div>
        </div>
      </div>

      <div>
        <p class="mb-2.5 font-medium text-xl">Quick Pay</p>
      </div>

      <div class="flex justify-between items-center mb-2.5">
        <div class="h-12 w-12 rounded-full bg-primary mt-20"></div>
        <div class="h-16 w-16 rounded-full bg-primary mt-10"></div>
        <div class="h-24 w-24 rounded-full bg-primary"></div>
        <div class="h-16 w-16 rounded-full bg-primary mt-10"></div>
        <div class="h-12 w-12 rounded-full bg-primary mt-20"></div>
      </div>

      <div class="grid grid-row justify-items-center mb-5">
        <p>landlord</p>
        <p class="text-sm">7234 **** **** 8712</p>
      </div>
      <div class="grid justify-items-center w-full mb-5">
        <div
          class="grid justify-items-center content-center h-16 w-44 bg-white border border-orange-600 rounded-full"
        >
          <p class="text-3xl">500,000</p>
        </div>
      </div>
      <div
        class="h-20 w-full bg-primary grid content-center p-4 rounded-2xl mb-5"
      >
        <p class="text-lg font-medium">Landlord</p>
        <p class="text-xl font-medium">Wallet Turf....8712</p>
      </div>

      <div
        class="grid h-14 w-full bg-white rounded-2xl justify-items-center content-center"
      >
        <p class="text-xl font-medium">Transfer</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonHeader } from "@ionic/vue";

import BackButton from "@/components/BackButton.vue";
</script>
