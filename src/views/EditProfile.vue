<template>
  <ion-page>
    <!-- <ion-header>
        <ion-toolbar>
          <ion-title>Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->
    <BackButton class="z-10 m-3" />

    <ion-content :fullscreen="false">
      <!-- <ion-backdrop class="backdrop h-screen"></ion-backdrop> -->

      <div class="relative">
        <div class="overflow-hidden w-full">
          <!-- step two -->

          <form @submit.prevent="updateCustomer" class="w-full">
            <div
              class="mt-5 grid grid-flow-row mx-2 items-center gap-2 auto-rows-auto w-full pr-4"
            >
              <div
                @click="$refs.input.click()"
                :style="
                  url.length
                    ? null
                    : {
                        backgroundImage: 'url(' + args.profileImage + ')',
                      }
                "
                style="
                  border-radius: 40px;
                  background-color: rgba(29, 53, 72, 0.5);
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                "
                class="relative justify-self-center border border-primary w-36 h-36"
              >
                <img class="w-full h-full" v-if="url" :src="url" alt="" />
                <img
                  class="absolute top-28 -right-2"
                  src="@/assets/icons/add-icon.svg"
                  alt=""
                />
              </div>
              <TurfInput v-model="args.username" label="Username"></TurfInput>

              <!-- <TurfInput
                v-model="args.password"
                label="Password"
                type="password"
              ></TurfInput> -->

              <input
                v-show="hide === false"
                ref="input"
                :accept="allowedTypes.toString()"
                @change="previewFiles($event)"
                type="file"
                class="custom-file-input"
                multiple
              />

              <TurfInput
                v-model="args.email"
                label="Email"
                type="email"
              ></TurfInput>

              <div class="relative">
                <span class="capitalize text-sm text-grey-dark font-medium">
                  Date of Birth</span
                >
                <input
                  style="
                    background: rgba(134, 133, 133, 0.1) !important;
                    border-radius: 10px;
                    color: #1d3548;
                    placeholder-color: #1d3548;
                    placeholder-opacity: 0.8;

                    padding-bottom: 16px !important;
                    padding-end: 10px !important;
                    padding-start: 10px !important;
                    padding-top: 16px !important;
                  "
                  @focus="hideText = true"
                  :class="args.dob.length ? 'text-white' : 'text-transparent'"
                  class="bg-none hidden-placeholder focus:outline-none p-2 bg-transparent w-full font-medium"
                  type="date"
                  v-model="args.dob"
                />
              </div>

              <TurfInput
                v-model="args.state"
                label="State"
                type="text"
              ></TurfInput>

              <TurfInput
                v-model="args.address"
                label="Address"
                type="text"
              ></TurfInput>
            </div>

            <div class="mt-4">
              <div class="grid w-full px-4 mt-5 items-center">
                <div class="border-2 border-primary p-2 w-full rounded-2xl">
                  <TurfButton
                    :auth="true"
                    type="submit"
                    class="font-normal mt-0 w-full text-sm"
                    color="primary"
                    ><span class="font-medium text-white text-sm"
                      >Update Profile</span
                    ></TurfButton
                  >
                </div>
              </div>
            </div>
          </form>

          <!-- step two -->
        </div>
      </div>
    </ion-content>
    <TurfLoader v-if="loading" />
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import TurfButton from "@/components/TurfButton.vue";
import BackButton from "@/components/BackButton.vue";

// import avatar from "@/assets/img/avatar.png";
import {
  ref,
  watch,
  computed,
  defineExpose,
  defineProps,
  onMounted,
} from "vue";
import { helperFunctions } from "@/composable/HelperFunctions";
import { useToast } from "vue-toastification";

import { useDataStore } from "@/stores/data.js";
// import { useRouter } from "vue-router";
// import { Preferences } from "@capacitor/preferences";
import TurfInput from "@/components/TurfInput.vue";

// import { useToast } from "vue-toastification";

const store = useDataStore();
// const router = useRouter();
const toast = useToast();

const { mutate, query } = store;
const { uploadFileToServer, convertFileToBase64 } = helperFunctions;

