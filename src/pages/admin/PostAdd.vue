<template >
    <div class="form-add">
        <h3>THÊM DỮ LIỆU</h3>
        <div class="post-name">
            <input type="text" placeholder="Nhập tên bài viết" v-model="name">
        </div>
        <div class="image-author">
            <input type="text" placeholder="Nhập link ảnh" v-model="author">
        </div>
        <div class="content">
            <input type="text" placeholder="Nội dung" v-model="content">
        </div>
        <div class="date">
            <input type="text" placeholder="Ngày tạo" v-model="date">
        </div>
        <div class="add"><BUtton @click="addButton">Thêm</BUtton></div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from "axios";
const name = ref('')
const author = ref('')
const content = ref('')
const date = ref('')
const addButton = function () {
    axios.post('http://localhost:3000/posts', {
        date: JSON.parse(JSON.stringify({name})),
        title: "How to succeed with marketing content?",
        author: "https://secure.gravatar.com/avatar/?s=32&d=mm&r=g",
        image: "https://demo.theme-junkie.com/beginner/files/2016/02/happy-680x380.jpg",
        shortDecription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie molestie nisl, eu scelerisque turpis tempus at. Nam luctus ultrices imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse velit orci, pretium ut feugiat nec, lobortis et est. Nullam cursus ultrices tincidunt. Nam gravida sem gravida ipsum dignissim in"
    })
        .then(function (response) {
            console.log(response);
        });
}
</script>
<style >
.form-add {
    top: 100px;
    position: relative;
    margin: auto;
    width: 30%;
    border: 3px solid rgb(146, 149, 146);
    padding: 10px;
    background-color: antiquewhite;
}

.form-add h3 {
    display: flex;
    justify-content: center;
}

.form-add>* {
    padding-bottom: 10px;
    margin: 0 auto;
    display: flex;
}

.form-add input {
    width: 350px;
}

.form-add>*>* {
    padding: 10px;
    margin: 0 auto;
    display: flex;
    width: 40%;
}

.add button {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>