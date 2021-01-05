<template>
  <page class="secondaryDark" :actionBarHidden="true">
    <GridLayout rows="auto,*" columns="*,auto">
      <StackLayout class="secondary radius-big m-x-10 m-y-20" row="0" col="0">
        <GridLayout rows="auto" columns="auto,*">
          <Label
            class="mdi m-10 text-white"
            :text="'mdi-magnify' | fonticon"
            :fontSize="28"
          ></Label>
          <TextField
            col="1"
            :v-model="txtSearch"
            class="m-r-20 no-border"
            hint="Search"
          />
        </GridLayout>
      </StackLayout>
      <StackLayout class="primary radius-big m-x-5 m-y-20" row="0" col="1">
        <Ripple @tap="toggleCreatePost">
          <Label
            class="mdi m-10 text-secondary"
            :text="'mdi-plus' | fonticon"
            :fontSize="28"
          ></Label>
        </Ripple>
      </StackLayout>
      <StackLayout colSpan="2" class="m-x-10 m-y-5" row="1" col="0">
        <b-stories ref="stories"></b-stories>
        <b-feeds @scroll="scrolling"></b-feeds>
      </StackLayout>
      <b-create-post
        @toggleCreatePost="toggleCreatePost"
        :translateY="screen.mainScreen.heightDIPs"
        ref="createPost"
        rowSpan="2"
        colSpan="2"
      ></b-create-post>
    </GridLayout>
  </page>
</template>

<script>
import BStories from "../sections/BStories.vue";
import BFeeds from "../sections/BFeeds.vue";
import BCreatePost from "../sections/BCreatePost.vue";
import { CubicBezierAnimationCurve } from "@nativescript/core/ui/animation/animation";
import { screen } from "tns-core-modules/platform";

export default {
  data() {
    return {
      txtSearch: "",
      isCreatingPost: false,
      screen: screen,
      scrollY: 0
    };
  },
  components: {
    BStories,
    BFeeds,
    BCreatePost
  },
  mounted() {},
  methods: {
    scrolling(args) {
      this.$refs.stories.nativeView.translateY = -1 * args.scrollY;
      this.scrollY = args.scrollY;
    },
    toggleCreatePost() {
      this.isCreatingPost = !this.isCreatingPost;
      if (this.isCreatingPost) {
        this.$refs.createPost.nativeView.animate({
          duration: 1000,
          translate: { x: 0, y: 0 },
          curve: new CubicBezierAnimationCurve(0.44, 0.63, 0, 1)
        });
      } else {
        this.$refs.createPost.nativeView.animate({
          duration: 1000,
          translate: { x: 0, y: screen.mainScreen.heightDIPs },
          curve: new CubicBezierAnimationCurve(0.44, 0.63, 0, 1)
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";

.no-border {
  border-bottom-width: 0px;
  border-bottom-color: $secondary;
}
</style>
