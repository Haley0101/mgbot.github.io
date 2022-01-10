<template>
<main id="help">
<div class="leftMenu">
    <div><p>소개</p></div>
    <div><p>초대하기</p></div>
    <div><p>초기설정</p></div>
    <div>
        <p>부가설정</p>
        <ul style="height: 0px">
            <li>부가설정1</li>
            <li>부가설정2</li>
        </ul>
    </div>
    <div>
        <p>미니게임</p>
        <ul style="height: 0px">
            <li>미니게임1</li>
            <li>미니게임2</li>
        </ul>
    </div>
    <div>
        <p>부가기능</p>
        <ul style="height: 0px">
            <li>부가기능1</li>
            <li>부가기능2</li>
        </ul>
    </div>
</div>
<div class="main">
    <h1>초대하기</h1>
    <hr>
    <div class="content">
        <p>
            '/출석체크'를 사용하여 상자, 머니, 포인트를 지급 받을 수 있습니다.<br>
            '/출석체크 목록'<a href="https://www.naver.com/">링크</a><br>
        </p>
        <div class="code">
            #include 'stdio.h'<br>
            <br>
            int main (void) {<br>
            &nbsp;int val = 0;<br>
            <br>
            &nbsp;printf("%d", val)<br>
            <br>
            &nbsp;return 0;<br>
            }
        </div>
    </div>
</div>
</main>
</template>

<style scoped src="../../public/css/page/help.css"></style>

<script scoped>
export default {
name: 'App',

mounted() {
const nav = document.querySelector(".leftMenu").childNodes;

for(var i=0; i<nav.length; i++) {
    let navBtn = nav[i].childNodes;
    
    navBtn[0].addEventListener('click',()=>{
        if(navBtn.length >= 2) {
            if(navBtn[1].classList == "menu_toggle") {
                navBtn[1].style.height = "0rem";
                navBtn[1].style.margin = "0px 0px 0px 10px";
                navBtn[1].classList = "";
            } else {
                navBtn[1].style.height = navBtn[1].childNodes.length * 2 + "rem";
                navBtn[1].style.margin = "15px 0px 15px 10px";
                navBtn[1].classList = "menu_toggle";
            }
        }
    })
}
}
}
</script>