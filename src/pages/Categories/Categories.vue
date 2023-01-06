<template>
    <div class="categories">
        <div class="title">CATEGORIES</div>
        <span v-for="category in listCategories" > <font-awesome-icon icon="fa-solid fa-xmark" /><router-link :to="`/category/${category.id}`">{{ category.name }}</router-link></span>
    </div>
</template>

<script setup>
// import { useRouter } from 'vue-router';
import axios from "axios";
import { ref } from "vue";

// const router = useRouter();
const listCategories = ref([])
const getCategory = function () {
    axios.get('http://localhost:3000/categories')
        .then(function (response) {
            listCategories.value = response.data;
        });
}
getCategory ();


// const movePage = function(category) {
//     console.log(router)
//     router.push({
//         name: '/',
//         query: {
//             categories: category.id
//         },
//       })
// }
</script>

<style scoped> 
a.router-link-active.router-link-exact-active {
    text-decoration: none;
}
.categories{
    height: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
span{
    font-size: 18px;
    margin-top: 15px;
    opacity: 0.8;
    font-family:   Arial, sans-serif;
}
span:hover{
    color: #c21a30;
    cursor: pointer;
}
.title{
    color: #c21a30;
    font-size: 18px;
    font-weight: 600;
}
svg.svg-inline--fa.fa-xmark {
    font-size: 16px;
}
svg.svg-inline--fa.fa-blog {
    font-size: 16px;
}
svg.svg-inline--fa.fa-g {
    font-size: 16px;
}
svg.svg-inline--fa.fa-wifi {
    font-size: 16px;
}
svg.svg-inline--fa.fa-magnifying-glass {
    font-size: 16px;
}
svg.svg-inline--fa.fa-gear {
    font-size: 16px;
}
svg.svg-inline--fa.fa-bars {
    font-size: 16px;
}
svg.svg-inline--fa.fa-w {
    font-size: 16px;
}

</style>>
