<template>
  <GridLayout rows="*" columns="*"
    ><Label :text="'mdi-home' | fonticon" class="mdi m-10" :fontSize="30" />
    <Button @tap="navigate('/login')"></Button>
  </GridLayout>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
