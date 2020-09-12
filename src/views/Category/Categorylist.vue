<template>
  <div>
    <navbar class="navcls">
      <template v-slot:left>
        <div class="center" @click="bthback">back</div>
      </template>
      <template v-slot:center>
        <div class="center">妹子图</div>
      </template>
    </navbar>
    <cl-bscroll
      class="scroll-content"
      ref="ClBscroll"
      :pullUpLoad="true"
      @pullingUP="pullingUP"
      :probeType="3"
      @scroll_pos="scroll_pos"
    >
      <good-list :goods="getlist"></good-list>
    </cl-bscroll>
    <back-top @click.native="backtotop" v-show="backtopisshow"></back-top>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import ClBscroll from "components/common/Bscroll/Bscroll";

import { gettarget } from "network/category.js";
import { goodmix } from "common/mixins";

export default {
  name: "Categorylist",
  mixins: [goodmix],
  data() {
    return {
      keyword: null,
      leavepos: 0
    };
  },
  components: {
    navbar,
    ClBscroll
  },
  created() {
    this.keyword = this.$route.query.title;
    this.getdata();
  },
  mounted() {

  },
  activated() {
    if (this.$route.query.title != this.keyword) {
      this.keyword = this.$route.query.title;
      this.$refs.ClBscroll.BacktoTop();
      this.get_start = 0;
      this.get_num = 30;
      this.getlist = [];

      this.getdata();
    }
  },
  methods: {
    getdata() {
      gettarget(this.keyword, this.get_start, this.get_num).then(res => {
        this.getlist.push(...res.data);
        this.get_start += this.get_num;
      });
    },
    bthback() {
      this.$router.back();
    },

    backtotop() {
      this.$refs.ClBscroll.BacktoTop();
    },
    pullingUP() {
      this.getdata();
      this.$refs.ClBscroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
.center {
  color: white;
}

.navcls {
  background-color: var(--nav-bgcolor);
  z-index: 9;
}

.scroll-content {
  position: relative;
  overflow: hidden;
  top: 5px;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 591px;
}
</style>