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
                <a href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot" target="_blank">봇 초대</a>
                <router-link to="/dev">개발자</router-link>
            </div>
            <div class="RightMenu">
                <a id="darkBtn"><img style="height: 23px" src="img/light_mode.svg"></a>
                <a id="lightBtn"><img style="height: 23px" src="img/dark_mode.svg"></a>
                <div class="burger"><div></div><div></div><div></div></div>
            </div>
        </div>
    </header>
    <!-- <div class="mobMenu">
        <div>
            <router-link to="/">메인</router-link>
            <router-link to="/path_note">패치 노트</router-link>
            <router-link to="/help_menu">도움말</router-link>
            <a href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot" target="_blank">봇 초대</a>
            <router-link to="/dev">개발자</router-link>
        </div>
        <div class="menuBtns">
            <a id="darkBtn"><img style="height: 23px" src="img/light_mode.svg"></a>
            <a id="lightBtn"><img style="height: 23px" src="img/dark_mode.svg"></a>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'App',
    
    mounted() {
        this.btn()
    },
    methods: {
    btn() {
        const burger = document.getElementsByClassName('burger');
        burger.addEventListner('click',() => {
            burger.classList = 'toggle';
        })
    }
    }
}
</script>