//store can be defined similar to the composition API setup, but it doesn't work as expected.
import { defineStore } from "pinia";
import { MUTATE, QUERY } from "../api/index.js";
// import { logout } from "@/api/api";

export const useDataStore = defineStore("main", {
  state: () => ({
    allHouses: [],
    userData: {},
    singleProperty: {},
    appointmentDetails: {},
    inspectionDetails: {},
    clientInspectionDetails: [],
    takenDates: [],
    transactionHistory: [],
  }),

  getters: {
    getAllHouses: (state) => state.allHouses,
    getUserData: (state) => state.userData,
    getSingleProperty: (state) => state.singleProperty,
    getAppointmentDetails: (state) => state.appointmentDetails,
    getInspectionDetails: (state) => state.inspectionDetails,
    getClientInspectionDetails: (state) => state.clientInspectionDetails,
    getTakenDates: (state) => state.takenDates,
    getTransactionHistory: (state) => state.transactionHistory,
  },

  actions: {
    // mutate({ endpoint, data, service }) {
    //   return MUTATE(endpoint, data, service);
    // },
    async mutate({ endpoint, data, service }) {
      try {
        const res = await MUTATE(endpoint, data, service);
        console.log(res, "Store");

        if (res) {
          return res;
        }
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },

    async query({ endpoint, payload, service, storeKey }) {
      try {
        const res = await QUERY(endpoint, payload, service, storeKey);

        if (res) {
          this[storeKey] = res;

          return res;
        }
        // else if (res == undefined) {
        //   logout("logout");
        // }
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
  persist: true,
});
