import store from './store';
import { firestore } from "nativescript-plugin-firebase";
import moment from 'moment';

const firebase = require("nativescript-plugin-firebase");

export default class Firebase {
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
        store.state.isLoggedIn = data.loggedIn;
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
                    scopes: ['public_profile', 'email', 'instagram_basic', 'user_gender', 'user_age_range', 'user_link'] // note: this property was renamed from "scope" in 8.4.0
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

    signInViaTwitter() {
        return new Promise((resolve, reject) => {
            firebase.login({
                type: "TWITTER",
                // Optional
                twitterOptions: {
                    // defaults to ['public_profile', 'email']
                    scopes: ['public_profile', 'email', 'instagram_basic', 'user_gender', 'user_age_range', 'user_link'] // note: this property was renamed from "scope" in 8.4.0
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

    signInViaGoogle() {
        return new Promise((resolve, reject) => {
            firebase.login({
                type: firebase.LoginType.GOOGLE,
                googleOptions: {
                    scopes: ['https://www.googleapis.com/auth/user.birthday.read']
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

    getPosts(brandIds: string[]): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            const query = firestore
                .collection("Posts")
                .where("brandId", 'in', brandIds)

            query.onSnapshot(snapshot => {
                this._updatePosts(snapshot.docs);
            });

            query.get()
                .then(async result => {
                    if (!result && result.docs) {
                        return reject('No topics wore found');
                    }
                    await this._updatePosts(result.docs)
                    return resolve(true);
                })
                .catch(err => {
                    return reject('Unable to retrieve topics at this moment');
                });
        });
    }

    async _updatePosts(docs: firestore.QueryDocumentSnapshot[]): Promise<void> {
        const allDocs = docs.map(async doc => {
            const data = doc.data();
            let category = "Following";
            if (data.like > 10 && data.views > 50) {
                category = "Popular";
            } else if (moment().diff(data.createdAt, "hours") < 24) {
                category = "Latest";
            }
            return {
                ...data,
                category,
                brand: data && data.brand ? (await data.brand.get()).data() : null,
                id: doc.id
            }
        })
        const finalDocs = await Promise.all(allDocs);
        store.commit("updatePost", finalDocs);
    }
}