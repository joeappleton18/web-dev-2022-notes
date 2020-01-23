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
        }
      
      ]
    }
  };
  