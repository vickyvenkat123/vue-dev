import Vue from 'vue'
import Router from 'vue-router'
import layout from '../components/layout'
import Home from '@/components/Home'
import Create from '@/components/Create'
import Desi from '@/components/Desi'
import Dept from '@/components/Dept'
import Employedetails from '@/components/Employedetails'
import Updatedesi from '@/components/Updatedesi'
import AddDepartment from '@/components/AddDepartment'
import Login from '@/components/Login'
import ForgetPassword from '@/components/ForgetPassword'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:"Login",
      component:Login
      
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '/home',
          name:Home,
          component: Home
        },
        {
          path:'/create/:id',
          component:Create
        },
        {
          path:'/create',
          component:Create
        },
        {
          path:'/desi',
          component:Desi
        },
        {
          path:'/dept',
          component:Dept
        },
        {
          path:'/addDepartment/:id',
          component:AddDepartment
        },
        {
          path:'/employedetails/:id',
          component:Employedetails
        },
        {
          path:'/employedetails',
          component:Employedetails
        },
        {
          path:'/updatedesi',
          component:Updatedesi
        },
        {
          path:'/addDepartment',
          component:AddDepartment
        },{
          path:'/forgetpassword',
          component:ForgetPassword
        }
      ]
    },
   
  ]
})


