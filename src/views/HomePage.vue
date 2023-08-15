<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full my-4">
        <div
          class="grid grid-flow-col auto-cols-auto gap-3 whitespace-nowrap items-center rounded-2xl"
          @click="$router.push({ name: 'PortalPage' })"
        >
          <div
            v-if="
              getUser && getUser.profileImage && getUser.profileImage.length
            "
            class="w-14 h-14 bg-cover rounded-2xl"
            style="background-repeat: no-repeat; background-position: center"
            :style="{
              backgroundImage: 'url(' + getUser.profileImage + ')',
            }"
          ></div>
          <div
            v-else
            class="w-14 h-14 bg-contain"
            :style="{
              backgroundImage: 'url(' + img + ')',
            }"
          ></div>

          <div>
            <p class="text-secondary capitalize w-full text-left font-medium">
              {{ getUser && getUser.username }}
            </p>

            <span class="text-grey-light text-xs">
              {{ getUser && getUser.address }}</span
            >
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
            v-for="(data, index) in listOfHouses"
            :key="index"
            @click="
              $router.push({ name: 'ViewApartment', params: { id: data._id } })
            "
          >
            <div class="slide"></div>
            <div
              :class="index === slides.activeIndex ? 'taller-slide' : 'mt-8'"
              :style="{
                backgroundImage:
                  data && data.fileUrl.length
                    ? 'url(' + data.fileUrl[0] + ')'
                    : 'url(' + house + ')',
              }"
              style="background-repeat: no-repeat; background-size: cover"
              class="slide-content grid grid-flow-row gap-0 auto-rows-auto w-full h-80 cover no-repeat items-end items-self-end self-end rounded-2xl p-3"
            >
              <div class="z-10 text-left">
                <p class="capitalize text-left font-bold text-white w-full">
                  {{ propertyTypes[data.houseType] }}
                </p>
                <span class="-mt-2 text-sm text-grey-light">{{
                  data.address
                }}</span>

                <div
                  class="my-4 grid grid-flow-col auto-cols-auto items-center justify-between"
                >
                  <div class="capitalize">
                    <p class="text-white font-medium">
                      {{ formatAmount(data.price) }}
                    </p>
                    <span class="text-sm text-grey-light">{{
                      paymentDuration[data.paymentType]
                    }}</span>
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
    <TurfLoader v-if="loading" />
  </ion-page>
</template>

<script setup>
import { useDataStore } from "@/stores/data.js";
// import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
// import TurfButton from "@/components/ButtonNew.vue";

import img from "@/assets/img/profile.png";
import house from "@/assets/img/house.jpg";
// import house1 from "@/assets/img/house1.jpg";
// import house2 from "@/assets/img/house2.jpg";
// import house3 from "@/assets/img/house3.jpg";
import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { helperFunctions } from "@/composable/HelperFunctions";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

const store = useDataStore();
// const router = useRouter();

const { query } = store;
const { formatAmount } = helperFunctions;

const slides = ref({});

const setSwiperInstance = (swiper) => {
  slides.value = swiper;
};

const paymentDuration = ref({
  YEARLY: "Per year",
  MONTHLY: "Per month",
});
const propertyTypes = ref({
  BUNGALOWS: "Bungalows",
  DUPLEX: "Duplex",
  TERRACE_DUPLEX: "Terrace Duplex",
  SEMI_DETACHED_DUPLEX: "Semi-detached Duplex",
  FULLY_DETACHED_DUPLEX: "Fully-detached Duplex",
  MANSION: "Mansion",
  APARTMENT_CONDOS: "Apartment/Condos",
  MAISONETTE: "Maisonette",
  PENT_HOUSE: "Pent-house",
});
// const currentIndex = ref(0);
// const onSlideChange = (e) => {
//   console.log(e, currentIndex);
// };
const getUser = computed(() => store.getUserData);
const listOfHouses = computed(() => store.getAllHouses);

async function queryUser() {
  await query({
    endpoint: "FetchUser",
    payload: {},
    service: "GENERAL",
    storeKey: "userData",
  });
}
const loading = ref(false);

const payload = ref({
  position: { latitude: 0, longitude: 0 },
  sort: { price: "DESC", date: "DESC" },
  filter: { min: 0, max: 0 },
});
async function queryByPosition(position) {
  if (position) {
    payload.value.position = position;
  }

  try {
    loading.value = true;
    await query({
      endpoint: "FetchPropertyByDistance",
      payload: payload.value,
      service: "GENERAL",
      storeKey: "allHouses",
    });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}
onMounted(async () => {
  await queryUser();
  await queryByPosition();
});
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
