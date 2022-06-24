import type { NavbarConfig } from "@vuepress/theme-default";
const navbar: NavbarConfig = [
  {
    text: "初阶",
    children: [
      "/elementary/base",
      "/elementary/ide",
      "/elementary/html",
      "/elementary/css",
      "/elementary/javaScript",
      "/elementary/browser",
    ],
  },
  {
    text: "中阶",
    children: [
      "/intermediate/engineering",
      "/intermediate/library",
      "/intermediate/frame",
      "/intermediate/performance",
      "/intermediate/principle",
      "/intermediate/comprehensive",
    ],
  },
  {
    text: "高阶",
    children: [
      "/advanced/build",
      "/advanced/node",
      "/advanced/ide",
      "/advanced/middleAndBackstage",
      "/advanced/experienceManagement",
      "/advanced/dataVisualization",
      "/advanced/engineeringSystem",
      "/advanced/globalization",
      "/advanced/cross-endTechnology",
      "/advanced/InteractiveTechnology",
    ],
  },
  {
    text: "学习链接",
    children: [
      { text: "web前端面试-面试官系列", link: "https://vue3js.cn/interview/" },
      { text: "前端知识图谱", link: "https://f2e.tech" },
      {
        text: "学习路线-star 187k",
        link: "https://roadmap.sh/roadmaps",
      },
      {
        text: "前端学习路线-github",
        link: "https://objtube.github.io/front-end-roadmap/#/",
      },
      {
        text: "前端学习路线-gitee",
        link: "https://objtube.gitee.io/front-end-roadmap/#/",
      },
    ],
  },
  {
    text: "项目案例",
    link: "/demo",
  },
  {
    text: "GitHub",
    link: "https://github.com/ApprenticeLi/VuePress-Apprentice",
  },
];

export default navbar;
