<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-1 mt-4">
        <BackButton />

        <TurfButton
          @click="
            $router.push({
              name: 'ApartmentGallery',
              params: { id: $route.params.id },
            })
          "
          class="w-32 grid justify-end justify-self-end self-end"
          :block="true"
          color="tertiary"
          ><span class="text-secondary font-medium capitalize">
            360° view</span
          ></TurfButton
        >
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="mt-0">
        <swiper
          @swiper="setSwiperInstance"
          :slides-per-view="1"
          :space-between="10"
        >
          <swiper-slide v-for="(data, index) in swiperData" :key="index">
            <div class="slide"></div>
            <div
              :class="index === slides.activeIndex ? 'taller-slide' : 'mt-8'"
              :style="{
                backgroundImage: 'url(' + house + ')',
              }"
              class="slide-content grid grid-flow-row gap-0 auto-rows-auto w-full h-80 no-repeat items-end items-self-end self-end rounded-2xl p-3"
            >
              <!-- <div class="z-10 text-left">
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
              </div> -->
            </div>
          </swiper-slide>
          <!-- <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide> -->
        </swiper>

        <h2 class="mt-0 mb-1 text-secondary text-3xl font-bold capitalize">
          {{ swiperData[0].name }}
        </h2>

        <p class="text-sm text-grey-light font-medium capitalize">
          {{ swiperData[0].street }}
        </p>

        <div
          class="mt-6 grid grid-cols-2 p-4 items-center w-full bg-grey-gradient rounded-xl"
        >
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

              <span class="text-grey-light font-medium">Agent</span>
            </div>
          </div>

          <div
            class="cursor-pointer w-full grid justify-end justify-self-start self-start"
          >
            <img src="@/assets/icons/chaticon.svg" alt="" />
          </div>

          <div
            class="col-span-2 bg-secondary w-full text-sm text-white p-2 rounded-2xl mt-3 capitalize"
          >
            04 bedrooms 04 bathrooms 02 living rooms
          </div>
        </div>
        <TurfButton
          class="w-full my-4 col-span-2 grid"
          :block="true"
          shape="round"
          color="primary"
          ><span class="text-white font-medium capitalize">
            Schedule a viewing</span
          ></TurfButton
        >
        <div class="w-full text-secondary font-bold mt-5 mb-2 text-base">
          About
        </div>
        <div class="w-full text-grey-dark text-sm">
          Become what you live ,live in what you want to become, Life is too
          short to hold back push on with renters
        </div>
      </div>
    </ion-content>

    <ion-footer :translucent="true">
      <ion-toolbar>
        <div
          class="my-4 grid grid-flow-col auto-cols-auto py-0 px-4 items-center justify-between"
        >
          <div class="capitalize">
            <p class="text-secondary font-bold">{{ swiperData[0].price }}</p>
            <span class="text-sm text-grey-light"
              >per {{ swiperData[0].tenure }}</span
            >
          </div>

          <TurfButton
            class="grid justify-end justify-self-end self-end"
            :block="true"
            shape="round"
            color="primary"
            ><span class="text-white font-medium capitalize">
              Pay now</span
            ></TurfButton
          >
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import TurfButton from "@/components/TurfButton.vue";
import house from "@/assets/img/house.png";
import img from "@/assets/img/profile.png";

import {
  IonPage,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
} from "@ionic/vue";
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
  },
  {
    name: "Dremy avenue",
    street: "12 Dorian street",
    price: "$3,600",
    tenure: "year",
  },
]);

// const currentIndex = ref(0);
// const onSlideChange = (e) => {
//   console.log(e, currentIndex);
// };
</script>

<style scoped>
.slide {
  /* background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 28.55%,
    rgba(18, 25, 37, 0.87) 76.2%
  ); */
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
  background-repeat: no-repeat;
  background-size: cover;
  transition: height 0.6s ease-in-out; /* Add a smooth transition for the slide height */
}

.taller-slide {
  height: 20rem; /* Adjust the height as per your requirement */
}
</style>
