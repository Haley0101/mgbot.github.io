<template>
    <div id="fullpage" class="home">
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
                    <h1>미니게임</h1>
                    <a>다양하고 재미있는 미니게임을 제공합니다.</a>
                </div>
                <div class="minigames">
                    <div>
                        <h3>제작중입니다</h3>
                        <a></a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a></a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a></a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a></a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a></a>
                    </div>
                    <div>
                        <h3>제작중입니다</h3>
                        <a></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="banner3">
            <div class="banner_inner">
                <div>
                    <h1>MG봇을 사용중인 서버 수</h1>
                    <a class="roll drag_none" id="roll_1"></a>
                    <a class="roll drag_none" style="display: none !important;">1</a>
                    <a class="roll drag_none" style="display: none !important;">2</a>
                    <a class="roll drag_none" style="display: none !important;">3</a>
                    <a class="roll drag_none" style="display: none !important;">4</a>
                    <a class="roll drag_none" style="display: none !important;">5</a>
                    <a class="roll drag_none" style="display: none !important;">6</a>
                    <a class="roll drag_none" style="display: none !important;">7</a>
                    <a class="roll drag_none" style="display: none !important;">8</a>
                    <a class="roll drag_none" style="display: none !important;">9</a>
                    <a class="roll drag_none" style="display: none !important;">10</a>
                    <a class="roll drag_none" style="display: none !important;">11</a>
                    <a class="roll drag_none" style="display: none !important;">12</a>
                    <a class="roll drag_none" style="display: none !important;">13</a>
                    <a class="roll drag_none" style="display: none !important;">14</a>
                    <a class="roll drag_none" style="display: none !important;">15</a>
                    <a class="roll drag_none" style="display: none !important;">16</a>
                    <a class="roll drag_none" style="display: none !important;">17</a>
                    <a class="roll drag_none" style="display: none !important;">18</a>
                    <a class="roll drag_none" style="display: none !important;">19</a>
                    <a class="roll drag_none" style="display: none !important;">20</a>
                    <a class="roll drag_none" style="display: none !important;">21</a>
                    <a class="roll drag_none" style="display: none !important;">22</a>
                    <a class="roll drag_none" style="display: none !important;">23</a>
                    <a class="roll drag_none" style="display: none !important;">24</a>
                    <a class="roll drag_none" style="display: none !important;">25</a>
                    <a class="roll drag_none" style="display: none !important;">26</a>
                    <a class="roll drag_none" style="display: none !important;">27</a>
                    <a class="roll drag_none" style="display: none !important;">28</a>
                    <a class="roll drag_none" style="display: none !important;">29</a>
                    <a class="roll drag_none" style="display: none !important;">30</a>
                    <a class="roll drag_none" style="display: none !important;">31</a>
                    <a class="roll drag_none" style="display: none !important;">32</a>
                    <a class="roll drag_none" style="display: none !important;">33</a>
                    <a class="roll drag_none" style="display: none !important;">34</a>
                    <a class="roll drag_none" style="display: none !important;">35</a>
                    <a class="roll drag_none" style="display: none !important;">36</a>
                    <a class="roll drag_none" style="display: none !important;">37</a>
                    <a class="roll drag_none" style="display: none !important;">38</a>
                    <a class="roll drag_none" style="display: none !important;">39</a>
                    <a class="roll drag_none" style="display: none !important;">40</a>
                    <a>{{bot_invited}}</a>
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
import axios from 'axios';
//import rollingNumber from '../../public/js/rollingNumber.js';
export default {
    name: 'App',
    //components: { rollingNumber },
    
    mounted() {
        this.get_bot_invited()
    },
    data() {
        return {
            bot_invited: "0"
        };
    },
    methods: {
        get_bot_invited() {
            /*axios({
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
            })*/
            this.bot_invited = "9"
            var percentEl = document.querySelector('#roll_1');
            var max = this.bot_invited;
            (function animloop() {
                setInterval(function(){
                    if (percentEl.innerHTML >= max) { return; } //Stop recursive when max reach
                    percentEl.innerHTML++;
                }, 50)
            })();
        }
    }
}
</script>
