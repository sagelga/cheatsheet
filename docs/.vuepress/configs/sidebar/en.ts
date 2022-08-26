import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/python/": [
    {
      text: "เริ่มต้นการใช้ Python",
      children: [
        "/python/intro/check/",
        "/python/intro/install/",
        "/python/intro/run/",
        "/python/io/",
        "/python/variable/",
        "/python/lint/",
      ],
    },
    {
      text: "ประเภทข้อมูล",
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
        "/python/data-type/list/",
        "/python/data-type/tuple/",
        "/python/data-type/dictionary/",
      ],
    },
    {
      text: "เงื่อนไขและการทำซ้ำ",
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
      text: "คลาส, ฟังก์ชัน, และเมธอด",
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
      ],
    },
    {
      text: "ไลบรารี่, แพ็กเกจ, และโมดูล",
      children: [
        {
          text: "โมดูล",
          link: "/python/module/",
          children: ["/python/module/", "/python/module/math/"],
        },
        {
          text: "แพ็กเกจ",
          link: "/python/module/",
          children: [],
        },
        {
          text: "ไลบรารี่",
          link: "/python/module/",
          children: [],
        },
      ],
    },
    {
      text: "อื่น ๆ",
      children: ["/python/io/file/", "/python/class/"],
    },
    {
      text: "การแก้ไขปัญหาเฉพาะหน้า",
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
  "/sql/": [
    {
      text: "Getting Started",
      children: ["/sql/intro/command/", "/sql/table/data-type/"],
    },
    {
      text: "Querying data",
      children: ["/sql/view/select/", "/sql/view/where/"],
    },
    {
      text: "Database Tables",
      children: [
        "/sql/table/constraint/",
        "/sql/table/create/",
        "/sql/table/describe/",
        "/sql/table/rename/",
        "/sql/table/drop/",
      ],
    },
    {
      text: "Update Data",
      children: ["/sql/data/insert/", "/sql/data/delete/", "/sql/data/update/"],
    },
    {
      text: "Edit Tables",
      children: [
        "/sql/table/alter/add/",
        "/sql/table/alter/modify/",
        "/sql/table/alter/drop/",
      ],
    },
    {
      text: "Grouping",
      children: ["/sql/view/group/"],
    },
    {
      text: "Joining Tables",
      children: [
        "/sql/table/relationship/",
        "/sql/view/join/inner/",
        "/sql/view/join/inner/CartesianProduct/",
        "/sql/view/join/inner/Cross/",
        "/sql/view/join/inner/Equijoin/",
        "/sql/view/join/inner/Natural/",
        "/sql/view/join/outer/left/",
        "/sql/view/join/outer/right/",
        "/sql/view/join/outer/full/",
      ],
    },
    {
      text: "Transaction control",
      children: [
        "/sql/table/commit/",
        "/sql/table/rollback/",
        "/sql/table/savepoint/",
      ],
    },
    {
      text: "Normalization",
      children: [
        "/sql/table/normalize/1NF.html",
        "/sql/table/normalize/2NF.html",
        "/sql/table/normalize/3NF.html",
        "/sql/table/normalize/4NF.html",
        "/sql/table/normalize/Boyce-CoddNF.html",
        "/sql/table/normalize/5NF.html",
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
  "/spss/": [
    {
      text: "Data Preparation",
      children: ["/spss/data/clean/", "/spss/data/transform/"],
    },
    {
      text: "Create Model",
      children: [
        "/spss/model/anova/two-way/",
        "/spss/model/linear-regression/",
        "/spss/model/linear-regression/multiple/",
        "/spss/model/logistic-regression/",
        "/spss/model/time-series/",
      ],
    },
  ],
};
