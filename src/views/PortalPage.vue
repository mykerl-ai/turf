<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-2 items-center w-full mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="w-full items-center bg-secondary rounded-3xl p-4 mb-5">
        <div
          class="h-full grid grid-flow-col auto-cols-auto justify-center justify-items-center justify-between w-full"
        >
          <div class="h-full grid grid-flow-col auto-cols-auto gap-3">
            <div
              :style="{
                backgroundImage: 'url(' + img + ')',
              }"
              class="w-16 h-16 bg-contain rounded-full"
            ></div>
            <div class="w-full mt-2">
              <span class="text-white w-full mt-3">Andrew Williams</span>
              <div class="text-grey-light text-sm">Caliy@gmail.com</div>
            </div>
          </div>
          <div
            class="grid justify-end justify-self-end self-end h-full rounded-full"
          >
            <div class="w-16 h-16 rounded-full">
              <img src="@/assets/icons/edit-profile.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- second box  -->
      <div class="w-full h-44 rounded-3xl bg-secondary flex mb-5">
        <div
          :style="{
            backgroundImage: 'url(' + house + ')',
          }"
          class="w-1/2 h-full bg-cover rounded-3xl"
        ></div>
        <div class="w-1/2 p-2 h-full pl-5 rounded-3xl">
          <div class="grid grid-row mb-3 gap-1">
            <span class="text-white font-medium"> Alexis Avenue</span>
            <span class="text-white text-xs font-medium"
              >278 Macathy street</span
            >
          </div>

          <div class="grid grid-row gap-1 mb-4">
            <span class="text-white font-medium"> Yearly</span>
            <span class="text-white text-xs font-medium"
              >Due date: <span class="text-primary">48days</span></span
            >
          </div>
          <button class="h-9 w-28 bg-primary rounded-2xl">
            <p class="text-white text-sm font-medium">Pay Now</p>
          </button>
        </div>
      </div>

      <!-- Services -->
      <div class="flex justify-between">
        <p class="mb-2.5 font-medium text-lg">Sevices</p>
        <button class="bg-white w-20 capitalize rounded-full">view all</button>
      </div>
      <div class="w-full text-left">
        <swiper
          @swiper="setSwiperInstance"
          :slides-per-view="1.3"
          :space-between="10"
          :modules="modules"
          :pagination="true"
        >
          <swiper-slide @click="$router.push({ name: 'PaymentPlan' })">
            <div class="w-64 h-64 text-left bg-primary rounded-2xl p-3">
              <div class="h-1/2 w-full flex flex-col justify-between pb-5">
                <span class="text-sm text-left text-white">
                  Pick a payment structure plan
                </span>

                <div class="grid grid-flow-col auto-cols-auto justify-between">
                  <span class="text-5xl font-medium text-white">N/A</span>
                  <img src="@/assets/icons/plan-icon.svg" alt="" />
                </div>
              </div>

              <div class="h-1/2 w-full grid grid-flow-col auto-cols-auto">
                <div
                  class="grid grid-flow-col auto-cols-auto justify-center items-center justify-between w-full bg-white border self-end rounded-3xl"
                >
                  <div class="text-sm text-secondary ml-3 font-medium">
                    Pick a payment <br />
                    plan
                  </div>
                  <div
                    class="h-16 w-16 grid grid-flow-row auto-rows-auto self-center justify-items-center justify-center"
                  >
                    <img
                      class="mt-2"
                      src="@/assets/icons/proceed-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- second  -->
          <swiper-slide @click="$router.push({ name: 'Schedule' })">
            <div
              class="h-64 relative text-left w-64 bg-secondary rounded-2xl p-3"
            >
              <div class="w-full grid grid-row gap-5">
                <span class="text-sm text-white">
                  Pick a Date: <span class="text-primary">14th mar 23</span>
                </span>

                <div
                  :style="{
                    backgroundImage: 'url(' + driver + ')',
                  }"
                  class="h-20 bg-no-repeat bg-cover rounded-tl-3xl rounded-br-3xl w-full bg-black"
                ></div>

                <div class="w-full flex items-center gap-4">
                  <div class="h-16 w-16 bg-black rounded-full"></div>
                  <div
                    class="grid grid-row h-10 flex justify-center items-center"
                  >
                    <span class="text-sm font-medium text-white"
                      >Mr Mick Ano</span
                    >
                    <span class="text-xs font-medium text-white"
                      >Position:Tour guide</span
                    >
                  </div>
                </div>

                <!-- <div
                  @click.self="
                    $router.push({
                      name: 'CreateSchedule',
                      params: { id: 'new' },
                    })
                  "
                  class="z-10 bg-primary p-2 text-center text-white self-end absolute bottom-2 text-xs left-36 rounded-3xl mt-2 w-24"
                >
                  Reschedule
                </div> -->

                <!-- <div class="w-full mb-4">
              <button class="h-9 w-28 bg-white rounded-2xl">
                <p class="text-stone-600 text-sm font-medium">Pay Now</p>
              </button>
            </div> -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import img from "@/assets/img/profile.png";
import house from "@/assets/img/house.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

import "swiper/css";
import "swiper/css/pagination";

import "@ionic/vue/css/ionic-swiper.css";
import { IonHeader, IonPage, IonContent } from "@ionic/vue";
import driver from "@/assets/img/driver.png";

import BackButton from "@/components/BackButton.vue";

const slides = ref({});
const modules = ref([Pagination]);

const setSwiperInstance = (swiper) => {
  slides.value = swiper;
};
</script>
