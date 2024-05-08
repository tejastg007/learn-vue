import { createApp } from "vue";
import App from "./App.vue";
import DialogBox from "./components/resources/DialogBox.vue";
const app = createApp(App);
app.component("dialog-box", DialogBox);
app.mount("#app");
