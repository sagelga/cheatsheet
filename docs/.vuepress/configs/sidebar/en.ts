import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/python/": [
    {
      text: "Getting Started",
      children: [
        "/python/intro/install/",
        "/python/intro/run/",
        "/python/io/",
        "/python/variable/",
        "/python/lint/",
      ],
    },
    {
      text: "Basic Data Type",
      children: [
        "/python/data-type/",
        {
          text: "String",
          link: "/python/data-type/string/",
          children: [
            "/python/data-type/string/concat/",
            "/python/data-type/string/format/",
            "/python/data-type/string/array/",
          ],
        },
        {
          text: "Integer & Float",
          link: "/python/data-type/number/",
          children: [],
        },
        {
          text: "Boolean",
          link: "/python/data-type/boolean/",
          children: [],
        },
      ],
    },
    {
      text: "Conditions & Iterations",
      children: [
        "/python/condition/",
        {
          text: "Loop",
          link: "/python/loop/",
          children: ["/python/loop/for/", "/python/loop/while/"],
        },
      ],
    },
    {
      text: "Function, Method, and Module",
      children: [
        {
          text: "Function",
          link: "/python/function/",
          children: ["/python/function/built-in/"],
        },
        {
          text: "Method",
          link: "/python/method/",
          children: ["/python/method/string/", "/python/method/list/"],
        },
        {
          text: "Module",
          link: "/python/module/",
          children: ["/python/module/math/"],
        },
      ],
    },
    {
      text: "More Data Type",
      children: [
        "/python/data-type/list/",
        "/python/data-type/tuple/",
        "/python/data-type/dictionary/",
      ],
    },
    {
      text: "Others",
      children: ["/python/io/file/", "/python/class/"],
    },
    {
      text: "Troubleshooting",
      children: [
        "/python/lint/docs/",
        "/python/lint/docstring/",
        "/python/error/debug/",
        "/python/error/handle/",
        {
          text: "Error Type",
          link: "/python/error/error-type/",
          children: [
            "/python/error/error-type/compile/",
            "/python/error/error-type/runtime/",
          ],
        },
        "/python/error/custom/",
      ],
    },
  ],
  "/git/": [
    {
      text: "Getting Started",
      link: "/git/initiate/",
      children: [
        "/git/initiate/install/",
        "/git/initiate/repository/",
        "/git/initiate/origin-setup/",
      ],
    },
    {
      text: "Commit",
      link: "/git/commit/",
      children: [
        {
          text: "Unstaged",
          children: ["/git/commit/unstage/add/", "/git/commit/unstage/reset/"],
        },
        {
          text: "Staged",
          children: ["/git/commit/stage/commit/", "/git/commit/stage/remove/"],
        },
      ],
    },
    {
      text: "Branching",
      children: [
        "/git/branch/",
        "/git/branch/workflow/",
        "/git/branch/create/",
        "/git/branch/diff/",
      ],
    },
    {
      text: "Local / Remote",
      children: ["/git/origin/pull/", "/git/origin/push/"],
    },
    {
      text: "Merge Strategies",
      link: "/git/merge/",
      children: [
        "/git/merge/recursive/",
        "/git/merge/rebase/",
        "/git/merge/squash/",
        "/git/merge/conflict/",
      ],
    },
  ],
};
