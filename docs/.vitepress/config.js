import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DevTalk.fun",
  titleTemplate: "The FUN place to talk dev stuff",
  lang: "en-US",
  themeConfig: {
    siteTitle: "DevTalk.fun",
    algolia: {
      appId: "",
      apiKey: "",
      indexName: "devtalk",
    },
    nav: [
      { text: "Notebook", link: "/notebook/about-this-notebook" },
      { text: "Cookbook", link: "/cookbook/whats-a-recipe" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/erondpowell" }],
    sidebar: {
      "/notebook/": [
        {
          text: "Getting Started",
          items: [
            {
              text: "About this Notebook",
              link: "/notebook/about-this-notebook.md",
            },
          ],
        },
        {
          text: "TypeScript",
          items: [
            {
              text: "What's TypeScript?",
              link: "/notebook/ts/whats-typescript.md",
            },
            { text: "Basic Types", link: "/notebook/ts/basic-types" },
            { text: "The Compiler", link: "/notebook/ts/the-compiler" },
          ],
        },
        {
          text: "Soft Skills",
          items: [
            {
              text: "Work Hard or Smart?",
              link: "/notebook/soft-skills/whether-to-work-hard-vs-smart.md",
            },
          ],
        },
      ],
      "/cookbook/": [
        {
          text: "Overview",
          items: [
            {
              text: "What's a Recipe?",
              link: "/cookbook/whats-a-recipe.md",
            },
          ],
        },
      ],
    },
  },
});
