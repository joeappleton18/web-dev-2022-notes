module.exports = {
  base: "/web-dev-2020-notes/",
  dest: "docs",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Overview",
        collapsable: true,
        children: ["/"],
      },

      {
        title: "Week 1 - The latest version of JavaScript",
        collapsable: true,
        children: ["/sessions/week_1/"],
      },
      {
        title: "Week 2 - Introducing React",
        collapsable: true,
        children: ["/sessions/week_2/"],
      },
    ],
  },
};
