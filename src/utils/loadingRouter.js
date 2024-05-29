import router from '../router/index'
import axios from "axios";
import { getToken } from '@/utils/auth'

export default async function useaddRoute() {
  let url = process.env.NODE_ENV === "production" ? `/${process.env.VUE_APP_MICRONAME}/profiles/router.json` : `//${window.location.hostname}:${process.env.VUE_APP_MicroPort}/profiles/router.json`
  let res = await axios.get(url, { headers: { 'Authorization': getToken() } });
  let dynamicRoutes = addDynamicRoutes(res);
  dynamicRoutes.forEach(item => {
    router.addRoute(item) //可以单独添加路由格式: /自定义路 ,也可以添加子路由格式：/父路由path/子路由path
  })
}

function addDynamicRoutes(res) {
  let info = res.data
  let routerlist = info.routerList
  let routes = []
  routerlist.forEach(v => {
    routes.push({
      path: info.routerPrefix + v.path,
      name: v.name,
      component: () => import('@/views/' + v.component)
    })
  });
  return routes;
}
