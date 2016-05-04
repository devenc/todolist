require('font-awesome/scss/font-awesome.scss')
require('./src/scss/style.scss')
require('./src/scss/main.scss')

import Vue from 'vue'
import Router from 'Vue-router'
import App from 'components/App'
import LoginView from 'components/LoginView'
import MainView from 'components/MainView'

Vue.use(Router)

var router = new Router()

router.map({
  '/login': {
    component: LoginView
  },
  '/user/:id': {
    component: MainView
  }
})

router.redirect({
  '*': '/user/1'
})

router.start(App, '#app')
