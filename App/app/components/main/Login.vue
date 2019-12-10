<template>
  <page @loaded="pageLoaded" class="secondary" :actionBarHidden="true">
    <GridLayout rows="*,*" columns="*">
      <StackLayout class="secondary p-t-30">
        <Label
          class="text-white"
          :opacity="0.8"
          :fontSize="30"
          :textWrap="true"
          fontWeight="bold"
          textAlignment="center"
          text="Login"
        ></Label>
      </StackLayout>
      <StackLayout row="1" class="primary top-radius-medium">
        <StackLayout>
          <Label
            class="m-x-20 m-t-30 text-white"
            :opacity="0.5"
            :fontSize="17"
            :textWrap="true"
            fontWeight="bold"
            text="Pick a social media you want to login with"
          ></Label>
        </StackLayout>
        <ScrollView verticalAlignment="center" class="m-t-30">
          <WrapLayout>
            <CardView
              width="45%"
              marginLeft="2%"
              marginTop="10"
              class="m-10 secondary"
              textAlignment="center"
              v-for="(socialNetwork, i) in socialNetworks"
              :key="i"
            >
              <Ripple>
                <GridLayout class="p-15" columns="auto,*">
                  <Label
                    class="mdi text-white"
                    :opacity="0.5"
                    :fontSize="30"
                    verticalAlignment="center"
                    :text="socialNetwork.icon | fonticon"
                  ></Label>
                  <Label
                    col="1"
                    class="text-primary p-x-10"
                    :fontSize="16"
                    verticalAlignment="center"
                    :text="socialNetwork.name"
                  ></Label>
                </GridLayout>
              </Ripple>
            </CardView>
          </WrapLayout>
        </ScrollView>
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: [
        {
          name: "Google",
          icon: "mdi-google"
        },
        {
          name: "Twitter",
          icon: "mdi-twitter"
        },
        {
          name: "Facebook",
          icon: "mdi-facebook"
        },
        {
          name: "Instagram",
          icon: "mdi-instagram"
        },
        {
          name: "LinkedIn",
          icon: "mdi-linkedin"
        },
        {
          name: "Mobile OTP",
          icon: "mdi-phone"
        }
      ]
    };
  },
  methods: {
    pageLoaded() {
      setTimeout(() => {
        this.$forceUpdate();
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
