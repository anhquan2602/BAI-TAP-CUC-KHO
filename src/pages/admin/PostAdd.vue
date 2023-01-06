<template >
    <div class="form-add">
        <h3>THÊM DỮ LIỆU</h3>
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
            <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
        </div>
        <div class="date">
            <input type="text" placeholder="Ngày tạo" v-model="date">
        </div>
        <div class="combobox">
            <Combobox @get-value-id="getValue" />
        </div>
        <div class="add"><router-link to="/"><BUtton @click="addButton()">Thêm</BUtton></router-link></div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from "axios";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Combobox from '../../modal/Combobox.vue';
const editor = ClassicEditor;
const editorConfig = {};
const name = ref('')
const author = ref('')
const content = ref('')
const date = ref('')
const image = ref('')
let categories = ref('');
const getValue = function(id) {
    categories = id;
}
const addButton = function () {
    axios.post('http://localhost:3000/posts', {
        title: name.value,
        author: author.value,
        image: image.value,
        shortDecription: content.value,
        date: date.value,
        categories : categories,
    })
        .then(function (response) {
            window.location.reload();
        });
}

</script>   
<style >
.combobox>* {
    font-size: 15px;
    text-align: center;
    height: 40px;
    width: 350px;
    color: #4d5257;
    font-family: 'Roboto';
}

.add button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-add {
    top: 30px;
    position: relative;
    margin: auto;
    width: 30%;
    border: 3px solid rgb(146, 149, 146);
    padding: 10px;
    background-color: antiquewhite;
}

.form-add>* {
    padding: 5px;
    margin-right: 10px;
}

.form-add h3 {
    display: flex;
    justify-content: center;
}

.form-add>.title-add {
    padding-bottom: 10px;
    margin: 0 auto;
    display: flex;
}

.form-add input {
    width: 100%;
    height: 45px;
    padding-left: 8px;
}



.ck-editor__editable {
    min-height: 300px;
}
</style>