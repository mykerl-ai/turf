<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 pt-4 pb-2 px-4 items-center w-full my-2">
        <BackButton />

        <div
          class="cursor-pointer w-full grid justify-end justify-self-end self-end"
        >
          <img src="@/assets/icons/filter.svg" alt="" />
        </div>
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <AddressSearch @update="queryByPosition" />

      <div
        v-for="home in listOfHouses"
        :key="home._id"
        @click="
          $router.push({
            name: 'ViewApartment',
            params: { id: home._id },
          })
        "
        class="cursor-pointer relative my-8"
      >
        <!-- <div class="slide"></div> -->
        <div
          :style="{
            backgroundImage:
              home && home.fileUrl && home.fileUrl.length
                ? 'url(' + home.fileUrl[0] + ')'
                : 'url(' + house + ')',
          }"
          class="slide-content grid grid-flow-row gap-0 auto-rows-auto w-full h-80 no-repeat items-end items-self-end self-end rounded-2xl"
        ></div>

        <div
          class="bg-white -mt-28 pt-2 self-center rounded-2xl w-11/12 mx-auto h-auto shadow-xl grid grid-flow-col gap-0 auto-cols-auto"
        >
          <div class="w-full grid grid-flow-row gap-4 auto-rows-auto p-3">
            <div
              class="grid grid-flow-col gap-0 auto-cols-auto justify-between items-center"
            >
              <h2
                class="mt-0 mb-1 text-secondary text-lg font-medium capitalize"
              >
                {{ home.houseType || "N/A" }}
              </h2>

              <h2
                class="mt-0 mb-1 text-secondary text-lg font-medium capitalize"
              >
                {{ formatAmount(home.price) }}
              </h2>
            </div>

            <div class="flex gap-x-4 items-center">
              <img src="@/assets/icons/tower.svg" alt="" />
              <p class="text-xs text-grey-light font-medium capitalize">
                {{ home.bedRoom && home.bedRoom.padStart(2, "0") }}
                {{
                  home.bedRoom && Number(home.bedRoom) > 1
                    ? "bedrooms"
                    : "bedroom"
                }}
              </p>

              <p class="text-xs text-grey-light font-medium capitalize">
                {{ home.bathRoom && home.bathRoom.padStart(2, "0") }}
                {{
                  home.bathRoom && Number(home.bathRoom) > 1
                    ? "bathrooms"
                    : "bathroom"
                }}
              </p>
              <p class="text-xs text-grey-light font-medium capitalize">
                {{ home.toilet && home.toilet.padStart(2, "0") }}
                {{
                  home.toilet && Number(home.toilet) > 1 ? "toilets" : "toilet"
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
    <TurfLoader v-if="loading" />
  </ion-page>
</template>

<script setup>
// import img from "@/assets/img/profile.png";
import house from "@/assets/img/house.jpg";
import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import { useDataStore } from "@/stores/data.js";
// import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import BackButton from "@/components/BackButton.vue";
// import TurfSearch from "@/components/TurfSearch.vue";
import AddressSearch from "@/components/AddressSearch.vue";
import { helperFunctions } from "@/composable/HelperFunctions";

const store = useDataStore();
// const route = useRoute();

const { query } = store;

const { formatAmount } = helperFunctions;
const listOfHouses = computed(() => store.getAllHouses);

// async function queryHouses() {
//   await query({
//     endpoint: "FetchAllProperties",
//     payload: {},
//     service: "GENERAL",
//     storeKey: "allHouses",
//   });
// }
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
// const extractedHomeDetails = computed(() => {
//   const data = listOfHouses.value
//     .map((house) => {
//       const houseType = house.houseType;
//       const address = house.address;
//       return house.homeDetails.map((homeDetail) => ({
//         ...homeDetail,
//         houseType,
//         address,
//       }));
//     })
//     .flat();
//   return data;
// });
onMounted(async () => {
  await queryByPosition();
  // await queryHouses();
});
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
