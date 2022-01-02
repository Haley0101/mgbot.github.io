<template>
    <div class="home">
        <div class="section" id="banner1">
            <div class="banner_inner">
                <div class="left_content">
                    <div><h1>환영합니다!</h1></div>
                    <div class="banner_content"><a class="typing">MG봇으로 디스코드 서버 내에서<br>재미있고 다양한 미니게임을 즐겨보세요.</a></div>
                    <div class="buttons">
                        <a class="button" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot">봇 초대하기</a>
                        <a class="button" href="https://discord.gg/uWAnfpXbhd">서포트서버</a>
                    </div>
                </div>
                <div class="banner_background">
                    <video autoplay muted loop><source src="video/banner1.mp4" type="video/mp4"/></video>
                </div>
            </div>
        </div>

        <div class="section" id="banner2">
            <div class="banner_inner">
                <div class="minigame_title">
                    <h1>다양한 미니게임을 제공합니다</h1>
                </div>
                <div class="minigames">
                    <div>
                    </div>
                    <div>
                    </div>
                    <!-- <div>
                    </div> -->
                </div>
                <div class="minigameInfo">
                    <h3>제작중입니다</h3>
                    <a>제작중입니다</a>
                </div>
                <div class="minigameBottom">
                    <!-- <div class="arrowLeft" onclick="minigameMove(0)"><svg width="10.5" height="17" viewBox="0 0 2.7781249 4.4979166" xmlns="http://www.w3.org/2000/svg"><path style="paint-order:normal" d="M2.381.397l-1.984 1.72 1.984 1.984" stroke="#000" stroke-width=".6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div> -->
                    <div class="minigameDots">
                        <div class="dotPoint"></div>
                        <!-- <div></div>
                        <div></div> -->
                    </div>
                    <!-- <div class="arrowRight" onclick="minigameMove(1)"><svg width="10.5" height="17" viewBox="0 0 2.7781249 4.4979166" xmlns="http://www.w3.org/2000/svg"><path style="paint-order:normal" d="M.397.397l1.984 1.72-1.984 1.984" stroke="#000" stroke-width=".6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div> -->
                </div>
            </div>
        </div>

        <div class="section" id="banner3">
            <div class="banner_inner">
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
                    <a class="button" href="">서포트서버</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import num_roll from '../../public/js/rollingNumber.js';
// import fullpage from '../../public/js/fullpage.js';

// new fullpage('#fullpage', {});

export default {
    name: 'App',
    
    mounted() {
        // num_roll(1, this.get_bot_invited())
    },
    methods: {
        get_bot_invited() {
            /*axios({
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
            })*/
        }
    }
}

// function minigameMove(LR) {
//     if(LR == 0) {
        
//     } else {

//     }
// }
</script>