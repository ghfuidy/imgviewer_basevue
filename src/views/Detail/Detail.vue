<template>
  <div id="detail">
    <navbar class="detail_nav">
      <template v-slot:left>
        <div @click="btnback">back</div>
      </template>
      <template v-slot:center>
        <div class="homecenter">妹子图</div>
      </template>
    </navbar>
    <scroll-bar :movepos=scroll_cur>

    </scroll-bar>
    <bscroll
      class="scroll-content"
      ref="Bscroll"
      :pullUpLoad="true"
      :probeType="3"
      @scroll_pos="scroll_pos"
    >
      <h4>{{title}}</h4>
      <div class="imgblock baseflexbox">
        <img
          :src="item"
          alt
          v-for="(item,index) in imgurllist"
          :key="index"
          @load="imageload(bsrfs)"
        />
      </div>
    </bscroll>
  </div>
</template>

<script>
import Bscroll from "components/common/Bscroll/Bscroll";
import navbar from "components/common/navbar/NavBar";
import ScrollBar from "components/common/ScrollBar/ScrollBar.vue"

import { getfullimg } from "network/detail.js";
import { debounce } from "common/utils.js"

export default {
  name: "Detail",
  data() {
    return {
      id: 0,
      imgurllist: [],
      title: null,
      scroll_h: 0,
      scroll_cur: 0,
      detailstaus: true,
      bsrfs: null,
    };
  },
  components: {
    navbar,
    Bscroll,
    ScrollBar
  },
  created() {
    this.id = this.$route.params.id;

    getfullimg(this.id).then(res => {
      this.title = res.data[0].title;
      const imgstr = res.data[0].img_child;
      const transimg = imgstr
        .substr(1, imgstr.length - 2)
        .replace(new RegExp("'", "gm"), "")
        .split(",");
      for (let x of transimg) {
        x = x.trim();
        x = "http://192.168.1.107:8877/" + this.title + "/" + x;
        this.imgurllist.push(x);
      }
    });
  },
  mounted(){
    this.bsrfs = debounce(this.$refs.Bscroll.Domrefresh, 10)
    // this.$on('test',this.bsrfs)
  },
  methods: {
    scroll_pos(curr_pos) {
      this.scroll_cur = curr_pos/this.scroll_h
    },
    btnback() {
      this.detailstaus = false
      this.$router.back();
    },
    imageload(func) {
      if (this.detailstaus){
        // this.$refs.Bscroll.Domrefresh()
        this.scroll_h = this.$refs.Bscroll.scroll.maxScrollY;
        // this.$emit('test')
        func()
      }
    },

  },
  // beforeDestroy(){
  //   this.detailstaus = false
  // }
};
</script>

<style scoped>
#detail{
  height: 100vh;
}

.detail_nav {
  background-color: var(--nav-bgcolor);
  z-index: 9;
}

.imgblock {
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.imgblock img {
  width: 100%;
}

.scroll-content {
  position: relative;
  overflow: hidden;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 596px;
}
</style>