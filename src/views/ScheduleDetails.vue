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
          class="h-full grid grid-flow-col auto-cols-auto gap-4 justify-start w-full"
        >
          <div class="h-full grid grid-flow-col auto-cols-auto gap-3">
            <div class="w-16 h-16 bg-contain bg-secondary rounded-full"></div>
            <div class="w-full mt-2">
              <span class="text-secondary font-medium w-full mt-3"
                >Mr Mick t</span
              >
              <div class="text-grey-dark font-medium text-xs capitalize">
                position: tour guide
              </div>
            </div>
          </div>
          <div class="h-full grid grid-flow-col auto-cols-auto gap-3">
            <div class="w-16 h-16 bg-contain bg-secondary rounded-full"></div>
            <div class="w-full mt-2">
              <span class="text-secondary font-medium w-full mt-3"
                >Due Date</span
              >
              <div class="text-grey-dark font-medium text-sm capitalize">
                Mar 20th
              </div>
            </div>
          </div>
        </div>

        <div
          :style="{
            backgroundImage: 'url(' + driver + ')',
          }"
          class="w-full h-36 bg-no-repeat bg-cover p-5 bg-secondary rounded-tl-3xl rounded-br-3xl my-7"
        ></div>

        <div class="my-6 gap-4 grid grid-flow-col auto-cols-auto">
          <TurfButton color="primary" fill="solid">Reschedule</TurfButton>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Applied Date
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              14th Apr 2023
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Approved Date
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              14th Apr 2023
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Start Time
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              10.00 Am
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Close Time
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              06.00 Pm
            </p>
          </div>
        </div>

        <div class="mt-6 p-4 items-center w-full bg-grey-faint rounded-xl">
          <div class="w-full text-secondary font-bold text-base">Note</div>
          <div class="w-full text-grey-darkBlueText mt-2 leading-6 text-sm">
            Become what you live ,live in what you want to become,Life is too
            short to hold back push on with renters Become what you live ,live
            in what you want to become,Life is too short to hold back push on
            with renters
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import TurfButton from "@/components/TurfButton.vue";

import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import driver from "@/assets/img/driver.png";
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
