<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="grid grid-cols-2 items-center w-full mb-16 mt-4">
        <div
          class="grid grid-flow-col auto-cols-auto gap-3 whitespace-nowrap items-center rounded-2xl"
        >
          <div
            class="w-14 h-14 bg-contain"
            :style="{
              backgroundImage: 'url(' + img + ')',
            }"
          ></div>

          <div>
            <p class="text-secondary w-full text-left font-medium">
              Andrew Williams
            </p>

            <span class="text-grey-light">California, US</span>
          </div>
        </div>

        <div
          class="cursor-pointer w-full grid justify-end justify-self-end self-end"
        >
          <img src="@/assets/icons/hamburger.svg" alt="" />
        </div>
      </div>

      <div class="grid grid-flow-col auto-cols-auto">
        <h1 class="text-4xl capitalize font-bold text-secondary title-font">
          find your <br />
          dream
          <span class="text-primary">home</span>
        </h1>

        <div class="div w-full -mr-12 -mt-2">
          <div class="w-48 bg-secondary p-6 -ml-16 z-0"></div>
          <div class="w-40 bg-primary p-4 -ml-8 -mt-16 z-20"></div>
        </div>
        <!-- <img class="-ml-12 -mt-4 w-full" src="@/assets/icons/box.svg" alt="" /> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import img from "@/assets/img/profile.png";
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style scoped></style>
