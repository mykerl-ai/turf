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

import { ref } from "vue";

// import img2 from "@/assets/img/gallery-image.png";
import img from "@/assets/img/gallery-image.png";
import house from "@/assets/img/house.jpg";
import house1 from "@/assets/img/house1.jpg";
import house2 from "@/assets/img/house2.jpg";
import house3 from "@/assets/img/house3.jpg";
import house4 from "@/assets/img/house1.jpg";
import house5 from "@/assets/img/house2.jpg";
import house6 from "@/assets/img/house3.jpg";
import house7 from "@/assets/img/house1.jpg";
import house8 from "@/assets/img/house3.jpg";
// import map from "@/assets/img/map.png";

const activeIndex = ref(1);
const activeImg = ref(null);

const swiperData = ref([
  {
    image: house,
  },
  {
    image: house1,
  },
  {
    image: house2,
  },
  {
    image: house3,
  },
  {
    image: img,
  },
  {
    image: house4,
  },
  {
    image: house5,
  },
  {
    image: house6,
  },

  {
    image: house7,
  },
  {
    image: house8,
  },

  // {
  //   image: map,
  // },
]);
activeImg.value = swiperData.value[0].image;

const setActive = (num) => {
  activeIndex.value = num;
  activeImg.value = swiperData.value[num].image;
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
