<template>
  <div class="w-full">
    <ion-datetime
      :is-date-enabled="isWeekday"
      :highlighted-dates="highlightedDates"
      @ionChange="updateDate"
    ></ion-datetime>
  </div>
</template>

<script setup>
import { IonDatetime } from "@ionic/vue";
import { defineEmits, onMounted, ref } from "vue";

const props = defineProps({
  takenDate: {
    type: Array,
    default: () => [],
  },
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update"]);
const selectedDate = ref("");
const highlightedDates = (isoString) => {
  // const date = new Date(isoString);
  // const utcDay = date.getUTCDate();

  if (!props.takenDate.includes(isoString)) {
    return {
      textColor: "#ffffff",
      backgroundColor: "rgba(29, 53, 72, 0.9)",
      opacity: 0.5,
    };
  }

  // if (utcDay % 5 === 0) {
  //   return {
  //     textColor: "#800080",
  //     backgroundColor: "#ffc0cb",
  //   };
  // }

  // if (utcDay % 3 === 0) {
  //   return {
  //     textColor: "var(--ion-color-secondary-contrast)",
  //     backgroundColor: "var(--ion-color-secondary)",
  //   };
  // }

  return undefined;
};

const isWeekday = (dateString) => {
  // const date = new Date(dateString);
  // const utcDay = date.getUTCDay();

  /**
   * Date will be enabled if it is not
   * Sunday or Saturday
   */
  // return utcDay !== 0 && utcDay !== 6;
  return !props.takenDate.includes(dateString);
};
const updateDate = (e) => {
  console.log(e.detail.value);
  emit("update", e.detail.value);
};

onMounted(() => {
  if (props.value) {
    selectedDate.value = props.value;
  }
});
</script>
