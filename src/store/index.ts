import { createLogger, createStore } from "vuex";

export default createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : []
});
