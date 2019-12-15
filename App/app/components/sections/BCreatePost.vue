<template>
  <GridLayout class="primary" rows="auto,*" columns="auto,*,auto">
    <Ripple verticalAlignment="center">
      <Image
        src="https://avatars0.githubusercontent.com/u/40456418?s=200&v=4"
        borderRadius="100"
        stretch="aspectFill"
        width="40"
        height="40"
        verticalAlignment="center"
        class="p-5 m-x-10"
      />
    </Ripple>
    <Label
      col="1"
      verticalAlignment="center"
      class="m-5 p-y-5 text-white"
      text="Creating a new post"
      :fontSize="20"
    ></Label>
    <Ripple verticalAlignment="center" col="2" @tap="$emit('toggleCreatePost')">
      <Label
        verticalAlignment="center"
        class="mdi m-10 text-accent"
        :text="'mdi-close' | fonticon"
        :fontSize="28"
      ></Label>
    </Ripple>
    <CardView row="1" colSpan="3" margin="5" elevation="10">
      <GridLayout rows="*">
        <label
          verticalAlignment="center"
          text="This is the bottom sheet"
        ></label>
      </GridLayout>
    </CardView>
  </GridLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      filters: [
        { title: "Popular", selected: true },
        { title: "Latest", selected: false },
        { title: "Followers", selected: false }
      ]
    };
  },
  props: ["post"],
  methods: {
    selectedFilter(index: number): void {
      this.filters.forEach((filter, i) => {
        i == index ? (filter.selected = true) : (filter.selected = false);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
