<template>
  <div class="dropdown" :class="{active: active}" ref="dropdown">
    <div @click="active = !active" class="flex items-center cursor-pointer">
      <slot name="toggle"/>
    </div>
    <div class="dropdown-menu shadow" @click="handleContentClick" ref="menu">
      <slot name="content"/>
    </div>
  </div>

</template>

<script>
import ImageModal from "../modals/ImageModal.vue";
export default {
    name: "Dropdown",
    data: () => ({
        active: false
    }),
    methods: {
        handleContentClick(e) {
            const { nodeName } = e.target;
            if (nodeName.match(/A|BUTTON/gi))
                this.active = false;
        },
        handleWindowClick(e) {
            const parent = e.target.offsetParent;
            const { dropdown, menu } = this.$refs;
            if (!parent || !dropdown || !menu)
                return;
            if (parent !== dropdown && parent !== menu)
                this.active = false;
        }
    },
    watch: {
        active(v) {
            if (v)
                window.addEventListener("click", this.handleWindowClick);
            else
                window.removeEventListener("click", this.handleWindowClick);
        }
    },
    components: { ImageModal }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  z-index: 10;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.15s ease-in-out;
  pointer-events: none;
  z-index: 999999 !important;
}

.dropdown .indicator {
  transform: rotate(0);
  transition: all 0.2s ease-in-out;
}

.dropdown.active .dropdown-menu {
  transform: translateY(0);
  opacity: 1;
  pointer-events: initial;
}

.dropdown.active .indicator {
  transform: rotate(180deg);
}
</style>
