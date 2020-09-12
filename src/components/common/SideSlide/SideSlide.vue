<template>
  <div class="sideslide" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="slide" :class="{slidemove:isshow}" @click="slideclick">
      <div class="barextend"></div>
      <div class="bthlist" key="bthlist">
        <div class="bth-box" key="bth-box">
          <slot name="slidecont"></slot>
          <!-- <div class="bth" v-for="(item,key,index) in typebutton" :key="index">{{key}}</div> -->
        </div>
      </div>
    </div>
    <div class="main" :class="{mainmove:isshow}">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideSlide",
  props: {
    moveRatio: {
      //移动比例
      type: Number,
      default: 0.25
    }
  },
  data() {
    return {
      isshow: false
    };
  },
  mounted() {
    this.totalWidth = document.body.clientWidth;
  },
  methods: {
    slideclick() {
      this.isshow = false;
      this.$bus.$emit("enableBS");
    },

    touchStart: function(e) {
      // console.log('start');

      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },

    touchMove: function(e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
    },

    touchEnd: function(e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);
      // console.log(currentMove);
      // console.log(this.totalWidth,this.moveRatio);

      // 2.判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        // 右边移动超过设定比例长度
        if (
          this.$router.currentRoute.path === "/" ||
          this.$router.currentRoute.path === "/home"
        ) {
          console.log("youyi");
          this.isshow = true;
          this.$bus.$emit("disableBS");
        }
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        // 向左移动超过设定比例长度
        if (
          this.$router.currentRoute.path === "/" ||
          this.$router.currentRoute.path === "/home"
        ) {
          console.log("zuoyi");
          this.isshow = false;
          this.$bus.$emit("enableBS");
        }
      }
    }
  }
};
</script>

<style scoped>
.sideslide {
  width: 100%;
  height: 100%;
}
.slide {
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0px;
  z-index: 4;
  transform: translateX(-100%);
  transition: 0.8s ease;
}

.main {
  height: 100%;
  width: 100%;
  transform: translateX(0);
  transition: 0.8s ease;
}

.barextend {
  position: relative;
  width: 100%;
  height: 44px;
  background-color: var(--nav-bgcolor);
}

.bthlist {
  position: relative;
  background-color: rgb(238, 138, 230);
  color: #fff;
  width: 100%;
  height: calc(100% - 44px);
}
.bth-box {
  position: relative;
  top: 20px;
  padding: 10px 0 10px 30px;
}

.slidemove {
  transform: translateX(0%);
  transition: 1s;
}

.mainmove {
  transform: translateX(50%);
  transition: 1s;
}
</style>