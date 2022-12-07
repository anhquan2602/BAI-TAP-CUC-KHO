<script setup>
</script>

<template>
    <div id="home-page">
        <div class="main-header">
            <div class="content-header">
                <div class="menu-heaher">
                    <ul class="list-menu">
                        <li>Home</li>
                        <li>Deal </li>
                        <li>Features</li>
                        <li>Mega menu post</li>
                        <li>Categories</li>
                        <li>Skin</li>
                    </ul>
                </div>
                <div class="icon-header"></div>
            </div>
        </div>
        <div class="main-site">
            <div class="main-sider-content">
                <div class="header-site"></div>
                <div class="main-menu"></div>
                <div class="main-content">
                    <div class="main-content-left">
                        <div class="list-post">
                            <div v-for="index in 10" class="one-post">
                                <div class="title">How to succeed with marketing content?</div>
                                <div class="more-description">
                                    <img class="avatar-author" src="https://secure.gravatar.com/avatar/?s=32&d=mm&r=g"
                                        alt="">
                                    <div class="in-category">In: Đời sống</div>
                                    <div class="time-post">Last Updated: February 24, 2016</div>
                                </div>
                                <div class="fearture-image">
                                    <img src="https://demo.theme-junkie.com/beginner/files/2016/02/happy-680x380.jpg"
                                        alt="">
                                </div>
                                <div class="short-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie molestie nisl,
                                    eu scelerisque turpis tempus at. Nam luctus ultrices imperdiet. Class aptent taciti
                                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                                    velit orci, pretium ut feugiat nec, lobortis et est. Nullam cursus ultrices
                                    tincidunt. Nam gravida sem gravida ipsum dignissim in
                                </div>
                                <div class="read-more">
                                    <div class="read-more-btn">Đọc thêm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-side-bar">
                        <div class="box-sider-bar" v-for="index in 10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia quasi quidem aliquam
                            sequi
                            iste possimus reiciendis voluptas tempora? Ea impedit ducimus vel officiis voluptatibus!
                            Earum
                            fugit velit minus quaerat.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-header,
.main-sider-content {
    width: 1200px;
    margin: 0 auto;
}
.menu-heaher ul li {
    float: left;
    padding-left: 10px;
}
.main-header {
    background: rgb(240, 240, 240);
    height: 40px;
}

.content-header {
    height: 100%;
    
}
.header-site {
    height: 150px;
    background: pink;
}

.main-sider-content {}

.main-menu {
    height: 70px;
    background: #7d7df8;
}

.main-content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.main-content .main-content-left {
    flex: 1;
}

.main-content .main-side-bar {
    width: 400px;
    margin-left: 30px;
}

.list-post {}

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

.main-side-bar>* {
    margin-bottom: 20px;
}

.box-sider-bar {
    border: 1px solid var(--border);
    padding: 10px;
}
</style>
