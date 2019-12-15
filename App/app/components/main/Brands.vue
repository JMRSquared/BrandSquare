<template>
  <page class="primaryDark" :actionBarHidden="true">
    <GridLayout rows="auto,*" columns="*">
      <StackLayout>
        <StackLayout class="primary radius-big m-x-15 m-y-10" row="0" col="0">
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
        <Label
          verticalAlignment="center"
          text="Premium"
          class="m-y-15 m-x-20 p-y-10 font-weight-bold text-white"
          :fontSize="25"
        ></Label>
        <b-stories></b-stories>
        <GridLayout columns="*,auto">
          <Label
            verticalAlignment="center"
            text="Brands"
            class="m-y-15 m-x-20 p-y-10 font-weight-bold text-white"
            :fontSize="25"
          ></Label>
          <Ripple verticalAlignment="center" class="m-x-10" col="1">
            <StackLayout
              verticalAlignment="center"
              class="p-y-10 m-x-10"
              orientation="horizontal"
            >
              <Label
                verticalAlignment="center"
                :fontSize="16"
                class="text-accent"
                text="filter "
              ></Label>
              <Label
                :fontSize="26"
                verticalAlignment="center"
                class="font-weight-bold mdi text-accent"
                :text="'mdi-chevron-down' | fonticon"
              ></Label>
            </StackLayout>
          </Ripple>
        </GridLayout>
      </StackLayout>
      <ScrollView row="1">
        <StackLayout>
          <b-brand-small-card
            :brand="brand"
            v-for="(brand, i) in brands"
            :key="i"
          ></b-brand-small-card>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </page>
</template>

<script>
import BStories from "../sections/BStories.vue";
import BBrandSmallCard from "../sections/BBrandSmallCard.vue";
export default {
  data() {
    return {
      brands: [
        {
          name: "JMR",
          category: "Clothing",
          logo: "https://i.pravatar.cc/300"
        },
        {
          name: "JMR",
          category: "Clothing",
          logo: "https://i.pravatar.cc/400"
        },
        {
          name: "JMR",
          category: "Clothing",
          logo: "https://i.pravatar.cc/305"
        }
      ]
    };
  },
  components: {
    BBrandSmallCard,
    BStories
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
