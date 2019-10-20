import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import HomePage from '@/components/home/home.page.vue';
import ProfilePage from '@/components/user/profile/profile.page.vue';
import CreateAccountPage from '@/components/user/create-account/create-account.page.vue';
import ContactPage from '@/components/contact/contact.page.vue';
import PrayPage from '@/components/pray/pray.page.vue';
import GetInvolvedPage from '@/components/get-involved/get-involved.page.vue';
import PeacePage from '@/components/peace/peace.page.vue';
import SupportUsPage from '@/components/support-us/support-us.page.vue';
import EventDetailPage from './components/event-detail/event-detail.page.vue';
import App from '@/App.vue';
import AboutUsPage from '@/components/about-us/about-us.page.vue';
import {MdButton, MdIcon} from 'vue-material/dist/components';
import ProjectPage from '@/components/project/project.page.vue';
import LoginPage from '@/components/user/login/login.page.vue';
import HubPage from '@/components/Hub.vue';
import store from '@/model/store/store';
import ForgetPasswordPage from '@/components/user/forget-password/forget-password.page.vue';
import {routeEnum, routes} from '@/model/types';

export const googleApiKey = "AIzaSyAbwNlwz8ru2CRMfriX9Qvg3-wXb69TUUY";

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.config.productionTip = false;


export const allRoutes: routes[] = [
  {id: routeEnum.Hub, path: '/', component: HubPage},
  {id: routeEnum.Home, path: '/home', component: HomePage},
  {id: routeEnum.Login, path: '/user/login', component: LoginPage},
  {id: routeEnum.Profile, path: '/user/profile', component: ProfilePage},
  {id: routeEnum.CreateAccount, path: '/user/createAccount', component: CreateAccountPage},
  {id: routeEnum.ForgetPassword, path: '/user/forgetPassword/:email?', component: ForgetPasswordPage},
  {id: routeEnum.Contact, path: '/contact', component: ContactPage},
  {id: routeEnum.Pray, path: '/pray', component: PrayPage},
  {id: routeEnum.GetInvolved, path: '/getInvolved', component: GetInvolvedPage},
  {id: routeEnum.Project, path: '/projects/:key', component: ProjectPage},
  {id: routeEnum.Peace, path: '/peace', component: PeacePage},
  {id: routeEnum.SupportUs, path: '/supportUs', component: SupportUsPage},
  {id: routeEnum.EventDetail, path: '/eventDetail', component: EventDetailPage},
  {id: routeEnum.AboutUs, path: '/aboutUs', component: AboutUsPage}
];

const routesVue: RouteConfig[] = allRoutes.map(({path, component}) => ({path, component}));

const router = new VueRouter({
  routes: routesVue,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export const changeRoute = (id: routeEnum, ...params: string[]): void => {
  let path = allRoutes.findOrFirst(x => x.id === id).path;
  params.forEach(x => path = path.replace(/\:.*?(\/|$)/g, x));

  router.push(path)
      .then(route => console.log(`Change route to ${route.fullPath}`));
};

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
