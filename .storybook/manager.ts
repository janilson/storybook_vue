import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const lightTheme = create({
  base: "light",
  brandUrl: "https://ecosysauto.com.br/",
  brandImage: "/logo.png",
});

const darkTheme = create({
  base: "dark",
  brandUrl: "https://ecosysauto.com.br/",
  brandImage: "/logo.png",
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

addons.setConfig({
  theme: prefersDark ? darkTheme : lightTheme,
});
