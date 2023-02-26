import Layout from "../layout";
import Home from "../pages/home";


const routeConfig = [
  { path: '/',
    component: Layout,
    indexRoute: { component: Home },
  }
]

  export default routeConfig;