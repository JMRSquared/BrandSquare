<template>
  <ScrollView orientation="horizontal">
    <StackLayout orientation="horizontal">
      <GridLayout
        class="m-x-10"
        v-for="(story, i) in stories"
        :key="i"
        rows="auto,auto"
        columns="auto"
      >
        <Image
          :src="story.img"
          borderRadius="100"
          stretch="aspectFill"
          width="60"
          height="60"
          class="border-accent-small"
        />
        <Label
          row="1"
          class="text-white p-t-5"
          textAlignment="center"
          :text="story.name"
        ></Label>
      </GridLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
export default {
  data() {
    return {
      stories: []
    };
  },
  mounted() {
    for (let i = 0; i < 15; i++) {
      this.stories.push({
        name: "Joe " + i,
        img: `https://i.pravatar.cc/${i * 2 + 300}`,
        link: ""
      });
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
