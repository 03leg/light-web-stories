import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/sample.js",
    format: "iife",
  },
  plugins: [
    typescript(),
    nodeResolve(),
    css(),
    copy({
      targets: [
        {
          src: [
            "../../packages/light-web-stories/src/light-web-stories.css",
           // "../../packages/light-web-stories/lib/long-press-event.min.js",
            "../../node_modules/swiper/swiper-bundle.min.css",
          ],
          dest: "dist/",
        },
      ],
    }),
  ],
};