const props = defineProps({
  allowedTypes: {
    default: ["jpg", "pdf"],
  },
});
console.log(props);
// const step = ref(1);
const hide = ref(true);
const hideText = ref(false);
// const emit = defineEmits(["fileUrl"]);
const getUser = computed(() => store.getUserData);

async function queryUser() {
  loading.value = true;
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

const args = ref({
  address: "",
  dob: "",
  email: "",
  profileImage: "",
  state: "",
  username: "",
});

const message = ref("");
const fileName = ref("");
const fileSize = ref("");
const url = ref("");
const error = ref(false);
const loading = ref(false);
const inputFile = ref(null);
const input = ref(null);
// const dateInput = ref("");
const uploadFile = ref(null);

defineExpose({ input });
const imgLink = computed(() => props.imageLink);

watch(
  imgLink,
  () => {
    url.value = props.imageLink;
  },
  { deep: true }
);

const allowedTypes = computed(() => {
  let allowedTypes = [];
  if (props.type === "video") {
    allowedTypes = [
      "image/*;capture=camera",
      "video/*",
      "video/mp4",
      "video/quicktime",
    ];
  } else {
    if (props.allowedTypes) {
      props.allowedTypes.forEach((el) => {
        if (el == "pdf") {
          allowedTypes.push("application/pdf");
        } else if (el == "jpg") {
          allowedTypes.push("image/png", "image/jpeg", "image/gift");
        } else if (el == "excel") {
          allowedTypes.push(
            "text/csv",
            "application/csv",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel"
          );
        } else if (el == "word") {
          allowedTypes.push("application/msword");
        }
      });
    } else {
      allowedTypes = [
        "text/csv",
        "application/msword",
        "application/vnd.ms-excel",
        "application/vnd.ms-powerpoint",
        "text/plain",
        "application/pdf",
        "image/png",
        "image/jpeg",
        "image/gif",
        "application/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
    }
  }
  return allowedTypes;
});

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

async function previewFiles(e) {
  //   console.log(e.target.files[0], "FILE TARGET");
  error.value = false;
  uploadFile.value = [];
  message.value = "";
  const files = e.target.files;
  inputFile.value = files;
  // uploadFile.value = e.target.files;
  for (let file of files) {
    const { name, size } = file;
    fileName.value = name;

    fileSize.value = formatBytes(size);
    const base64 = await convertFileToBase64(file);
    uploadFile.value.push(base64);
  }
  let reader = new FileReader();

  reader.onloadend = (e) => {
    // data url
    url.value = e.target.result;
  };
  reader.readAsDataURL(files[0]);
}

async function updateCustomer() {
  try {
    loading.value = true;

    if (uploadFile.value && uploadFile.value.length) {
      const txt = await uploadFileToServer([...uploadFile.value]);
      args.value.profileImage = txt[0];
    }

    let res = await mutate({
      endpoint: "UpdateCustomer",
      data: {
        input: args.value,
      },
    });
    if (res && res._id) {
      toast.success("Profile updated successful");
      // router.push({ name: "PortalPage" });
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
  console.log(getUser.value);
  args.value.address = getUser.value.address;
  args.value.dob = getUser.value.dob;
  args.value.email = getUser.value.email;
  args.value.profileImage = getUser.value.profileImage;
  args.value.state = getUser.value.state;
  args.value.username = getUser.value.username;
});
</script>

<style scoped>
/* input {
  --background: rgba(134, 133, 133, 0.1) !important;
  --border-radius: 10px;
  --color: #1d3548;
  --placeholder-color: #1d3548;
  --placeholder-opacity: 0.8;

  --padding-bottom: 16px !important;
  --padding-end: 10px !important;
  --padding-start: 10px !important;
  --padding-top: 16px !important;
} */

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
  z-index: -1;
  overflow: hidden;
}
.backdrop::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 53, 72, 0.8);
  overflow: hidden;
}

input::placeholder {
  color: white;
}

.hidden-placeholder::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
.hidden-placeholder::-moz-calendar-picker-indicator {
  filter: invert(1);
}
.hidden-placeholder::-ms-calendar-picker-indicator {
  filter: invert(1);
}
.hidden-placeholder::calendar-picker-indicator {
  filter: invert(1);
}
</style>
