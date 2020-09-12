<template>
  <div class="scroll-bar">
    <div class="block" :style="barheight">
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollBar",
  props: {
    movepos: {
      type: Number,
      deault: 0
    }
  },
  computed: {
    barheight() {
      return {
        top: this.movepos * 100 + "%"
      };
    }
  }
};
</script>

<style scoped>
.scroll-bar {
  position: fixed;
  top: 44px;
  right: 0px;
  width: 20px;
  height: 596px;
  z-index: 9;
}
.block {
  position: absolute;
  width: 20px;
  height: 20px;
  /* background-color: #f00; */
  background-image: url("~assets/img/angle.png");
  background-size: cover;
  /* transform: scale(3,4) translate(-30%); */
}
</style>