<template>
  <div class="mediumhead">
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <div class="baseflexbox listbox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "cmframe",
  props: {
    title: String
  },
  methods: {}
};
</script>

<style scoped>
.mediumhead {
  width: 100%;
  border-top: aquamarine 0.5px solid;
}

.title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: aquamarine 0.5px solid;
}
.listbox {
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>