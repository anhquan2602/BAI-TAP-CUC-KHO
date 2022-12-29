<template >
    <div class="add-cate">
        <input type="text" placeholder="Thêm danh mục" v-model="list">
        <div><button @click="addCategory">Thêm</button></div>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import "toastr";
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
// application.scss
const list = ref('')
const addCategory = function () {

    if (list.value == "") {
        toastr.warning('Hãy điền tên danh mục!')
    } else {
        axios.post('http://localhost:3000/categories', { name: list.value })
            .then(function (response) {
                toastr.success('Thêm thành công', 'Thông báo')
                    router.push({ name: 'listcategory' })
            });
    }


}
</script>
<style >

</style>