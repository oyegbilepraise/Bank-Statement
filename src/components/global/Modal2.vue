<template>
  <div class="relative z-50" :class="[visible ? 'pointer-events-auto': 'pointer-events-none']">
    <div
      @click.self="close()"
      :class="[visible ? 'opacity-100' : 'opacity-0']"
      class="fixed inset-0 bg-black bg-opacity-80 z-10 transition-all duration-200"
    >
    </div>
    <div
      class="z-50 fixed top-0 right-0 w-full max-w-3xl overflow-y-auto transform transition-all duration-300 rounded-l-2xl bg-white h-screen"
      :class="{
          'translate-x-0 opacity-100' : visible,
          'opacity-0 translate-x-20': !visible,
        }"
    >
      <div v-if="showHeader" class="flex items-center p-8" :style="{ background: `${headerColor}` }">
        <h3 v-if="headerTitle" class="text-xl font-semibold">{{ headerTitle }}</h3>
        <button
          @click="close()"
          class="w-8 h-8 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600 cursor-pointer ml-auto"
        >
          <XIcon class="w-5"/>
        </button>
      </div>
      <div class="p-8">
        <template v-if="lazy || visible">
          <slot/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";

export default {
  name: "Modal2",
  components: { XIcon },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    headerTitle: {
      type: String,
      default: ''
    },
    headerColor: {
      type: String,
      default: 'rgba(255, 255, 255)'
    },
    lazy: {
      type: Boolean,
      default: true
    },
    noSpacing: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  watch: {
    visible(v) {
      if (v) document.body.style.overflow = 'hidden';
      else document.body.style.overflowY = 'auto';
    }
  },
}
</script>