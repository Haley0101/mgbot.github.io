let inputstr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function num_roll(count, str) {
    let target = document.getElementById("roll_" + count);
    let childcount = target.childElementCount;
    let textheight = parseInt(getComputedStyle(target).fontSize.replace("px", ""));
    if(str.toString().length > childcount) {
        for (let i=0; i<str.toString().length - childcount; i++) {
            let content = "<div class='number' style='bottom:0px'>";
            for (let l=0; l<inputstr.length; l++) { content += "<a style='height:1em'>" + inputstr[l] + "</a>"; }
            content += "</div>";
            target.innerHTML += content;
        }
    }
    target.style.height = "1em";
    target.style.width = target.childNodes[count-1].clientWidth*str.toString().length + "px";
    for (let i=0; i<str.toString().length; i++) {
        let pos = inputstr.indexOf(str.toString().split('')[i]);
        target.childNodes[i].style = "bottom:" + ((textheight*pos)+4) + "px";
    }
}