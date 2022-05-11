<template>
  <div v-if="label">{{ label }}</div>
  <label
    v-if="!modelValue" :for="id"
    class="inline-flex justify-center items-center rounded-md outline-none font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap border border-gray-600 px-5 py-2 mt-2"
  >
    {{ buttonText }}
  </label>
  <div v-if="modelValue" class="flex items-center mt-2">
    <span>{{ modelValue.name }}</span>
    <button @click="$emit('update:modelValue', null)" class="flex items-center text-red-500 hover:text-red-600 ml-3">
      <XIcon class="w-4 mr-1"/>
      Remove
    </button>
  </div>
  <input type="file" :id="id" hidden @change="handleChange($event)" :accept="accept" :multiple="multiple"/>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";

export default {
  name: "FileInput",
  components: { XIcon },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    id: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: false
    },
    label: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Select file'
    },
    accept: String
  },
  methods: {
    handleChange(e) {
      const { files } = e.target;
      this.$emit('update:modelValue', this.multiple ? files : files[0])
    }
  }
}
</script>
