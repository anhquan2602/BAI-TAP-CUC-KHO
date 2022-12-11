import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import HomePage from './pages/HomePage.vue';
import AdminPage from './pages/AdminPage.vue';
import PostList from './pages/admin/PostList.vue';
import PostAdd from './pages/admin/PostAdd.vue';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
const routes = [
    { path: '/', component: HomePage },
    {
        path: '/admin', component: AdminPage,   
        children: [
            { path: '', component: PostList },
            { path: 'post-add', component: PostAdd }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
library.add(faUserSecret)
library.add(faTwitter)
app.mount('#app')
