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
        <div
          class="flex flex-row items-center space-x-2 bg-secondary/10 h-14 rounded-xl w-full mb-2.5 p-5 font-medium"
        >
          Security Bill
        </div>
        <div
          class="flex flex-col bg-secondary/10 h-72 rounded-xl w-full mb-5 p-5"
        >
          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Transaction number</h1>
            <h1 class="font-medium text-base">63273883991</h1>
          </div>

          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Beneficiary</h1>
            <h1 class="font-medium text-base">Anorue Michae</h1>
          </div>

          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Receiver Bank</h1>
            <h1 class="font-medium text-base">Fcmb</h1>
          </div>

          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Receiver Account</h1>
            <h1 class="font-medium text-base">7045723584</h1>
          </div>

          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Debit Account</h1>
            <h1 class="font-medium text-base">3298467159</h1>
          </div>

          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Date</h1>
            <h1 class="font-medium text-base">23-Oct-2023</h1>
          </div>

          <div class="flex flex-row justify-between w-full h-10">
            <h1 class="text-sm font-medium">Remark</h1>
            <h1 class="font-medium text-base">Security Rent</h1>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import { IonPage, IonHeader, IonContent } from "@ionic/vue";
</script>

<style></style>
