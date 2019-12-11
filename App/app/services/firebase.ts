const firebase = require("nativescript-plugin-firebase");

class Firebase {
    constructor() {
        console.log("On firebase init............................")
        firebase.init({
            onAuthStateChanged: (data) => this.onAuthStateChanged(data)
        }).then(
            () => {
                console.log("firebase.init done");
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    }

    onAuthStateChanged(data) {
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    }

    signInViaEmail(emailAddress: string) {
        return new Promise((resolve, reject) => {
            firebase.fetchSignInMethodsForEmail(emailAddress).then((methods: Array<string>) => {
                return resolve(emailAddress);
            });
        })
    }

    signInViaPhonenumber(phoneNumbers: string) {
        return new Promise((resolve, reject) => {
            firebase.login({
                type: firebase.LoginType.PHONE,
                phoneOptions: {
                    phoneNumber: phoneNumbers,
                    verificationPrompt: "The received verification code", // default "Verification code"
                    android: {
                        timeout: 30 // The maximum amount of time you are willing to wait for SMS auto-retrieval to be completed by the library
                    }
                }
            }).then(
                function (result) {
                    return resolve(result);
                },
                function (errorMessage) {
                    return reject(errorMessage);
                }
            );
        })
    }

    signInViaFacebook() {
        return new Promise((resolve, reject) => {
            firebase.login({
                type: firebase.LoginType.FACEBOOK,
                // Optional
                facebookOptions: {
                    // defaults to ['public_profile', 'email']
                    scopes: ['public_profile', 'email'] // note: this property was renamed from "scope" in 8.4.0
                }
            }).then(
                function (result) {
                    return resolve(result);
                },
                function (errorMessage) {
                    return reject(errorMessage);
                }
            );
        })
    }
}

export default new Firebase();