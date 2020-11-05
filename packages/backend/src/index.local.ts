import { createApp } from "./app";

createApp().then((app) => {
  app.listen(3000);
  console.log("Express app stareted.");
});
