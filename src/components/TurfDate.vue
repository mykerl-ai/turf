<template>
  <div class="relative">
    <div v-if="label" class="mb-2 font-medium text-grey-dark text-sm">
      {{ label }}
    </div>
    <div
      v-if="fullDate"
      @click="showItems = !showItems"
      class="h-14 p-3 clickable"
    >
      {{
        displayText && displayText.length
          ? `${displayText[2].substring(0, 2)}/${displayText[1]}/${
              displayText[0]
            }`
          : placeholder
      }}
    </div>
    <div v-else @click="showItems = !showItems" class="h-14 px-3 clickable">
      {{
        displayText && displayText.length
          ? `${displayText[1]} | /${displayText[0]}`
          : ""
      }}
    </div>
    <div class="mb-24" v-if="showItems">
      <ion-datetime
        v-model="dateText"
        @ionChange="handleDateChange"
        :max="!fullDate ? maxDate : undefined"
        :min="minDate && minDate.length ? minDate : undefined"
        :presentation="!fullDate ? 'time' : 'date'"
      ></ion-datetime>
    </div>

    <div
      @click="
        () => {
          showItems = false;
        }
      "
      style="z-index: 1"
      :class="!showItems ? 'pointer-events-none' : 'pointer-events-none'"
      class="fixed inset-0 h-screen"
    ></div>
  </div>
</template>

<script setup>
import {
  //   IonItem,
  //   IonLabel,
  //   IonIcon,
  //   IonInput,
  IonDatetime,
  //   IonContent,
  //   IonList,
} from "@ionic/vue";

import * as allIcons from "ionicons/icons";
import { addIcons } from "ionicons";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  label: {
    type: [String, Boolean],
    default: false,
  },
  fullDate: {
    type: Boolean,
    default: false,
  },
  minDate: {
    type: String,
    default: "",
  },
  default: {
    type: String,
    default: "",
  },
  search: {
    type: Boolean,
    default: true,
  },
  appendIcon: {
    type: [String, Boolean],
    default: false,
  },
  appendSvg: {
    type: [String, Boolean],
    default: false,
  },

  autoHeight: {
    type: Boolean,
    default: true,
  },
  placeholder: String,
  options: {
    type: Array,
    default() {
      return [];
    },
  },
  color: {
    type: [String, Boolean],
    default: "primary",
  },
  showAddButton: {
    type: Boolean,
    default: false,
  },
  error: {
    type: [String, Boolean],
    default: false,
  },
});
const emit = defineEmits(["update"]);

const showItems = ref(false);
const visibleLabel = ref("");
const dateText = ref("");
const displayText = ref([]);

const watchValue = computed(() => props.value);
const watchProp = computed(() => props.options);
const maxDate = computed(() => {
  const now = new Date();
  const yearMonth = now.toISOString().slice(0, 7);
  console.log(yearMonth, "YM");
  return yearMonth;
});

function handleDateChange(e) {
  console.log(e);
  if (props.fullDate) {
    showItems.value = false;
  }
}

// const month = date.getMonth()  + 1;
// const year = date.getFullYear()  + 1;

watch(watchProp, (newValue) => {
  optionData.value = newValue;
});

watch(dateText, () => {
  if (dateText.value && dateText.value.length) {
    // displayText.value = dateText.value.split("-");
    if (props.fullDate === false) {
      emit("update", displayText.value);
    } else {
      emit("update", dateText.value);
    }

    // console.log(displayText.value);
  }
});

watch(
  watchValue,
  () => {
    if (watchValue.value && watchValue.value.length) {
      visibleLabel.value = watchProp.value.find(
        (pr) => pr.value === watchValue.value
      )?.label;
      console.log(visibleLabel.value);
    }
  },
  { immediate: true }
);

const optionData = ref([]);
// function emitAdd() {
//   emit("addNew");
// }

// function update(value) {
//   showItems.value = false;
//   searchQuery.value = value.label;
//   visibleLabel.value = value.label;

//   console.log(value);
//   emit("update", value.value);
// }

const colorName = computed(() => {
  if (props.error) {
    return showItems.value
      ? `var(--ion-color-danger)`
      : `var(--ion-color-danger)`;
  } else if (props.disabled) {
    return `var(--ion-color-light-shade)`;
  } else {
    return showItems.value
      ? `var(--ion-color-${props.color})`
      : `var(--ion-color-medium)`;
  }
});

onMounted(() => {
  // searchQuery.value = props.value;
  if (props.default && props.default.length) {
    dateText.value = props.default;
  } else {
    if (!props.fullDate) {
      const date = new Date();
      dateText.value = date.toISOString();
    }
  }

  console.log(dateText.value, "DT");
  optionData.value = props.options;
  addIcons(allIcons);
});
</script>

<style scoped>
.clickable {
  border-radius: 10px;
  background: rgba(134, 133, 133, 0.1);
}
.borderClassSelect {
  border: 1.5px solid v-bind(colorName) !important;
  border-radius: 18px !important;
}

.optionsBox {
  border-radius: 18px !important;
  overflow: hidden !important;
}

ion-item.selectInput {
  border: none !important;
  border-radius: 16px !important;
  --border-color: #ffffff;

  padding-top: 1px !important;
  padding-bottom: 1px !important;
}

TurfInput.selectInput {
  --border-color: v-bind(colorName);
  --padding-start: 0px !important;
  display: flex !important;
}

.item-has-focus {
  /* --highlight-background: #ffffff; */
  --border-color: #ffffff;
}
</style>
