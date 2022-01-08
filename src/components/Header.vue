<template>
<div class="navbarBg"></div>
<header>
<div class="navbar noDrag">
    <router-link class="logo" to="/"><svg class="logoImg" width="1176" height="560" viewBox="0 0 311.14998 148.16667" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M.002 0h148.165v148.165h-42.334v-74.083h-10.584v74.083h-42.334l-.006-74.499-10.578.418v74.083h-42.334z"/><path d="M92.354 10.849a37.086 37.042 0 0 0 0 52.385 37.086 37.042 0 0 0 52.447 0c.95-.949 1.83-1.969 2.642-3.046a37.086 37.042 0 0 0 0-46.292c-.813-1.077-1.692-2.097-2.642-3.046a37.086 37.042 0 0 0-52.447 0zm13.112 13.096a18.543 18.521 0 0 1 26.224 0l-13.112 13.096 13.112 13.096a18.543 18.521 0 0 1-26.224 0 18.543 18.521 0 0 1 0-26.192z" transform="matrix(2 0 0 2 .002 0)"/></g></svg></router-link>
    <div class="menu">
        <router-link to="/">메인</router-link>
        <router-link to="/path_note">패치 노트</router-link>
        <router-link to="/help_menu">도움말</router-link>
        <a href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot" target="_blank">
            봇 초대
            <svg style="width: 8px; height: 8px; margin: 3px 0px 0px 4px; display: inline-block;" width="24" height="24" viewBox="0 0 6.3499999 6.3500002" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h6.35v1.587h-6.35z"/><path fill="#fff" d="M6.35 0v6.35h-1.587v-6.35z"/><path d="M5.613 1.86l-4.49 4.49h-1.123v-1.123l4.49-4.49z" fill="#fff"/></svg>
        </a>
        <router-link to="/dev">개발자</router-link>
    </div>
    <div class="RightMenu">
        <a id="darkBtn"><img src="img/light_mode.svg"></a>
        <a id="lightBtn"><img src="img/dark_mode.svg"></a>
        <div class="burger"><div></div><div></div><div></div></div>
    </div>
</div>
<div class="mobMenu">
    <div class="mobMenu_links">
        <router-link to="/">메인</router-link>
        <hr>
        <router-link to="/path_note">패치 노트</router-link>
        <hr>
        <router-link to="/help_menu">도움말</router-link>
        <hr>
        <a href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot" target="_blank">봇 초대</a>
        <hr>
        <router-link to="/dev">개발자</router-link>
    </div>
</div>
</header>
</template>

<style src="../../public/css/header.css"></style>

<script>
export default {
    name: 'App',
    
    mounted() {
        this.btn()
    },
    methods: {
    btn() {
        const burger = document.querySelector('.burger');
        const mobMenu = document.querySelector('.mobMenu');
        const header = document.querySelector('header');

        burger.addEventListener('click',()=>{
            if (burger.classList.contains('burgerToggle')) {
                burger.classList.remove('burgerToggle');
                mobMenu.style.height = "0px";
                header.style.background = "#0006";
            } else {
                burger.classList.add('burgerToggle');
                mobMenu.style.height = "298px";
                header.style.background = "#000b";
            }
        })
    }
    }
}
</script>