<template>
  <CardView margin="5" elevation="10">
    <GridLayout rows="auto,auto">
      <Image :src="post.img" width="100%" stretch="aspectFill" height="250" />
      <StackLayout verticalAlignment="bottom">
        <GridLayout class="m-10" rows="auto" columns="auto,*">
          <Image
            :src="post.brand.logo"
            borderRadius="100"
            stretch="aspectFill"
            width="60"
            height="60"
            :class="post.brand.hasStory ? 'border-accent-small' : ''"
          />
          <StackLayout verticalAlignment="center" col="1" class="m-x-5">
            <Label
              class="text-white p-t-5 font-weight-bold"
              :fontSize="16"
              :text="post.brand.name"
            ></Label>
            <Label
              :opacity="0.5"
              class="text-white font-weight-italic"
              :fontSize="14"
              :text="getMoment(post.date).fromNow()"
            ></Label>
          </StackLayout>
        </GridLayout>
      </StackLayout>
      <StackLayout row="1" class="primary p-y-10 p-x-10">
        <ScrollView v-if="post.tags" orientation="horizontal">
          <StackLayout orientation="horizontal">
            <Label
              v-for="(tag, i) in post.tags"
              :key="i"
              :fontSize="16"
              class="text-accentDark p-r-10 p-y-10"
              :text="`#${tag}`"
            ></Label>
          </StackLayout>
        </ScrollView>
        <Label
          class="text-white"
          :fontSize="16"
          :textWrap="true"
          :text="post.message"
        />
        <GridLayout class="m-t-25" columns="auto,auto,*,auto">
          <StackLayout class="m-r-10" orientation="horizontal">
            <Label
              class="mdi m-x-5 text-white"
              :fontSize="20"
              :text="'mdi-thumb-up' | fonticon"
            />
            <Label
              class="text-white"
              verticalAlignment="center"
              :fontSize="16"
              :textWrap="true"
              :text="post.likes"
            />
          </StackLayout>
          <StackLayout col="1" class="m-r-10" orientation="horizontal">
            <Label
              class="mdi m-x-5 text-white"
              :fontSize="20"
              :text="'mdi-thumb-down' | fonticon"
            />
            <Label
              class="text-white"
              verticalAlignment="center"
              :fontSize="16"
              :textWrap="true"
              :text="post.dislikes"
            />
          </StackLayout>
          <StackLayout col="3" class="m-r-10" orientation="horizontal">
            <Label
              class="mdi m-x-5 text-white"
              :fontSize="20"
              :text="'mdi-share' | fonticon"
            />
            <Label
              class="text-white"
              verticalAlignment="center"
              :fontSize="16"
              :textWrap="true"
              :text="post.shares"
            />
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </GridLayout>
  </CardView>
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
