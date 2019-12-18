<template>
  <GridLayout class="primaryDark" rows="auto,*,auto" columns="auto,*,auto">
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
    <CardView
      verticalAlignment="center"
      row="1"
      colSpan="3"
      margin="5"
      elevation="10"
    >
      <GridLayout verticalAlignment="center" rows="auto,auto">
        <Ripple @tap="imageSelection()">
          <Image
            ref="mainImage"
            v-if="post.img && post.img.length > 0"
            :src="post.img"
            width="100%"
            stretch="aspectFill"
            height="250"
          />
        </Ripple>
        <StackLayout class="fade" verticalAlignment="bottom">
          <GridLayout class="m-10" rows="auto" columns="auto,*">
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
                :text="getMoment(post.date).fromNow()"
              ></Label>
            </StackLayout>
          </GridLayout>
        </StackLayout>
        <StackLayout row="1" class="primary p-y-10 p-x-10">
          <GridLayout rows="auto,auto" columns="*,auto">
            <WrapLayout v-if="post.tags">
              <StackLayout
                v-for="(tag, i) in post.tags"
                :key="i"
                orientation="horizontal"
                class="radius-big secondary p-5 m-5"
              >
                <Label
                  :fontSize="16"
                  verticalAlignment="center"
                  class="text-accentDark m-x-5"
                  :text="`#${tag}`"
                ></Label>
                <Ripple @tap="removeTag(tag)">
                  <Label
                    verticalAlignment="center"
                    class="mdi m-x-5 text-accent"
                    :text="'mdi-close' | fonticon"
                    :fontSize="24"
                  ></Label>
                </Ripple>
              </StackLayout>
            </WrapLayout>

            <Ripple
              @tap="addNewTag"
              col="1"
              class="radius-big secondary p-5 m-x-15"
            >
              <Label
                class="text-accent p-x-5"
                verticalAlignment="center"
                :fontSize="20"
                text="+ tag"
              ></Label>
            </Ripple>
            <TextView
              row="1"
              colSpan="2"
              class="text-accent m-y-15"
              hint="Description ..."
              :editable="true"
              v-model="post.message"
              borderWidth="0"
            ></TextView>
          </GridLayout>
        </StackLayout>
      </GridLayout>
    </CardView>
    <Button
      @tap="savePost()"
      row="2"
      colSpan="3"
      class="accent"
      text="UPLOAD POST"
    >
    </Button>
  </GridLayout>
</template>

<script lang="ts">
const dialogs = require("tns-core-modules/ui/dialogs");
import * as imagepicker from "nativescript-imagepicker";
import { ImageSource } from "tns-core-modules/image-source";
export default {
  data() {
    return {
      brand: {
        name: "JMRSquared",
        logo: "https://avatars0.githubusercontent.com/u/40456418?s=200&v=4"
      },
      post: {
        brandId: "ygZN0olRLLRnmhoBLlI3",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CUdbr5aPHpV8dBN2YzIZwBdAemOQSeJbL1LsnBrzH1brH_eL&s",
        message:
          "Walk your Journey with Bathu Shoes. Born in the Township. Built for your journey. Super Comfortable | Proudly South African Shoes",
        tags: []
      }
    };
  },
  methods: {
    selectedFilter(index: number): void {
      this.filters.forEach((filter, i) => {
        i == index ? (filter.selected = true) : (filter.selected = false);
      });
    },
    savePost() {
      this.$firebase.setPost(this.post, this.post.img);
    },
    imageSelection() {
      const context = imagepicker.create({
        mode: "single"
      });
      context
        .authorize()
        .then(() => {
          return context.present();
        })
        .then(selection => {
          console.log(selection);
          return ImageSource.fromAsset(selection[0]);
        })
        .then(imgSource => {
          this.post.img =
            "data:image/jpeg;base64," + imgSource.toBase64String("jpeg", 50);
          console.log("Base 64", this.post.img);
          this.$forceUpdate();
        })
        .catch(err => {
          console.log("Error setting img", err);
        });
    },
    addNewTag() {
      if (this.post.tags.length >= 5) {
        alert("Only 5 tags allowed");
        return;
      }
      const options = {
        title: "Enter a # tag",
        message: "",
        okButtonText: "Add",
        inputType: dialogs.inputType.text
      };
      dialogs.prompt(options).then(async result => {
        if (
          result.result &&
          result.text &&
          result.text.replace("#", "").length > 1 &&
          result.text.replace("#", "").length < 14
        ) {
          const hashTag = result.text.replace("#", "").replace(/\s+/g, "_");
          this.removeTag(hashTag);
          this.post.tags.unshift(hashTag);
        }
      });
    },
    removeTag(tag) {
      this.post.tags = this.post.tags.filter(v => v != tag);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
