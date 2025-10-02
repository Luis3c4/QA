import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";
import http from "k6/http";
const configuredExpect = expect.configure({
  timeout: 10000, // 10 seconds for retrying assertions
  interval: 500, // Retry check every 500ms (on retriable assertions)
  colorize: true, // Enable colored output

  // Setting `softMode` to 'throw', will make soft assertions fail the current iteration instead of the whole test.
  softMode: "fail",
});

export default function () {
  const res = http.get("https://quickpizza.grafana.com");
 
  configuredExpect(res.status).toBe(200);
}
