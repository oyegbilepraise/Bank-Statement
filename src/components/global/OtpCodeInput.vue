<template>
  <form ref="parent" class="flex space-x-2 lg:space-x-3" @input="handleInput">
    <input
      v-for="i in length" :key="i"
      type="text" maxlength="1" @focus="handleFocus" @keydown="handleKeydown" @paste="handlePaste"
      class="w-14 px-2 py-4 lg:w-16 lg:px-4 lg:py-6 rounded-lg bg-gray-200 bg-opacity-60 focus:ring focus:ring-primary-200 outline-none text-xl text-center"
      :class="{ 'opacity-60 pointer-events-none': disabled }"
      :disabled="disabled"
    />
  </form>
</template>

<script>
export default {
  name: "OtpCodeInput",
  emits: ['done'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number,
      default: 6
    }
  },
  methods: {
    focusLast() {
      const el = [...this.$refs.parent.children].find(child => !child.value);
      if (el) el.focus();
    },
    handleFocus(e) {
      if (!e.target.value) this.focusLast();
    },
    handleKeydown(e) {
      if (e.target.value) return;
      if (e.code.toLowerCase() === 'backspace') {
        const el = [...this.$refs.parent.children].reverse().find(child => child.value);
        if (!el) return;
        el.value = '';
        el.focus();
      }
    },
    handleInput(e) {
      const input = e.target;
      if (input.nextElementSibling && input.value) input.nextElementSibling.focus();
      if (!input.nextElementSibling && input.value) this.handleDone();
    },
    handlePaste(e) {
      const paste = e.clipboardData.getData('text');
      const inputs = this.$refs.parent.querySelectorAll('input');
      inputs.forEach((input, i) => {
        input.value = paste[i] || '';
      });
      setTimeout(() => this.focusLast(), 10);
      if (paste.length === this.length) this.handleDone();
    },
    handleDone() {
      const value = [...this.$refs.parent.children].reduce((acc, child) => acc + child.value, '');
      this.$emit('done', value);
    }
  },
}
</script>
