import Router from 'vue-router'
import LandingPage from './pages/LandingPage'
import Home from './pages/landingPage/Home'
import { default as LpToolkits } from './pages/landingPage/Toolkits'
import Workflow from './pages/landingPage/Workflow'
import Privacy from './pages/Privacy'
import ShadowDemo from './pages/demo/Shadow'
import TypographyDemo from './pages/demo/Typography'
import ComponentsDemo from './pages/demo/Components'
import MarkdownDemo from './pages/demo/Markdown'
import NotFound from './pages/NotFound'
import WorkspaceGuard from './pages/workspace/WorkspaceGuard'
import Login from './pages/Login'
import Dashboard from './pages/workspace/Dashboard'
import Analytics from './pages/workspace/Analytics'
import Toolkits from './pages/workspace/Toolkits'
import Processes from './pages/workspace/Processes'
import Settings from './pages/workspace/Settings'
import Canvas from './pages/workspace/CanvasPage'
import Invite from './pages/Invite'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import CreateWorkspace from './pages/CreateWorkspace'
import Admin from './pages/Admin'
import AdminDashboard from './pages/admin/Dashboard'
import AdminToolkits from './pages/admin/Toolkits'
import ToolkitEditor from './pages/admin/toolkits/Editor'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LandingPage,
      children: [
        { path: '/', component: Home },
        { path: 'workflow', component: Workflow },
        { path: 'toolkits', component: LpToolkits },
      ],
      beforeEnter(to, from, next) {
        if ('sessionToken' in localStorage) next('/space')
        next()
      },
    },
    {
      path: '/space/:workspace?',
      component: WorkspaceGuard,
      children: [
        {
          path: '/',
          component: Dashboard,
        },
        {
          path: 'analytics',
          component: Analytics,
        },
        {
          path: 'toolkits',
          component: Toolkits,
        },
        {
          path: 'processes',
          component: Processes,
        },
        {
          path: 'settings',
          component: Settings,
        },
        {
          path: 'canvas/:id',
          component: Canvas,
          props: true,
        },
      ],
    },
    {
      path: '/demo/shadow',
      component: ShadowDemo,
    },
    {
      path: '/demo/typography',
      component: TypographyDemo,
    },
    {
      path: '/demo/components',
      component: ComponentsDemo,
    },
    {
      path: '/demo/markdown',
      component: MarkdownDemo,
    },
    { path: '/privacy', component: Privacy },
    { path: '/login', component: Login, name: 'login', props: true },
    { path: '/signup', component: Signup },
    { path: '/profile', component: Profile },
    { path: '/new', component: CreateWorkspace },
    { path: '/invite/:code', component: Invite },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
          component: AdminDashboard,
        },
        {
          path: 'toolkits',
          component: AdminToolkits,
        },
        {
          path: 'toolkits/:id',
          component: ToolkitEditor,
        },
      ],
    },
    { path: '*', component: NotFound },
  ],
})
