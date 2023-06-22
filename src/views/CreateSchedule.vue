<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0 mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <h1 class="text-secondary text-2xl font-medium capitalize">
        schedule date
      </h1>
      <p class="text-sm text-grey-dark mt-2">
        Become what you live ,live in what you want to become,
      </p>
      <div>
        <ion-range
          :disabled="true"
          aria-label="Volume"
          :value="100"
          :max="100"
        ></ion-range>
      </div>
      <form
        @submit.prevent="
          $router.push({ name: 'FinalStep', params: { id: $route.params.id } })
        "
        class="grid grid-flow-row auto-rows-auto gap-4 mt-5"
      >
        <TurfDate
          label="Select Date"
          :fullDate="true"
          @update="schedule.date"
          :value="schedule.date"
        ></TurfDate>
        <TurfDate
          :fullDate="false"
          :value="schedule.time"
          @update="schedule.time"
          label="Select Time"
        ></TurfDate>

        <TurfButton class="mt-4" type="submit" color="primary" fill="solid"
          >Submit</TurfButton
        >
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
// import TurfInput from "@/components/TurfInput.vue";
// import TurfSelect from "@/components/TurfSelect.vue";
import TurfButton from "@/components/TurfButton.vue";
import TurfDate from "@/components/TurfDate.vue";

import {
  IonPage,
  IonRange,
  IonContent,
  // IonCheckbox,
  IonHeader,
} from "@ionic/vue";
import { ref } from "vue";

const schedule = ref({
  date: "",
  time: "",
});
</script>

<style scoped>
ion-checkbox {
  background: transparent !important;
  display: flex;
  align-items: center;
}
ion-checkbox .checkbox-icon {
  margin-right: 0px !important; /* Adjust the margin value as needed */
}

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
</style>
