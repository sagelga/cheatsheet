import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Python",
    link: "/python/intro/install/",
  },
  {
    text: "SQL",
    link: "/sql/intro/command/",
  },
  {
    text: "Git",
    link: "/git/initiate/",
  },
  {
    text: "SPSS",
    link: "/spss/data/clean/",
  },
  {
    text: "Contribute",
    children: [
      {
        text: "Contribute",
        link: "https://github.com/sagelga/cheatsheet/",
      },
      {
        text: "Legal Terms",
        link: "https://github.com/Kuma-Cheatsheet/core/blob/master/LICENSE.md",
      },
      {
        text: "Changelog",
        link: "https://github.com/Kuma-Cheatsheet/core/commits/master",
      },
      {
        text: "List of Contributor",
        link: "https://github.com/Kuma-Cheatsheet/core/pulse",
      },
      {
        text: "Development Milestones",
        link: "https://github.com/Kuma-Cheatsheet/core/releases",
      },
    ],
  },
];
