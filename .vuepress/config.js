module.exports = {
    themeConfig: {
      displayAllHeaders: true,
      sidebar: [
        {
          title: "Assessment Support",
          collapsable: true,
          children: ["/assessment_support.md"]
        },
        {
          title: "Overview",
          collapsable: true,
          children: ["/"]
        },
        {
          title: "Assessment Briefs",
          collapsable: true,
          children: [
            "/assessments/assessment_1.md",
            "/assessments/assessment_2.md"
          ]
        },
        {
          title: "Week 1 - The latest version of JavaScript",
          collapsable: true,
          children: ["/sessions/week_1/"]
        },

        {
          title: "Week 2 - Introduction to React",
          collapsable: true,
          children: ["/sessions/week_2/"]
        },

        {
          title: "Week 3 -  CSS and Themes",
          collapsable: true,
          children: ["/sessions/week_3/"]
        },


        {
          title: "Week 4 -  State Management",
          collapsable: true,
          children: ["/sessions/week_4/"]
        }
      
      
      ]
    }
  };
  