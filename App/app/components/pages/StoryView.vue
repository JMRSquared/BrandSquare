<template>
  <page class="secondaryDark" :actionBarHidden="true">
    <GridLayout rows="*,auto" columns="*">
      <Image
        rowSpan="2"
        :src="stories.length > currentStory ? stories[currentStory].img : null"
        ref="img"
        @isLoadingChange="imgLoaded($event, currentStory)"
        stretch="aspectFit"
        width="100%"
        height="auto"
        v-show="stories.length > currentStory && stories[currentStory].loaded"
      />
      <ActivityIndicator
        verticalAlignment="center"
        textAlignment="center"
        rowSpan="2"
        v-if="stories.length > currentStory"
        :busy="!stories[currentStory].loaded"
      ></ActivityIndicator>
      <StackLayout class="fade-inverse" verticalAlignment="top">
        <GridLayout class="m-10" rows="auto" columns="auto,*,auto">
          <Image
            :src="brand.logo"
            borderRadius="100"
            stretch="aspectFill"
            width="60"
            height="60"
          />
          <StackLayout verticalAlignment="center" col="1" class="m-x-5">
            <Label
              class="text-white p-t-5 font-weight-bold"
              :fontSize="16"
              :text="brand.name"
            ></Label>
            <Label
              :opacity="0.5"
              class="text-white font-weight-italic"
              :fontSize="14"
              :text="
                stories.length > currentStory
                  ? getMoment(stories[currentStory].date).fromNow()
                  : '....'
              "
            ></Label>
          </StackLayout>
          <Ripple
            backgroundColor="white"
            borderRadius="150%"
            width="20"
            height="20"
            col="2"
            verticalAlignment="center"
            textAlignment="center"
            @tap="navigate(null)"
          >
            <Label
              verticalAlignment="center"
              textAlignment="center"
              class="mdi text-secondary"
              :text="'mdi-close' | fonticon"
              :fontSize="14"
            ></Label>
          </Ripple>
        </GridLayout>
      </StackLayout>
      <StackLayout class="fade" row="1">
        <Label
          v-if="stories.length > currentStory"
          :fontSize="36"
          class="p-x-15 p-y-10 text-white"
          :text="stories[currentStory].title"
        ></Label>

        <GridLayout :columns="'*,'.repeat(storyIds.length)">
          <Progress
            class="m-x-2"
            v-for="(story, i) in stories"
            :key="i"
            :col="i"
            :value="story.progress"
          ></Progress>
        </GridLayout>
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script>
import {
  GestureTypes,
  GestureEventData,
  SwipeDirection
} from "tns-core-modules/ui/gestures";
import { screen } from "platform";

export default {
  data() {
    return {
      stories: [],
      isHolding: false,
      timer: null,
      progress: 0,
      currentStory: 0
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  props: ["storyIds", "brand"],
  mounted() {
    this.$refs.img.nativeView.on(GestureTypes.pan, args => {
      this.isHolding = true;
      console.log("Pan", args.state);
    });

    this.$refs.img.nativeView.on(GestureTypes.swipe, args => {
      console.log("Swipped", args.direction);
      if (args.direction == SwipeDirection.left) {
        this.swipeLeftElseRight(false);
      } else if (args.direction == SwipeDirection.right) {
        this.swipeLeftElseRight(true);
      }
      //  this.swipeLeftElseRight(isPreviousClick);
    });

    this.$refs.img.nativeView.on(GestureTypes.touch, args => {
      this.isHolding = false;
    });

    this.$refs.img.nativeView.on(GestureTypes.tap, args => {
      this.isHolding = false;

      const isPreviousClick =
        args.android.getX() < screen.mainScreen.widthPixels / 2;
      this.swipeLeftElseRight(isPreviousClick);
    });

    this.$refs.img.nativeView.on(GestureTypes.longPress, args => {
      this.isHolding = true;
      console.log("Long press");
    });

    this.stories = this.storyIds.map(v => {
      return {
        id: v,
        progress: 0,
        title: "Status " + v,
        img: "https://picsum.photos/320/600?random=" + v,
        date: new Date(),
        loaded: false
      };
    });

    this.timer = setInterval(() => {
      if (this.isHolding || !this.stories[this.currentStory].loaded) {
        return;
      }
      if (
        this.stories.length > this.currentStory &&
        this.stories[this.currentStory].progress >= 100
      ) {
        this.currentStory++;
      } else if (
        this.stories.length > this.currentStory &&
        this.stories[this.currentStory].progress < 100
      ) {
        this.stories[this.currentStory].progress++;
      } else if (
        this.stories.length > 0 &&
        this.currentStory >= this.stories.length
      ) {
        this.navigate(null);
      }
    }, 50);
    console.log();
  },
  methods: {
    swipeLeftElseRight(isPreviousClick) {
      if (
        isPreviousClick &&
        this.stories.length > this.currentStory &&
        this.currentStory > 0
      ) {
        this.currentStory--;
        this.stories[this.currentStory].progress = 0;
        if (this.stories.length > this.currentStory + 1) {
          this.stories[this.currentStory + 1].progress = 0;
        }
      } else if (
        !isPreviousClick &&
        this.stories.length > this.currentStory + 1
      ) {
        this.stories[this.currentStory].progress = 100;
        this.currentStory++;
        this.stories[this.currentStory].progress = 0;
      }
    },
    imgLoaded(args, currentStory) {
      console.log("current : ", currentStory);
      console.log("value", args.value);
      this.stories[currentStory].loaded = !args.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
TextField {
  border-width: 0 0 0.2 0;
  border-bottom-color: $primary;
}
</style>
