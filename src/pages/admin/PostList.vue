
<template>
    <div class="main-admin">    
        <div class="tool-admin">
            <button class="btn-add"><router-link to="/admin/post-add">Thêm</router-link></button>
            
        </div>
        <div class="list-post">
            <table>
                <tr>
                    <th>Tên bài viết</th>
                    <th>URL ảnh tác giả</th>
                    <th>Nội dung</th>
                    <th>Ngày tạo</th>
                    <th class="tool-header">Công cụ</th>
                </tr>
                <tr v-for="(post) in listPost">
                    <td>{{post.title}}</td>
                    <td>{{post.author}}</td>
                    <th>{{post.shortDecription}}</th>
                    <td>{{post.date}}</td>
                    <td class="tool-header">
                        <div class="tool">
                            <div class="edit"><button>Sửa</button></div>
                            <div class="delete"><button>Xóa</button></div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script setup>
import {ref } from 'vue';
import axios from "axios";
const listPost = ref([]);
const getData = function () {
    axios.get('http://localhost:3000/posts')
      .then(function (response) {
        listPost.value = response.data;
        console.log(listPost.value)
      });
}
getData();
</script>

<style scoped>
.main-admin {
    width: 1200px;
    margin: 0 auto;
}

.main-admin .list-post {}

.main-admin .list-post table {
    width: 100%;
    border-collapse: collapse;
}

.main-admin .list-post table,
.main-admin .list-post td,
.main-admin .list-post tr,
.main-admin .list-post th {
    border: 1px solid gray;
}

.main-admin .list-post td, .main-admin .list-post th{
    height: 40px;
    padding: 10px;
}

.tool {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.tool>* {
    width: 43px;
    /* border: 1px solid gray;
    text-align: center; */
}

.tool-header {
    width: 100px;
}

.tool-admin{
    margin: 10px 0;
}

.btn-add{
    height: 40px;
    width: 100px;
}
</style>
