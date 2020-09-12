<template>
  <div class="searchfrm baseflexbox">
    <input type="text" v-model="inputext" placeholder="输入搜素内容"/>
    <div class="bth" @click="search()">search</div>
  </div>
</template>

<script>
export default {
  name: 'searchfrm',
  data(){
    return {
      inputext: ''
    }
  },
  methods: {
    search(){
      this.$router.push("/category/list?title=" + this.inputext);
    }
  }
};
</script>

<style scoped>
.searchfrm{
  height: 40px;
  width: 100%;
  align-self: center;
  justify-content: center;
}

.searchfrm input{
  height: 20px;
  width: 70%;
  align-self: center;
}

.bth{
  width: 20%;
  height: 20px;
  border: 1px solid rgb(106, 227, 231);
  background-color: rgb(109, 225, 230);
  border-radius: 10px;
  align-self: center;
}

.bth:active{
  background-color: rgb(161, 230, 233);
  color: white;
}
</style>