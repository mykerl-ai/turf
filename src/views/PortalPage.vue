<template>
  <ion-page>
    <ion-header>
      <div class="grid grid-cols-2 items-center w-full mt-4">
        <BackButton />
      </div>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="w-full h-24 bg-white rounded-full p-2 mb-5">
        <div class="h-full w-full flex">
          <div class="w-9/12 h-full rounded-full flex place-items-center">
            <div class="w-20 h-20 bg-black rounded-full"></div>
            <div class="grid grid-row place-items-center h-14">
              <div class="text-black">Andrew Williams</div>
              <div>Caliy@gmail.com</div>
            </div>
          </div>
          <div class="w-3/12 h-full rounded-full flex">
            <div class="w-20 h-20 bg-black rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- second box  -->
      <div class="w-full h-44 rounded-3xl bg-secondary flex mb-5">
        <div class="w-1/2 h-full bg-primary rounded-3xl"></div>
        <div class="w-1/2 p-2 h-full pl-5 rounded-3xl">
          <div class="grid grid-row">
            <span class="text-white font-medium"> Alexis Avenue</span>
            <span class="text-white text-xs font-medium"
              >278 Macathy street</span
            >
          </div>

          <div class="grid grid-row mb-6">
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
        <p class="mb-2.5 font-medium text-xl">Sevices</p>
        <button class="bg-white w-20 rounded-full">view all</button>
      </div>
      <div class="w-full grid grid-cols-4">
        <div class="h-72 w-60 bg-primary rounded-2xl p-3">
          <div class="h-1/2 w-full flex flex-col justify-between pb-5">
            <span class="text-sm text-white">
              Pick a payment structure plan
            </span>

            <div class="flex justify-between">
              <span class="text-6xl text-white">N/A</span>
              <span class="text-6xl text-white">SC</span>
            </div>
          </div>

          <div class="h-1/2 w-full flex">
            <div
              class="flex justify-center items-center justify-between h-20 w-full bg-white border rounded-full self-end p-3"
            >
              <div class="text-sm font-medium">
                Pick a payment <br />
                plan
              </div>
              <div class="h-16 w-16 border rounded-full bg-black"></div>
            </div>
          </div>
        </div>
        <!-- second  -->
        <!-- <div class="h-72 w-60 bg-secondary rounded-2xl p-3">
          <div class="w-full grid grid-row gap-5">
            <span class="text-sm text-white">
              Pick a Date: <span class="text-primary">14th mar 23</span>
            </span>

            <div class="h-20 w-full bg-black"></div>

            <div class="w-full flex items-center gap-4">
              <div class="h-16 w-16 bg-black rounded-full"></div>
              <div class="grid grid-row h-10 flex justify-center items-center">
                <span class="text-sm font-medium text-white">Mr Mick Ano</span>
                <span class="text-xs font-medium text-white"
                  >Position:Tour guide</span
                >
              </div>
            </div>
            <div class="w-full grid place-items-end mb-4">
              <button class="h-9 w-28 bg-white rounded-2xl">
                <p class="text-stone-600 text-sm font-medium">Pay Now</p>
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
</script>
