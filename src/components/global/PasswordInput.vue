<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <label class="flex flex-col items-start w-full">
      <span v-if="label" class="mb-2">{{ label }}</span>
      <span class="relative w-full">
      <input
        :type="visible ? 'text' : 'password'" v-bind="field"
        class="py-2 px-4 border border-gray-300 bg-white rounded-md w-full focus:outline-none focus:ring"
        :placeholder="placeholder" :class="{ 'opacity-50' : disabled, 'pr-12': showToggle }" :disabled="disabled"
      />
      <button
        v-if="showToggle" type="button" @click="visible = !visible"
        class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 ml-2 absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        <EyeIcon class="w-4" v-if="!visible"/>
        <EyeOffIcon class="w-4" v-else/>
      </button>
      </span>
      <small v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</small>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/outline";

export default {
  name: "PasswordInput",
  components: { Field, EyeIcon, EyeOffIcon },
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
    showToggle: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    visible: false
  })
}
</script>
