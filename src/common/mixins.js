
import { debounce } from "./utils";


import GoodList from "components/content/goodlist/GoodList";
import BackTop from "components/content/backtop/BackTop";

export const goodmix = {
  
  data() {
    return {
      get_start: 0,
      get_num: 30,
      getlist: [],
      backtopisshow: false,
      bsrsf: null,
      realtimepos: 0 
    };
  },
  components: {
    GoodList,
    BackTop
  },
  created() {
    this.getdata()
  },
  mounted() {
    // this.scrollrefresh = debounce(this.$refs.Bscroll.Domrefresh, 50);
    // this.$bus.$on("imageloadfn", this.scrollrefresh);
  },
  methods: {
    scroll_pos(curr_pos) {
      this.realtimepos = curr_pos;
      if (-curr_pos >= this.taboffsettop) {
        this.tabisfixed = true;
        this.typescroll_h[this.currenttype] = -curr_pos;
      } else {
        this.tabisfixed = false;
      }
      this.listnenShowbackTop(curr_pos);
    },

    listnenShowbackTop(pos) {
      this.backtopisshow = -pos > 800;
    },
    bthback() {
      this.$router.back();
    }
  }
}