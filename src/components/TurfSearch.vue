<template>
  <div class="grid grid-flow-col auto-cols-auto items-center w-full relative">
    <input
      autocomplete
      class="bg-none hidden w-11/12 text-info-700 font-medium text-sm leading-2 focus:outline-none border p-4 block appearance-none rounded-xl rounded-bl-xl"
      v-model="inputValue"
      v-bind="$attrs"
      @keypress.enter="searchFN"
      @keyup="querySuggestedEmployees"
      @input="(e) => $emit('update:modelValue', e.target.value)"
    />
    <ion-searchbar
      mode="ios"
      :debounce="1000"
      @ionChange="searchFN($event)"
      @ionBlur="$emit('focus')"
    ></ion-searchbar>
    <!-- :value="modelValue" -->
    <!-- 
    <div
      style="max-height: 500px; z-index: 999"
      v-if="inputValue.trim() && isSuggestion"
      class="overflow-y-auto w-full h-auto bg-secondary shadow-md z-2 mt-1 rounded-md absolute top-14 left-0 overflow-hidden"
    >
      <easiLoader v-if="loading" />

      <div
        v-for="(item, i) in suggestedEmployees.data"
        :key="i"
        @click="selectSuggestion(item)"
        class="w-full last:border-b-0 border-b border-dark-50 p-2 sm:p-4 cursor-pointer hover:bg-background-50 grid grid-flow-col auto-cols-auto gap-3 items-center"
      >
        <div
          v-if="item && item.profile.picture"
          class="border w-9 h-9 rounded-full overflow-hidden"
        >
          <img
            class="-full"
            :src="item.profile.picture"
            :alt="item.profile.firstName + ' ' + item.profile.lastName"
          />
        </div>
        <div
          v-else
          class="p-2 h-9 w-9 text-sm bg-secondary text-white font-medium rounded-full"
        >
          {{ getAvatar(item).name }}
        </div>
        <div
          class="text-dark-800 text-md font-medium grid grid-cols-1 items-start"
        >
          <span>{{
            `${item && item.profile.firstName} ${item && item.profile.lastName}`
          }}</span>
          <span class="text-sm text-dark-700 font-thin">{{
            item.profile.email
          }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { ref } from "vue";
// import { storeToRefs } from "pinia";
// import { useDataStore } from "@/stores/data.js";
import {
  // IonRouterOutlet,
  IonSearchbar,
  //   IonCardTitle,
} from "@ionic/vue";

// const store = useDataStore();
// const { query } = store;
// const { suggestedEmployees } = storeToRefs(store);

// const emit = defineEmits(["search", "update:modelValue", "focus"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },

  error: {
    type: [String, Boolean],
    default: null,
  },
});
console.log(props);

// const isSuggestion = ref(false);
// const loading = ref(false);
// const input = ref("");
// const inputValue = computed(() => props.modelValue);
const inputValue = ref("");

// watch(inputValue, async () => {
//   isSuggestion.value = true;
// });

// function getColor(index) {
//   let n = (index * 0xfffff * 1000000).toString(16);
//   return "#" + n.slice(0, 6);
// }

// const getAvatar = (employee) => {
//   let name = "",
//     color;
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   // const empId = employee.job && employee.job.userName;
//   // const thenum = empId ? Number(empId.replace(/\D/g, "")) : 1;
//   const initialOne = String(
//     employee.profile && employee.profile.firstName.charAt(0)
//   );
//   const initialTwo = String(
//     employee.profile && employee.profile.lastName.charAt(0)
//   );
//   const num =
//     Number(alphabet.indexOf(initialOne.toLowerCase())) +
//     Number(alphabet.indexOf(initialTwo.toLowerCase()));
//   color = getColor(num);
//   // Get color

//   employee
//     ? (name = `${employee.profile && employee.profile.firstName.charAt(0)}${
//         employee.profile && employee.profile.lastName.charAt(0)
//       }`)
//     : "";

//   return {
//     color,
//     name,
//   };
// };

// const selectSuggestion = async (arg) => {
//   inputValue.value = arg ? arg.profile.firstName : null;
//   await searchFN();

//   isSuggestion.value = false;
// };

// const searchFN = (e) => {
//   inputValue.value = e.target.value.toLowerCase();
//   emit("search", inputValue.value);
// };

// const querySuggestedEmployees = async (e) => {
//   inputValue.value = e.target.value.toLowerCase();
//   if (inputValue.value.trim() !== "") {
//     const payload = {
//       paging: {
//         limit: 1000,
//         skip: 0,
//         search: inputValue.value,
//         sort: {
//           firstName: "ASC",
//         },
//       },
//       filter: [],
//     };
//     try {
//       loading.value = true;
//       await query({
//         endpoint: "ListEmployees",
//         payload: payload,
//         service: "EMP",
//         storeKey: "suggestedEmployees",
//       })
//         .then(() => {
//           loading.value = false;
//         })
//         .catch((err) => {
//           console.log(err);
//           loading.value = false;
//         });
//     } catch (err) {
//       loading.value = false;
//       console.log(err);
//     }
//   } else {
//     store.$patch({
//       suggestedEmployees: [],
//     });
//   }
// };
</script>

<style></style>
