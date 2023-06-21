<template>
  <main>
    <div>
      <div class="grid grid-flow-row ml-3 items-center gap-3 auto-rows-auto">
        <div
          @click="$refs.input.click()"
          :style="
            url.length
              ? null
              : {
                  backgroundColor: '#1D3548',
                }
          "
          style="
            border-radius: 20px;
            background-repeat: no-repeat;
            background-position: center;
          "
          class="relative justify-self-center border border-secondary w-20 h-20"
        >
          <img class="w-full h-full" v-if="url" :src="url" alt="" />
          <!-- <img
              class="absolute top-28 -right-2"
              src="@/assets/icons/add-icon.svg"
              alt=""
            /> -->
        </div>

        <span class="text-center text-sm font-medium text-secondary"
          >Add a picture(Optional)</span
        >

        <input
          v-show="hide === false"
          ref="input"
          :accept="allowedTypes.toString()"
          @change="previewFiles($event)"
          type="file"
          class="custom-file-input"
        />
      </div>

      <!-- step two -->
    </div>
  </main>
</template>

<script setup>
// import { IonContent } from "@ionic/vue";
// import avatar from "@/assets/img/avatar.png";
import { ref, watch, computed } from "vue";

const props = defineProps({
  allowedTypes: {
    default: ["jpg", "pdf"],
  },
});
console.log(props);

const emit = defineEmits(["fileUrl"]);

let message = ref("");
let fileName = ref("");
let fileSize = ref("");
let url = ref("");
let error = ref(false);
let hide = ref(true);
const inputFile = ref(null);
const input = ref(null);
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

function previewFiles(e) {
  //   console.log(e.target.files[0], "FILE TARGET");
  error.value = false;
  uploadFile.value = null;
  message.value = "";
  const file = e.target.files[0];
  inputFile.value = file;
  uploadFile.value = file;
  console.log(file.type, "TYPEOFFILE");

  console.log(file.type);

  try {
    if (!allowedTypes.value.includes(file.type)) {
      message.value = "File type is wrong!!";
      inputFile.value = null;
      error.value = true;
      throw new Error(message.value);
    }

    if (file.size > parseInt(props.size)) {
      console.log(
        `Too large, max size allowed is ${parseInt(props.size) / 1000000}MB`
      );
      message.value = `Too large, max size allowed is ${
        parseInt(props.size) / 1000000
      }MB`;
      inputFile.value = null;
      error.value = true;
      // showToast(message.value)
      throw new Error(message.value);
    }

    const { name, size } = file;
    fileName.value = name;

    fileSize.value = formatBytes(size);
    let reader = new FileReader();

    reader.onloadend = (e) => {
      // data url
      url.value = e.target.result;
      // args.documentUrl = e.target.result;
    };
    reader.readAsDataURL(file);
    emit("fileUrl", uploadFile.value);
  } catch (e) {
    // showToast(e.message);
  }

  // url = URL.createObjectURL(file);
  // uploadToServer();
}
</script>

<style scoped>
.backdrop {
  position: fixed;
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
  background: rgba(0, 0, 0, 0.85);
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
