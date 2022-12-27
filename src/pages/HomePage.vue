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
    axios.get('http://localhost:3000/posts')
        .then(function (response) {
            arrPost.value = response.data;
        });
}

initData();
</script>
<style scoped>
</style>
