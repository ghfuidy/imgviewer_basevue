<template>
  <div class="pickout">
    <div class="bgbody"></div>
    <div class="pick">
      <p>{{msg}}</p>
      <div class="btngroup baseflexbox">
        <button
          class="bth"
          v-for="(item,index) in bthgroups"
          :key="index"
          @click="bthclick(item)"
        >{{item}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pickout",
  props: {
    msg: {
      type: String,
      default: "这是一个弹出选择消息框"
    },
    bthgroups: {
      type: Array,
      default() {
        return ["确认", "否认", "取消"];
      }
    }
  },
  methods: {
    bthclick(type) {
      this.$emit("choosbth", type);
    }
  }
};
</script>

<style scoped>
.pickout {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.bgbody {
  width: 100%;
  height: 100%;
  background-color: rgb(172, 171, 171);
  opacity: 0.6;
}
.pick {
  position: absolute;
  width: 100%;
  top: 40%;
  border-radius: 10px;
  /* border: 0.5px solid #3d3c3c; */
  background-color: #fff;
  padding: 5px 5px;
}

.btngroup {
  opacity: 1;
  flex-direction: row;
  justify-content: space-evenly;
}
.bth {
  font-size: 13px !important;
  height: 30px;
  line-height: 18px !important;
  padding: 1.5px 3px;
  display: inline-block;
  vertical-align: middle;
  font-weight: normal;
  border-radius: 3px;
  margin: 0 2px 0 3px;
  border: 1px solid #94beeb;
  color: #ffffff;
  background-color: #94beeb;
  cursor: pointer;
}
</style>