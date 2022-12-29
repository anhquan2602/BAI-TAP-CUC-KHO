<template >
    <div class="Categories">
        <div class="add-category"><router-link to="/admin/categories/add">Thêm</router-link></div>
        <div class="list-categories">
            <table >
                <tr>
                    <th>Số thứ tự</th>
                    <th>Tên danh mục</th>
                    <th>Công cụ</th>
                </tr>
                <tr v-for="(category ,index) in listCategories" :key="category.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ category.name }}</td>
                    <td class="button">
                        <button><router-link :to="`/admin/Categories/${category.id}`">Sửa</router-link></button>
                        <button  @click="deleteCategories(category)">Xóa</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
const listCategories = ref([])
const getCategory = function () {
    axios.get('http://localhost:3000/categories')
        .then(function (response) {
            listCategories.value = response.data;
        });
}

const deleteCategories = function (category) {
    console.log("ok")
    axios.delete(`http://localhost:3000/categories/${category.id}`)
        .then(function (response) {
            getCategory ();
        });
}
getCategory ();
</script>
<style >
.button {
    width: 10px;
}
.list-categories table,
.list-categories td,
.list-categories tr,
.list-categories th {
    border: 1px solid gray;
}
.Categories .add-category {
    margin: 0 auto;
}
.list-categories table {
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 100px;
}
.list-categories td,
.list-categories th {
    width: 150px;
    height: 40px;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis; 
}
.add-category {
    margin: o auto;
    width: 70%;
}
.add-category button {
    width: 50px;
    height: 50px;
}
</style>