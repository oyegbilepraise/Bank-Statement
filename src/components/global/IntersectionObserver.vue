<template>
  <div ref="el">
    <slot :active="active"></slot>
  </div>
</template>

<script>
export default {
  name: "IntersectionObserver",
  mounted() {
    this.createObserver();
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  data() {
    return {
      previousRatio: 0.0,
      previousY: 0.0,
      observer: null,
      active: false
    }
  },
  methods: {
    createObserver() {
      let options = {
        root: null,
        rootMargin: "-80px",
        threshold: 1.0
      };
      this.observer = new IntersectionObserver(this.handleIntersect, options);
      this.observer.observe(this.$refs.el);
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        const currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;
        if (currentY < this.previousY) {
          if (currentRatio > this.previousRatio && isIntersecting) {
            this.active = currentRatio === 1;
          }
        } else if (currentY > this.previousY) {
          if (currentRatio < this.previousRatio) {
            this.active = false;
          }
        }
        this.previousY = currentY
        this.previousRatio = currentRatio
      });
    }
  }
}
</script>
