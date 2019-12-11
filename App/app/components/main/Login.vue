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
              <Ripple @tap="login(socialNetwork.link)">
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
                    :opacity="0.5"
                    class="text-white p-x-10"
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

<script lang="ts">
export default {
  data() {
    return {
      socialNetworks: [
        {
          name: "Google",
          link: "google",
          icon: "mdi-google"
        },
        {
          name: "Twitter",
          link: "twitter",
          icon: "mdi-twitter"
        },
        {
          name: "Facebook",
          link: "facebook",
          icon: "mdi-facebook"
        },
        {
          name: "Instagram",
          link: "instagram",
          icon: "mdi-instagram"
        },
        {
          name: "LinkedIn",
          link: "linkedin",
          icon: "mdi-linkedin"
        },
        {
          name: "Mobile OTP",
          link: "numbers",
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
    },
    async login(socialNetwork: string) {
      try {
        switch (socialNetwork) {
          case "google":
            const googleUser = await this.$firebase.signInViaGoogle();
            console.log("Google signin results", googleUser);
            if (this.$store.state.isLoggedIn) {
              this.navigate("/home", null, { clearHistory: true });
            }
            break;
          case "twitter":
            const twitterUser = await this.$firebase.signInViaTwitter();
            console.log("Twitter signin results", twitterUser);
            break;
          case "facebok":
            console.log("About to facebook");
            const facebookUser = await this.$firebase.signInViaFacebook();
            console.log("Facebook signin results", facebookUser);
            break;
        }
      } catch (err) {
        console.log("Cant login", err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
</style>
