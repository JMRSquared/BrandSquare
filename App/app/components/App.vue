<template>
  <page :actionBarHidden="true">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Drawer" />

        <Label class="drawer-item" text="Item 1" />
        <Label class="drawer-item" text="Item 2" />
        <Label class="drawer-item" text="Item 3" />
      </StackLayout>

      <GridLayout ~mainContent columns="*" rows="*">
        <GridLayout columns="auto,*" rows="auto,*">
          <StackLayout>
            <Ripple
              v-if="true"
              @tap="$refs.drawer.nativeView.showDrawer()"
              class="p-20"
            >
              <label
                :text="'mdi-menu' | fonticon"
                class="mdi m-10 text-primary"
                :fontSize="30"
              ></label>
            </Ripple>
          </StackLayout>
          <Navigator row="1" colSpan="2" :defaultRoute="defaultRoute()" />
        </GridLayout>
      </GridLayout>
    </RadSideDrawer>
  </page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  methods: {
    defaultRoute() {
      return "/home";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";
.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: $primary;
  color: $secondary;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: $primary;
  font-size: 16;
}
</style>
