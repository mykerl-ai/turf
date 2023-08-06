import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { API } from "./api/api";
import { createApolloProvider } from "@vue/apollo-option";
import Toast from "vue-toastification";

import TurfLoader from "@/components/TurfLoader.vue";
import "vue-toastification/dist/index.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./index.css";

const app = createApp(App);
const apolloProvider = createApolloProvider({
  defaultClient: API,
});
app.config.productionTip = false;

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component("TurfLoader", TurfLoader);
app
  .use(IonicVue)
  .use(router)
  .use(pinia)
  .use(apolloProvider)
  .use(Toast)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBwS4eTwFMHed4ZGtrgokcDgCOPb4-JnXY",
      libraries: "places",
    },
  });

router.isReady().then(() => {
  app.mount("#app");
});
