<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <label class="flex flex-col items-start w-full">
      <span v-if="label" class="mb-2">{{ label }}</span>
      <select
        v-bind="field" :disabled="disabled"
        class="border border-gray-300 rounded-lg w-full focus:outline-none focus:ring"
        :class="{ 'py-1 px-2': size === 'sm', 'py-3 px-4 text-base': size === 'md', 'opacity-50' : disabled }"
      >
        <slot></slot>
      </select>
      <small v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</small>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "AppSelect",
  components: { Field },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      options: ['sm', 'lg'],
      default: 'md'
    },
  },
}
</script>
