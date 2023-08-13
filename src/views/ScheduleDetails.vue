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
          class="h-full grid grid-flow-col auto-cols-auto gap-4 justify-start w-full"
        >
          <div class="h-full grid grid-flow-col auto-cols-auto gap-3">
            <div class="w-16 h-16 bg-contain bg-secondary rounded-full"></div>
            <div class="w-full mt-2">
              <span class="text-secondary font-medium w-full mt-3"
                >Mr Mick t</span
              >
              <div class="text-grey-dark font-medium text-xs capitalize">
                position: tour guide
              </div>
            </div>
          </div>
          <div class="h-full grid grid-flow-col auto-cols-auto gap-3">
            <div class="w-16 h-16 bg-contain bg-secondary rounded-full"></div>
            <div class="w-full mt-2">
              <span class="text-secondary font-medium w-full mt-3"
                >Due Date</span
              >
              <div class="text-grey-dark font-medium text-sm capitalize">
                {{ inspectionObj && inspectionObj.date }}
              </div>
            </div>
          </div>
        </div>

        <div
          :style="{
            backgroundImage: 'url(' + driver + ')',
          }"
          class="w-full h-36 bg-no-repeat bg-cover p-5 bg-secondary rounded-tl-3xl rounded-br-3xl my-7"
        ></div>

        <div class="my-6 gap-4 grid grid-flow-col auto-cols-auto">
          <TurfButton @click="dateModal = true" color="primary" fill="solid"
            >Reschedule</TurfButton
          >
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Applied Date
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              {{
                inspectionObj &&
                inspectionObj.booked &&
                inspectionObj.booked.createdAt &&
                inspectionObj.booked.createdAt.split("T")[0]
              }}
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Approved Date
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              {{
                inspectionObj &&
                inspectionObj.booked &&
                inspectionObj.booked.updatedAt &&
                inspectionObj.booked.updatedAt.split("T")[0]
              }}
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Start Time
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              {{ inspectionObj && inspectionObj.time }}
            </p>
          </div>

          <div class="bg-grey-faint rounded-2xl py-2 px-4">
            <p class="text-grey-dark text-xs font-bold capitalize">
              Close Time
            </p>
            <p class="text-secondary text-sm font-medium mt-1 capitalize">
              {{ inspectionObj && inspectionObj.closeTime }}
            </p>
          </div>
        </div>

        <div class="mt-6 p-4 items-center w-full bg-grey-faint rounded-xl">
          <div class="w-full text-secondary font-bold text-base">Note</div>
          <div class="w-full text-grey-darkBlueText mt-2 leading-6 text-sm">
            Become what you live ,live in what you want to become,Life is too
            short to hold back push on with renters Become what you live ,live
            in what you want to become,Life is too short to hold back push on
            with renters
          </div>
        </div>
      </div>
    </ion-content>

    <TurfDrawer
      :breakpoints="[0.7, 0.78]"
      type="sheet"
      @close="dateModal = false"
      :isOpen="dateModal"
      :initial-breakpoint="0.8"
    >
      <div class="">
        <div
          class="bg-secondary w-12 h-12 p-2 grid grid-rows-1 justify-center items-center rounded-2xl"
        >
          <img src="@/assets/icons/calendar.svg" alt="" />
        </div>

        <p class="text-grey-light font-medium capitalize mt-4">
          Reschedule your Appointment
        </p>

        <div class="grid grid-flow-row auto-rows-auto gap-5 mt-5">
          <CalendarWidget
            :takenDate="unavailableDates"
            @update="selectedDate = $event"
            :value="selectedDate"
          />
          <TurfButton
            @click="scheduleDate"
            class="w-full my-4"
            :block="true"
            shape="round"
            color="secondary"
            ><span class="text-white text-base font-medium capitalize">
              Reschedule</span
            >
          </TurfButton>
        </div>
      </div>
    </TurfDrawer>

    <TurfLoader v-if="loading" />
  </ion-page>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useDataStore } from "@/stores/data.js";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { IonPage, IonContent, IonHeader } from "@ionic/vue";

import TurfDrawer from "@/components/TurfDrawer.vue";

import BackButton from "@/components/BackButton.vue";
import TurfButton from "@/components/TurfButton.vue";

import CalendarWidget from "@/components/CalendarWidget.vue";

import driver from "@/assets/img/driver.png";

const route = useRoute();
const store = useDataStore();
const toast = useToast();

// const router = useRouter();

const { query, mutate } = store;

const inspectionObj = computed(() =>
  store.getClientInspectionDetails.find((obj) => obj._id === route.params.id)
);
const unavailableDates = computed(() => store.getTakenDates);

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

const selectedDate = ref("");
const loading = ref(false);
const dateModal = ref(false);

async function scheduleDate() {
  if (!selectedDate.value || !selectedDate.value.length) {
    toast.error("You have to pick a date");
    return;
  }
  const dateTime = selectedDate.value.split("T");
  try {
    loading.value = true;

    let res = await mutate({
      endpoint: "CreateScheduleInspectionDate",
      data: {
        input: {
          id: route.params.id,
          time: dateTime[1],
          house: inspectionObj.value.house._id,
          date: dateTime[0],
          closeTime: "",
          // client: getUser.value._id,
          booked: inspectionObj.value.booked._id,
        },
      },
      service: "GENERAL",
    });
    if (res && res._id) {
      dateModal.value = false;
      await queryInspectionDetails();

      // await queryAppointment();
      toast.success("Schedule updated successfully");
    }
  } catch (e) {
    console.log(e);
    toast.error(e.message);
  } finally {
    loading.value = false;
  }
}

async function fetchTakenDates() {
  try {
    await query({
      endpoint: "FetchTakenDates",
      payload: {},
      service: "GENERAL",
      storeKey: "takenDates",
    });
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
  await queryInspectionDetails();
  await fetchTakenDates();
});
</script>

<style scoped>
ion-range {
  --bar-background: #000000;
  --bar-background-active: #63c834;
  --bar-height: 4px;
  --bar-border-radius: 8px;
  --knob-background: #ffffff;
  --knob-size: 40px;
  --pin-background: #fffff;
  --pin-color: #fff;
}

ion-range::part(knob) {
  display: none;
}
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
