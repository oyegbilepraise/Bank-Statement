<template>
  <div class="rounded-lg bg-gray-100">
    <div @click="toggle()" class="flex items-center justify-between cursor-pointer px-8 py-6">
      <slot name="heading"></slot>
      <div>
        <ChevronDownIcon class="w-6 transition-all duration-300" :class="{'-rotate-180': active}"/>
      </div>
    </div>
    <div ref="collapse" class="transition-all duration-300 ease-in-out overflow-hidden h-0">
      <div class="px-8 pb-6">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/outline";

export default {
  name: "Collapsible",
  components: { ChevronDownIcon },
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    active: false
  }),
  mounted() {
    this.active = this.expanded;
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    handleActiveChange() {
      if (this.active) {
        const height = this.$refs.collapse.scrollHeight;
        this.$refs.collapse.style.height = `${ height }px`
      } else {
        this.$refs.collapse.style.height = '0';
      }
    },
  },
  watch: {
    active() {
      this.handleActiveChange();
    }
  }
}
</script>
