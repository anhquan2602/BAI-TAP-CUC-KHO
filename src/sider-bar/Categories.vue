<template>
    <div class="categories">
        <div class="title">CATEGORIES</div>
        <span><font-awesome-icon icon="fa-solid fa-xmark" /> <router-link :to="``">Affiliate</router-link></span>
        <span><font-awesome-icon icon="fa-solid fa-blog" />  Blogging </span>
        <span><font-awesome-icon icon="fa-solid fa-g" />  Google Adsense </span>
        <span><font-awesome-icon icon="fa-solid fa-wifi" /> Marketing </span>
        <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> SEO </span>
        <span><font-awesome-icon icon="fa-solid fa-gear" />  Hacks & Tips </span>
        <span><font-awesome-icon icon="fa-solid fa-bars" /> Web Hosting </span>
        <span><font-awesome-icon icon="fa-solid fa-w" />  WordPress</span>
    </div>
  
</template>

<script>

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
