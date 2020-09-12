<template>
  <div class="goods baseflexbox">
    <good-list-item
      v-for="(item, index) in goods"
      :key="index"
      :good="item"
      :imgindex="index"
      @delimg="delimg"
    ></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";

import { deleteitem } from "network/category.js";

export default {
  name: "GoodList",
  data() {
    return {};
  },
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    emitimageload() {
      this.$emit("startrefresh");
    },
    //移除指定元素
    delimg(item_i) {
      console.log(item_i);
      deleteitem(this.goods[item_i].title, this.goods[item_i].id)
        .then(res => {
          this.goods.splice(item_i, 1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.goods {
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>