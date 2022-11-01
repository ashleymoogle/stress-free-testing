import { createRouter as _createRouter, createMemoryHistory } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import Home from '../Home.vue'
import Demo from '../Demo.vue'

export const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/demo', component: Demo, name: 'Demo' },
]

export const createRouter = () => {
  // 2. Define some routes
  // Each route should map to a component.

  return _createRouter({
    history: createMemoryHistory(),
    routes,
  })
}
