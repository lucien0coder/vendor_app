import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FooComment from '@/components/views/FooComment'
import FoodCommentDetails from '@/components/views/FoodCommentDetails'
import Looking from '@/components/views/Looking'
import Newpost from '@/components/views/Newpost'
import PostFC from '@/components/views/PostFC'
import PostCome from '@/components/views/PostCome'
import PostFind from '@/components/views/PostFind'
import Track from '@/components/views/Track'
import Mine from '@/components/views/Mine'
import Signin from '@/components/views/Signin'
import Signup from '@/components/views/Signup'
import Selected from '@/components/views/Selected'
import ShopDetails from '@/components/views/ShopDetails'
import UserDetails from '@/components/views/UserDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fooComment',
      name: 'fooComment',
      component: FooComment,
      children: [{
        path: '/: id',
        component: FoodCommentDetails
      }]
    },
    {
      path: '/looking',
      name: 'looking',
      component: Looking
    },
    {
      path: '/newpost',
      name: 'newpost',
      component: Newpost,
      children: [
        {
          path: 'fc',
          component: PostFC
        },
        {
          path: 'come',
          component: PostCome
        },
        {
          path: 'find',
          component: PostFind
        }
      ]
    },
    {
      path: '/track',
      name: 'track',
      component: Track
    },
    {
      path: '/mine',
      name: 'mypage',
      component: Mine
    },
    {
      path: '/sign',
      name: 'sign',
      children: [
        {
          path: '/in',
          component: Signin
        },
        {
          path: 'up',
          component: Signup
        }
      ]
    },
    {
      path: '/selected',
      name: 'select_city',
      component: Selected
    },
    {
      path: '/details',
      name: 'details',
      children: [
        {
          path: 'shop/:id',
          component: ShopDetails
        },
        {
          path: 'user/:id',
          component: UserDetails
        }
      ]
    }
  ]
})
