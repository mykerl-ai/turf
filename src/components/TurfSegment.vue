<template>
  <ion-segment class="bg-white" v-model="selected" :value="selected">
    <ion-segment-button
      v-for="label in labels"
      :key="label.value"
      :value="label.value"
    >
      <ion-label
        class="font-medium"
        :class="selected !== label.value ? 'text-grey-dark' : undefined"
        >{{ label.label }}</ion-label
      >
    </ion-segment-button>
  </ion-segment>
</template>

<script setup>
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/vue";
import { ref } from "vue";

const props = defineProps({
  labels: {
    type: Array,
    default: () => [],
  },
});
console.log(props);
const selected = ref("");
selected.value = props.labels && props.labels[0].value;
</script>

<style>
ion-segment-button::part(indicator-background) {
  border-bottom: 2px solid #08a391;
  box-shadow: none;
}

/* Material Design styles */
ion-segment-button.md::part(native) {
  color: #1d3548;
}

.segment-button-checked.md::part(native) {
  color: #08a391;
}

ion-segment-button.md::part(indicator-background) {
  height: 4px;
}

/* iOS styles */
ion-segment-button.ios::part(native) {
  color: #08a391;
}

.segment-button-checked.ios::part(native) {
  color: #fff;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 0px;
}
</style>
