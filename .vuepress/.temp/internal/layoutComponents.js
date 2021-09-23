import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/joeappleton/OneDrive - Solent University/solent/2021 - 2022/courses/semester-1/comtemporary-web-application/web-dev-2021-notes/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/joeappleton/OneDrive - Solent University/solent/2021 - 2022/courses/semester-1/comtemporary-web-application/web-dev-2021-notes/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
