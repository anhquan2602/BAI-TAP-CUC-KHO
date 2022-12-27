import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Detail from './pages/Detail.vue';
import Layouts from './layouts/Layouts.vue';
import AdminPage from './pages/AdminPage.vue';
import PostList from './pages/admin/PostList/PostList.vue';
import PostUpdate from './pages/admin/PostList/_id.vue';
import PostAdd from './pages/admin/PostAdd.vue';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CKEditor from '@ckeditor/ckeditor5-vue';
const routes = [
    {
        path: '/', component: Layouts,
        children: [
            {path: "/", component: HomePage},
            {path: "/detail/:id", component: Detail},
        ]
    },
    {
        path: '/admin', component: AdminPage,
        children: [
            { path: '', component: PostList },
            { path: ':id', component: PostUpdate },
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
app.use(CKEditor);
app.mount('#app')
