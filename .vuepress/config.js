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
      {
        title: "Week 3 and Week 4 - Styling and Further React",
        collapsable: true,
        children: ["/sessions/week_3/"],
      },

      {
        title: "Week 5 - State And Routes",
        collapsable: true,
        children: ["/sessions/week_4/"],
      },
    ],
  },
};
