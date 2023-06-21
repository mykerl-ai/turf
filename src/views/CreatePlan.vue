<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0 mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <h1 class="text-secondary text-2xl font-medium capitalize">
        {{ $route.params.id }} plan
      </h1>
      <p class="text-sm text-grey-dark mt-2">
        Become what you live ,live in what you want to become,
      </p>
      <div>
        <ion-range
          :disabled="true"
          aria-label="Volume"
          :value="50"
          :max="100"
        ></ion-range>
      </div>
      <form
        @submit.prevent="
          $router.push({ name: 'FinalStep', params: { id: $route.params.id } })
        "
        class="grid grid-flow-row auto-rows-auto gap-4 mt-5"
      >
        <TurfInput label="Name the Plan"></TurfInput>
        <TurfSelect
          :multiple="false"
          :options="opt"
          placeholder="Select a category"
        ></TurfSelect>

        <TurfInput
          v-model="amount"
          :format="true"
          label="Amount in total"
        ></TurfInput>

        <div
          class="grid mb-3 grid-flow-col auto-cols-auto justify-start items-center gap-2"
        >
          <ion-checkbox label-placement="end"></ion-checkbox>
          <span class="text-primary font-medium text-sm"
            >Do you want the plan to be automated</span
          >
        </div>

        <span class="text-sm text-grey-dark">How will you prefer to save?</span>

        <div class="grid grid-flow-col auto-cols-auto gap-2">
          <div
            v-for="plan in savePlan"
            :key="plan"
            class="bg-secondary rounded-2xl text-white text-sm text-center py-4 w-20 h-20"
          >
            <p class="text-white mt-3 font-medium">{{ plan }}</p>
          </div>
        </div>

        <TurfInput
          v-model="amount"
          :format="true"
          label="How much do you want to save weekly?"
        ></TurfInput>

        <TurfSelect
          :multiple="false"
          :options="opt"
          placeholder="Options for Daily?"
        ></TurfSelect>

        <TurfSelect
          :multiple="false"
          :options="opt"
          placeholder="Options for Weekly?"
        ></TurfSelect>

        <TurfSelect
          :multiple="false"
          :options="opt"
          placeholder="Options for Monthly?"
        ></TurfSelect>

        <TurfButton type="submit" color="primary" fill="solid"
          >Continue</TurfButton
        >
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import TurfInput from "@/components/TurfInput.vue";
import TurfSelect from "@/components/TurfSelect.vue";
import TurfButton from "@/components/TurfButton.vue";

import {
  IonPage,
  IonRange,
  IonContent,
  IonCheckbox,
  IonHeader,
} from "@ionic/vue";
import { ref } from "vue";

const amount = ref(0);
const savePlan = ref(["Daily", "Weekly", "Monthly", "Manual"]);
const opt = ref([
  {
    id: 1,
    label: "Investment",
    value: "invest",
  },
  {
    id: 2,
    label: "Savings",
    value: "save",
  },
  {
    id: 3,
    label: "Dev",
    value: "dev",
  },
  {
    id: 4,
    label: "Cost",
    value: "cost",
  },
]);
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
