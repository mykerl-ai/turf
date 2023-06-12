<template>
  <ion-page>
    <BackButton :orange="true" />

    <ion-content>
      <div
        :style="{
          backgroundImage: 'url(' + img2 + ')',
        }"
        class="w-full bg grid items-center items-self-center self-center"
      >
        <div
          class="w-full grid grid-flow-row auto-rows-auto h-80 contain no-repeat items-end items-self-end self-end"
        >
          <div
            class="grid grid-flow-col justify-around auto-cols-auto mb-4 gap-3 w-full"
          >
            <div v-for="(data, index) in swiperData" :key="index">
              <!-- <div class="slide"></div> -->
              <div
                @click="setActive(index)"
                :class="
                  index === activeIndex
                    ? 'taller-slide selected w-32 h-32'
                    : 'my-0 w-28 h-28'
                "
                :style="{
                  backgroundImage: 'url(' + data.image + ')',
                }"
                class="slide-content cursor-pointer border-2 border-primary no-repeat cover rounded-2xl p-3"
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

import { ref } from "vue";

import img2 from "@/assets/img/gallery-image.png";
import img from "@/assets/img/gallery-image.png";
import house from "@/assets/img/house.png";
import map from "@/assets/img/map.png";

const activeIndex = ref(1);

const swiperData = ref([
  {
    image: house,
  },
  {
    image: img,
  },

  {
    image: map,
  },
]);

const setActive = (num) => {
  activeIndex.value = num;
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 53, 72, 0.2);
  /* z-index: -1; */
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
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
