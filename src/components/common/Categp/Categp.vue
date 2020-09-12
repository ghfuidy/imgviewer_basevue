<template>
  <div class="categp baseflexbox">
    <div class="side">
      <slot name="headline"></slot>
    </div>
    <cat-bscroll class="scroll-content" :probeType="3" ref="Bscroll"  @scroll_pos="scroll_pos">
      <div class="mediumbox baseflexbox">
        <slot name="subtitle"></slot>
      </div>
    </cat-bscroll>
  </div>
</template>

<script>
import CatBscroll from "components/common/Bscroll/Bscroll";

export default {
  name: "Categp",
  components: {
    CatBscroll
  },
  mounted(){
    setTimeout(this.bsrefresh, 50)
  },
  methods: {
    bsrefresh(){
      this.$refs.Bscroll.Domrefresh();
    },
    scroll_pos(curr_pos){
      this.$emit('scroll_pos', curr_pos)
    }
  }
};
</script>

<style scoped>
.categp {
  padding: 10px 0 10px 0;
}

.side {
  width: 30%;
  height: 576px;
}

.mediumbox {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
}

.scroll-content {
  width: 70%;
  position: relative;
  overflow: hidden;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 576px;
}
</style>