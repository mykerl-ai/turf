<template>
  <ion-modal
    v-if="type == 'sheet'"
    :is-open="isOpen"
    :class="`${persistence ? 'persistence' : ''} ${
      noBackDrop ? 'noBackDrop' : ''
    } `"
    :initial-breakpoint="initialBreakpoint"
    :breakpoints="breakPoints"
    @ionModalDidDismiss="$emit('close')"
    class="sheet"
    :backdrop-dismiss="backdropDismiss"
    :backdrop-breakpoint="backdropBreakpoint"
    :can-dismiss="canDismiss"
  >
    <div :class="spacing ? 'ion-padding' : ''">
      <slot />
    </div>
  </ion-modal>
  <ion-modal
    v-else
    :is-open="isOpen"
    :class="`${persistence ? 'persistence' : ''} ${
      noBackDrop ? 'noBackDrop' : ''
    }${type == 'full' ? 'full' : 'custom'}`"
    @ionModalDidDismiss="$emit('close')"
  >
    <div class="relative w-full">
      <ion-button
        v-if="showCloseButton"
        @click="$emit('close')"
        fill="clear"
        shape="round"
        class="absolute top-2 -right-4 z-50"
      >
        <ion-icon
          class="text-dark-300 text-3xl"
          slot="icon-only"
          :icon="close"
        ></ion-icon
      ></ion-button>
    </div>
    <div :class="spacing ? 'ion-padding' : ''">
      <slot />
    </div>
  </ion-modal>
</template>

<script setup>
import { IonModal, IonButton, IonIcon } from "@ionic/vue";
import { close } from "ionicons/icons";

defineProps({
  spacing: {
    type: Boolean,
    default: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  persistence: {
    type: Boolean,
    default: false,
  },
  noBackDrop: {
    type: Boolean,
    default: false,
  },
  canDismiss: {
    type: Boolean,
    default: true,
  },
  showCloseButton: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "modal",
  },

  initialBreakpoint: {
    type: Number,
    default: 0.65,
  },
  breakPoints: {
    type: Array,
    default: () => [0, 0.25, 0.5, 0.75],
  },
  backdropDismiss: {
    type: Boolean,
    default: undefined,
  },
  backdropBreakpoint: {
    type: [Number, String],
    default: undefined,
  },
});

defineEmits(["close"]);
</script>

<style>
ion-modal.custom {
  --width: fit-content;
  --min-width: 300px;
  --max-width: 90%;
  --height: fit-content;

  --border-radius: 24px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  overflow: auto !important;
}

ion-modal.full {
  /* --width: fit-content;
    --min-width: 300px;
    --max-width: 90%;
    --height: fit-content; */

  overflow: auto !important;
}

ion-modal.md.sheet {
  --border-radius: 16px 16px 0 0 !important;
  overflow: auto;
}

ion-modal.noBackDrop::part(backdrop) {
  display: none;
}

ion-modal.persistence::part(backdrop) {
  pointer-events: none !important;
}
</style>
