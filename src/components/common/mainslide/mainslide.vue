<template>
  <div class="mainslide">
    <side-slide>
      <template v-slot:slidecont>
        <div>
          <slide-item v-for="(item,key,index) in typebutton" :key="index" :pagerouter="item">{{key}}</slide-item>
        </div>
      </template>
      <template v-slot:main>
        <slot name="home"></slot>
      </template>
    </side-slide>
  </div>
</template>

<script>
import SideSlide from "components/common/SideSlide/SideSlide";
import SlideItem from "components/common/SideSlide/SlideItem"

export default {
  name: 'mainslide',
  data(){
    return {
      typebutton: {
        首页: "home",
        分类: "category",
        喜好: "favourite",
        个人: "profile",
        设置: "setting"
      },
    }
  },
  components: {
    SideSlide,
    SlideItem
  }
}
</script>

<style>
  .mainslide{
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>