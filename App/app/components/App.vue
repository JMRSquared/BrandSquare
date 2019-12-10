<template>
  <page @loaded="pageLoaded" :actionBarHidden="true">
    <GridLayout columns="*" rows="*,auto">
      <Navigator row="0" :defaultRoute="defaultRoute()" />
      <StackLayout row="1">
        <GridLayout
          v-if="$navigator.route && isLoggedIn"
          class="secondary"
          rows="auto"
          columns="*,*,*,*"
        >
          <Ripple
            :col="i"
            v-for="(tab, i) in mainTabs"
            @tap="navigate(tab.path)"
            :key="i"
          >
            <StackLayout class="p-10">
              <Label
                class="mdi m-x-5 p-b-2 text-primary"
                :class="
                  $navigator.route.path == tab.path
                    ? 'text-accent'
                    : 'text-primary'
                "
                :fontSize="$navigator.route.path == tab.path ? 26 : 22"
                textAlignment="center"
                verticalAlignment="center"
                :text="tab.icon | fonticon"
              />
              <Label
                :class="
                  $navigator.route.path == tab.path
                    ? 'text-accent'
                    : 'text-primary'
                "
                textAlignment="center"
                verticalAlignment="center"
                :fontSize="$navigator.route.path == tab.path ? 14 : 12"
                :textWrap="true"
                :text="tab.title"
              />
            </StackLayout>
          </Ripple>
        </GridLayout>
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isLoggedIn: false,
      mainTabs: [
        {
          title: "Home",
          path: "/home",
          icon: "mdi-home-outline"
        },
        {
          title: "Events",
          path: "/events",
          icon: "mdi-human-handsup"
        },
        {
          title: "Brands",
          path: "/brands",
          icon: "mdi-sticker-emoji"
        },
        {
          title: "Profile",
          path: "/profile",
          icon: "mdi-account-circle-outline"
        }
      ]
    };
  },
  mounted() {
    console.log("Current route", this.$navigator.route.path);
  },
  methods: {
    pageLoaded() {
      setTimeout(() => {
        this.$forceUpdate();
      }, 1000);
    },
    defaultRoute() {
      return "/login";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: $primaryDark;
  color: $primary;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: $primary;
  font-size: 16;
}
</style>
