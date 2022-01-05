<template>
<main>
<section id="section1">
    <div class="section1_left">
        <h1>환영합니다!</h1>
        <h3>MG봇으로 디스코드 서버 내에서<br>재미있고 다양한 미니게임을 즐겨보세요.</h3>
        <div class="section1_btns">
            <a class="button" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot">봇 초대하기</a>
            <a class="button" href="https://discord.gg/yVnzGcm6Tu">서포트서버</a>
        </div>
    </div>
    <div class="section1_right">
        <video autoplay muted loop><source src="video/video.webm" type="video/mp4"/></video>
    </div>
</section>

<section id="section2">
    <h1>다양한 미니게임을 제공합니다</h1>
    <div class="section2_games">
        <div></div><div></div>
    </div>
    <div class="section2_gameInfo">
        <h3>제작중입니다</h3>
        <a>제작중입니다</a>
    </div>
    <div class="section2_Bottom">
        <!-- <div class="arrowLeft" onclick="minigameMove(0)"><svg width="10.5" height="17" viewBox="0 0 2.7781249 4.4979166" xmlns="http://www.w3.org/2000/svg"><path style="paint-order:normal" d="M2.381.397l-1.984 1.72 1.984 1.984" stroke="#000" stroke-width=".6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div> -->
        <div class="section2_gameDots">
            <div class="dotPoint"></div><div></div>
        </div>
        <!-- <div class="arrowRight" onclick="minigameMove(1)"><svg width="10.5" height="17" viewBox="0 0 2.7781249 4.4979166" xmlns="http://www.w3.org/2000/svg"><path style="paint-order:normal" d="M.397.397l1.984 1.72-1.984 1.984" stroke="#000" stroke-width=".6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div> -->
    </div>
</section>

<section id="section3">
    <div>
        <h1>MG봇을 사용중인 서버 수</h1>
        <a class="roll drag_none" id="roll_1"></a>
    </div>

    <div>
        <h1>다양한 미니게임을 즐기기 위해<br>봇을 초대해보세요.</h1>
        <a class="button" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot">봇 초대하기</a>
    </div>

    <div>
        <h1>오류가 발생하거나 건의사항 문의시,<br>서포트서버에서 연락주시기 바랍니다.</h1>
        <a class="button" href="https://discord.gg/yVnzGcm6Tu">서포트서버</a>
    </div>
</section>
</main>
</template>

<style scoped src="../../public/css/page/home.css"></style>
<style src="../../public/css/rollingNumber.css"></style>

<script>
// import axios from 'axios';
import num_roll from '../../public/js/rollingNumber.js';

export default {
    name: 'App',
    
    mounted() {
        num_roll(1, "0")
        // num_roll(1, this.get_bot_invited())
    },
    methods: {
        /*get_bot_invited() {
            axios({
                method:'post',
                url:'http://125.184.79.22:5000/api',
                responseType:'stream'
            })
            .then((response) => {
                return response.data.guilds
            })
            .catch((error) => {
                return '0'
                console.error(error)
            })
        }*/
    }
}

/*function minigameMove(LR) {
    if(LR == 0) {
        
    } else {

    }
}*/
</script>
