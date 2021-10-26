module.exports = {
  base: "/web-dev-2021-notes/",
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
        title: "Assessments",
        collapsable: true,
        children: [
          "/assessments/assessment_1_report_brief",
          "/assessments/assessment_2_implementation_and_report_brief",
        ],
      },

      {
        title: "Week 1 - The latest version of JavaScript",
        collapsable: true,
        children: ["/sessions/week_1/lecture", "/sessions/week_1/"],
      },
      {
        title: "Week 2 - Introducing React",
        collapsable: true,
        children: ["/sessions/week_2/lecture", "/sessions/week_2/"],
      },
      {
        title: "Week 3 - Loops",
        collapsable: true,
        children: ["/sessions/week_3/lecture", "/sessions/week_3/"],
      },
      {
        title: "Week 4 - Styles",
        collapsable: true,
        children: ["/sessions/week_4/lecture", "/sessions/week_4/"],
      },

      {
        title: "Week 5 - Design Thinking Workshop",
        collapsable: true,
        children: ["/sessions/week_5/"],
      },

      // {
      //   title: "Week 5 - State And Routes",
      //   collapsable: true,
      //   children: ["/sessions/week_4/"],
      // },
      // {
      //   title: "Week 6 - Assessment Support",
      //   collapsable: true,
      // },
      // {
      //   title: "Week 7 -  Forms,Validation and Conditional Rendering",
      //   collapsable: true,
      //   children: ["/sessions/week_6/"],
      // },
      // {
      //   title: "Week 8 -  Firebase Authentication and Custom Hooks",
      //   collapsable: true,
      //   children: ["/sessions/week_8/"],
      // },
      // {
      //   title: "Week 9 -  Managing Data In Firebase",
      //   collapsable: true,
      //   children: ["/sessions/week_9/"],
      // },
      // {
      //   title: "Week 10 -  Hosting, Rules and Cloud Functions",
      //   collapsable: true,
      //   children: ["/sessions/week_10/"],
      // },
    ],
  },
};
