<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap");
* {
  font-family: "Maven Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #515251;
}

.title-font {
  font-family: "Almarai", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
