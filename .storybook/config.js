import { configure } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";

// automatically import all files ending in *.stories.js
configure(
  [
    require.context("../stories", true, /\.stories\.js$/),
    require.context("../src/components", true, /\.stories\.js$/)
  ],
  module
);
