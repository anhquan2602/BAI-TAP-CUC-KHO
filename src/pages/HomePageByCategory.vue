<template>
    <div class="list-post">
        <Post v-for="post in arrPost" :post="post" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from "axios";
import Post from "./Post.vue"
const arrPost = ref([]);
const initData = function () {
    callApi();
}
const callApi = function () {
    axios.get(`http://localhost:3000/posts?category=${category.id}`) // thay như này  axios.get(`http://localhost:3000/posts/${route.params.category}`) là được
        .then(function (response) {
            arrPost.value = response.data;
        });
}
initData();
</script>
<style scoped>
</style>
