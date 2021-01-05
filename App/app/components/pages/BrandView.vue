<template>
  <page class="secondaryDark" :actionBarHidden="true">
    <ScrollView row="1">
      <StackLayout>
        <GridLayout rows="auto,*" columns="*">
          <Image
            :src="brand.coverImg"
            width="100%"
            stretch="aspectFill"
            height="20%"
          />
          <StackLayout class="fade" verticalAlignment="bottom">
            <GridLayout class="m-10" rows="auto" columns="auto,*">
              <Image
                :src="brand.logo"
                borderRadius="100"
                stretch="aspectFill"
                width="100"
                height="100"
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
            </GridLayout>
          </StackLayout>
          <StackLayout row="1">
            <GridLayout
              class="m-15"
              rows="auto,auto"
              columns="auto,auto,auto,*"
            >
              <label
                text="2"
                class="p-r-20 text-white"
                textAlignment="center"
                :fontSize="22"
                fontWeight="bold"
              ></label>
              <label
                text="432"
                col="1"
                class="p-r-20 text-white"
                textAlignment="center"
                :fontSize="22"
                fontWeight="bold"
              ></label>
              <label
                text="230"
                col="2"
                class="p-r-20 text-white"
                textAlignment="center"
                :fontSize="22"
                fontWeight="bold"
              ></label>
              <label
                text="Posts"
                class="p-r-20 text-secondary"
                textAlignment="center"
                row="1"
                col="0"
              ></label>
              <label
                text="Following"
                class="p-r-20 text-secondary"
                textAlignment="center"
                row="1"
                col="1"
              ></label>
              <label
                text="Followers"
                class="p-r-20 text-secondary"
                textAlignment="center"
                row="1"
                col="2"
              ></label>
              <Ripple
                verticalAlignment="center"
                textAlignment="center"
                col="3"
                rowSpan="2"
                class="primary text-secondary p-y-10 p-x-20 m-l-10 m-y-10 radius-big"
              >
                <label
                  verticalAlignment="center"
                  textAlignment="center"
                  text="Follow"
                ></label>
              </Ripple>
            </GridLayout>
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </page>
</template>

<script>
export default {
  data() {
    return {
      brand: {}
    };
  },
  props: ["brandId"],
  mounted() {
    // TODO : Query the brand from the DB
    this.brand = {
      name: "JMRSquared",
      logo: "https://i.pravatar.cc/300",
      category: "Clothing",
      coverImg: "https://i.pravatar.cc/600"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
