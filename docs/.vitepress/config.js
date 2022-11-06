export default {
  // App configs: App configs are where you can define the global settings of the site.
  lang: "en-US",
  title: "mBlog",
  titleTemplate: "anywhere door", // mBlog | anywhere door
  description: "Just playing around", // meta data in html
  base: "/vitepress-blog/", // If you plan to deploy your site to https://foo.github.io/bar/, then you should set base to '/bar/'
  outDir: "../public", // default
  srcDir: "", // dir where markdown pages are store
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "assets/favicon.ico",
        type: "image/x-icon",
      },
    ],
  ],
  lastUpdated: true, // enable display the page's last updated time
  ignoreDeadLinks: true,

  // Theme configs: Theme configs let you customize your theme.
  themeConfig: {
    // siteTitle: "",
    logo: "assets/home/home-120.png",
    nav: [
      { text: "Guide", link: "/guide/index" },
      { text: "Posts", link: "/posts/index" },
      { text: "NBA", link: "/NBA/index" },
      { text: "Life", link: "/life/index" },
      { text: "Lab", link: "/lab/index" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: {
      // sidebar only shows in guide page
      "/guide/": [
        {
          text: "Guide",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],
      "/config/": [
        {
          text: "SectionB",
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],
      "/NBA/": [
        {
          text: "Story",
          items: [{ text: "GSW", link: "/NBA/gws" }],
        },
      ],
      "/posts/": [
        {
          text: "Posts",
          items: [
            { text: "one", link: "/posts/one" },
            { text: "two", link: "/posts/two" },
          ],
        },
      ],
    },
  },
};
