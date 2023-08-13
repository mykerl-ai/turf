<template>
  <div
    @click="$router.push({ name: 'ScheduleDetails', params: { id: data._id } })"
    class="relative text-left w-full bg-secondary rounded-2xl p-3"
  >
    <div class="w-full grid grid-row gap-5">
      <div class="w-full flex flex-col gap-2">
        <span class="text-sm text-white">
          Scheduled Date:
          <span class="text-white font-bold">{{ data.date }}</span>
        </span>

        <span class="text-sm text-white">
          Time: <span class="text-white font-bold">{{ data.time }}</span>
        </span>
      </div>
      <div
        :style="{
          backgroundImage: 'url(' + driver + ')',
        }"
        class="h-20 bg-no-repeat bg-cover rounded-tl-3xl rounded-br-3xl w-full bg-black"
      ></div>

      <div class="w-full flex items-center gap-4">
        <div class="h-16 w-16 bg-black rounded-full"></div>
        <div class="grid grid-row h-10 flex justify-center items-center">
          <span class="text-sm font-medium text-white">Mr Mick Ano</span>
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
</template>

<script setup>
import driver from "@/assets/img/driver.png";

const props = defineProps({
  data: { type: Object },
});
console.log(props.data);
</script>

<style></style>
