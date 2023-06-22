<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0 mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <h1 class="text-secondary text-2xl font-medium capitalize">last step!</h1>
      <p class="text-grey-dark text-sm mt-2">You are almost done</p>
      <div>
        <ion-range
          :disabled="true"
          aria-label="Volume"
          :value="100"
          :max="100"
        ></ion-range>
      </div>
      <form class="grid grid-flow-row auto-rows-auto gap-4 mt-5">
        <div id="upload" class="w-full pb-6 pt-3 px-2">
          <TurfUpload @fileUrl="uploadFile = $event" />
        </div>

        <TurfDate
          :fullDate="true"
          @update="startDate = $event"
          label="Start Date"
        ></TurfDate>

        <div class="text-sm text-grey-dark font-medium">
          Payment Source of Fund
        </div>

        <div
          class="rounded-2xl w-32 h-28 card p-3 grid grid-flow-row auto-rows-auto gap-1 justify-items-center justify-center"
        >
          <p
            v-if="cardAdded"
            class="text-secondary text-sm font-medium self-center"
          >
            Debit Card
          </p>
          <span v-if="cardAdded" class="text-secondary text-xs font-medium"
            >******342</span
          >

          <ion-icon
            v-if="!cardAdded"
            class="text-grey-dark self-center text-2xl font-bold"
            :icon="add"
          ></ion-icon>
          <span v-if="!cardAdded" class="text-grey-dark text-sm font-medium"
            >Add Card</span
          >
        </div>

        <TurfButton type="submit" color="primary" fill="solid"
          >Finish</TurfButton
        >
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import TurfDate from "@/components/TurfDate.vue";
// import TurfSelect from "@/components/TurfSelect.vue";
import TurfButton from "@/components/TurfButton.vue";
import TurfUpload from "@/components/TurfUpload.vue";

import { IonPage, IonRange, IonContent, IonHeader, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import { ref } from "vue";

const uploadFile = ref(null);
const cardAdded = ref(false);
const startDate = ref("");
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

#upload {
  width: 100%;
  background: rgba(134, 133, 133, 0.1) !important;
  border: 1px solid rgba(134, 133, 133, 0.2);
  border-radius: 20px;
}

.card {
  background: rgba(134, 133, 133, 0.1) !important;
}
</style>
