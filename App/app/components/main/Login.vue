<template>
  <page class="secondary" :actionBarHidden="true">
    <GridLayout rows="*,2*" columns="*">
      <StackLayout verticalAlignment="center" class="secondary">
        <Image
          verticalAlignment="center"
          src="~/assets/images/BrandSquare.png"
          stretch="aspectFit"
        />
      </StackLayout>
      <StackLayout
        row="1"
        marginTop="-5"
        marginBottom="30"
        class="primary top-radius-medium"
      >
        <StackLayout>
          <Label
            class="m-x-20 m-t-30"
            :fontSize="17"
            :textWrap="true"
            fontWeight="bold"
            color="white"
            text="Pick a social media you want to login using"
          ></Label>
        </StackLayout>
        <ScrollView verticalAlignment="center" class="m-t-30">
          <WrapLayout>
            <CardView
              width="45%"
              marginLeft="2%"
              marginTop="10"
              class="m-y-10"
              textAlignment="center"
              v-for="(socialNetwork, i) in socialNetworks"
              :key="i"
            >
              <Ripple>
                <GridLayout class="p-20" columns="auto,*">
                  <Label
                    class="mdi text-primary"
                    :fontSize="30"
                    verticalAlignment="center"
                    :text="socialNetwork.icon | fonticon"
                  ></Label>
                  <Label
                    col="1"
                    class="text-secondary p-x-10"
                    :fontSize="15"
                    fontWeight="bold"
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
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
