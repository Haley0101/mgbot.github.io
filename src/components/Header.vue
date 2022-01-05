<template>
    <div class="navbar2"></div>
    <header>
        <div class="navbar1">
            <div class="logo1">
                <router-link to="/" class="logo2">
                    <img class="logo3" src="img/logo.svg">
                </router-link>
            </div>
            <div class="menu">
                <router-link to="/">메인</router-link>
                <router-link to="/path_note">패치 노트</router-link>
                <router-link to="/help_menu">도움말</router-link>
                <a href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot" target="_blank">봇 초대<svg style="width: 8px; height: 8px; margin: 3px 0px 0px 4px; display: inline-block;" width="24" height="24" viewBox="0 0 6.3499999 6.3500002" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h6.35v1.587h-6.35z"/><path fill="#fff" d="M6.35 0v6.35h-1.587v-6.35z"/><path d="M5.613 1.86l-4.49 4.49h-1.123v-1.123l4.49-4.49z" fill="#fff"/></svg></a>
                <router-link to="/dev">개발자</router-link>
            </div>
            <div class="RightMenu">
                <a id="darkBtn"><img src="img/light_mode.svg"></a>
                <a id="lightBtn"><img src="img/dark_mode.svg"></a>
                <div class="burger"><div></div><div></div><div></div></div>
            </div>
        </div>
        <div class="mobMenu">
            <div class="mobMenuLinks">
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