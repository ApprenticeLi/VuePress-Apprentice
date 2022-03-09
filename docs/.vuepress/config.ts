import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar } from "./config/index";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/",
  head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
  lang: "zh-cn",
  title: "前端知识图谱",
  description: "真正的大师永远都怀着一颗学徒的心！",

  themeConfig: {
    logo: "/images/logo.png",
    navbar,
  },

  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
});
