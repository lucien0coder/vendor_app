import Vue from 'vue'
import Router from 'vue-router'
import FooComment from '@/components/views/FooComment'
import FoodCommentDetails from '@/components/views/FoodCommentDetails'
import Looking from '@/components/views/Looking'
import Track from '@/components/views/Track'
import Mine from '@/components/views/Mine'
import Signin from '@/components/views/Signin'
import Signup from '@/components/views/Signup'
import Selected from '@/components/views/Selected'
import ShopDetails from '@/components/views/ShopDetails'
import UserDetails from '@/components/views/UserDetails'
import NewPost from '@/components/views/Newpost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fooComment',
      component: FooComment
    },
    {
      path: '/fooComment/:id',
      name: 'fcDetails',
      component: FoodCommentDetails
    },
    {
      path: '/looking',
      name: 'looking',
      component: Looking
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
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/selected',
      name: 'select_city',
      component: Selected
    },
    {
      path: '/details/shop/:id',
      name: 'shopDetails',
      component: ShopDetails
    },
    {
      path: '/details/user/:id',
      name: 'userDetails',
      component: UserDetails
    },
    {
      path: '/newpost',
      name: 'newPost',
      component: NewPost
    }
  ]
})
