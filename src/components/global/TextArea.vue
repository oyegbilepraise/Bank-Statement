<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <label class="flex flex-col items-center">
      <span v-if="label" class="mb-2">{{ label }}</span>
      <small v-if="msg" class="text-green-700 border mt-2 mb-6 text-xl p-5">{{
        msg
      }}</small>
      <textarea
        v-bind="field"
        :placeholder="placeholder"
        class="
          py-3
          px-4
          text-base
          border border-gray-300
          bg-white
          rounded-lg
          w-full
          focus:outline-none focus:ring
        "
        :class="{ 'opacity-50': disabled }"
        :disabled="disabled"
        :rows="rows"
      ></textarea>
      <small v-if="errorMessage" class="text-red-500 mt-2">{{
        errorMessage
      }}</small>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "AppTextArea",
  components: { Field },
  props: {
    type: {
      type: String,
      default: "text",
    },
    msg: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    rows: {
      type: String,
      default: "3",
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
