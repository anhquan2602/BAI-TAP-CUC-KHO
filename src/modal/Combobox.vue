<template>
  <div class="combobox">
    <select name="categories" id="cate" @change="getValue(cate)" v-model="cate">
      <option v-for="cate in listCategories" :value="cate.id">{{ cate.name }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const listCategories = ref([])
const cate = ref('');
const getCategory = function () {
  axios.get('http://localhost:3000/categories')
    .then(function (response) {
      listCategories.value = response.data;
    });

}
getCategory(); 
// const props = defineProps({
//   categories: {
//     id: Number,
//     name: String
//   }
// })
const emit = defineEmits(['get-value-id'])
const getValue = function (cate) {
    emit("get-value-id", cate);
}
</script>
<style>
.combobox>* {
  font-size: 15px;
  text-align: center;
  height: 40px;
  width: 350px;
  color: #4d5257;
  font-family: 'Roboto';
}
</style>