<template>
  <div id="home">
    <mainslide>
      <template v-slot:home>
        <div class="homecontent">
          <navbar class="navcls">
            <template v-slot:center>
              <div class="homecenter">妹子图</div>
            </template>
            <template v-slot:right>
              <div class="homecenter" @click="selectDESC" :class="{descactive:DESC}">DESC</div>
            </template>
          </navbar>
          <home-bscroll
            class="scroll-content"
            ref="Bscroll"
            :pullUpLoad="true"
            @pullingUP="pullingUP"
            :probeType="3"
            @scroll_pos="scroll_pos"
          >
            <good-list :goods="getlist"></good-list>
          </home-bscroll>
          <back-top @click.native="backtotop" v-show="backtopisshow"></back-top>
        </div>
      </template>
    </mainslide>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import HomeBscroll from "components/common/Bscroll/Bscroll";
import mainslide from "components/common/mainslide/mainslide";

//methods
import { getHomedata } from "network/home.js";
import { goodmix } from "common/mixins";

export default {
  name: "Home",
  mixins: [goodmix],
  data() {
    return {
      scrollrefresh: null,
      leavepos: 0,
      DESC: false
    };
  },
  components: {
    navbar,
    HomeBscroll,
    mainslide
  },
  created() {
    this.leavepos = 0;
  },
  activated() {
    console.log("activatedd");
    this.$refs.Bscroll.Domrefresh();
    this.$refs.Bscroll.ScrollToPos(0, this.leavepos, 50);
  },
  deactivated() {
    this.leavepos = this.realtimepos;
  },
  mounted() {
    this.$bus.$on('disableBS',this.disableBS)
    this.$bus.$on('enableBS',this.enableBS)
  },
  methods: {
    getdata() {
      getHomedata(this.get_start, this.get_num, this.DESC).then(res => {
        // console.log(res);
        this.getlist.push(...res.data);
        this.get_start += this.get_num;
      });
    },
    backtotop() {
      this.$refs.Bscroll.BacktoTop();
    },
    pullingUP() {
      this.getdata();
      this.$refs.Bscroll.finishPullUp();
    },
    disableBS() {
      this.$refs.Bscroll.scroll.enabled = false;
    },
    enableBS() {
      this.$refs.Bscroll.scroll.enabled = true;
    },
    selectDESC() {
      this.getlist = [];
      this.DESC = !this.DESC;
      this.get_start = 0;
      this.getdata();
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* position: relative; */
}

.homecontent {
  height: 100%;
  width: 100%;
}

.homecenter {
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

.descactive {
  color: rgb(30, 123, 210);
}
</style>