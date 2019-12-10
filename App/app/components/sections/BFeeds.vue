<template>
  <GridLayout rows="auto,*">
    <ScrollView orientation="horizontal">
      <StackLayout orientation="horizontal">
        <Label
          :text="filter.title"
          v-for="(filter, i) in filters"
          @tap="selectedFilter(i)"
          :fontSize="30"
          class="m-y-15 m-x-20 p-y-10 font-weight-bold"
          :class="filter.selected ? 'text-white' : 'text-secondary'"
          :key="i"
        ></Label>
      </StackLayout>
    </ScrollView>

    <ScrollView row="1">
      <StackLayout v-show="filters.some(v => v.selected)">
        <b-card-overlay
          v-for="(post, i) in filters.find(v => v.selected).posts"
          :post="post"
          :key="i"
        />
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script lang="ts">
import BCardOverlay from "./BCardOverlay.vue";
export default {
  data() {
    return {
      filters: [
        {
          title: "Popular",
          selected: true,
          posts: [
            {
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CUdbr5aPHpV8dBN2YzIZwBdAemOQSeJbL1LsnBrzH1brH_eL&s",
              brand: {
                name: "JMRSquared",
                logo:
                  "https://avatars0.githubusercontent.com/u/40456418?s=200&v=4",
                hasStory: true
              },
              date: new Date(),
              likes: 133,
              comments: 32,
              shares: 231,
              message:
                "Walk your Journey with Bathu Shoes. Born in the Township. Built for your journey. Super Comfortable | Proudly South African Shoes",
              tags: ["shoes", "sneakers", "bathu"]
            }
          ]
        },
        { title: "Latest", selected: false, posts: [] },
        { title: "Followers", selected: false, posts: [] }
      ]
    };
  },
  components: {
    BCardOverlay
  },
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
