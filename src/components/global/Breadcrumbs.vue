<template>
  <div class="flex flex-col md:flex-row">
    <div v-for="(section, i) in sections" :key="section.id" class="flex items-center">
      <button
        @click="$emit('item-click', section.id)" :disabled="disabled" type="button"
        class="flex space-x-2 items-center py-[5px] rounded-full transition-all duration-300 text-left"
        :class="{ 'hover:px-3 hover:bg-gray-100': !disabled }"
      >
        <span
          class="w-6 h-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-300"
          :class="{'bg-green-600 !text-white': section.id === current}"
        >
          {{ i + 1 }}
        </span>
        <span>{{ section.name }}</span>
      </button>
      <ChevronRightIcon v-if="i < sections.length - 1" class="w-4 mx-4"/>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/outline";

export default {
  name: "Breadcrumbs",
  components: { ChevronRightIcon },
  emits: ['item-click'],
  props: {
    sections: {
      type: Array,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
