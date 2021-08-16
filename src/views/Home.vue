<template>
    <div class="home" id="fullpage">
        <div class="section" id="banner1">
            <div class="banner_inner">
                <div class="left_content">
                    <div><h1>환영합니다!</h1></div>
                    <div class="banner_content"><a class="typing">MG봇으로 디스코드 서버 내에서<br>재미있고 다양한 미니게임을 즐겨보세요</a></div>
                    <div class="buttons">
                        <a class="button1" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot">봇 초대하기</a>
                        <a class="button1" href="https://discord.gg/uWAnfpXbhd">서포트서버</a>
                    </div>
                </div>
                <div class="banner_background">
                    <video autoplay muted loop>
                        <source src="video/banner1.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>

        <div class="section" id="banner2">
            <div class="banner_inner">
                <div class="minigame_title">
                    <h1>미니게임</h1>
                    <a>다양하고 재미있는 미니게임을 제공합니다</a>
                </div>
                <div class="minigames">
                    <div>
                        <h3>이름 미정</h3>
                        <a>무기와 갑옷을 강화하는 던전 미니게임</a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a>제작중입니다</a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a>제작중입니다</a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a>제작중입니다</a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a>제작중입니다</a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a>제작중입니다</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="banner3">
            <h1>MG봇을 사용중인 서버 수</h1>
            <a class="rolling">{{bot_invited}}</a>
        </div>

        <div class="section" id="banner4">
            <h1>다양한 미니게임을 즐기기 위해<br>
            봇을 초대해보세요.</h1>
            <a class="button2" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot">봇 초대하기</a>
        </div>

        <div class="section" id="banner5">
            <h1>오류가 발생하거나 건의사항 문의시,<br>
            서포트서버에서 연락주시기 바랍니다.</h1>
            <a class="button2" href="">서포트서버</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            this.get_bot_invited()
        },

        data() {
            return {
                bot_invited: "ㅤ"
            };
        },

        methods: {
            get_bot_invited() {
                axios({
                    method:'post',
                    url:'http://125.184.79.22:5000/api',
                    responseType:'stream'
                })

                .then((response) => {
                    this.bot_invited = response.data.guilds
                })

                .catch((error) => {
                    this.bot_invited = "0"
                    alert("서버 수를 불러오는데 문제가 발생했습니다.")
                    console.error(error)
                })
            }
        }
    }
</script>
