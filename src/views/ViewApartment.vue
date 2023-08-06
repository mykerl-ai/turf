<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-1 mt-2">
        <BackButton />

        <TurfButton
          v-if="
            getProperty &&
            getProperty.homeDetails &&
            getProperty.homeDetails.length &&
            getProperty.homeDetails[0].fileUrl &&
            getProperty.homeDetails[0].fileUrl.length
          "
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
          <swiper-slide
            v-for="(data, index) in getProperty.homeDetails[0].fileUrl"
            :key="index"
          >
            <div class="slide"></div>
            <div
              :class="index === slides.activeIndex ? 'taller-slide' : 'mt-8'"
              :style="{
                backgroundImage: 'url(' + data + ')',
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

        <h2 class="mb-1 mt-2 text-secondary text-2xl font-bold capitalize">
          {{ getProperty.houseType }}
        </h2>

        <p class="text-sm text-grey-light font-medium capitalize">
          {{ getProperty.address }}
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
                {{ getProperty.username }}
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
            class="w-full bg-secondary shadow-2xl col-span-2 grid grid-flow-col auto-col-auto p-3 gap-3 rounded-2xl mt-3 capitalize"
          >
            <span class="text-xs text-white font-medium"
              >{{ getProperty.homeDetails[0].bedRoom.padStart(2, "0") }}
              {{
                Number(getProperty.homeDetails[0].bedRoom) > 1
                  ? "bedrooms"
                  : "bedroom"
              }}</span
            >
            <span class="text-xs text-white font-medium"
              >{{ getProperty.homeDetails[0].bathRoom.padStart(2, "0") }}
              {{
                Number(getProperty.homeDetails[0].bathRoom) > 1
                  ? "bathrooms"
                  : "bathroom"
              }}
            </span>
            <span class="text-xs text-white font-medium"
              >{{ getProperty.homeDetails[0].toilet.padStart(2, "0") }}
              {{
                Number(getProperty.homeDetails[0].toilet) > 1
                  ? "toilets"
                  : "toilet"
              }}</span
            >
          </div>
        </div>
        <div class="grid mt-2 gap-x-3 grid-cols-3 items-center col-span-2">
          <!-- <div
            class="w-full bg-secondary shadow-2xl col-span-2 grid grid-flow-row auto-row-auto p-3 gap-3 rounded-2xl mt-3 capitalize"
          >
            <span class="text-xs text-white font-medium"
              >{{ home.bedRoom.padStart(2, "0") }}
              {{ Number(home.bedRoom) > 1 ? "bedrooms" : "bedroom" }}</span
            >
            <span class="text-xs text-white font-medium"
              >{{ home.bathRoom.padStart(2, "0") }}
              {{ Number(home.bathRoom) > 1 ? "bathrooms" : "bathroom" }}
            </span>
            <span class="text-xs text-white font-medium"
              >{{ home.toilet.padStart(2, "0") }}
              {{ Number(home.toilet) > 1 ? "toilets" : "toilet" }}</span
            >
          </div> -->
          <TurfButton
            class="col-span-3 w-full my-4"
            :block="true"
            shape="round"
            color="primary"
            ><span class="text-white text-base font-medium capitalize">
              Schedule a viewing</span
            >
          </TurfButton>
          <button
            class="hidden col-span-1 shadow-2xl bg-primary justify-self-end focus:outline-none w-12 h-12 rounded-xl p-1"
          >
            <ion-icon
              class="text-white text-2xl font-bold"
              :icon="timeOutline"
            ></ion-icon>
          </button>

          <div
            class="col-span-3 w-full text-secondary font-bold mt-5 mb-2 text-base"
          >
            About
          </div>
          <div class="col-span-3 w-full text-grey-dark text-sm">
            {{ getProperty.homeDetails[0].description || "N/A" }}
          </div>

          <div
            class="col-span-3 w-full text-secondary font-bold mt-5 mb-2 text-base"
          >
            Rules
          </div>
          <div class="col-span-3 w-full text-grey-dark text-sm">
            {{ getProperty.homeDetails[0].rules || "N/A" }}
          </div>
        </div>
      </div>
    </ion-content>

    <ion-footer :translucent="true">
      <ion-toolbar>
        <div
          class="mt-2 grid grid-flow-col auto-cols-auto py-0 px-4 items-center justify-between"
        >
          <div class="capitalize">
            <p class="text-secondary font-bold">
              {{ formatAmount(getProperty.homeDetails[0].price) }}
            </p>
            <span class="text-sm text-grey-light">{{
              paymentDuration[getProperty.homeDetails[0].paymentType]
            }}</span>
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
    <TurfLoader v-if="loading" />
  </ion-page>
</template>

<script setup>
import { useDataStore } from "@/stores/data.js";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import BackButton from "@/components/BackButton.vue";
import TurfButton from "@/components/TurfButton.vue";
// import house from "@/assets/img/house.jpg";
import img from "@/assets/img/profile.png";

import {
  IonPage,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
  IonIcon,
} from "@ionic/vue";
import { timeOutline } from "ionicons/icons";

import { Swiper, SwiperSlide } from "swiper/vue";
import { helperFunctions } from "@/composable/HelperFunctions";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

const store = useDataStore();
const route = useRoute();

const { query } = store;
const { formatAmount } = helperFunctions;

const slides = ref({});
const loading = ref(false);

const setSwiperInstance = (swiper) => {
  slides.value = swiper;
};

const paymentDuration = ref({
  YEARLY: "Per year",
  MONTHLY: "Per month",
});
// const currentIndex = ref(0);
// const onSlideChange = (e) => {
//   console.log(e, currentIndex);
// };
const getProperty = computed(() => store.getSingleProperty);

async function queryProperty() {
  try {
    loading.value = true;
    await query({
      endpoint: "ViewProperty",
      payload: { viewPropertyId: route.params.id },
      service: "GENERAL",
      storeKey: "singleProperty",
    });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await queryProperty();
});

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
