<template>
  <slot :current="current"/>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    from: {
      type: Number,
      required: true,
    }
  },
  data: () => ({
    current: 0,
    interval: null
  }),
  created() {
    this.reset();
  },
  methods: {
    reset() {
      this.current = this.from;
      this.interval = setInterval(() => {
        if (this.current === 0) return clearInterval(this.interval);
        this.current--;
      }, 1000);
    }
  },
  beforeUnmount() {
    if (this.interval) clearInterval(this.interval);
  }
}
</script>
