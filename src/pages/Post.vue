<template >
    <div class="list-post">
        <div class="one-post">
            <div class="title">{{ post.title }}</div>
            <div class="more-description">
                <img class="avatar-author" :src="post.author" alt="">
                <div class="in-category">In: Đời sống</div>
                <div class="time-post">{{ post.date }}</div>
            </div>
            <div class="fearture-image">
                <img :src="post.image" alt="">
            </div>
            <div class="short-description">
                {{ post.shortDecription }}
            </div>
            <div class="read-more">
                <div class="read-more-btn">Đọc thêm</div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    post: {
        id: Number,
        title: String,
        date: String,
        author: String,
        image: String,
        shortDecription: String,
        date: String
    }
})

</script>
<style scoped>
.list-post .one-post {
    padding: 15px;
    border: 1px solid var(--border);
    margin-bottom: 20px;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.more-description {
    display: flex;
    margin-bottom: 10px;
}

.more-description img.avatar-author {
    width: 20px;
    height: 20px;
}

.more-description>* {
    margin-right: 10px;
}

.fearture-image {
    width: 100%;
    height: 400px;
}

.fearture-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.short-description {
    padding: 10px 0;
}

.read-more-btn {
    background-color: #c21a30;
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-family: "Droid Sans", sans-serif;
    padding: 12px 25px;
}
</style>