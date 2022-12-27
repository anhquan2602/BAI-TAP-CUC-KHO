<template>
    <div class="detail-post">
        <div class="list-post">
            <div class="one-post">
                <div class="title">{{ name }}</div>
                <div class="more-description">
                    <img class="avatar-author" :src="author" alt="">
                    <div class="in-category">In: Đời sống</div>
                    <div class="time-post">{{ date}}</div>
                </div>
                <div class="fearture-image">
                    <img :src="image" alt="">
                </div>
                <div class="short-description" v-html="content">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router';
const name = ref('')
const author = ref('')
const content = ref('')
const date = ref('')
const image = ref('')
const route = useRoute()
const arrPost = ref([]);
const initData = function () {
    callApi();
}

const callApi = function () {
    axios.get(`http://localhost:3000/posts/${route.params.id}`)
        .then(function (response) {
            name.value = response.data.title;
            author.value = response.data.author;
            image.value = response.data.image;
            content.value = response.data.shortDecription;
            date.value = response.data.date;
            console.log(response)
        });
}

initData();
</script>
<style>
.list-post .one-post {
    padding: 15px;
    border: 1px solid var(--border);
    margin-bottom: 20px;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.more-description {
    display: flex;
    margin-bottom: 10px;
}

.detail-post img {
    width: 100%;
}

.more-description img.avatar-author {
    width: 20px;
    height: 20px;
}

.more-description>* {
    margin-right: 10px;
}

.fearture-image {
    width: 100%;
    height: 400px;
}

.fearture-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.short-description {
    padding: 10px 0;
}

.read-more-btn {
    background-color: #c21a30;
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-family: "Droid Sans", sans-serif;
    padding: 12px 25px;
}
</style>
