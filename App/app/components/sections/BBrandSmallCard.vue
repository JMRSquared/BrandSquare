<template>
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
        :text="brand.category"
      ></Label>
    </StackLayout>
    <Ripple
      verticalAlignment="center"
      col="2"
      class="accent p-y-10 p-x-20  m-10 radius-big"
    >
      <label text="Follow"></label>
    </Ripple>
  </GridLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  props: ["brand"],
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
