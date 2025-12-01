import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Design System - Ecosys AUTO",
    brandUrl: "https://suaempresa.com",
    brandImage: "/logo.png",
  },
});
