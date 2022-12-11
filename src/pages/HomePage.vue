<script setup>
import {ref } from 'vue';
import axios from "axios";
import categories from "../menu bar/categories.vue"
import follow from "../menu bar/follow.vue"
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

<template>
    <div id="home-page">
        <div class="main-header">
            <div class="content-header">
                <div class="menu-heaher">
                    <ul class="list-menu">
                        <li>Home</li>
                        <li>Deal </li>
                        <li>Features</li>
                        <li>Mega menu post</li>
                        <li>Categories</li>
                        <li>Skin</li>z
                    </ul>
                </div>
                <div class="icon-header">
                    <div class="image-icon">
                        <img src="https://toppng.com/uploads/preview/twitter-logo-vector-grey-11549680332eye4q1nix2.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174851.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051329.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://w7.pngwing.com/pngs/277/988/png-transparent-social-media-computer-icons-linkedin-black-angle-text-logo.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/49/49323.png"
                            alt="">
                    </div>
                    <div class="image-icon">
                        <img src="https://play-lh.googleusercontent.com/U7UWPVBX9xyih10l20bOQIUUvZZ0dSXVlyCNogX8hEPVWvP14ZDKmK_LzHw6VaIquPg"
                            alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="main-site">
            <div class="main-sider-content">
                <div class="header-site">
                    <div class="header-site-image"><img src="	https://demo.theme-junkie.com/beginner/files/2016/02/logo.png" alt=""></div>
                </div>
                <div class="main-menu">
                    <ul class="list-menu">
                        <li>Home</li>
                        <li>Deal </li>
                        <li>Features</li>
                        <li>Mega menu post</li>
                        <li>Categories</li>
                        <li>Skin</li>z
                    </ul>
                    <div class="search">
                        <input type="text" placeholder="  Search for...">
                    </div>
                </div>
                <div class="main-content">
                    <div class="main-content-left">
                        <div class="list-post">
                            <div class="one-post" v-for="(post, index) in arrPost" >
                                <div class="title">{{post.title}}</div>
                                <div class="more-description">
                                    <img class="avatar-author" :src="post.author"
                                        alt="">
                                    <div class="in-category">In: Đời sống</div>
                                    <div class="time-post">Last Updated: February 24, 2016</div>
                                </div>
                                <div class="fearture-image">
                                    <img :src="post.image"
                                        alt="">
                                </div>
                                <div class="short-description">
                                    {{post.shortDecription}}
                                </div>
                                <div class="read-more">
                                    <div class="read-more-btn">Đọc thêm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-side-bar">
                        <div class="box-sider-bar">
                           <div> <categories/></div>
                        </div>
                        <div class="box-sider-bar">
                           <div> <follow/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-site-image {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
}
.icon-header {
    height: 100%;
    display: flex;
    width: 320px;
}

.icon-header .image-icon {
    align-items: center;
    display: flex;
    width: 40px;
    height: 100%;
    justify-content: center;
}

.icon-header .image-icon img {
    margin: 7px;
    object-fit: cover;
    width: 50%;
    height: 50%;
}

.main-header.main-sider-content {
    width: 80%;
    margin: 0 auto;
}

.main-sider-content {
    width: 70%;
    margin: 0 auto;
}
.main-header {
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    background: rgb(252 252 252);
    height: 40px;
    position: relative;
    display: block;
}

.content-header {
    height: 100%;
    display: flex;
    width: 70%;
    margin: 0 auto;
}

.header-site {
    height: 150px;
    background: rgb(252, 252, 252);
}

.menu-heaher {
    flex: 1;
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
}

ul li {
    float: left;
    display: flex;
    list-style: none;
    color: #5c5c5c;
}

ul li:not(:first-child) {
    margin-left: 19px;
}

ul.list-menu {
    text-align: center;
    display: flex;
    height: 100%;
    align-items: center;
    flex: 1;
}

.menu-heaher.list-menu {
    width: 30px;
    height: 100px;
}

.main-menu {
    height: 70px;
    background: rgb(252 252 252);
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    display: flex;
}
.search {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.search input {
    height: 40px;
    background-color: #efefef;
    border: none;
}
.main-content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.main-content .main-content-left {
    flex: 1;
}

.main-content .main-side-bar {
    width: 400px;
    margin-left: 30px;
}

.list-post {}

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

.main-side-bar>* {
    margin-bottom: 20px;
}

.box-sider-bar {
    border: 1px solid var(--border);
    padding: 10px;
}
</style>
