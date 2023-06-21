<template>
  <div>
    <ion-label class="capitalize text-sm text-grey-dark font-medium">{{
      placeholder
    }}</ion-label>

    <ion-select
      :aria-label="placeholder"
      interface="popover"
      justify="start"
      class="mt-1"
      :fill="fill"
      :compareWith="compareWith"
      @ionChange="updateData($event.detail.value)"
      :multiple="multiple"
    >
      <ion-select-option
        v-for="opt in options"
        :key="opt.type"
        :aria-label="opt.label"
        :value="opt"
        >{{ opt.label }}</ion-select-option
      >
    </ion-select>
  </div>
</template>

<script>
import { IonLabel, IonSelect, IonSelectOption } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonLabel, IonSelect, IonSelectOption },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: "solid",
    },
    placeholder: {
      type: String,
      default: "Select",
    },
  },
  emits: ["update"],
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    compareWith(o1, o2) {
      if (this.multiple === false) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
      } else {
        if (!o1 || !o2) {
          return o1 === o2;
        }

        if (Array.isArray(o2)) {
          return o2.some((o) => o.id === o1.id);
        }

        return o1.id === o2.id;
      }
    },

    updateData(val) {
      this.selected = val;
      this.$emit("update", this.selected);
    },
  },
});
</script>

<style scoped>
ion-select {
  --background: rgba(134, 133, 133, 0.1) !important;
  --border-color: transparent;
  --highlight-color-activated: transparent;
  box-shadow: none !important;

  --border-radius: 10px;
  --color: #1d3548;
  --placeholder-color: #1d3548;
  --placeholder-opacity: 0.8;

  --padding-bottom: 16px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 16px;
}
</style>
