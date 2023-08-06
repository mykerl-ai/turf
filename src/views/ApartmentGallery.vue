<template>
  <ion-page
    :style="{
      backgroundImage: 'url(' + activeImg + ')',
    }"
    style="background-repeat: no-repeat; background-size: cover"
  >
    <BackButton class="m-3 z-10" :orange="true" />
    <div class="slide pointer-events-none"></div>
    <ion-content>
      <div class="w-full bg grid items-center items-self-center self-center">
        <div
          class="w-full grid grid-flow-row auto-rows-auto h-80 items-end items-self-end self-end"
        >
          <div
            class="grid grid-flow-col justify-around auto-cols-auto mb-12 gap-3 w-full overflow-x-scroll"
          >
            <div
              v-for="(data, index) in getProperty.homeDetails[0].fileUrl"
              :key="index"
            >
              <!-- <div class="slide"></div> -->
              <div
                @click="setActive(index)"
                :class="
                  index === activeIndex
                    ? 'taller-slide selected w-32 h-32'
                    : 'my-0 w-28 h-28'
                "
                :style="{
                  backgroundImage: 'url(' + data + ')',
                }"
                class="slide-content stack cursor-pointer border-2 border-primary no-repeat shrinkImg rounded-2xl p-3"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import BackButton from "@/components/BackButton.vue";

import { useDataStore } from "@/stores/data.js";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
// import img2 from "@/assets/img/gallery-image.png";

// import map from "@/assets/img/map.png";
const store = useDataStore();
const route = useRoute();

const { query } = store;

const getProperty = computed(() => store.getSingleProperty);

async function queryProperty() {
  await query({
    endpoint: "ViewProperty",
    payload: { viewPropertyId: route.params.id },
    service: "GENERAL",
    storeKey: "singleProperty",
  });
}

onMounted(async () => {
  await queryProperty();
});
const activeIndex = ref(1);
const activeImg = ref(null);

activeImg.value = getProperty.value.homeDetails[0].fileUrl[0];

const setActive = (num) => {
  activeIndex.value = num;
  activeImg.value = getProperty.value.homeDetails[0].fileUrl[num];
};
</script>

<style scoped>
ion-content {
  --ion-background-color: transparent !important;
}
.shrinkImg {
  background-size: cover;
  background-repeat: no-repeat;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
}

.stack {
  z-index: 999;
}
.slide {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    29,
    53,
    72,
    0.1
  ); /* Adjust the opacity (last value) as desired */
}
.slide-content {
  /* height: 100%; */
  transition: transform 0.3s;
}

.taller-slide {
  height: 8rem; /* Adjust the height as per your requirement */
}

.selected {
  transform: scale(1.1); /* Adjust the zoom level as desired */
}
</style>
