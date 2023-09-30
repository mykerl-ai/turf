<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-2 items-center w-full mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div
        @click="
          $router.push({ name: 'EditProfile', params: { id: getUser._id } })
        "
        class="w-full items-center bg-secondary rounded-3xl p-4 mb-5"
      >
        <div
          class="h-full grid grid-flow-col auto-cols-auto justify-center justify-items-center justify-between w-full"
        >
          <div class="h-full grid grid-flow-col auto-cols-auto gap-3">
            <div
              v-if="
                getUser && getUser.profileImage && getUser.profileImage.length
              "
              :style="{
                backgroundImage: 'url(' + getUser.profileImage + ')',
              }"
              style="background-repeat: no-repeat"
              class="w-16 h-16 bg-contain rounded-full"
            ></div>
            <div
              v-else
              :style="{
                backgroundImage: 'url(' + img + ')',
              }"
              class="w-16 h-16 bg-contain rounded-full"
            ></div>
            <div class="w-full mt-2">
              <span class="capitalize text-white w-full mt-3">
                {{ getUser && getUser.username }}</span
              >
              <div class="text-grey-light text-sm">
                {{ getUser && getUser.email }}
              </div>
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
      <div class="mb-4">
        <swiper
          @swiper="setSwiperInstance"
          :slides-per-view="getUser.apartments.length > 1 ? 1.3 : 1"
          :space-between="5"
          :modules="modules"
          :pagination="true"
        >
          <swiper-slide
            v-for="apt in getUser.apartments"
            :key="apt._id"
            @click.self="
              $router.push({ name: 'ViewApartment', params: { id: data._id } })
            "
          >
            <div
              :style="{
                backgroundImage: 'url(' + apt.fileUrl[0] + ')',
              }"
              style="background-repeat: no-repeat; background-size: cover"
              class="w-full h-40 rounded-3xl flex w-full cover no-repeat items-end items-self-end self-end rounded-2xl p-3"
            >
              <!-- <div
              :style="{
                backgroundImage: 'url(' + apt.fileUrl[0] + ')',
              }"
              class="w-1/2 h-full bg-cover rounded-3xl"
            ></div> -->
              <div
                class="z-10 w-11/12 self-end p-2 h-full pl-5 flex flex-col items-center justify-end rounded-3xl"
              >
                <div class="grid grid-row mb-3 gap-1">
                  <!-- <span class="text-white text-sm font-medium">
                  Alexis Avenue</span
                >
                <span class="text-white text-xs font-medium"
                  >278 Macathy street</span
                > -->
                  <span class="text-white text-base font-bold">{{
                    formatAmount(apt.price)
                  }}</span>
                </div>

                <div class="grid grid-row gap-1 mb-4">
                  <span class="text-white text-xs font-bold">
                    {{ apt.paymentType }}</span
                  >
                  <span class="text-white text-xs font-bold"
                    >Due date:
                    <span class="text-white">{{
                      formatDateString(apt.dueDate)
                    }}</span></span
                  >
                </div>
                <button
                  @click="payNow(apt._id)"
                  class="focus:outline-none h-9 w-28 bg-primary rounded-2xl"
                >
                  <p class="text-white text-sm font-medium">Pay Now</p>
                </button>
              </div>
            </div>
            <div class="slide"></div>
          </swiper-slide>
        </swiper>
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
          <swiper-slide v-for="data in inspectionArray" :key="data._id">
            <div class="w-full">
              <ScheduleDetails :data="data" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import img from "@/assets/img/profile.png";
// import house from "@/assets/img/house.jpg";
import { Pagination } from "swiper";
import { useDataStore } from "@/stores/data.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { computed, onMounted, ref } from "vue";
import ScheduleDetails from "@/components/ScheduleDetails.vue";
import { useToast } from "vue-toastification";

import { helperFunctions } from "@/composable/HelperFunctions";

import "swiper/css";
import "swiper/css/pagination";

import "@ionic/vue/css/ionic-swiper.css";
import { IonHeader, IonPage, IonContent } from "@ionic/vue";
// import driver from "@/assets/img/driver.png";

import BackButton from "@/components/BackButton.vue";

const store = useDataStore();
// const router = useRouter();

const { query, mutate } = store;
const { formatDateString, formatAmount } = helperFunctions;
const toast = useToast();

const slides = ref({});
const modules = ref([Pagination]);

const getUser = computed(() => store.getUserData);
const inspectionArray = computed(() => store.getClientInspectionDetails);

async function queryUser() {
  try {
    await query({
      endpoint: "FetchUser",
      payload: {},
      service: "GENERAL",
      storeKey: "userData",
    });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}
const loading = ref(false);

const setSwiperInstance = (swiper) => {
  slides.value = swiper;
};

async function queryInspectionDetails() {
  try {
    await query({
      endpoint: "GetInspectionDetailsByClientId",
      payload: {},
      service: "GENERAL",
      storeKey: "clientInspectionDetails",
    });
  } catch (e) {
    console.log(e);
  }
}

async function payNow(id) {
  try {
    loading.value = true;

    let res = await mutate({
      endpoint: "MakePayment",
      data: {
        input: {
          houseUnit: id,
          purposeOfPayment: "RENT",
        },
      },
      service: "GENERAL",
    });
    if (res) {
      res.toLowerCase() == "payment initiated"
        ? toast.success(res)
        : toast.error(res);
    }
  } catch (e) {
    console.log(e);
    toast.error(e.message);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await queryUser();
  await queryInspectionDetails();
});
</script>

<style>
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
</style>
