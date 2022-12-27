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
            <input type="text" placeholder="Nội dung" v-model="content">
        </div>
        <div class="date">
            <input type="text" placeholder="Ngày tạo" v-model="date">
        </div>
        <div class="combobox">
            <div class="combobox">
                <select name="categories" id="cate" v-model ="categories">
                    <option value="1" data-foo="Affiliate">Affiliate</option>
                    <option value="2" data-foo="Blogging">Blogging</option>
                    <option value="3" data-foo="Google Adsense">Google Adsense</option>
                    <option value="4" data-foo="Marketing"> Marketing</option>
                    <option value="5" data-foo="Hacks & Tips">Hacks & Tips</option>
                </select>
            </div>
        </div>
        <div class="add"><router-link to="/"><BUtton @click="addButton()">Thêm</BUtton></router-link></div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { unref } from 'vue';
import axios from "axios";
// import Combobox from "../../modal/Combobox.vue"
const name = ref('')
const author = ref('')
const content = ref('')
const date = ref('')
const image = ref('')
const categories = ref('')
const addButton = function () {

    console.log(categories.value)
    axios.post('http://localhost:3000/posts', {
        title: name.value,
        author: author.value,
        image: image.value,
        shortDecription: content.value,
        date: date.value,
        categories: categories.value
    })
        .then(function (response) {
            let arrTemp = JSON.parse(JSON.stringify(response.data))
            console.log(categories.value)
            window.location.reload();
        });
}

</script>   
<style >
.combobox > * {
    font-size: 15px;
    text-align: center;
    height: 40px;
    width: 350px;
    color: #4d5257;
    font-family: 'Roboto';
}
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