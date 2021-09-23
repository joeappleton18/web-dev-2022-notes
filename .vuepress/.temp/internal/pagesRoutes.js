import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-35ae64a4","/assessment_support.html","Overall Schedule",["/assessment_support","/assessment_support.md"]],
  ["v-750f9ae5","/learning-tabs.html","Overview",["/learning-tabs","/learning-tabs.md"]],
  ["v-6db55b1e","/notes.html","Session 1 - The latest version of JavaScript",["/notes","/notes.md"]],
  ["v-305d8b2f","/reading_list.html","Web Design For Industry",["/reading_list","/reading_list.md"]],
  ["v-60536ad4","/assessments/assessment_1_report_brief.html","",["/assessments/assessment_1_report_brief","/assessments/assessment_1_report_brief.md"]],
  ["v-7025a330","/assessments/assessment_2_implementation_and_report_brief.html","",["/assessments/assessment_2_implementation_and_report_brief","/assessments/assessment_2_implementation_and_report_brief.md"]],
  ["v-369f57d0","/sessions/week_1/","Practical Session and Guided Learning",["/sessions/week_1/index.html","/sessions/week_1/README.md"]],
  ["v-c568bb04","/sessions/week_10/","Week 10 -   Hosting, Rules and Cloud Functions",["/sessions/week_10/index.html","/sessions/week_10/README.md"]],
  ["v-369f57ef","/sessions/week_2/","Introduction to React",["/sessions/week_2/index.html","/sessions/week_2/README.md"]],
  ["v-369f580e","/sessions/week_3/","Task 9 - Completing the Dash (if you want a challenge)",["/sessions/week_3/index.html","/sessions/week_3/README.md"]],
  ["v-369f582d","/sessions/week_4/","State Management and React Routing",["/sessions/week_4/index.html","/sessions/week_4/README.md"]],
  ["v-369f584c","/sessions/week_5/","Routing",["/sessions/week_5/index.html","/sessions/week_5/README.md"]],
  ["v-369f586b","/sessions/week_6/","Forms,Validation and Conditional Rendering",["/sessions/week_6/index.html","/sessions/week_6/README.md"]],
  ["v-369f588a","/sessions/week_7/","Week 7 - Catch up and Tutorial",["/sessions/week_7/index.html","/sessions/week_7/README.md"]],
  ["v-369f58a9","/sessions/week_8/","Week 8 - Firebase Authentication and  Custom Hooks",["/sessions/week_8/index.html","/sessions/week_8/README.md"]],
  ["v-369f58c8","/sessions/week_9/","Week 9 - Managing Data Using Firebase",["/sessions/week_9/index.html","/sessions/week_9/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
