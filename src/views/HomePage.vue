<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full my-4">
        <div
          class="grid grid-flow-col auto-cols-auto gap-3 whitespace-nowrap items-center rounded-2xl"
        >
          <div
            class="w-14 h-14 bg-contain"
            :style="{
              backgroundImage: 'url(' + img + ')',
            }"
          ></div>

          <div>
            <p class="text-secondary w-full text-left font-medium">
              Andrew Williams
            </p>

            <span class="text-grey-light">California, US</span>
          </div>
        </div>

        <div
          class="cursor-pointer w-full grid justify-end justify-self-end self-end"
        >
          <img src="@/assets/icons/hamburger.svg" alt="" />
        </div>
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="grid grid-flow-col auto-cols-auto">
        <h1 class="text-4xl capitalize font-bold text-secondary title-font">
          find your <br />
          dream
          <span class="text-primary">home</span>
        </h1>

        <div class="div w-full -mr-12 -mt-2">
          <div class="w-48 bg-secondary p-6 -ml-16 z-0"></div>
          <div class="w-40 bg-primary p-4 -ml-8 -mt-16 z-20"></div>
        </div>
        <!-- <img class="-ml-12 -mt-4 w-full" src="@/assets/icons/box.svg" alt="" /> -->
      </div>

      <h3 class="mt-6 capitalize text-secondary text-base font-medium">
        recommended
      </h3>

      <div class="mt-3">
        <swiper
          @swiper="setSwiperInstance"
          :slides-per-view="1.2"
          :space-between="10"
        >
          <swiper-slide
            @click="
              $router.push({ name: 'ViewApartment', params: { id: data.name } })
            "
            v-for="(data, index) in swiperData"
            :key="index"
          >
            <div class="slide"></div>
            <div
              :class="index === slides.activeIndex ? 'taller-slide' : 'mt-8'"
              :style="{
                backgroundImage: 'url(' + data.image + ')',
              }"
              style="background-repeat: no-repeat; background-size: cover"
              class="slide-content grid grid-flow-row gap-0 auto-rows-auto w-full h-80 cover no-repeat items-end items-self-end self-end rounded-2xl p-3"
            >
              <div class="z-10 text-left">
                <p class="capitalize text-left font-bold text-white w-full">
                  {{ data.name }}
                </p>
                <span class="-mt-2 text-sm text-grey-light">{{
                  data.street
                }}</span>

                <div
                  class="my-4 grid grid-flow-col auto-cols-auto items-center justify-between"
                >
                  <div class="capitalize">
                    <p class="text-white font-medium">{{ data.price }}</p>
                    <span class="text-sm text-grey-light"
                      >per {{ data.tenure }}</span
                    >
                  </div>

                  <div
                    class="rounded-3xl bg-primary capitalize p-4 text-xs font-bold text-white"
                  >
                    360° view
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide> -->
        </swiper>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import img from "@/assets/img/profile.png";
import house from "@/assets/img/house.jpg";
import house1 from "@/assets/img/house1.jpg";
import house2 from "@/assets/img/house2.jpg";
import house3 from "@/assets/img/house3.jpg";
import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

const slides = ref({});

const setSwiperInstance = (swiper) => {
  slides.value = swiper;
};

const swiperData = ref([
  {
    name: "alexis avenue",
    street: "278 Macathy street",
    price: "$1,800",
    tenure: "month",
    image: house,
  },
  {
    name: "Brown avenue",
    street: "232 Pascal street",
    price: "$8,800",
    tenure: "month",
    image: house1,
  },
  {
    name: "Dremy avenue",
    street: "12 Dorian street",
    price: "$3,600",
    tenure: "year",
    image: house2,
  },
  {
    name: "Cobbs avenue",
    street: "12 Coal street",
    price: "$1,600",
    tenure: "year",
    image: house3,
  },
]);

// const currentIndex = ref(0);
// const onSlideChange = (e) => {
//   console.log(e, currentIndex);
// };
</script>

<style scoped>
.slide {
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 28.55%,
    rgba(18, 25, 37, 0.87) 76.2%
  );
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.slide-content {
  /* height: 100%; */
  transition: height 0.6s ease-in-out; /* Add a smooth transition for the slide height */
}

.taller-slide {
  height: 28rem; /* Adjust the height as per your requirement */
}
</style>
