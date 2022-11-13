import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/esm/index.js",
        format: "esm",
      },
    ],
    plugins: [typescript(), nodeResolve(), css()],
  },
  {
    input: "./dist/esm/index.js",
    output: [
      {
        file: "./dist/browser/web-story.js",
        format: "iife",
      },
    ],
    plugins: [nodeResolve(), css()],
  },
];
