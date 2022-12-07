import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Home from './components/Home.vue';
import HomePage from './pages/HomePage.vue';
import AdminPage from './pages/AdminPage.vue';
import PostList from './pages/admin/PostList.vue';
import PostAdd from './pages/admin/PostAdd.vue';

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

app.mount('#app')