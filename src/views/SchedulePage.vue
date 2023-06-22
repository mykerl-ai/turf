<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 p-4 items-center w-full mb-0 mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="mt-0">
        <div
          class="w-full grid grid-flow-col gap-0 bg-secondary auto-cols-auto w-full no-repeat items-end items-self-end self-end rounded-2xl py-2"
        >
          <div class="z-10 text-left">
            <div class="grid grid-flow-row auto-rows-auto">
              <p class="capitalize pl-4 text-lg font-medium text-white">
                Schedule Date
              </p>
            </div>
            <p class="uppercase text-white pl-4 font-bold text-3xl">N/A</p>
          </div>
          <div class="grid justify-end justify-self-end self-end">
            <img :src="planImg" alt="" />
          </div>
        </div>

        <!-- <h2 class="mt-0 mb-1 text-secondary text-3xl font-bold capitalize">
            {{ swiperData[0].name }}
          </h2>
  
          <p class="text-sm text-grey-light font-medium capitalize">
            {{ swiperData[0].street }}
          </p> -->

        <div class="mt-6 p-4 items-center w-full bg-grey-darkblue rounded-xl">
          <div class="w-full text-secondary font-bold text-base">Note</div>
          <div class="w-full text-grey-darkBlueText mt-2 leading-6 text-sm">
            Become what you live ,live in what you want to become,Life is too
            short to hold back push on with renters Become what you live ,live
            in what you want to become,Life is too short to hold back push on
            with renters
          </div>
        </div>

        <div class="grid my-8">
          <TurfSegment :labels="data" />
        </div>

        <div
          @click="
            $router.push({
              name: 'ScheduleDetails',
              params: { id: 'planname' },
            })
          "
          class="bg-secondary rounded-2xl p-3 grid grid-flow-col auto-cols-auto justify-between gap-6"
        >
          <div class="w-20 h-20 bg-primary rounded-2xl"></div>

          <div
            class="grid grid-flow-row auto-rows-auto gap-2 self-center justify-start"
          >
            <p class="capitalize -mt-3 font-medium text-white">
              Scheduled Date
            </p>
            <div
              class="grid grid-flow-col auto-cols-auto text-white justify-start gap-6"
            >
              <div class="capitalize">
                <p class="text-sm text-white font-medium">14, June 2023.</p>
              </div>

              <!-- <div class="capitalize">
                <p class="text-xs text-white font-medium">N950k</p>
                <p class="text-xs text-white font-medium">Saved</p>
              </div>

              <div class="capitalize">
                <p class="text-xs text-white font-medium">76</p>
                <p class="text-xs text-white font-medium">Days Left</p>
              </div> -->
            </div>
          </div>

          <span
            class="text-sm self-start justify-self-end justify-end text-right grid text-primary items-end items-self-end"
            >Pending</span
          >
        </div>
      </div>
    </ion-content>
    <ion-fab class="mt-9" slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button @click="cancelModal = true">
        <ion-icon class="text-white" :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <TurfDrawer
      :breakpoints="[0.5, 0.65, 0.75]"
      type="sheet"
      @close="cancelModal = false"
      :isOpen="cancelModal"
    >
      <div class="">
        <div
          class="bg-secondary w-12 h-12 p-2 grid grid-rows-1 justify-center items-center rounded-2xl"
        >
          <img src="@/assets/icons/calendar.svg" alt="" />
        </div>

        <p class="text-grey-light font-medium capitalize mt-4">
          Schedule an Appointment
        </p>

        <div class="grid grid-flow-row auto-rows-auto gap-5 mt-5">
          <div
            v-for="schedule in scheduleTypes"
            :key="schedule.name"
            @click="
              () => {
                cancelModal = false;
                $router.push({
                  name: 'CreateSchedule',
                  params: { id: schedule.name },
                });
              }
            "
            class="bg-grey-faint grid grid-flow-col auto-cols-auto gap-6 items-center rounded-3xl pt-3 pb-5 px-4"
          >
            <div><img :src="schedule.icon" alt="" /></div>

            <div class="grid grid-flow-row auto-rows-auto">
              <p class="text-secondary mb-1 font-medium capitalize">
                {{ schedule.name }}
              </p>
              <p
                class="text-grey-darkBlueText pr-9 text-sm font-medium mt-1 capitalize"
              >
                {{ schedule.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TurfDrawer>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import TurfDrawer from "@/components/TurfDrawer.vue";
import TurfSegment from "@/components/TurfSegment.vue";
// import img from "@/assets/img/profile.png";
import planImg from "@/assets/img/plan.png";

import carIcon from "@/assets/icons/car.svg";
import universeIcon from "@/assets/icons/universe-icon.svg";

import {
  IonPage,
  IonContent,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";

import { ref } from "vue";

const data = ref([
  {
    label: "Active",
    value: "active",
  },
  { label: "Completed", value: "completed" },
]);

const scheduleTypes = ref([
  {
    name: "Physical Appointment",
    text: "Become what you live ,live in what you want to become,Life is ",
    icon: carIcon,
  },
  {
    name: "Virtual Appointment",
    text: "Become what you live ,live in what you want to become,Life is ",
    icon: universeIcon,
  },
]);
const cancelModal = ref(false);
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
