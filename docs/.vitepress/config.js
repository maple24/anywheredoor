export default {
  // App configs: App configs are where you can define the global settings of the site.
  lang: "en-US",
  title: "mBlog",
  titleTemplate: "anywhere door", // mBlog | anywhere door
  description: "Just playing around", // meta data in html
  base: "/", // If you plan to deploy your site to https://foo.github.io/bar/, then you should set base to '/bar/'
  outDir: "../public", // default
  srcDir: "./src", // dir where markdown pages are store
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  ],
  lastUpdated: true, // enable display the page's last updated time
  ignoreDeadLinks: true,

  // Theme configs: Theme configs let you customize your theme.
  themeConfig: {
    siteTitle: "My custom title",
    logo: "/favicon.ico",
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
