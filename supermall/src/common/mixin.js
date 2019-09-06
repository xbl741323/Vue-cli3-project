import BackTop from "components/content/backTop/BackTop.vue";

export const backToMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            // console.log("回到顶部")
            this.$refs.scroll.scrollTo(0, 0);
          },
    },
}