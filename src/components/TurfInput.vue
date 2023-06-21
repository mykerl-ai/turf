<template>
  <div class="">
    <ion-label class="capitalize text-sm text-grey-dark font-medium">{{
      label
    }}</ion-label>
    <ion-input
      ref="input"
      class="mt-1"
      :type="type"
      :fill="fill"
      :helper-text="helperText"
      :error-text="errorText"
      :value="formatAmount"
      @ionInput="type === 'email' ? validate($event) : updateField($event)"
      @ionBlur="markTouched"
    ></ion-input>
  </div>
</template>

<script>
import { IonInput, IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    fill: {
      type: String,
      default: "solid",
    },
    type: {
      type: String,
      default: "text",
    },
    helperText: {
      type: String,
      default: "",
    },
    errorText: {
      type: String,
      default: "",
    },
    format: {
      type: Boolean,
      default: false,
    },
  },
  components: { IonInput, IonLabel },
  data() {
    return {
      inputFocus: false,
    };
  },
  emits: ["update:modelValue"],
  computed: {
    formatAmount() {
      if (this.format) {
        let val = this.modelValue;
        val = this.removeAlphabet(val);

        val = parseInt(val);
        val = val.toLocaleString();

        if (val === "NaN") {
          return "";
        } else {
          return `₦${val}`;
        }
      } else {
        return this.modelValue;
      }
    },
  },
  methods: {
    updateField(e) {
      let amount = e.target.value;

      if (this.format) {
        amount = this.removeAlphabet(amount);
        const firstChar = amount.charAt(0);
        if (firstChar === "₦") {
          amount = amount.substring(1);
        }

        if (amount !== null) {
          amount = amount.split(",").join("");
          amount = parseInt(amount);
        }
      }

      // if (this.maxlength && this.maxlength > 0) {
      //   amount = this.limitToMaxLength(amount);
      // }

      this.$emit("update:modelValue", amount);
    },
    removeAlphabet(arg) {
      if (arg) {
        arg = arg.toString();
        let regex = /[a-zA-Z]/g;
        this.$emit("update:modelValue", arg.replace(regex, ""));
        return arg.replace(regex, "");
      }
    },

    // markTouched() {
    //   if (this.modelValue && this.modelValue.trim() === "") {
    //     this.inputFocus = false;
    //   }
    //   this.$refs.item.$el.classList.add("ion-touched");
    // },

    resetField() {
      this.$emit("update:modelValue", "");
    },

    validateEmail(email) {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    },

    validate(ev) {
      const value = ev.target.value;

      this.$refs.input.$el.classList.remove("ion-valid");
      this.$refs.input.$el.classList.remove("ion-invalid");

      if (value === "") return;

      this.validateEmail(value)
        ? this.$refs.input.$el.classList.add("ion-valid")
        : this.$refs.input.$el.classList.add("ion-invalid");
    },

    markTouched() {
      if (this.modelValue && this.modelValue.trim() === "") {
        this.inputFocus = false;
      }
      this.$refs.input.$el.classList.add("ion-touched");
    },
  },
});
</script>
<style>
ion-input {
  --background: rgba(134, 133, 133, 0.1) !important;
  --border-radius: 10px;
  --color: #1d3548;
  --placeholder-color: #1d3548;
  --placeholder-opacity: 0.8;

  --padding-bottom: 16px !important;
  --padding-end: 10px !important;
  --padding-start: 10px !important;
  --padding-top: 16px !important;
}

ion-input .input-label-floating {
  transform: translateY(-20px) scale(0.8);
}

ion-input.custom .helper-text,
ion-input.custom .counter {
  color: var(--ion-color-step-700, #373737);
}
</style>
