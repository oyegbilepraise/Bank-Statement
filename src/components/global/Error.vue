<template>
  <div class="text-center max-w-xs mx-auto flex flex-col items-center justify-center">
    <ExclamationCircleIcon class="w-12 text-red-400"/>
    <p v-if="text" class="mt-10 text-gray-600 font-semibold text-lg">{{ text }}</p>
    <p v-if="subtext" class="text-gray-500 mt-3">{{ subtext }}</p>
    <div class="mt-7 flex gap-4">
      <button v-if="showBack" @click="$emit('back', $event)" class="text-gray-400 rounded-lg py-1 px-3">
        <ArrowLeftIcon class="w-4 mr-2"/>
        Back
      </button>
      <button
        v-if="showRetry" @click="$emit('retry', $event)"
        class="text-red-400 border border-red-400 rounded-lg py-1 px-3"
      >
        <RefreshIcon class="w-4 mr-2"/>
        Retry
      </button>
    </div>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import { ArrowLeftIcon, RefreshIcon } from "@heroicons/vue/outline";

export default {
  name: "Error",
  components: {
    ExclamationCircleIcon, ArrowLeftIcon, RefreshIcon
  },
  props: {
    text: {
      type: String,
    },
    subtext: {
      type: String
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showRetry: {
      type: Boolean,
      default: false
    }
  }
}
</script>
