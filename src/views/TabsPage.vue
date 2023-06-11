<template>
  <ion-page>
    <ion-tabs @ion-tabs-did-change="setActive($event)">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar id="custom-tab" slot="bottom">
        <ion-tab-button
          v-for="tab in tabs"
          :key="tab.label"
          :tab="tab.tab"
          :href="tab.href"
          @click="$router.push(tab.href)"
        >
          <div class="w-7">
            <img
              :src="$route.path.includes(tab.slug) ? tab.activeICon : tab.icon"
              :alt="tab.tab"
            />
          </div>
          <!-- <ion-label :class="$route.path.includes(tab.slug)? 'text-white': ''">{{ tab.label }}</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  // IonLabel,
  // IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
// import { ellipse, square, home } from "ionicons/icons";
import { reactive, ref } from "vue";

import home from "@/assets/icons/home.svg";
import homeActive from "@/assets/icons/homeactive.svg";

import book from "@/assets/icons/book.svg";
import bookActive from "@/assets/icons/bookactive.svg";

import chat from "@/assets/icons/chat.svg";
import chatActive from "@/assets/icons/chatactive.svg";

import profile from "@/assets/icons/profile.svg";
import profileActive from "@/assets/icons/profileactive.svg";

const active = ref("home");

const setActive = (e) => {
  active.value = e.tab;
};

const tabs = reactive([
  {
    tab: "home",
    href: "/home",
    slug: "home",
    label: "Home",
    icon: home,
    activeICon: homeActive,
  },

  {
    tab: "book",
    href: "/book",
    slug: "book",
    label: "book",
    icon: book,
    activeICon: bookActive,
  },

  {
    tab: "chat",
    href: "/chat",
    slug: "chat",
    label: "chat",
    icon: chat,
    activeICon: chatActive,
  },

  {
    tab: "profile",
    href: "/profile",
    slug: "profile",
    label: "profile",
    icon: profile,
    activeICon: profileActive,
  },
]);
</script>

<style>
ion-tab-bar {
  --background: #1d3548;
  --color: white;
  margin: 0 20px 20px 20px;
  border-radius: 20px;
}

#custom-tab {
  /* Add your custom styles here */
  background-color: #1d3548 !important;
  padding: 10px;
  font-size: 16px;
}
</style>
