<template>
  <page class="primaryDark" :actionBarHidden="true">
    <GridLayout rows="auto,*" columns="*">
      <StackLayout class="primary radius-big m-x-15 m-y-20" row="0" col="0">
        <GridLayout rows="auto" columns="auto,*">
          <Label
            class="mdi m-10 text-white"
            :text="'mdi-magnify' | fonticon"
            :fontSize="28"
          ></Label>
          <TextField col="1" :v-model="txtSearch" hint="Search" />
        </GridLayout>
      </StackLayout>
      <StackLayout class="m-x-10 m-y-5" row="1" col="0">
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
TextField {
  border-width: 0 0 0.2 0;
  border-bottom-color: $primary;
}
</style>
