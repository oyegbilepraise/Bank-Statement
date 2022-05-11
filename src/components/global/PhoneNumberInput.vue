<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <label class="flex flex-col items-start w-full">
      <span v-if="label" class="mb-2">{{ label }}</span>
      <span class="flex border w-full focus:outline-none focus:ring rounded-lg outline-none divide-x">
        <input
          type="tel" v-bind="field" class="py-2 px-4 bg-white flex-1 outline-none w-full"
          :placeholder="placeholder" :class="{ 'opacity-50' : disabled }" :disabled="disabled"
          ref="input"
        >
      </span>
      <small v-if="errorMessage" class="flex text-red-500 mt-2">{{ errorMessage }}</small>
    </label>
  </Field>
</template>

<script>
import intlTelInput from "intl-tel-input";
import { Field } from "vee-validate";

export default {
  name: "PhoneNumberInput",
  components: { Field },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    iti: null
  }),
  mounted() {
    this.iti = intlTelInput(this.$refs.input, {
      initialCountry: "ng",
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js'
    });
  }
}
</script>
