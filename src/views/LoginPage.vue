<template>
  <ion-page>
    <!-- <ion-header>
        <ion-toolbar>
          <ion-title>Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->
    <ion-content :fullscreen="true">
      <ion-backdrop class="backdrop h-screen"></ion-backdrop>
      <div v-show="step != 1" @click="step = 1" class="absolute top-16 right-9">
        <svg
          width="33"
          height="31"
          viewBox="0 0 33 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4038 26.8221C14.1473 27.7778 14.1473 29.3274 13.4038 30.2832C12.6603 31.2389 11.455 31.2389 10.7115 30.2832L0.557634 17.2304C-0.185881 16.2746 -0.185881 14.7253 0.557634 13.7695L10.7115 0.716839C11.455 -0.238943 12.6603 -0.238943 13.4038 0.716839C14.1473 1.67262 14.1473 3.22197 13.4038 4.17775L6.50018 13.0526L31.0962 13.0526C32.1476 13.0526 33 14.1484 33 15.5C33 16.8516 32.1476 17.9473 31.0962 17.9473L6.50018 17.9473L13.4038 26.8221Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="z-40 w-full h-full">
        <p class="w-full text-white text-3xl mt-32 ml-12 capitalize">
          <span class="browse-font text-6xl font-medium text-primary">b</span
          ><span class="browse-font text-white">rowse</span> <br />
          <span class="text-white font-medium">
            Our Property <br />
            Listing Now!</span
          >
        </p>
        <!-- step one -->
        <div v-if="step === 1" class="w-full">
          <div
            class="mt-40 mb-8 ml-8 grid grid-flow-col gap-0 auto-cols-auto w-full"
          >
            <input
              class="p-2 bg-none focus:outline-none border-b-2 bg-transparent w-full text-white font-medium border-primary placeholder-text-white::placeholder"
              type="text"
              placeholder="Start Your Journey With Us Today "
            />
            <img
              @click="step = 2"
              class="border-b-2 border-primary pl-7"
              src="@/assets/icons/register-arrow.svg"
              alt=""
            />
          </div>

          <div class="grid justify-center">
            <svg
              width="29"
              height="6"
              viewBox="0 0 29 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="19" height="6" rx="3" fill="white" />
              <circle cx="26" cy="3" r="3" fill="#D1643A" />
            </svg>
          </div>
          <TurfButton class="font-normal text-sm" fill="clear"
            >Forgot Password?</TurfButton
          >

          <div class="mt-32">
            <div class="text-sm font-medium text-center text-white">
              Don't have an account?
              <span class="text-primary">Click below</span>
            </div>
            <div class="grid w-full px-4 mt-5 items-center">
              <div class="border-2 border-primary p-2 w-full rounded-2xl">
                <TurfButton
                  @click="$router.push({ name: 'Register' })"
                  class="font-normal mt-0 w-full text-sm"
                  color="primary"
                  ><span class="font-medium text-white text-lg"
                    >Register now</span
                  ></TurfButton
                >
              </div>
            </div>
          </div>
        </div>
        <!-- step one -->

        <!-- step two -->

        <div v-else class="w-full">
          <div
            class="mt-40 mb-8 ml-8 grid grid-flow-col gap-0 auto-cols-auto w-full"
          >
            <input
              class="p-2 bg-none focus:outline-none border-b-2 bg-transparent w-full text-white font-medium border-primary placeholder-text-white::placeholder"
              type="password"
              placeholder="Password "
            />
            <img
              class="border-b-2 border-primary pl-7"
              src="@/assets/icons/register-arrow.svg"
              alt=""
            />
          </div>

          <div class="grid justify-center">
            <svg
              width="29"
              height="6"
              viewBox="0 0 29 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="29"
                y="6"
                width="19"
                height="6"
                rx="3"
                transform="rotate(-180 29 6)"
                fill="white"
              />
              <circle
                cx="3"
                cy="3"
                r="3"
                transform="rotate(-180 3 3)"
                fill="#D1643A"
              />
            </svg>
          </div>

          <div class="mt-60">
            <div class="grid w-full px-4 mt-5 items-center">
              <div class="border-2 border-primary p-2 w-full rounded-2xl">
                <TurfButton
                  class="font-normal mt-0 w-full text-sm"
                  color="primary"
                  ><span class="font-medium text-white text-lg"
                    >Sign In</span
                  ></TurfButton
                >
              </div>
            </div>
          </div>
        </div>

        <!-- step two -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonBackdrop, IonPage, IonContent } from "@ionic/vue";
import TurfButton from "@/components/TurfButton.vue";
import { ref } from "vue";

const step = ref(1);
</script>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/map.png");
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Adjust the opacity as desired */
  z-index: -1;
}
.backdrop::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
}

input::placeholder {
  color: white;
}
</style>
