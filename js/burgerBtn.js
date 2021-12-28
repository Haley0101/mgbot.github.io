function btn() {
    burger = document.querySelector('.burger');
    burger.addEventListner('click',() => {
        burger.classList.toggle('toggle');
    })
}