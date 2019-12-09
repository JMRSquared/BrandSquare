import Vue from 'nativescript-vue'
import App from './components/App.vue'
import router from "./services/router";
import Navigator from "nativescript-vue-navigator";


import store from './store'
import moment from 'moment'
import { TNSFontIcon, fonticon } from "nativescript-fonticon";
import TextFieldPlugin from "nativescript-material-textfield/vue";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  mdi: "./assets/materialdesignicons.css"
};
TNSFontIcon.loadCss();

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

Vue.registerElement(
  "CardView",
  () => require("@nstudio/nativescript-cardview").CardView
);

Vue.registerElement("Ripple", () => require("nativescript-ripple").Ripple);

Vue.registerElement(
  "PullToRefresh",
  () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh
);

Vue.registerElement(
  "Fab",
  () => require("@nstudio/nativescript-floatingactionbutton").Fab
);

Vue.filter("fonticon", fonticon);

Vue.prototype.$router = router;
Vue.prototype.$route = null;

Vue.use(TextFieldPlugin);
Vue.use(Navigator, {
  routes: router.routes
});

var application = require("application");
Vue.mixin({
  data() {
    return {
      isLoading: false,
      currentPage: 0,
      previousPage: null
    };
  },
  methods: {
    navigate(to, props = null, options = null) {
      if (to == null) {
        if (this.currentPage && this.currentPage > 0 && !props) {
          this.currentPage--;
        } else {
          this.$navigator.back();
        }
      } else {
        options = options || {};
        options.props = props;
        if (
          this.$navigator.route &&
          this.$navigator.route.path == to &&
          to !== "/module/list/attend" &&
          to !== "/module/list/survey"
        ) {
          console.log("Going to same page", to);
          return;
        }

        this.$navigator.navigate(to, options);
      }
    },
    ApplyNavigation(self) {
      var AndroidApplication = application.android;
      var activity = AndroidApplication.foregroundActivity;
      activity = AndroidApplication.foregroundActivity;
      activity.onBackPressed = function (e) {
        if (self.currentPage && self.currentPage > 0) {
          self.currentPage--;
        } else {
          activity.onBackPressed = function () {
            self.navigate(null);
          };
          self.navigate(null);
        }
      };
    },
    getMoment(val = new Date()): moment.Moment {
      return moment(val);
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$start()
