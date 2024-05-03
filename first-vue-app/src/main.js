import { createApp } from "vue";
import App from "./App.vue";
import FRIEND_CONTACT from "./components/friendContact.vue";
import NEW_FRIEND from "./components/NewFriend.vue";
const app = createApp(App);
app.component("friend-contact", FRIEND_CONTACT);
app.component("new-friend", NEW_FRIEND);
app.mount("#app");
