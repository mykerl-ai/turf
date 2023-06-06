<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <ion-backdrop class="backdrop"></ion-backdrop>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonBackdrop, IonPage, IonContent } from "@ionic/vue";
</script>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/map.png");
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Adjust the opacity as desired */
}
.backdrop::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    18,
    25,
    37,
    0.7
  ); /* Adjust the opacity (last value) as desired */
}
</style>
