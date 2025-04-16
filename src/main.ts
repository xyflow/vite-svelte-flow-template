import { mount } from "svelte";

import App from "./App.svelte";

import "./app.css";

// const app = new App({
//   target: document.getElementById('app')!,
// });

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
