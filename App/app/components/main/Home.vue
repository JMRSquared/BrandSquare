<template>
  <page class="primaryDark" :actionBarHidden="true">
    <GridLayout rows="auto,*" columns="auto,*">
      <StackLayout class="primary radius-big m-x-5 m-y-20" row="0" col="0">
        <Ripple>
          <Label
            class="mdi m-10 text-accent"
            :text="'mdi-plus' | fonticon"
            :fontSize="28"
          ></Label>
        </Ripple>
      </StackLayout>
      <StackLayout class="primary radius-big m-x-10 m-y-20" row="0" col="1">
        <GridLayout rows="auto" columns="auto,*">
          <Label
            class="mdi m-10 text-white"
            :text="'mdi-magnify' | fonticon"
            :fontSize="28"
          ></Label>
          <TextField
            col="1"
            :v-model="txtSearch"
            class="m-r-20"
            hint="Search"
          />
        </GridLayout>
      </StackLayout>
      <StackLayout colSpan="2" class="m-x-10 m-y-5" row="1" col="0">
        <b-stories></b-stories>
        <b-feeds></b-feeds>
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script>
import BStories from "../sections/BStories.vue";
import BFeeds from "../sections/BFeeds.vue";
export default {
  data() {
    return {
      txtSearch: ""
    };
  },
  components: {
    BStories,
    BFeeds
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
