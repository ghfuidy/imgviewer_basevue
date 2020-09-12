<template>
  <div>
    <navbar class="catnav">
      <template v-slot:left>
        <div class="center" @click="btnback">back</div>
      </template>
      <template v-slot:center>
        <div class="center">分类</div>
      </template>
    </navbar>
    <div class="subcategory">
      <categp ref="Category" @scroll_pos="scroll_pos">
        <template v-slot:headline>
          <div :key="0" class="headitem" :class="{headactive: curr_index === 0}">search</div>
          <div
            v-for="(item,key,index) in fullclass"
            :key="index+1"
            class="headitem"
            :class="{headactive: curr_index === index+1}"
          >{{key}}</div>
        </template>
        <template v-slot:subtitle>
          <cmframe ref="medium_s" :title="'search'">
            <searchfrm></searchfrm>
          </cmframe>
          <cmframe v-for="(item,key,index) in fullclass" :key="index" :title="key" ref="medium">
            <cmitem v-for="(subitem,subindex) in item" :key="subindex" :targetitem="subitem"></cmitem>
          </cmframe>
        </template>
      </categp>
    </div>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import Categp from "components/common/Categp/Categp";
import cmframe from "components/common/Categp/cmframe";
import cmitem from "components/common/Categp/cmitem";
import searchfrm from "components/common/searchframe/searchfrm";

import { getclass } from "network/category.js";

export default {
  name: "Category",
  data() {
    return {
      fullclass: {},
      subtitles: [],
      headsTop: [],
      curr_index: 0,
      pageheight: 0
    };
  },
  components: {
    navbar,
    Categp,
    cmframe,
    cmitem,
    searchfrm
  },
  created() {
    getclass()
      .then(res => {
        this.fullclass = res.data;

        this.subtitles = this.fullclass.model;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    btnback() {
      this.$router.back();
    },
    choosehead(head) {
      this.subtitles = this.fullclass[head];
    },
    getheadsTop() {
      this.headsTop.push(this.$refs.medium_s.$el.offsetTop);
      for (let x of this.$refs.medium) {
        this.headsTop.push(x.$el.offsetTop);
      }
      const medium_h = this.$refs.Category.$el.offsetHeight;
      this.pageheight = medium_h;
    },
    scroll_pos(pos) {
      if (this.headsTop.length === 0) {
        this.getheadsTop();
      }

      for (let x = 0; x < this.headsTop.length; x++) {
        if (-pos > this.headsTop[x] && this.curr_index != x) {
          this.curr_index = x;
          // console.log(this.curr_index);
        }
      }
    }
  }
};
</script>

<style scoped>
.catnav {
  width: 100%;
  background-color: var(--nav-bgcolor);
  z-index: 9;
  position: fixed;
}

.center {
  color: aliceblue;
}

.headactive {
  color: #00ff00;
}
.subcategory {
  position: relative;
  top: 44px;
  width: 100%;
}

.headitem {
  height: 36px;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
}
</style>