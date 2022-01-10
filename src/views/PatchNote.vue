<template>
<div class="miniNav">
    <div class="miniNav_nav">
        <a class="nav_btn" id="nav_previous">&lt;</a>
        <a class="nav_highlight">1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a>
        <a class="nav_btn" id="nav_next">&gt;</a>
    </div>
    <select>
        <option selected disabled>배열</option>
        <option value="versionest">버전순</option>
        <option value="newest">최신순</option>
        <option value="oldest">오래된순</option>
        <option value="likest">좋아요순</option>
    </select>
    <select>
        <option selected disabled>분류</option>
        <option value="versionest">메이저</option>
        <option value="newest">마이너</option>
        <option value="newest">공지</option>
    </select>
</div>
<main id="patchNote">
<div class="container">
<div class="card">
    <div class="pathNote_header">
        <img src='img/haley.webp'>
        <a class="name">haley</a>
        <a class="version">v1.0</a>
    </div>
    <hr>
    <p>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라
    </p>
    <hr>
    <div class="pathNote_footer">
        <i class="far fa-heart like"></i>
        <a class="like_count">0</a>
        <a>2021.1.1</a>
    </div>
</div>
<div class="card">
    <div class="pathNote_header">
        <img src='img/haley.webp'>
        <a class="name">haley</a>
        <a class="version">v1.0</a>
    </div>
    <hr>
    <p>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라
    </p>
    <hr>
    <div class="pathNote_footer">
        <i class="far fa-heart like"></i>
        <a class="like_count">0</a>
        <a>2021.1.1</a>
    </div>
</div>
<div class="card">
    <div class="pathNote_header">
        <img src='img/haley.webp'>
        <a class="name">haley</a>
        <a class="version">v1.0</a>
    </div>
    <hr>
    <p>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라<br>
        패치내용. 쏼라쏼라쏼라쏼라쏼라
    </p>
    <hr>
    <div class="pathNote_footer">
        <i class="far fa-heart like"></i>
        <a class="like_count">0</a>
        <a>2021.1.1</a>
    </div>
</div>
</div>
</main>
</template>

<style scoped src="../../public/css/page/patchNote.css"></style>