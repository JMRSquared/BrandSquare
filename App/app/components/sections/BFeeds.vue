<template>
  <GridLayout marginTop="-90" rows="auto,*">
    <ScrollView v-show="mainScrollY >= 100" row="0" orientation="horizontal">
      <StackLayout orientation="horizontal">
        <Label
          :text="filter.title"
          v-for="(filter, i) in filters"
          @tap="selectedFilter(i)"
          :fontSize="30"
          class="m-b-5 m-x-20 p-b-10 font-weight-bold"
          :class="filter.selected ? 'text-white' : 'text-secondary'"
          :key="i"
        ></Label>
      </StackLayout>
    </ScrollView>
    <ScrollView
      :marginTop="mainScrollY < 100 ? 90 : 0"
      @scroll="onScroll"
      row="1"
    >
      <GridLayout rows="*">
        <StackLayout v-show="filters.some(v => v.selected)">
          <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal">
              <Label
                :text="filter.title"
                v-for="(filter, i) in filters"
                @tap="selectedFilter(i)"
                :fontSize="30"
                class="m-y-5 m-x-20 p-y-10 font-weight-bold"
                :class="filter.selected ? 'text-white' : 'text-secondary'"
                :key="i"
              ></Label>
            </StackLayout>
          </ScrollView>
          <b-card-overlay
            v-for="(post, i) in allFilteredPosts"
            :post="post"
            :key="i"
          />
        </StackLayout>
      </GridLayout>
    </ScrollView>
  </GridLayout>
</template>

<script lang="ts">
import BCardOverlay from "./BCardOverlay.vue";
import { ScrollEventData, ScrollView } from "tns-core-modules/ui/scroll-view";

const firebase = require("nativescript-plugin-firebase");
import { firestore } from "nativescript-plugin-firebase";

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
            },
            {
              img:
                "https://i0.wp.com/sweetzonesa.co.za/wp-content/uploads/2018/07/download-1-1.png?fit=273%2C185&ssl=1",
              brand: {
                name: "Mo Faya",
                logo: "https://www.mofayaenergy.com/img/icons/cog-icons.png",
                hasStory: true
              },
              date: new Date(),
              likes: 13,
              comments: 2,
              shares: 21,
              message:
                "We strive for African excellence by creating a social movement that promotes a culture of passion, education and empowerment.",
              tags: ["drink", "energy_drink", "dj_sbu"]
            },
            {
              img:
                "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/z3jmd3r71ghksc5xgvnp/air-max-720-shoe-Vc2TZM.jpg",
              brand: {
                name: "Nike",
                logo:
                  "https://i.ebayimg.com/images/g/mCMAAOSwQ-JalJ-V/s-l300.jpg",
                hasStory: true
              },
              date: new Date(),
              likes: 13,
              comments: 2,
              shares: 21,
              message:
                "The Swoosh is the logo of American athletic shoe and apparel designer and retailer Nike. Today, it has become one of the most recognizable brand logos in the ",
              tags: ["shoe", "sports", "takkie"]
            }
          ]
        },
        { title: "Latest", selected: false, posts: [] },
        { title: "Following", selected: false, posts: [] }
      ],
      mainScrollY: 0
    };
  },
  components: {
    BCardOverlay
  },
  computed: {
    allFilteredPosts() {
      return this.$store.state.allPosts.filter(
        v => v.category == this.filters.find(v => v.selected).title
      );
    }
  },
  mounted() {
    this.loadPosts(["ygZN0olRLLRnmhoBLlI3"]);
  },
  methods: {
    onScroll(args: ScrollEventData) {
      this.mainScrollY = args.scrollY;
      if (args.scrollY > 100) {
        //  this.$refs.filter.nativeView.translateY = 100;
      } else {
        //  this.$refs.filter.nativeView.translateY = -1 * args.scrollY + 100;
      }
      console.log("mainScrollY", this.mainScrollY);
      this.$emit("scroll", args);
    },
    selectedFilter(index: number): void {
      this.filters.forEach((filter, i) => {
        i == index ? (filter.selected = true) : (filter.selected = false);
      });
    },
    loadPosts(brandIds: string[]) {
      this.$firebase
        .getPosts(brandIds)
        .then(posts => {})
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
