<template >
    <div class="add-cate">
        <input type="text" placeholder="Sửa danh mục" v-model="category">
        <div><button @click="updateCategories">Cập nhật</button></div>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import "toastr";
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
// application.scss
const category = ref('')
const getCategory = function () {
    axios.get(`http://localhost:3000/categories/${route.params.id}`)
        .then(function (response) {
            debugger
            category.value = response.data.name;
        });
}
const updateCategories = function () {

    if (category.value == "") {
        toastr.warning('Hãy điền tên danh mục!')
    } else {
        axios.patch(`http://localhost:3000/categories/${route.params.id}`, { name: category.value })
            .then(function (response) {
                toastr.success('Sửa thành công', 'Thông báo')
                router.push({ name: 'listcategory' })
            });
    }


}
getCategory();
</script>
<style >
.add-cate {
    width: 30%;
    height: 200px;
    margin: 0 auto;
}
.add-cate > * {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-cate input {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    border-radius: 10px;
}

.add-cate button {
    height: 40px;
    width: 80px;
    border-radius: 10px;
    background: #a0f1a7;
}
</style>