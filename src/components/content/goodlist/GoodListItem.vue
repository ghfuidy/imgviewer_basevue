<template>
  <div class="good-item" @click="itemclick" @touchstart="touchStart" @touchend="touchEnd">
    <pickout v-if="pickshow" @choosbth="pickbth" :msg="'是否删除该选集'"></pickout>
    <img :src="imgurl" alt @load="imageload" />
    <div class="good-info">
      <p>{{good.title?good.title:'暂无简介'}}</p>
    </div>
  </div>
</template>

<script>
import pickout from "components/common/pickout/pickout";

export default {
  name: "GoodListItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    },
    imgindex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pickshow: false
    };
  },
  components: {
    pickout
  },
  computed: {
    imgurl(){
      let url = "http://192.168.1.107:8877/" +this.good.title +"/" + this.good.show_img
      return url
    }
  },
  methods: {
    imageload() {
      this.$bus.$emit("imageloadfn");
    },
    itemclick() {
      if (!this.pickshow) {
        this.$router.push("/detail/" + this.good.id);
      }
    },
    //开始定时器
    startTimer: function() {
      this.playTimer = window.setTimeout(() => {
        this.pickshow = true;
        console.log(this.pickshow);
      }, 800);
    },
    //关闭定时器
    stopTimer: function() {
      window.clearInterval(this.playTimer);
    },
    //触摸开始，定时器启动
    touchStart(event) {
      console.log("start");

      this.startTimer();
    },
    //触摸结束，关闭定时器
    touchEnd(event) {
      console.log("end");
      this.stopTimer();
    },
    pickbth(type) {
      if (type == "确认") {
        setTimeout(() => {
          this.pickshow = !this.pickshow;
        }, 100);
        console.log(this.imgindex);
        this.$emit("delimg", this.imgindex);
      } else {
        setTimeout(() => {
          this.pickshow = !this.pickshow;
        }, 100);
      }
    }
  }
};
</script>

<style scoped>
.good-item {
  padding-bottom: 20px;
  position: relative;
  width: 48%;
}

.good-item img {
  width: 100%;
  border-radius: 5px;
}

.good-info {
  font-size: 12px;
  position: relative;
  margin-top: 6px;
  overflow: hidden;
  text-align: center;
}

.good-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.good-item .price,
.good-item .favorites {
  margin: 0 5px 0 5px;
}

.good-item .price {
  color: rgb(243, 122, 122);
}

.good-item .favorites img {
  height: 14px;
  width: 14px;
  transform: translateY(2px);
  margin: 0px 2px 0 0;
}
</style>