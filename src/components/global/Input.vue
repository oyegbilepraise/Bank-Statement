<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <label class="flex flex-col items-start w-full">
      <span v-if="label" class="mb-2">{{ label }}</span>
      <input
        :type="type" v-bind="field"
        class="py-2 px-4 border border-gray-300 bg-white rounded-md w-full focus:outline-none focus:ring"
        :placeholder="placeholder" :class="{ 'opacity-50' : disabled }" :disabled="disabled"
      >
      <small v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</small>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "AppInput",
  components: { Field },
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
}
</script>
