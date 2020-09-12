<template>
  <div class="slide-item" @click="changepage">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SlideItem",
  props: {
    pagerouter: {
      type: String
    }
  },
  methods: {
    changepage() {
      if (this.pagerouter) {
        console.log(this.pagerouter);
        this.$router.push('/'+ this.pagerouter)
      }
    }
  }
};
</script>

<style scoped>
.slide-item {
  width: 80%;
  height: 40px;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  list-style: none;
  text-indent: 0px;
  letter-spacing: 20px;
  /* background-color: #fff; */
}

.slide-item :active{
  color: aqua;
}
</style>