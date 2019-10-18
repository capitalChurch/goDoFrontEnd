import Vue from 'vue';
import store from './model/store/store';
import VueRouter, {RouteConfig} from 'vue-router';
import HomePage from '@/components/home/home.page.vue';
import LoginPage from '@/components/user/login/login.page.vue';
import ProfilePage from '@/components/user/profile/profile.page.vue';
import CreateAccountPage from '@/components/user/create-account/create-account.page.vue';
import ContactPage from '@/components/contact/contact.page.vue';
import PrayPage from '@/components/pray/pray.page.vue';
import GetInvolvedPage from '@/components/get-involved/get-involved.page.vue';
import PeacePage from '@/components/peace/peace.page.vue';
import MinistriesPage from '@/components/ministries/ministries.page.vue';
import SupportUsPage from '@/components/support-us/support-us.page.vue';
import EventDetailPage from './components/event-detail/event-detail.page.vue';
import HubPage from '@/components/Hub.vue';
import App from '@/App.vue';
import AboutUsPage from '@/components/about-us/about-us.page.vue';
import {MdButton, MdIcon} from 'vue-material/dist/components';
import ProjectPage from '@/components/project/project.page.vue';

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.config.productionTip = false;

export const allRoutes: RouteConfig[] = [
  {path: '/', component: HubPage},
  {path: '/home', component: HomePage},
  {path: '/login', component: LoginPage},
  {path: '/profile', component: ProfilePage},
  {path: '/createAccount', component: CreateAccountPage},
  {path: '/contact', component: ContactPage},
  {path: '/pray', component: PrayPage},
  {path: '/getInvolved', component: GetInvolvedPage},
  {path: '/projects/:key', component: ProjectPage},
  {path: '/peace', component: PeacePage},
  {path: '/ministries', component: MinistriesPage},
  {path: '/supportUs', component: SupportUsPage},
  {path: '/eventDetail', component: EventDetailPage},
  {path: '/aboutUs', component: AboutUsPage}
];

const router = new VueRouter({
  routes: allRoutes,
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
