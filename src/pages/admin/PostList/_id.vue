<template >
    <div>
        <div class="form-update">
            <h3 class="title-update">Sửa dữ liệu</h3>
            <div class="post-name">
                <input type="text" placeholder="Nhập tên bài viết" v-model="name">
            </div>
            <div class="image-author">
                <input type="text" placeholder="Nhập link ảnh tác giả" v-model="author">
            </div>
            <div class="image-post">
                <input type="text" placeholder="Nhập link ảnh" v-model="image">
            </div>
            <div class="content">
                <!-- <input type="text" placeholder="Nội dung" v-model="content"> -->
                <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
            </div>
            <div class="date">
                <input type="text" placeholder="Ngày tạo" v-model="date">
            </div>
            <div class="update"><button @click="updateButton()">Cập nhật</button></div>
        </div>
        <div class="form-image-preview">
            <img :src="image">
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { unref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
const editor = ClassicEditor;
const editorConfig = {};
const name = ref('')
const author = ref('')
const content = ref('')
const date = ref('')
const image = ref('')
const route = useRoute()
const listPost = ref([]);
const getData = function () {
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

const updateButton = function () {
    axios.patch(`http://localhost:3000/posts/${route.params.id}`, {
        title: unref(name),
        author: unref(author),
        image: unref(image),
        shortDecription: unref(content),
        date: unref(date)
    })
        .then(function (response) {
            window.location.href = '/';
        });
}
getData();
</script>   
<style >

.form-image-preview {
    position: fixed;
    width: 400px;
    height: 600px;
    top: 0px;
    right: 10px;
}

.form-image-preview img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.form-update {
    top: 100px;
    position: relative;
    margin: auto;
    width: 40%;
    border: 3px solid rgb(146, 149, 146);
    padding: 10px;
    background-color: antiquewhite;
}

.form-update h3 {
    display: flex;
    justify-content: center;
}

.form-update > .title-update {
    padding-bottom: 10px;
    margin: 0 auto;
    display: flex;
}

.form-update input {
    width: 100%;
    height: 45px;
    padding-left: 8px;
}

.update button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.ck-editor__editable {
    min-height: 300px;
}
</style>    