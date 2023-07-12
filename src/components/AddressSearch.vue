<template>
  <GMapAutocomplete
    style="
      background-color: transparent;
      display: none;
      width: 91.67%;
      color: #4c51bf;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      outline: none;
      border-width: 1px;
      border-style: solid;
      padding: 1rem;
      display: block;
      appearance: none;
      border-radius: 0.75rem;
      border-bottom-left-radius: 0.75rem;
    "
    placeholder="Search Address"
    @place_changed="setPlace"
    :options="autocompleteOptions"
  >
  </GMapAutocomplete>
</template>
<script>
export default {
  name: "App",
  emits: ["update"],
  data() {
    return {
      autocompleteOptions: {
        componentRestrictions: {
          country: ["ng"],
        },
      },
    };
  },
  methods: {
    setPlace(e) {
      console.log(e);
      this.$emit("update", e.formatted_address);
    },
  },
};
</script>
