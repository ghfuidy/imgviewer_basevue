<template>
  <div class="itemli" @click="fnRelated(targetitem)">{{targetitem}}</div>
</template>

<script>
export default {
  name: "cmitem",
  props: {
    targetitem: {
      type: String
    }
  },
  methods: {
    fnRelated(title) {
      this.$router.push("/category/list?title=" + title);
    }
  }
};
</script>

<style scoped>
.itemli {
  width: 50%;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
}
</style>