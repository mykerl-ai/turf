<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0 mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="mt-0">
        <div
          class="bg-secondary rounded-2xl p-3 grid grid-flow-col auto-cols-auto justify-start gap-6"
        >
          <div class="w-20 h-20 bg-primary rounded-2xl"></div>

          <div
            class="grid grid-flow-row auto-rows-auto gap-4 self-center justify-start"
          >
            <p class="capitalize font-medium text-white">Investment plan</p>
            <div
              class="grid grid-flow-col auto-cols-auto text-white justify-start gap-6"
            >
              <div class="capitalize">
                <p class="text-xs text-white font-medium">N3M</p>
                <p class="text-xs text-white font-medium">Target</p>
              </div>

              <div class="capitalize">
                <p class="text-xs text-white font-medium">N950k</p>
                <p class="text-xs text-white font-medium">Saved</p>
              </div>

              <div class="capitalize">
                <p class="text-xs text-white font-medium">76</p>
                <p class="text-xs text-white font-medium">Days Left</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <p class="capitalize text-grey-dark">total saved</p>

          <div class="mt-4">
            <p class="text-3xl text-secondary font-bold">N950,000</p>
            <div class="flex items-center gap-x-3 text-grey-light font-medium">
              <ion-range
                :disabled="true"
                aria-label="Volume"
                :value="73"
                :max="100"
              ></ion-range>
              <span class="inline-block">73%</span>
            </div>
            <p class="text-grey-dark">Stats Progress</p>
          </div>
        </div>

        <div class="my-6 gap-4 grid grid-flow-col auto-cols-auto">
          <TurfButton color="primary" fill="solid">Pay Here</TurfButton>
          <TurfButton color="primary" fill="outline">History</TurfButton>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              total amount
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              N200,000
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Spread Amount
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              200k/Mth
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Start Date
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              19th Mar 2023
            </p>

            <p class="mt-6 text-grey-dark text-xs font-bold capitalize">
              Target Date
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              19th Mar 2023
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Payment Plan
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              Monthly(10months)
            </p>

            <p class="mt-6 text-grey-dark text-xs font-bold capitalize">
              Days Left
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">76</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import TurfButton from "@/components/TurfButton.vue";

import { IonPage, IonContent, IonHeader, IonRange } from "@ionic/vue";
</script>

<style scoped>
ion-range {
  --bar-background: #000000;
  --bar-background-active: #63c834;
  --bar-height: 4px;
  --bar-border-radius: 8px;
  --knob-background: #ffffff;
  --knob-size: 40px;
  --pin-background: #fffff;
  --pin-color: #fff;
}

ion-range::part(knob) {
  display: none;
}
.slide {
  /* background: linear-gradient(
        180deg,
        rgba(217, 217, 217, 0) 28.55%,
        rgba(18, 25, 37, 0.87) 76.2%
      ); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.slide-content {
  /* height: 100%; */
  background-repeat: no-repeat;
  background-size: cover;
  transition: height 0.6s ease-in-out; /* Add a smooth transition for the slide height */
}

.taller-slide {
  height: 20rem; /* Adjust the height as per your requirement */
}
</style>
