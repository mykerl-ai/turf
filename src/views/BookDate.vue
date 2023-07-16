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
      <AddressSearch />

      <div
        @click="
          $router.push({
            name: 'ViewApartment',
            params: { id: swiperData[0].name },
          })
        "
        class="cursor-pointer relative my-8"
      >
        <!-- <div class="slide"></div> -->
        <div
          :style="{
            backgroundImage: 'url(' + house + ')',
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
                {{ swiperData[0].name }}
              </h2>

              <h2
                class="mt-0 mb-1 text-secondary text-lg font-medium capitalize"
              >
                {{ swiperData[0].price }}
              </h2>
            </div>

            <div class="flex gap-x-4 items-center">
              <img src="@/assets/icons/tower.svg" alt="" />
              <p class="text-xs text-grey-light font-medium capitalize">
                04 bedroom
              </p>

              <p class="text-xs text-grey-light font-medium capitalize">
                04 bathroom
              </p>
              <p class="text-xs text-grey-light font-medium capitalize">
                02 livingroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
// import img from "@/assets/img/profile.png";
import house from "@/assets/img/house.jpg";
import { IonPage, IonContent, IonHeader } from "@ionic/vue";
import { ref } from "vue";

import BackButton from "@/components/BackButton.vue";
// import TurfSearch from "@/components/TurfSearch.vue";
import AddressSearch from "@/components/AddressSearch.vue";

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
