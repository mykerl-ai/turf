<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full my-2">
        <BackButton />

        <div
          class="cursor-pointer w-full grid justify-end justify-self-end self-end"
        >
          <img src="@/assets/icons/filter.svg" alt="" />
        </div>
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <TurfSearch />

      <div
        @click="
          $router.push({
            name: 'ViewApartment',
            params: { id: swiperData[0].name },
          })
        "
        class="cursor-pointer relative my-8"
      >
        <div class="slide"></div>
        <div
          :style="{
            backgroundImage: 'url(' + house + ')',
          }"
          class="slide-content grid grid-flow-row gap-0 auto-rows-auto w-60 h-60 no-repeat items-end items-self-end self-end rounded-2xl p-3"
        ></div>

        <div
          class="absolute bg-white top-7 rounded-2xl left-32 w-56 border border-primary h-auto shadow-xl grid grid-flow-col gap-0 auto-cols-auto"
        >
          <div class="w-full p-3">
            <h2 class="mt-0 mb-1 text-secondary text-sm font-bold capitalize">
              {{ swiperData[0].name }}
            </h2>

            <p class="text-sm text-grey-light font-medium capitalize">
              {{ swiperData[0].street }}
            </p>

            <div
              class="grid grid-flow-col my-5 auto-cols-auto gap-3 whitespace-nowrap items-center"
            >
              <div
                class="w-8 h-8 rounded-full bg-contain"
                :style="{
                  backgroundImage: 'url(' + img + ')',
                }"
              ></div>

              <div>
                <p class="text-secondary text-xs w-full text-left font-medium">
                  Andrew Williams
                </p>

                <span class="text-grey-light font-bold text-xs"
                  >California, US</span
                >
              </div>
            </div>

            <div class="z-10 text-left">
              <div
                class="my-0 grid grid-flow-col auto-cols-auto items-start justify-between"
              >
                <div class="capitalize">
                  <p class="text-secondary text-sm font-bold">
                    {{ swiperData[0].price }}
                  </p>
                  <span class="text-xs text-grey-light"
                    >per {{ swiperData[0].tenure }}</span
                  >
                </div>

                <div
                  class="rounded-lg bg-primary capitalize p-1 text-center text-xs font-bold text-white"
                >
                  360° view
                </div>
              </div>
            </div>
          </div>

          <div
            class="w-12 h-full bg-secondary grid grid-flow-row gap-0 auto-rows-auto border-r border-primary justify-center justify-self-end items-center self-end rounded-r-2xl"
          >
            <div class="grid grid-flow-col gap-1 auto-cols-auto text-white">
              <span class="text-white text-sm">02</span>
              <img src="@/assets/icons/garage.svg" alt="" />
            </div>

            <div class="grid grid-flow-col gap-1 auto-cols-auto text-white">
              <span class="text-white text-sm">05</span>
              <img src="@/assets/icons/bedroom.svg" alt="" />
            </div>

            <div class="grid grid-flow-col gap-1 auto-cols-auto text-white">
              <span class="text-white text-sm">02</span>
              <img src="@/assets/icons/toilet.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import img from "@/assets/img/profile.png";
import house from "@/assets/img/house.png";
import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import { ref } from "vue";

import BackButton from "@/components/BackButton.vue";
import TurfSearch from "@/components/TurfSearch.vue";

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
  height: 28rem; /* Adjust the height as per your requirement */
}
</style>
